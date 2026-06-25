import type { Metadata } from "next";
import { Noto_Serif_JP, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "G.E.M. OFFICIAL WEBSITE",
  description:
    "香港创作歌手邓紫棋（G.E.M.）官方网站。最新音乐作品、巡演资讯与个人资料。",
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/apple-touch-icon.png",
  },
  openGraph: {
    title: "G.E.M. OFFICIAL WEBSITE",
    description:
      "香港创作歌手邓紫棋（G.E.M.）官方网站。最新音乐作品、巡演资讯与个人资料。",
    type: "website",
    url: "https://gem-web.vercel.app",
    images: ["/images/og-image.png"],
    siteName: "G.E.M. OFFICIAL WEBSITE",
  },
  twitter: {
    card: "summary_large_image",
    title: "G.E.M. OFFICIAL WEBSITE",
    description:
      "香港创作歌手邓紫棋（G.E.M.）官方网站。最新音乐作品、巡演资讯与个人资料。",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${notoSerifJP.variable} ${libreBaskerville.variable} antialiased`}
    >
      <body className="font-serif-jp text-[#333] bg-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
