// ─── ARTICLE META ─────────────────────────────────────────────────────────
export const articleMeta = {
  tag: "✦ AI Agent",
  tagVariant: "ai" as const,
  title: "Flast AI Agent 2.0: Tự động sinh chứng từ thương mại quốc tế chỉ trong 3 giây",
  subtitle:
    "Phiên bản mới tích hợp khả năng đọc dữ liệu đơn hàng và điền vào các mẫu chứng từ chuẩn quốc tế — invoice, packing list, C/O — với độ chính xác 99.8%.",
  author: {
    initials: "TL",
    name: "Trần Linh",
    role: "Product Lead · Flast Solution",
    bio: "Phụ trách phát triển sản phẩm Flast Workflow và AI Agent. 8 năm kinh nghiệm trong lĩnh vực tự động hóa quy trình doanh nghiệp tại Việt Nam và Đông Nam Á.",
  },
  date: "24 tháng 5, 2025",
  readTime: "5 phút đọc",
  views: "2,841 lượt xem",
  breadcrumbs: [
    { label: "Trang chủ", href: "/" },
    { label: "Tin tức", href: "/tin-tuc" },
    { label: "AI Agent", href: null },
  ],
};

// ─── KEY STATS ────────────────────────────────────────────────────────────
export const keyStats = [
  { value: "3s", label: "Thời gian sinh chứng từ" },
  { value: "99.8%", label: "Độ chính xác dữ liệu" },
  { value: "-85%", label: "Thời gian thủ công" },
];

// ─── TABLE OF CONTENTS ────────────────────────────────────────────────────
export const tocItems = [
  { id: "van-de", label: "Vấn đề cần giải quyết", level: 2 },
  { id: "tinh-nang", label: "Tính năng mới v2.0", level: 2 },
  { id: "doc-don-hang", label: "Đọc đơn hàng tự động", level: 3 },
  { id: "sinh-chung-tu", label: "Sinh chứng từ bằng chat", level: 3 },
  { id: "ket-qua", label: "Kết quả thực tế", level: 2 },
  { id: "bat-dau", label: "Bắt đầu sử dụng", level: 2 },
];

// ─── ARTICLE TAGS ─────────────────────────────────────────────────────────
export const articleTags = [
  "AI Agent",
  "Chứng từ",
  "Xuất nhập khẩu",
  "Tự động hóa",
  "No-code",
];

// ─── RELATED ARTICLES (sidebar list) ─────────────────────────────────────
export const relatedArticles = [
  {
    tag: "AI Agent",
    tagStyle: { background: "#F5F3FF", color: "#5B21B6" },
    title: "Hướng dẫn: Báo cáo doanh thu tự động mỗi sáng thứ Hai",
    meta: "10 tháng 5 · 4 phút",
    href: "#",
  },
  {
    tag: "Case Study",
    tagStyle: { background: "var(--amber-bg)", color: "var(--amber-text)" },
    title: "Công ty XNK Hải Phòng tiết kiệm 12 giờ/tuần nhờ AI chứng từ",
    meta: "2 tháng 5 · 6 phút",
    href: "#",
  },
  {
    tag: "Sản phẩm",
    tagStyle: { background: "var(--blue-50)", color: "var(--blue)" },
    title: "Schema Registry — Cách Flast làm cho no-code thực sự generic",
    meta: "20 tháng 4 · 5 phút",
    href: "#",
  },
];

// ─── MORE ARTICLES (sidebar cards with image) ────────────────────────────
export const moreArticles = [
  {
    imgBg: "linear-gradient(135deg,#ECFDF5,#D1FAE5)",
    tagLabel: "Open Source",
    tagStyle: { background: "var(--green-bg)", color: "var(--green-text)" },
    title: "Open CDP-ERP v2.3: Thêm module Kế toán và tích hợp VNPay",
    meta: "15 tháng 5, 2025 · 4 phút đọc",
    href: "#",
  },
  {
    imgBg: "linear-gradient(135deg,#EBF8FD,#CFFAFE)",
    tagLabel: "Bảo mật",
    tagStyle: { background: "var(--teal-bg)", color: "var(--teal)" },
    title: "Kernel-level isolation quan trọng hơn container khi chạy multi-tenant",
    meta: "3 tháng 5, 2025 · 8 phút đọc",
    href: "#",
  },
  {
    imgBg: "linear-gradient(135deg,#EFF6FF,#DBEAFE)",
    tagLabel: "Sản phẩm",
    tagStyle: { background: "var(--blue-50)", color: "var(--blue)" },
    title: "Flast Workflow v3.1 — Parallel execution và conditional branching nâng cao",
    meta: "18 tháng 5, 2025 · 3 phút đọc",
    href: "#",
  },
];

// ─── FOOTER LINKS ────────────────────────────────────────────────────────
export const footerLinks = {
  products: [
    { label: "Flast Workflow", href: "/#workflow" },
    { label: "Open CDP-ERP", href: "/#opensource" },
    { label: "Flast Shield", href: "/#shield" },
    { label: "Bảng giá", href: "/#pricing" },
  ],
  resources: [
    { label: "GitHub", href: "https://github.com/Flast-Solution", external: true },
    { label: "Tài liệu", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Tin tức", href: "/tin-tuc" },
  ],
  company: [
    { label: "Về Flast", href: "#" },
    { label: "Đội ngũ", href: "#" },
    { label: "Tuyển dụng", href: "#" },
    { label: "Liên hệ", href: "#" },
  ],
};

// ─── NAV LINKS ────────────────────────────────────────────────────────────
export const navLinks = [
  { label: "Sản phẩm", href: "/#products" },
  { label: "AI Agent", href: "/#ai-agent" },
  { label: "Case Study", href: "/#casestudy" },
  { label: "Bảo mật", href: "/#shield" },
  { label: "Open Source", href: "/#opensource" },
  { label: "Tin tức", href: "/tin-tuc", active: true },
];
