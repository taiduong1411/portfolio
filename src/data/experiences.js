// Data về kinh nghiệm làm việc và dự án
export const experiences = [
  {
    id: "helix-2024",
    company: "HELIX Technology & Communication Co., Ltd.",
    position: "IT OPERATION",
    period: "02/2024 - 09/2025",
    location: "HCM City, Vietnam",
    type: "Full-time",
    description:
      "Chuyên viên IT Operations tại HELIX, chịu trách nhiệm chính trong việc xây dựng hệ sinh thái công cụ nội bộ và tự động hóa quy trình kinh doanh",
    achievements: [
      "Giảm 80% thời gian xử lý order và báo cáo tài chính",
      "Tăng 30% lượng khách hàng từ Google Maps thông qua SEO",
      "Triển khai 20+ workflows tự động hóa",
      "Xây dựng hệ thống quản lý dữ liệu tập trung cho toàn công ty",
    ],
  },
];

// 4 Kỹ năng chính
export const mainSkills = [
  {
    id: "lark-platform",
    name: "Lark Platform",
    icon: "/icons/Lark_Suite_logo_2022.png",
    color: "from-emerald-600 to-teal-600",
    description: "Có kinh nghiệm về Lark Suite, Workflow, API và Automation",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: "lark-automation",
    name: "Automation",
    icon: "/icons/automation.png", // Thay bằng icon automation của bạn
    color: "from-emerald-600 to-teal-600",
    description: "Tự động hóa quy trình kinh doanh và tích hợp hệ thống",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: "data-analyst",
    name: "Data Analyst",
    icon: "/icons/data-analytic.png", // Thay bằng icon data analyst của bạn
    color: "from-emerald-600 to-teal-600",
    description: "Phân tích dữ liệu, BI Dashboard và Data Visualization",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: "website-developer",
    name: "Website Developer",
    icon: "/icons/website_dev.png", // Thay bằng icon web developer của bạn
    color: "from-emerald-600 to-teal-600",
    description: "Full-stack Web Development và SEO Optimization",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
];

// Data về các dự án nổi bật
export const projects = [
  {
    id: "lark-ecosystem",
    title:
      "Hệ thống theo dõi và cảnh báo hàng hoá kết hợp với nhập hàng tự động theo định mức",
    category: "lark-platform",
    featured: true,
    period: "02/2024 - 09/2025",
    company: "HELIX Technology & Communication Co., Ltd.",
    role: "Data Analyst & System Architect",
    description:
      "Thiết kế và triển khai hệ thống nhập hàng tự động và cảnh báo định mức hàng hoá ở cửa hàng. Hệ thống dành cho cấp bậc quản lý cửa hàng và bộ phận kho dùng để nhập hàng từ kho tổng dựa trên sức bán thực tế của từng sản phẩm trong cửa hàng, giúp hạn chế tối đa việc nhập hàng lãng phí và nhập thừa hàng.",
    images: [
      "/projects/Lark/lark_stock.png", // Ảnh cover (index 0)
      // Thêm các ảnh minh họa khác ở đây
    ],
    technologies: ["Lark Base", "Lark Workflow", "BigQuery"],
    highlights: [
      {
        icon: "",
        title: "",
        items: [
          "Tích hợp Lark với Elton Data (API bên thứ 3) và BigQuery để lấy dữ liệu real-time đơn hàng và tính ra được sức bán thực tế của từng cửa hàng theo từng loại sản phẩm",
          "Sử dụng công thức để tính toán định mức sức bán, tình trạng hàng (Slow, Top, Out of Stock, ...) dựa trên sức bán thực tế của cửa hàng",
          "Sử dụng Lark Workflow để tự động cảnh báo tình trạng hàng hoá trong cửa hàng và bộ phận kho nhập hàng tự động theo định mức sức bán",
        ],
      },
    ],
    metrics: [
      { value: "80%", label: "Giảm thời gian kiểm tra và nhập hàng tự động" },
      { value: "15", label: "Cửa hàng đã sử dụng hệ thống" },
      {
        value: "99%",
        label:
          "Độ chính xác số lượng hàng nhập tự động vào cửa hàng theo định mức sức bán",
      },
    ],
  },
  {
    id: "lark-salary",
    title: "Hệ thống quản lý tự động tính lương và thưởng cho nhân viên",
    category: "lark-platform",
    featured: true,
    period: "02/2024 - 09/2025",
    company: "HELIX Technology & Communication Co., Ltd.",
    role: "Data Analyst & System Architect",
    description:
      "Thiết kế và triển khai hệ thống tự động tính lương và thưởng cho toàn bộ nhân viên của công ty dựa trên số liệu bán hàng thực tế của cửa hàng và theo chức danh của nhân viên để tính toán các chỉ tiêu KPI, phụ cấp, ... của nhân viên.",
    images: [
      "/projects/Lark/payroll.png", // Ảnh cover (index 0)
      "/projects/Lark/payroll_message.png",
      // Thêm các ảnh minh họa khác ở đây
    ],
    technologies: ["Lark Base", "Lark Workflow", "BigQuery"],
    highlights: [
      {
        icon: "",
        title: "",
        items: [
          "Kết hợp dữ liệu từ nhiều nguồn như: Approval, Attendance, BigQuery để tổng hợp dữ liệu và lưu trữ ở các base",
          "Kết hợp với nhiều phòng ban để lấy các chỉ số thưởng, KPI, phụ cấp, truy lĩnh, phạt, ... theo chức danh của nhân viên",
          "Sử dụng Lark Workflow để tự động tính lương và thưởng cho nhân viên dựa trên quy định lương và thưởng của công ty",
          "Sử dụng Lark Workflow để tự động gửi tin nhắn tự động thông báo lương và thưởng cho nhân viên vào ngày lương",
        ],
      },
    ],
    metrics: [
      {
        value: "90%",
        label:
          "Giảm khối lượng công việc cho kế toán và nhân sự ở mỗi kỳ lương",
      },
      {
        value: "100+",
        label: "Số lượng nhân viên đã sử dụng hệ thống",
      },
      {
        value: "100%",
        label: "Độ chính xác tính lương và thưởng cho nhân viên",
      },
    ],
    links: [],
  },
  // Automation System
  {
    id: "lark-automation",
    title: "Cảnh báo tự động khi nhân viên quên xử lý các đơn hàng online",
    category: "lark-automation",
    featured: true,
    period: "02/2024 - 09/2025",
    company: "HELIX Technology & Communication Co., Ltd.",
    role: "Data Analyst & System Architect",
    description:
      "Thiết kế và triển khai hệ thống tự động cảnh báo khi nhân viên quên xử lý các đơn hàng online để tránh việc mất đơn hàng và thiệt hại cho công ty.",
    images: [
      "/projects/Automation/anycross2.png", // Ảnh cover (index 0)
      // Thêm các ảnh minh họa khác ở đây
    ],
    technologies: ["Lark", "Anycross"],
  },
  {
    id: "lark-automation2",
    title:
      "Hệ thống tự động làm sạch dữ liệu khi có dữ liệu bị lỗi hoặc sai sót",
    category: "lark-automation",
    featured: true,
    period: "02/2024 - 09/2025",
    company: "HELIX Technology & Communication Co., Ltd.",
    role: "Data Analyst & System Architect",
    description:
      "Thiết kế và triển khai hệ thống tự động làm sạch dữ liệu khi có dữ liệu bị lỗi hoặc sai sót để tránh việc mất dữ liệu hoặc sai sót và gây thiệt hại cho công ty.",
    images: [
      "/projects/Automation/anycross2.png", // Ảnh cover (index 0)
      // Thêm các ảnh minh họa khác ở đây
    ],
    technologies: ["Lark", "Anycross"],
  },
  {
    id: "lark-automation3",
    title:
      "Tích hợp AI vào hệ thống tự động để chăm sóc khách hàng dành cho bộ phận Telesales",
    category: "lark-automation",
    featured: true,
    period: "05/2025 - 06/2025",
    company: "HELIX Technology & Communication Co., Ltd.",
    role: "Data Analyst & System Architect",
    description:
      "Tích hợp AI vào Google Sheet kết hợp với AppScript để tạo luồng tự động hoá và phân tích cuộc gọi của team Telesales. Dựa vào các yếu tố như: lịch sử đơn hàng, thái độ, nội dung, thời lượng cuộc gọi, ... AI sẽ đưa ra hướng xử lý theo quy định",
    images: [
      "/projects/Automation/9.jpg", // Ảnh cover (index 0)
      // Thêm các ảnh minh họa khác ở đây
    ],
    technologies: ["Google Sheet", "Google AppScript", "AI", "n8n", "BigQuery"],
  },
  {
    id: "data-analytics",
    title: "Data Analytics & Reporting System",
    category: "data-analyst",
    featured: true,
    period: "02/2024 - 09/2025",
    company: "HELIX Technology & Communication Co., Ltd.",
    role: "Data Analyst & BI Developer",
    description:
      "Xây dựng hệ thống phân tích dữ liệu và báo cáo tự động, tích hợp nhiều nguồn dữ liệu để cung cấp insights kinh doanh thời gian thực.",
    images: [
      "/projects/DataAnalyst/3.jpg",
      "/projects/DataAnalyst/4.jpg",
      // Ảnh cover (index 0)
      "/projects/DataAnalyst/6.jpg",
      "/projects/DataAnalyst/7.jpg",
    ],
    technologies: ["Power BI", "Looker", "BigQuery", "SQL"],
    highlights: [
      {
        icon: "📈",
        title: "Thu thập & Chuẩn hóa dữ liệu",
        items: [
          "Thu thập dữ liệu từ Shopify, Haravan, Google Sheets, BigQuery",
          "Chuẩn hóa và làm sạch dữ liệu từ nhiều nguồn khác nhau",
        ],
      },
      {
        icon: "📊",
        title: "Báo cáo & Dashboard",
        items: [
          "Tạo dashboard KPI thời gian thực trên Power BI và Looker",
          "Báo cáo tự động hàng ngày/tuần/tháng",
        ],
      },
    ],
    metrics: [
      { value: "5+", label: "Nguồn dữ liệu tích hợp" },
      { value: "10+", label: "Dashboards" },
      { value: "Daily", label: "Báo cáo tự động" },
    ],
    links: [],
  },
  {
    id: "fullstack-websites",
    title: "Phát triển website bán hàng trên nền tảng Shopify cho công ty",
    category: "website-developer",
    featured: true,
    period: "02/2024 - 09/2025",
    company: "HELIX Technology & Communication Co., Ltd.",
    role: "Full-stack Developer",
    description:
      "Thiết kế và phát triển website bán hàng dựa trên theme mẫu và phát triển thêm UI/UX, các section mới trên nền tảng Shopify cho công ty.",
    images: [
      "/projects/Website/ff1.png",
      "/projects/Website/ff2.png", // Ảnh cover (index 0)
      // Ảnh cover (index 0)
      // Thêm các ảnh minh họa khác ở đây
    ],
    technologies: ["Shopify", "Shopify Theme", "HTML/CSS/JavaScript"],
    highlights: [],
    metrics: [],
    links: [
      {
        label: "Website",
        url: "https://ff-fruit-bar.myshopify.com/",
        type: "live",
      },
    ],
  },
];

// Lọc các dự án nổi bật
export const getFeaturedProjects = () => {
  return projects.filter((project) => project.featured);
};

// Lấy dự án theo category
export const getProjectsByCategory = (category) => {
  return projects.filter((project) => project.category === category);
};

// Lấy tất cả categories
export const getAllCategories = () => {
  return [...new Set(projects.map((project) => project.category))];
};

// Lấy projects theo skill category
export const getProjectsBySkill = (skillId) => {
  return projects.filter((project) => project.category === skillId);
};
