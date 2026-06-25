const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const src = 'E:/CCWorkSpace/20260625/gem';
const dst = 'E:/CCWorkSpace/20260625/gem-web/public/images';

const assignments = [
  // Desktop slides: 1920x1080 (16:9)
  { srcFile: '007Hulo3gy1ic236jgzzqj33uw2kl1l1.jpg', dstFile: 'slide01-pc.jpg', w: 1920, h: 1080, label: '横3:2-1' },
  { srcFile: '007Hulo3ly1i6gxab35vpj33uw2kle84.jpg', dstFile: 'slide02-pc.jpg', w: 1920, h: 1080, label: '横3:2-2' },
  { srcFile: '001RqsRzly1h6m9f6xz2gj635s2dcdmk02.jpg', dstFile: 'slide03-pc.jpg', w: 1920, h: 1080, label: '横4:3' },
  { srcFile: '001RqsRzly1h7ai03xhqlj651c43chdw02.jpg', dstFile: 'slide04-pc.jpg', w: 1920, h: 1080, label: '横5:4' },

  // Mobile slides: 750x1335 (9:16)
  { srcFile: '001RqsRzgy1i38fd3erhxj63344mo1l402.jpg', dstFile: 'slide01-sp.jpg', w: 750, h: 1335, label: '竖2:3-1' },
  { srcFile: '001RqsRzly1h8m9e9r501j647s6bk7wn02.jpg', dstFile: 'slide02-sp.jpg', w: 750, h: 1335, label: '竖2:3-2' },
  { srcFile: '001RqsRzly1hocecu1hw0j63kq5d0qvb02.jpg', dstFile: 'slide03-sp.jpg', w: 750, h: 1335, label: '竖2:3-3' },
  { srcFile: '001RqsRzgy1hzhmtxdmv8j63b04eonph02.jpg', dstFile: 'slide04-sp.jpg', w: 750, h: 1335, label: '竖3:4' },

  // Profile: 1000x1500 (2:3)
  { srcFile: 'profile.jpg', dstFile: 'profile.jpg', w: 1000, h: 1500, label: '肖像' },

  // OG: 1200x630
  { srcFile: '007Hulo3gy1ic236jgzzqj33uw2kl1l1.jpg', dstFile: 'og-image.png', w: 1200, h: 630, label: 'OG分享图' },
];

async function processImage(item) {
  const inputPath = path.join(src, item.srcFile);
  const outputPath = path.join(dst, item.dstFile);

  if (!fs.existsSync(inputPath)) {
    console.log('  ✗ 文件不存在: ' + item.srcFile);
    return;
  }

  const meta = await sharp(inputPath).metadata();
  const srcW = meta.width;
  const srcH = meta.height;
  const targetRatio = item.w / item.h;
  const srcRatio = srcW / srcH;

  let pipeline;

  if (Math.abs(srcRatio - targetRatio) < 0.01) {
    pipeline = sharp(inputPath).resize(item.w, item.h, { fit: 'fill' });
  } else if (srcRatio > targetRatio) {
    const newW = Math.round(srcH * targetRatio);
    const left = Math.round((srcW - newW) / 2);
    pipeline = sharp(inputPath)
      .extract({ left: left, top: 0, width: newW, height: srcH })
      .resize(item.w, item.h, { fit: 'fill' });
  } else {
    const newH = Math.round(srcW / targetRatio);
    const top = Math.round((srcH - newH) / 2);
    pipeline = sharp(inputPath)
      .extract({ left: 0, top: top, width: srcW, height: newH })
      .resize(item.w, item.h, { fit: 'fill' });
  }

  const ext = path.extname(item.dstFile).toLowerCase();
  if (ext === '.jpg' || ext === '.jpeg') {
    // Compress to ensure < 3MB, start at q90
    let quality = 90;
    pipeline = pipeline.jpeg({ quality: quality });
    await pipeline.toFile(outputPath);
    let size = fs.statSync(outputPath).size;
    // If still > 3MB, reduce quality
    while (size > 3 * 1024 * 1024 && quality > 30) {
      quality -= 10;
      pipeline = sharp(inputPath);
      if (Math.abs(srcRatio - targetRatio) < 0.01) {
        pipeline = pipeline.resize(item.w, item.h, { fit: 'fill' });
      } else if (srcRatio > targetRatio) {
        const newW = Math.round(srcH * targetRatio);
        const left = Math.round((srcW - newW) / 2);
        pipeline = pipeline.extract({ left: left, top: 0, width: newW, height: srcH }).resize(item.w, item.h, { fit: 'fill' });
      } else {
        const newH = Math.round(srcW / targetRatio);
        const top = Math.round((srcH - newH) / 2);
        pipeline = pipeline.extract({ left: 0, top: top, width: srcW, height: newH }).resize(item.w, item.h, { fit: 'fill' });
      }
      await pipeline.jpeg({ quality: quality }).toFile(outputPath);
      size = fs.statSync(outputPath).size;
    }
  } else if (ext === '.png') {
    pipeline = pipeline.png({ compressionLevel: 6 });
  }

  await pipeline.toFile(outputPath);

  const outMeta = await sharp(outputPath).metadata();
  const outSize = fs.statSync(outputPath).size;
  console.log('  ✓ ' + item.dstFile + ' → ' + outMeta.width + 'x' + outMeta.height + ' (' + (outSize/1024).toFixed(0) + 'KB) [' + item.label + ']');
}

(async () => {
  console.log('=== 开始处理图片 ===\n');
  for (const item of assignments) {
    try {
      await processImage(item);
    } catch (e) {
      console.log('  ✗ ' + item.dstFile + ': ' + e.message);
    }
  }
  console.log('\n=== 完成！ ===');
})();
