/**
 * Real Portfolio Case Studies for 4th Edition Software.
 * Includes full bilingual support for English and Arabic.
 */

export type ProjectCategory = "Web" | "Mobile" | "Enterprise" | "Branding";

export interface ProjectMetric {
  label: string;
  labelAr?: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  titleAr?: string;
  client: string;
  clientAr?: string;
  category: ProjectCategory;
  categoryAr?: string;
  year: string;
  summary: string;
  summaryAr?: string;
  body: string[];
  bodyAr?: string[];
  services: string[];
  servicesAr?: string[];
  stack: string[];
  metrics: ProjectMetric[];
  highlights?: string[];
  highlightsAr?: string[];
  featured?: boolean;
  coverImage: string;
  galleryImages: string[];
}

export const categories: Array<ProjectCategory | "All"> = [
  "All",
  "Web",
  "Enterprise",
];

export const projects: Project[] = [
  {
    slug: "sales-system",
    title: "Enterprise Sales & Lead Pipeline CRM",
    titleAr: "نظام إدارة المبيعات وتتبع العملاء للمؤسسات (CRM)",
    client: "High-Volume Trading & Supply Enterprise",
    clientAr: "شركة تجارية وتوريدات كبرى عالية الكثافة",
    category: "Enterprise",
    categoryAr: "أنظمة الشركات",
    year: "2026",
    summary:
      "A modern, full-stack Enterprise CRM and Sales Management System built to optimize sales pipelines, streamline lead allocation, and track employee performance in real time.",
    summaryAr:
      "نظام متكامل لإدارة المبيعات وتوزيع العملاء المحتملين وتتبع أداء موظفي المبيعات في الوقت الفعلي مع مسار تدقيق كامل وسجل تنقلات غير قابل للتعديل.",
    body: [
      "The Enterprise Sales Management System was engineered to eliminate lead leakage, enhance sales team accountability, and streamline customer follow-ups for high-volume trading and supply operations.",
      "The platform connects sales representatives and administrators through a unified, real-time dashboard. Sales reps can log calls, take point-in-time interaction notes, schedule follow-up reminders, and manage deal stages. Administrators gain full visibility over team efficiency, conversion rates, call outcome distributions, and automated lead reassignments with immutable audit snapshot history.",
      "Designed specifically with a native Right-to-Left (RTL) Arabic enterprise user experience, strict data validation, and responsive mobile-first views, it empowers organizations to make data-driven decisions while managing thousands of customer records effortlessly.",
    ],
    bodyAr: [
      "تم تصميم نظام إدارة المبيعات خصيصاً للقضاء على ضياع العملاء المحتملين، وتحديث متابعات العملاء لعمليات التوريد والتجارة الضخمة.",
      "يربط النظام موظفي المبيعات والإدارة عبر لوحة تحكم تفاعلية موحدة في الوقت الفعلي. يمكن للموظفين تسجيل المكالمات، تدوين الملاحظات الفورية، جدولة التذكيرات، وإدارة مراحل الصفقات. بينما تحصل الإدارة على رؤية كاملة لأداء الفريق، ومعدلات التحويل، وإعادة توزيع العملاء تلقائياً مع سجل تدقيق زمني آمن.",
      "تم تطوير النظام بواجهة عربية (RTL) كاملة موجهة للمؤسسات، مع التحقق الصارم من البيانات، والتوافق التام مع جميع أجهزة المحمول والتابلت.",
    ],
    services: [
      "Enterprise Systems",
      "UI/UX Design",
      "Database Architecture",
      "RTL Localization",
    ],
    servicesAr: [
      "أنظمة المؤسسات والشركات",
      "تصميم واجهات وتجربة المستخدم",
      "معمارية قواعد البيانات",
      "دعم اللغة العربية والاتجاه الأيمن (RTL)",
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "Supabase",
      "TypeScript",
      "Tailwind CSS v4",
      "Recharts",
      "Zod",
      "SheetJS",
    ],
    metrics: [
      { label: "Lead Waste", labelAr: "ضياع العملاء", value: "0%" },
      { label: "Audit Timeline", labelAr: "شفافية السجل", value: "100%" },
      { label: "Agent Onboarding", labelAr: "وقت التدريب", value: "< 30m" },
    ],
    highlights: [
      "Smart Sales Pipeline with dynamic deal stages and automated lead recycling queues (No Answer, Closed Phone).",
      "Bulk & single lead reassignment with append-only JSONB snapshot history audit trail.",
      "Role-Based Access Control (RBAC) separating administrative controls from sales agent views.",
      "Real-time analytics engine with custom date filtering (Today, Week, Month, Custom).",
      "High-speed Excel bulk onboarding (.xlsx) with duplicate detection and client/server validation.",
    ],
    highlightsAr: [
      "مسار مبيعات ذكي مع مراحل صفقات ديناميكية وطوابير إعادة تدوير العملاء التلقائية (لم يرد، الهاتف مغلق).",
      "إعادة توزيع العملاء فردياً أو في مجموعات مع سجل تدقيق زمني غير قابل للتعديل (JSONB Audit Trail).",
      "نظام صلاحيات متقدم (RBAC) يفصل صلاحيات الإدارة عن واجهات موظفي المبيعات.",
      "محرك تحليلات ورسوم بيانية تفاعلية مع تصفية حسب التاريخ (اليوم، الأسبوع، الشهر، مخصص).",
      "استيراد وتصدير بيانات Excel بسرعة عالية مع كشف التكرارات والتحقق الصارم.",
    ],
    featured: true,
    coverImage: "/images/projects/sales-system/cover.png",
    galleryImages: [
      "/images/projects/sales-system/cover.png",
      "/images/projects/sales-system/1.png",
      "/images/projects/sales-system/2.png",
      "/images/projects/sales-system/3.png",
      "/images/projects/sales-system/4.png",
      "/images/projects/sales-system/5.png",
    ],
  },
  {
    slug: "dr-cardiology",
    title: "Dr. Ahmad Mahmoud Cardiology Practice",
    titleAr: "مركز الأستاذ الدكتور أحمد محمود لطب وجراحة القلب",
    client: "Dr. Ahmad Mahmoud Clinic (Mohandessin, Cairo)",
    clientAr: "عيادة د. أحمد محمود للقلب والاوعية الدموية (المهندسين، القاهرة)",
    category: "Web",
    categoryAr: "مواقع وتطبيقات الويب",
    year: "2026",
    summary:
      "A high-performance medical landing page and clinical portal integrating 3D cardiac diagnostics, interventional catheterization highlights, and streamlined patient appointment scheduling.",
    summaryAr:
      "منصة طبية متكاملة لعيادة طب وأمراض القلب بالمهندسين تستعرض الفحوصات التشخيصية ثلاثية الأبعاد، القسطرة العلاجية، وحجز المواعيد الطبية لمرضى القلب.",
    body: [
      "Led by Professor Dr. Ahmad Mahmoud — Professor of Cardiology at Cairo University (Kasr Al-Ainy) and Fellow of the European Society of Cardiology (ESC) — the practice brings over 20 years of clinical and academic excellence to patient care.",
      "The digital platform presents clear, non-invasive cardiac diagnostic services, intelligent drug-eluting stenting (DES) procedures, hypertension & arrhythmia management, and emergency cardiac interventions.",
      "Engineered to build patient trust with interactive 3D Echo highlights, verified patient ratings (4.9/5), and an intuitive appointment booking experience optimized across desktop, tablet, and mobile devices.",
    ],
    bodyAr: [
      "تحت إشراف الأستاذ الدكتور أحمد محمود — أستاذ أمراض القلب بكلية طب القصر العيني - جامعة القاهرة وزميل الجمعية الأوروبية لأمراض القلب (ESC) — تقدم العيادة أكثر من 20 عاماً من الخبرة الإكلينيكية والأكاديمية.",
      "تستعرض المنصة الرقمية خدمات التشخيص غير الجراحي، عمليات القسطرة العلاجية والتركيب الذكي للدعامات الدوائية، علاج ضغط الدم واضطرابات النبض، وتدخلات القلب الطارئة.",
      "صُممت المنصة لبناء ثقة المرضى من خلال استعراض فحوصات الإيكو ثلاثية الأبعاد، وتقييمات المرضى المعتمدة (4.9/5)، مع نظام حجز مواعيد سلس ومناسب لجميع الأجهزة.",
    ],
    services: [
      "Websites & Web Apps",
      "UI/UX Design",
      "Branding & Identity",
      "SEO & Performance",
    ],
    servicesAr: [
      "مواقع وتطبيقات الويب",
      "تصميم واجهات وتجربة المستخدم",
      "الهوية البصرية والعلامة التجارية",
      "تحسين محركات البحث والأداء (SEO)",
    ],
    stack: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Framer Motion",
    ],
    metrics: [
      { label: "Clinical Experience", labelAr: "خبرة إكلينيكية", value: "20+ Yrs" },
      { label: "Cardiac Interventions", labelAr: "قسطرة وتدخلات", value: "5,000+" },
      { label: "Patient Satisfaction", labelAr: "تقييم المرضى", value: "4.9 / 5" },
    ],
    highlights: [
      "Interventional Cardiology & Smart Stenting (Emergency primary PCI and drug-eluting stent placement).",
      "3D Cardiac Diagnostics showcase (3D Echocardiography, Holter monitoring, non-invasive ECG evaluation).",
      "Hypertension & Rhythm Management comprehensive care plan guides.",
      "Preventive Cardiology & Screening risk-factor assessment tools.",
      "Over 10,000 patients successfully treated across 20+ years of Kasr Al-Ainy academic excellence.",
    ],
    highlightsAr: [
      "قسطرة القلب التدخلية والدعامات الذكية (عمليات الطوارئ وتركيب الدعامات الدوائية).",
      "الفحوصات التشخيصية ثلاثية الأبعاد (إيكو ثلاثي الأبعاد، رسم القلب، ورسم القلب المحمول هولتر).",
      "برامج علاج ضغط الدم واضطرابات نبضات القلب وتنظيم الكوليسترول.",
      "برامج الوقاية والفحص المبكر لأمراض القلب والأوعية الدموية.",
      "علاج أكثر من 10,000 مريض بنجاح على مدار أكثر من 20 عاماً من التميز الأكاديمي بالقصر العيني.",
    ],
    featured: true,
    coverImage: "/images/projects/dr-cardiology/cover.png",
    galleryImages: [
      "/images/projects/dr-cardiology/cover.png",
      "/images/projects/dr-cardiology/1.png",
      "/images/projects/dr-cardiology/2.png",
      "/images/projects/dr-cardiology/3.png",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
