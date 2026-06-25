export const siteMeta = {
  title: "G.E.M. OFFICIAL WEBSITE",
  description:
    "香港创作歌手邓紫棋（G.E.M.）官方网站。最新音乐作品、巡演资讯与个人资料。",
  twitterUrl: "",
  instagramUrl: "https://www.instagram.com/gem0816/",
  contactUrl: "https://www.gem-music.com",
  copyright: "© G.E.M. All rights reserved.",
};

export const navItems = [
  { label: "HOME", href: "/" },
  { label: "NEWS", href: "/news/" },
  { label: "SCHEDULE", href: "/schedule/" },
  { label: "PROFILE", href: "/profile/" },
  { label: "WORKS", href: "/works/" },
  { label: "CONTACT", href: siteMeta.contactUrl, external: true },
];

export const heroSlides = [
  {
    id: 1,
    spImage: "/images/slide01-sp.jpg",
    pcImage: "/images/slide01-pc.jpg",
    titleColor: "#fff",
  },
  {
    id: 2,
    spImage: "/images/slide02-sp.jpg",
    pcImage: "/images/slide02-pc.jpg",
    titleColor: "#fff",
  },
  {
    id: 3,
    spImage: "/images/slide03-sp.jpg",
    pcImage: "/images/slide03-pc.jpg",
    titleColor: "#fff",
  },
  {
    id: 4,
    spImage: "/images/slide04-sp.jpg",
    pcImage: "/images/slide04-pc.jpg",
    titleColor: "#fff",
  },
];

export const newsItems = [
  {
    id: 1,
    date: "2025.03.15",
    category: "MUSIC",
    title: "G.E.M. 第八张专辑《启示录》全球发行，收录14首全新创作",
    href: "/news/1/",
  },
  {
    id: 2,
    date: "2025.01.20",
    category: "CONCERT",
    title: "I AM GLORIA 世界巡回演唱会 2025 全新站点公布",
    href: "/news/2/",
  },
  {
    id: 3,
    date: "2024.12.01",
    category: "AWARD",
    title: "G.E.M. 荣获第45届十大中文金曲「全年最佳进步奖」",
    href: "/news/3/",
  },
];

export const scheduleItems = [
  {
    year: 2025,
    month: 7,
    day: 12,
    week: "SAT",
    events: [
      { category: "CONCERT", time: "20:00", title: "I AM GLORIA 世界巡回演唱会 · 上海站", href: "/schedule/2025/07/12/1/" },
    ],
  },
  {
    year: 2025,
    month: 7,
    day: 19,
    week: "SAT",
    events: [
      { category: "CONCERT", time: "20:00", title: "I AM GLORIA 世界巡回演唱会 · 北京站", href: "/schedule/2025/07/19/2/" },
    ],
  },
  {
    year: 2025,
    month: 8,
    day: 16,
    week: "FRI",
    events: [
      { category: "EVENT", time: "", title: "G.E.M. 生诞祭特别活动", href: "/schedule/2025/08/16/3/" },
    ],
  },
];

export const profileData = {
  image: "/images/profile.jpg",
  name: "邓 紫棋",
  kana: "G.E.M. Tang / ジー・ミー",
  details: [
    { label: "本名", value: "邓诗颖（Gloria Tang Tsz-kei）" },
    { label: "生年月日", value: "1991年8月16日" },
    { label: "出身地", value: "中国 上海（成长于香港）" },
    { label: "身長", value: "163cm" },
    { label: "星座", value: "狮子座 (Leo)" },
    { label: "所属", value: "独立音乐人 / G.E.M. Music" },
  ],
};

export const worksCategories = [
  { key: "music", label: "MUSIC" },
  { key: "concert", label: "CONCERT" },
  { key: "variety", label: "VARIETY" },
  { key: "brand", label: "BRAND" },
] as const;

export type WorksCategoryKey = (typeof worksCategories)[number]["key"];

export const worksData: Record<WorksCategoryKey, { title: string; note: string; href: string }[]> = {
  music: [
    { title: "《启示录》Revelation", note: "第八张录音室专辑（2023）", href: "/works/#music" },
    { title: "《摩天动物园》City Zoo", note: "第七张录音室专辑（2019）", href: "/works/#music" },
    { title: "《光年之外》Beyond", note: "第六张录音室专辑（2016）", href: "/works/#music" },
    { title: "《新的心跳》Heartbeat", note: "第五张录音室专辑（2015）", href: "/works/#music" },
  ],
  concert: [
    { title: "I AM GLORIA 世界巡回演唱会", note: "2023-2025 全球巡演", href: "/works/#concert" },
    { title: "Queen of Hearts 世界巡回演唱会", note: "2019-2020 亚洲巡演", href: "/works/#concert" },
    { title: "G.E.M. X.X.X. 世界巡回演唱会", note: "2017-2018 全球巡演", href: "/works/#concert" },
  ],
  variety: [
    { title: "《我是歌手》第四季", note: "竞演歌手（2016）", href: "/works/#variety" },
    { title: "《中国新说唱》", note: "明星制作人（2018-2019）", href: "/works/#variety" },
    { title: "《我们的歌》", note: "常驻嘉宾（2024）", href: "/works/#variety" },
  ],
  brand: [
    { title: "Peugeot 标致汽车", note: "全球品牌代言人", href: "/works/#brand" },
    { title: "MAC 魅可", note: "亚太区品牌大使", href: "/works/#brand" },
    { title: "Nike", note: "大中华区合作艺人", href: "/works/#brand" },
  ],
};
