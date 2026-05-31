// ── Types ──────────────────────────────────────────────────────────────────
export type FilterKey =
  | "all"
  | "product"
  | "ai"
  | "opensource"
  | "casestudy"
  | "security"
  | "company";

export interface Article {
  id: number;
  tag: { key: FilterKey; label: string; cls: string };
  title: string;
  desc: string;
  date: string;
  read: string;
  gradient: string;
  iconStroke: string;
}

export interface FeaturedSideItem {
  tag: { cls: string; label: string };
  title: string;
  date: string;
  read: string;
}

export interface ProductItem {
  color: string;
  name: string;
  count: string;
}

// ── Constants ──────────────────────────────────────────────────────────────
export const ARTICLES: Article[] = [
  {
    id: 1,
    tag: { key: "product", label: "Sản phẩm", cls: "product" },
    title: "Schema Registry — Cách Flast Workflow làm cho no-code thực sự generic",
    desc: "Tìm hiểu cách Schema Registry cho phép bất kỳ domain entity nào được tích hợp vào workflow mà không cần viết một dòng code adapter.",
    date: "20 tháng 5, 2025",
    read: "4 phút đọc",
    gradient: "linear-gradient(135deg,#EFF6FF,#DBEAFE)",
    iconStroke: "#2563D4",
  },
  {
    id: 2,
    tag: { key: "opensource", label: "Open Source", cls: "opensource" },
    title: "Open CDP-ERP v2.3 ra mắt: Thêm module Kế toán và tích hợp thanh toán VNPay",
    desc: "Bản cập nhật lớn nhất trong năm 2025 của Open CDP-ERP — module Kế toán hoàn chỉnh và cổng thanh toán VNPay được tích hợp trực tiếp vào luồng đơn hàng.",
    date: "15 tháng 5, 2025",
    read: "5 phút đọc",
    gradient: "linear-gradient(135deg,#ECFDF5,#D1FAE5)",
    iconStroke: "#0A8F4A",
  },
  {
    id: 3,
    tag: { key: "ai", label: "AI Agent", cls: "ai" },
    title: "Hướng dẫn: Dùng AI Agent để tạo báo cáo doanh thu tự động mỗi sáng thứ Hai",
    desc: "Step-by-step setup để AI Agent tự pull dữ liệu từ ERP, tổng hợp và gửi báo cáo tóm tắt tuần đến email quản lý — không cần can thiệp thủ công.",
    date: "10 tháng 5, 2025",
    read: "6 phút đọc",
    gradient: "linear-gradient(135deg,#F5F3FF,#EDE9FE)",
    iconStroke: "#7C3AED",
  },
  {
    id: 4,
    tag: { key: "security", label: "Bảo mật", cls: "security" },
    title: "Tại sao kernel-level isolation quan trọng hơn container khi chạy multi-tenant SaaS",
    desc: "So sánh kỹ thuật giữa Docker container isolation và namespace isolation ở tầng kernel — và lý do tại sao Flast Shield chọn tiếp cận ở tầng thấp hơn.",
    date: "3 tháng 5, 2025",
    read: "7 phút đọc",
    gradient: "linear-gradient(135deg,#EBF8FD,#CFFAFE)",
    iconStroke: "#0D7FA5",
  },
  {
    id: 5,
    tag: { key: "casestudy", label: "Case Study", cls: "casestudy" },
    title: "Công ty BĐS Đà Nẵng rút ngắn thời gian duyệt hợp đồng từ 9 ngày xuống còn 1.5 ngày",
    desc: "Câu chuyện triển khai Flast Workflow cho quy trình phê duyệt hợp đồng 7 cấp tại một tập đoàn bất động sản với 300 nhân sự tại miền Trung.",
    date: "28 tháng 4, 2025",
    read: "5 phút đọc",
    gradient: "linear-gradient(135deg,#FFFBEB,#FEF3C7)",
    iconStroke: "#D97706",
  },
  {
    id: 6,
    tag: { key: "company", label: "Công ty", cls: "company" },
    title: "Flast Solution nhận vốn đầu tư hạt giống Series A — mở rộng đội ngũ R&D",
    desc: "Chúng tôi vui mừng thông báo hoàn thành vòng gọi vốn Series A, tập trung phát triển tính năng AI Agent và mở rộng thị trường sang Đông Nam Á trong 2025.",
    date: "20 tháng 4, 2025",
    read: "4 phút đọc",
    gradient: "linear-gradient(135deg,#F3F4F6,#E5E7EB)",
    iconStroke: "#374151",
  },
];

export const FEATURED_MAIN = {
  tag: { cls: "ai", label: "✦ AI Agent" },
  title: "Flast AI Agent 2.0: Tự động sinh chứng từ thương mại quốc tế chỉ trong 3 giây",
  desc: "Phiên bản mới của Flast AI Agent tích hợp khả năng đọc dữ liệu từ đơn hàng và tự động điền vào các mẫu chứng từ chuẩn quốc tế — invoice, packing list, C/O — với độ chính xác 99.8%.",
  author: { initials: "TL", name: "Trần Linh" },
  date: "24 tháng 5, 2025",
  read: "5 phút đọc",
};

export const FEATURED_SIDE: FeaturedSideItem[] = [
  {
    tag: { cls: "product", label: "Sản phẩm" },
    title: "Flast Workflow v3.1 — Hỗ trợ parallel execution và conditional branching nâng cao",
    date: "18 tháng 5, 2025",
    read: "3 phút đọc",
  },
  {
    tag: { cls: "casestudy", label: "Case Study" },
    title: "Chuỗi 45 siêu thị mini tại miền Nam giảm 40% chi phí vận hành sau 2 tháng dùng Open CDP-ERP",
    date: "12 tháng 5, 2025",
    read: "6 phút đọc",
  },
  {
    tag: { cls: "security", label: "Bảo mật" },
    title: "Flast Shield: Phân tích kỹ thuật namespace isolation ở tầng Linux kernel 6.x",
    date: "5 tháng 5, 2025",
    read: "8 phút đọc",
  },
];

export const TRENDING: string[] = [
  "So sánh Flast Workflow và n8n: Khi nào dùng cái nào?",
  "Triển khai Open CDP-ERP trên VPS Ubuntu — Hướng dẫn từng bước",
  "AI Agent thay thế nhân sự nhập liệu — Thực tế hay viễn tưởng?",
  "Namespace isolation vs Docker: Đâu là lựa chọn an toàn hơn cho SaaS?",
  "5 quy trình doanh nghiệp SMB nên tự động hóa đầu tiên",
];

export const TAGS: string[] = [
  "No-code", "Workflow", "ERP", "AI Agent", "Linux Kernel",
  "Bảo mật", "SMB", "Open Source", "Java Spring",
  "React", "Webhook", "Chứng từ", "Tự động hóa",
];

export const PRODUCTS: ProductItem[] = [
  { color: "blue",   name: "Flast Workflow", count: "12 bài viết" },
  { color: "violet", name: "AI Agent",        count: "8 bài viết"  },
  { color: "green",  name: "Open CDP-ERP",    count: "15 bài viết" },
  { color: "teal",   name: "Flast Shield",    count: "6 bài viết"  },
];

export const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all",       label: "Tất cả"      },
  { key: "product",   label: "Sản phẩm"    },
  { key: "ai",        label: "AI Agent"    },
  { key: "opensource",label: "Open Source" },
  { key: "casestudy", label: "Case Study"  },
  { key: "security",  label: "Bảo mật"     },
  { key: "company",   label: "Công ty"     },
];

export const FOOTER_COLS = [
  {
    title: "Sản phẩm",
    links: [
      ["/#workflow", "Flast Workflow"],
      ["/#opensource", "Open CDP-ERP"],
      ["/#shield", "Flast Shield"],
      ["/#pricing", "Bảng giá"],
    ],
  },
  {
    title: "Tài nguyên",
    links: [
      ["https://github.com/Flast-Solution", "GitHub"],
      ["#", "Tài liệu"],
      ["#", "API Reference"],
      ["#", "Case Studies"],
    ],
  },
  {
    title: "Công ty",
    links: [
      ["#", "Về Flast"],
      ["#", "Đội ngũ"],
      ["#", "Tuyển dụng"],
      ["#", "Liên hệ"],
    ],
  },
];
