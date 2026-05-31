// ─── NAV ──────────────────────────────────────────────────────────────────
export const navLinks = [
  { label: "Sản phẩm", href: "#products" },
  { label: "AI Agent", href: "#ai-agent" },
  { label: "Case Study", href: "#casestudy" },
  { label: "Bảo mật", href: "#shield" },
  { label: "Open Source", href: "#opensource" },
  { label: "Pricing", href: "#pricing" },
];

// ─── HERO ─────────────────────────────────────────────────────────────────
export const heroStats = [
  { label: "Đang chạy", value: "142", badge: "↑12" },
  { label: "Hoàn thành", value: "1,847" },
  { label: "SLA OK", value: "98.4%" },
];

export const heroWorkflows = [
  { name: "Duyệt đơn hàng", step: "Bước 3/5", status: "Running", color: "#2563D4" },
  { name: "Nghỉ phép nhân sự", step: "Chờ duyệt", status: "Pending", color: "#D97706" },
  { name: "Thanh toán hợp đồng", step: "Hoàn thành", status: "Done", color: "#0EA552" },
  { name: "Onboarding nhân viên", step: "Bước 2/6", status: "Running", color: "#2563D4" },
];

// ─── LOGOS BAR ────────────────────────────────────────────────────────────
export const trustLogos = [
  "VINGROUP",
  "MASAN GROUP",
  "FPT SOFTWARE",
  "TECHCOMBANK",
  "THEGIOIDIDONG",
  "VIETTEL",
];

// ─── PRODUCTS ─────────────────────────────────────────────────────────────
export type ProductVariant = "blue" | "green" | "teal";

export interface Product {
  variant: ProductVariant;
  tag: string;
  name: string;
  desc: string;
  features: string[];
  primaryBtn: { label: string; href: string };
  secondaryBtn: { label: string; href: string };
  modules?: string[];
  githubLink?: string;
}

export const products: Product[] = [
  {
    variant: "blue",
    tag: "● Enterprise",
    name: "Flast Workflow",
    desc: "Nền tảng no-code thiết kế và tự động hóa mọi quy trình nghiệp vụ — tích hợp trực tiếp với hệ thống ERP bất kỳ qua REST API.",
    features: [
      "Visual Process Designer kéo thả",
      "Schema Registry — no-code hoàn toàn",
      "Webhook 2 chiều với mọi ERP",
      "Smart Scheduler & SLA monitoring",
      "Multi-tenant · Real-time dashboard",
      "✦ AI Agent — điều khiển UI, báo cáo, chứng từ",
    ],
    primaryBtn: { label: "Tìm hiểu thêm", href: "#workflow" },
    secondaryBtn: { label: "Demo →", href: "#" },
  },
  {
    variant: "green",
    tag: "⊙ Open Source · MIT",
    name: "Open CDP-ERP",
    desc: "Phần mềm ERP mã nguồn mở toàn diện — fix sẵn quy trình cho SMB Việt Nam. Chi phí chỉ từ 200k/tháng, dữ liệu hoàn toàn thuộc về doanh nghiệp.",
    features: [
      "Quy trình chuẩn sẵn, triển khai ngay",
      "Chạy trên VPS chi phí thấp",
      "Dữ liệu tự quản lý, không phụ thuộc vendor",
      "Java Spring Boot · React · MIT License",
    ],
    modules: ["Marketing", "Bán hàng", "Sản xuất", "Kho vận", "CSKH", "Dự án"],
    primaryBtn: {
      label: "Xem trên GitHub",
      href: "https://github.com/Flast-Solution/Open-CDP-ERP-BackEnd",
    },
    secondaryBtn: { label: "Chi tiết", href: "#opensource" },
    githubLink: "https://github.com/Flast-Solution/Open-CDP-ERP-BackEnd",
  },
  {
    variant: "teal",
    tag: "⬡ Kernel-level Security",
    name: "Flast Shield",
    desc: "Bảo vệ máy chủ Linux hoạt động ở tầng kernel — cho phép mỗi ứng dụng chạy trong namespace riêng biệt, cô lập hoàn toàn, không thể gây hại cho hệ thống.",
    features: [
      "Hoạt động dưới tầng kernel Linux",
      "Namespace isolation — ứng dụng không truy cập chéo",
      "Zero trust — mỗi process trong sandbox riêng",
      "Ngăn chặn lateral movement & privilege escalation",
    ],
    primaryBtn: { label: "Tìm hiểu thêm", href: "#shield" },
    secondaryBtn: { label: "Tư vấn", href: "#" },
  },
];

// ─── HOW WORKFLOW WORKS ───────────────────────────────────────────────────
export const workflowSteps = [
  {
    num: "01",
    title: "Thiết kế quy trình bằng kéo thả",
    desc: "Visual builder trực quan — định nghĩa các bước, điều kiện phân nhánh, người phê duyệt. Không code, không SQL.",
  },
  {
    num: "02",
    title: "Khai báo entity qua Schema Registry",
    desc: "Đăng ký domain entity (đơn hàng, hợp đồng, yêu cầu...) một lần. Flast tự động biết cách đọc/ghi qua REST API của microservice.",
  },
  {
    num: "03",
    title: "Kết nối ERP & webhook tích hợp",
    desc: "Cấu hình webhook 2 chiều với ERP hiện tại. Sự kiện nghiệp vụ tự động trigger hoặc cập nhật workflow instance.",
  },
  {
    num: "04",
    title: "Theo dõi SLA & tối ưu liên tục",
    desc: "Dashboard thời gian thực, cảnh báo tắc nghẽn, và báo cáo hiệu suất. Smart Scheduler tự escalate khi quá deadline.",
  },
];

export const flowNodes = [
  { icon: "✓", label: "Tiếp nhận đơn hàng", status: "Done", variant: "done" },
  { icon: "✓", label: "Kiểm tra tín dụng", status: "Done", variant: "done" },
  { icon: "⟳", label: "Phê duyệt cấp quản lý", status: "Running", variant: "running" },
  { icon: "⇄", label: "Đồng bộ về ERP", status: "Waiting", variant: "waiting" },
  { icon: "◻", label: "Hoàn thành", status: "Waiting", variant: "waiting" },
];

// ─── ERP INTEGRATION ──────────────────────────────────────────────────────
export const erpBenefits = [
  {
    title: "Webhook 2 chiều",
    desc: "Flast nhận event từ ERP và push dữ liệu ngược về sau mỗi bước hoàn thành.",
  },
  {
    title: "Generic hoàn toàn",
    desc: "Không hardcode domain — mọi entity được khai báo qua Schema Registry, không cần viết code adapter.",
  },
  {
    title: "Tương thích mọi ERP",
    desc: "SAP, Oracle, Odoo, ERPNext, hay hệ thống nội bộ — chỉ cần REST API là tích hợp được.",
  },
];

export const erpMicroservices = ["Order Service", "HR Service", "Finance Service"];
export const erpSystems = ["SAP / Oracle", "Odoo / ERPNext", "ERP nội bộ"];

// ─── SHIELD ───────────────────────────────────────────────────────────────
export const shieldFeatures = [
  {
    title: "Kernel-level Protection",
    desc: "Hoạt động dưới tầng OS, chặn các cuộc tấn công trước khi chạm đến ứng dụng.",
  },
  {
    title: "Namespace Isolation",
    desc: "Mỗi ứng dụng có namespace riêng — PID, network, filesystem hoàn toàn tách biệt. Ứng dụng bị compromise không lan sang phần còn lại.",
  },
  {
    title: "Zero Trust Architecture",
    desc: "Mặc định deny tất cả, chỉ cấp quyền tối thiểu cần thiết cho từng process. Ngăn lateral movement và privilege escalation.",
  },
];

// ─── OPEN SOURCE ──────────────────────────────────────────────────────────
export const ossModules = [
  { title: "Marketing", desc: "Thu thập leads, phân chia tự động theo nguyên tắc cân bằng" },
  { title: "Bán hàng", desc: "Cơ hội, báo giá, đơn hàng, thanh toán online" },
  { title: "Sản xuất", desc: "Điều phối nhà cung cấp, theo dõi tiến độ" },
  { title: "Kho vận", desc: "Quản lý kho, nhập kho, giao hàng" },
  { title: "CSKH", desc: "Chăm sóc trước-trong-sau bán, đo hiệu quả" },
  { title: "Dự án", desc: "Quản lý công việc, nhắn tin nội bộ, lưu file" },
];

export const ossTargets = [
  "Bán lẻ thời trang",
  "Siêu thị mini",
  "Nhà hàng",
  "Khách sạn",
  "Bất động sản",
  "XNK",
  "Nhà thuốc",
];

export const ossRepos = [
  {
    name: "Flast-Solution / Open-CDP-ERP-BackEnd",
    desc: "Backend Java Spring Boot — API, nghiệp vụ, bảo mật, tích hợp đa luồng",
    tags: ["java", "spring-boot", "hibernate", "spring-security"],
    href: "https://github.com/Flast-Solution/Open-CDP-ERP-BackEnd",
  },
  {
    name: "Flast-Solution / Open-CDP-ERP-ReactJs",
    desc: "Frontend React — giao diện module-federation, micro-frontend architecture",
    tags: ["react", "micro-frontend", "antd", "webpack"],
    href: "https://github.com/Flast-Solution/Open-CDP-ERP-ReactJs",
  },
];

// ─── AI AGENT ─────────────────────────────────────────────────────────────
export const aiCapabilities = [
  {
    variant: "violet",
    title: "Điều khiển giao diện",
    desc: "AI hiểu lệnh ngôn ngữ tự nhiên và thực hiện thao tác trực tiếp trên UI — tạo đơn hàng, cập nhật trạng thái, điều hướng màn hình mà không cần người dùng click thủ công.",
    examples: [
      "Tạo đơn hàng cho khách Nguyễn Văn A, 10 thùng sản phẩm X",
      "Chuyển đơn #1042 sang trạng thái Đã giao hàng",
      "Mở danh sách đơn hàng tuần này còn chưa thanh toán",
    ],
  },
  {
    variant: "emerald",
    title: "Sinh báo cáo thông minh",
    desc: "Hỏi bằng tiếng Việt, nhận báo cáo ngay. AI phân tích dữ liệu thực từ ERP, tổng hợp số liệu, vẽ biểu đồ và đưa ra nhận xét xu hướng — không cần biết SQL hay Excel.",
    examples: [
      "Doanh thu tháng này so với tháng trước tăng giảm bao nhiêu %?",
      "Top 5 khách hàng mua nhiều nhất quý 1, vẽ biểu đồ",
      "Tồn kho nào dưới ngưỡng tối thiểu, cần đặt hàng ngay?",
    ],
  },
  {
    variant: "amber",
    title: "Tự động sinh chứng từ",
    desc: "Từ dữ liệu đơn hàng và hợp đồng, AI tự động tạo hóa đơn, phiếu xuất kho, biên bản nghiệm thu, hợp đồng mua bán đúng mẫu — sẵn sàng ký và gửi khách.",
    examples: [
      "Xuất hóa đơn VAT cho đơn #1042, gửi về email khách",
      "Tạo phiếu xuất kho cho lô hàng sáng nay",
      "Sinh hợp đồng dịch vụ theo mẫu chuẩn cho khách mới",
    ],
  },
];

export const aiFlowSteps = [
  {
    num: "01",
    title: "Nhận lệnh ngôn ngữ tự nhiên",
    desc: "Người dùng gõ hoặc nói — tiếng Việt, không cần format đặc biệt",
  },
  {
    num: "02",
    title: "Phân tích ý định & context",
    desc: "AI hiểu entity (khách hàng, đơn hàng...), action, và ngữ cảnh người dùng hiện tại",
  },
  {
    num: "03",
    title: "Gọi API nghiệp vụ tương ứng",
    desc: "Ánh xạ sang đúng API của Workflow Engine hoặc ERP, thực thi an toàn với permission của user",
  },
  {
    num: "04",
    title: "Trả kết quả & cập nhật giao diện",
    desc: "Kết quả hiển thị ngay trong chat, đồng thời cập nhật UI tương ứng — zero reload",
  },
];

// ─── CASE STUDIES ─────────────────────────────────────────────────────────
export type CaseVariant = "blue" | "green" | "teal" | "amber" | "violet";

export interface CaseStudy {
  variant: CaseVariant;
  industry: string;
  product: string;
  title: string;
  desc: string;
  metrics: { value: string; label: string }[];
  quote: string;
  author: string;
}

export const caseStudies: CaseStudy[] = [
  {
    variant: "blue",
    industry: "Bán lẻ thời trang",
    product: "Workflow + CDP-ERP",
    title: "Chuỗi 12 cửa hàng thời trang tại Hà Nội tự động hóa quy trình đơn hàng & CSKH",
    desc: "Trước đây mỗi đơn hàng cần 3–4 nhân sự xử lý thủ công, dữ liệu khách hàng phân tán trên nhiều sheet. Sau khi triển khai Open CDP-ERP và Flast Workflow, toàn bộ quy trình từ tiếp nhận → kho → giao → CSKH được tự động hóa.",
    metrics: [
      { value: "-68%", label: "Chi phí xử lý đơn" },
      { value: "3.2×", label: "Tốc độ xử lý đơn" },
      { value: "+41%", label: "Tỷ lệ tái mua" },
    ],
    quote: "Từ khi dùng Flast, nhân viên bán hàng không còn phải nhập liệu thủ công nữa. AI tự sinh đơn, tự nhắc CSKH — chúng tôi tập trung vào bán hàng thật sự.",
    author: "Giám đốc Kinh doanh, Fashion Chain Hà Nội",
  },
  {
    variant: "green",
    industry: "Xuất nhập khẩu",
    product: "Workflow + AI Agent",
    title: "Công ty XNK tự động sinh chứng từ thương mại quốc tế bằng AI Agent",
    desc: "Doanh nghiệp XNK phải xử lý hàng chục bộ chứng từ mỗi tuần — invoice, packing list, C/O, tờ khai hải quan. AI Agent của Flast kết nối với dữ liệu đơn hàng và tự sinh chứng từ đúng mẫu, đúng số liệu chỉ trong vài giây.",
    metrics: [
      { value: "-85%", label: "Thời gian làm chứng từ" },
      { value: "0", label: "Lỗi nhập liệu/tháng" },
      { value: "12 giờ", label: "Tiết kiệm mỗi tuần" },
    ],
    quote: "Một lệnh chat là có ngay bộ chứng từ hoàn chỉnh. Kế toán của chúng tôi bây giờ chỉ cần review và ký — không còn gõ phím cả ngày.",
    author: "Kế toán trưởng, Công ty XNK Hải Phòng",
  },
  {
    variant: "teal",
    industry: "Nhà hàng & F&B",
    product: "Open CDP-ERP",
    title: "Chuỗi nhà hàng 8 chi nhánh quản lý kho nguyên liệu và điều phối bếp",
    desc: "Vấn đề kinh điển của F&B: tồn kho nguyên liệu không chính xác, đặt hàng NCC thiếu/thừa, không biết chi nhánh nào đang lãi/lỗ. Open CDP-ERP giải quyết toàn bộ với chi phí vận hành chỉ bằng 1 VPS.",
    metrics: [
      { value: "200k", label: "Chi phí hệ thống/tháng" },
      { value: "-30%", label: "Lãng phí nguyên liệu" },
      { value: "8 CN", label: "Quản lý tập trung" },
    ],
    quote: "Trước chúng tôi dùng phần mềm mất 3 triệu/tháng mà vẫn phải nhập tay. Flast Open ERP chạy ngon hơn, giá bằng một tô phở.",
    author: "Chủ chuỗi nhà hàng, TP. Hồ Chí Minh",
  },
  {
    variant: "amber",
    industry: "Bất động sản",
    product: "Workflow + AI Agent",
    title: "Công ty BĐS tự động hóa quy trình duyệt hợp đồng và CSKH hậu mua",
    desc: "Quy trình duyệt hợp đồng BĐS trải qua 7 cấp phê duyệt — từ kinh doanh → pháp lý → tài chính → giám đốc. Flast Workflow số hóa toàn bộ, AI Agent tự nhắc và escalate khi quá hạn.",
    metrics: [
      { value: "7→2", label: "Ngày duyệt hợp đồng" },
      { value: "100%", label: "On-time notification" },
    ],
    quote: "Khách hàng nhận thông báo tiến độ tự động, không phải gọi hỏi nữa. Điểm hài lòng tăng rõ rệt.",
    author: "Phó TGĐ vận hành, Tập đoàn BĐS miền Trung",
  },
  {
    variant: "violet",
    industry: "SaaS / Tech",
    product: "Workflow + Shield",
    title: "Công ty SaaS bảo vệ hạ tầng đa-tenant với Flast Shield trên cụm VPS",
    desc: "Phục vụ 50+ khách hàng doanh nghiệp trên cùng cụm máy chủ, rủi ro một tenant bị tấn công ảnh hưởng toàn bộ là cực kỳ cao. Flast Shield cô lập từng tenant trong namespace riêng ở tầng kernel — zero-trust từ gốc.",
    metrics: [
      { value: "0", label: "Security incident/năm" },
      { value: "50+", label: "Tenant cô lập hoàn toàn" },
    ],
    quote: "Flast Shield là thứ duy nhất giúp chúng tôi tự tin cam kết SLA bảo mật với khách enterprise. Kernel-level, không bypass được.",
    author: "CTO, Công ty SaaS B2B Hà Nội",
  },
];

// ─── PRICING ──────────────────────────────────────────────────────────────
export const pricingPlans = [
  {
    plan: "Open Source",
    price: "Miễn phí",
    period: "Open CDP-ERP · MIT License",
    featured: false,
    features: [
      "Tất cả 6 phân hệ ERP",
      "Tự deploy trên VPS 200k/tháng",
      "Dữ liệu hoàn toàn của bạn",
      "Cộng đồng GitHub hỗ trợ",
    ],
    btn: { label: "Clone trên GitHub", href: "https://github.com/Flast-Solution/Open-CDP-ERP-BackEnd", ghost: true },
  },
  {
    plan: "Business",
    price: "4.9",
    priceSuffix: " tr/tháng",
    period: "Flast Workflow · mỗi tenant",
    featured: true,
    popular: "PHỔ BIẾN NHẤT",
    features: [
      "Workflow không giới hạn",
      "10,000 instances / tháng",
      "Tích hợp ERP không giới hạn",
      "Smart Scheduler & SLA",
      "Multi-tenant dashboard",
      "Hỗ trợ ưu tiên",
    ],
    btn: { label: "Dùng thử 14 ngày", href: "#", ghost: false },
  },
  {
    plan: "Enterprise",
    price: "Liên hệ",
    period: "Workflow + Shield · tùy chỉnh",
    featured: false,
    features: [
      "Self-hosted / On-premise",
      "Flast Shield kernel security",
      "Instances không giới hạn",
      "SLA 99.9% uptime",
      "Dedicated support & training",
    ],
    btn: { label: "Tư vấn ngay →", href: "#", ghost: true },
  },
];

// ─── FOOTER ───────────────────────────────────────────────────────────────
export const footerLinks = {
  products: [
    { label: "Flast Workflow", href: "#workflow" },
    { label: "Open CDP-ERP", href: "#opensource" },
    { label: "Flast Shield", href: "#shield" },
    { label: "Bảng giá", href: "#pricing" },
  ],
  resources: [
    { label: "GitHub", href: "https://github.com/Flast-Solution" },
    { label: "Tài liệu", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Case Studies", href: "#casestudy" },
  ],
  company: [
    { label: "Về Flast", href: "#" },
    { label: "Đội ngũ", href: "#" },
    { label: "Tuyển dụng", href: "#" },
    { label: "Liên hệ", href: "#" },
  ],
};