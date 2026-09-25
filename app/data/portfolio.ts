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
  {
    slug: "dr-orthopedist",
    title: "Dr. Ahmed Samy El-Shennawy Orthopedic Platform",
    titleAr: "منصة الأستاذ الدكتور أحمد سامي الشناوي لجراحة العظام والمفاصل",
    client: "Dr. Ahmed Samy El-Shennawy Clinic (Mohandessin & New Cairo)",
    clientAr: "عيادة د. أحمد سامي الشناوي (المهندسين والتجمع الخامس)",
    category: "Web",
    categoryAr: "مواقع وتطبيقات الويب",
    year: "2026",
    summary:
      "A modern, high-converting medical landing page and appointment booking system for Dr. Ahmed Samy El-Shennawy, Consultant of Orthopedic Surgery (FRCS Glasgow, Kasr Al-Ainy).",
    summaryAr:
      "منصة طبية متكاملة رفيعة المستوى لحجز المواعيد والاستشارات لعيادة د. أحمد سامي الشناوي، استشاري جراحة العظام والمفاصل زميل كلية الجراحين الملكية بجلاسكو والقصر العيني.",
    body: [
      "Designed and engineered for Dr. Ahmed Samy El-Shennawy — Consultant of Orthopedic Surgery at Kasr Al-Ainy, Fellow of the Royal College of Surgeons (FRCS Glasgow), and member of AO Swiss & EOA — this project delivers a premium medical web presence focused on patient conversion and clinical authority.",
      "The platform features an interactive multi-step consultation booking engine with branch selection (Mohandessin & Fifth Settlement), insurance provider filtering (MetLife, AXA, MedNet, NextCare), unique reference code generation (e.g., SHN-XXXXXX), and direct one-tap WhatsApp integration.",
      "Engineered with a mobile-first responsive design, modular architecture with React Suspense lazy-loading for blazing-fast load times, semantic Arabic RTL layout, interactive medical blog reader, and detailed multi-branch locator.",
    ],
    bodyAr: [
      "تم تصميم وتطوير هذه المنصة الرقمية خصيصاً للأستاذ الدكتور أحمد سامي الشناوي — استشاري جراحة العظام والمفاصل بالقصر العيني وزميل كلية الجراحين الملكية بجلاسكو وعضو الجمعية السويسرية والمصرية للعظام.",
      "تتضمن المنصة محرك حجز استشارات تفاعلي متعدد الخطوات يتيح للمريض اختيار الفرع (المهندسين أو التجمع الخامس)، نوع الدفع والتأمين الطبي (MetLife, AXA, MedNet, NextCare)، توليد كود مرجعي فوري للحجز، والاتصال المباشر عبر الواتساب.",
      "صُممت الواجهة بأعلى معايير تجربة المستخدم المتوافقة تماماً مع الأجهزة المحمولة، مع دعم كامل للغة العربية (RTL)، وتحميل خفيف وسريع للمحتوى عبر كود تفاعلي مُحسّن، بالإضافة إلى مدونة تفاعلية ودليل الفروع ومواقع العيادات.",
    ],
    services: [
      "Websites & Web Apps",
      "UI/UX Design",
      "Medical Platform Architecture",
      "RTL & Accessibility",
    ],
    servicesAr: [
      "مواقع وتطبيقات الويب",
      "تصميم واجهات وتجربة المستخدم",
      "معمارية المنصات الطبية",
      "دعم اللغة العربية وحزم إمكانية الوصول",
    ],
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Framer Motion",
      "Google Gemini AI SDK",
      "Lucide React",
    ],
    metrics: [
      { label: "Surgeries Performed", labelAr: "جراحة ناجحة", value: "4,500+" },
      { label: "Years Experience", labelAr: "سنوات الخبرة", value: "16+ Yrs" },
      { label: "Patient Satisfaction", labelAr: "نسبة رضا المرضى", value: "98.4%" },
    ],
    highlights: [
      "Interactive Multi-Step Booking Engine with reference code generation & medical insurance network selection.",
      "Multi-Branch Clinic Locator for Mohandessin & Fifth Settlement (New Cairo) with Google Maps routing links.",
      "Specialized Medical Showcase covering Arthroscopy, Knee/Hip Joint Replacements, and Complex AO Fracture surgeries.",
      "Patient Education Blog Portal featuring modal-based medical article viewer & post-op recovery guides.",
      "Mobile-First Floating Action Bar for high-converting direct mobile calling and WhatsApp scheduling.",
    ],
    highlightsAr: [
      "محرك حجز تفاعلي متعدد الخطوات مع كود مرجعي تلقائي وتحديد شركة التأمين الطبي.",
      "دليل الفروع التفاعلي لعيادات المهندسين والتجمع الخامس مع خرائط وتفاصيل المواعيد.",
      "عرض متخصص لجراحات المناظير، استبدال المفاصل، وإصابات الملعب وعلاج الكسور المعقدة.",
      "مدونة تفاعلية للتوعية الطبية مع نافذة قراءة المقالات وإرشادات التعافي بعد الجراحة.",
      "شريط تنقل سفلي مرن للموبايل للاتصال والتواصل السريع عبر الواتساب.",
    ],
    featured: true,
    coverImage: "/images/projects/dr-orthopedist/cover.png",
    galleryImages: [
      "/images/projects/dr-orthopedist/cover.png",
      "/images/projects/dr-orthopedist/1.png",
      "/images/projects/dr-orthopedist/2.png",
      "/images/projects/dr-orthopedist/3.png",
      "/images/projects/dr-orthopedist/4.png",
      "/images/projects/dr-orthopedist/5.png",
      "/images/projects/dr-orthopedist/6.png",
    ],
  },
  {
    slug: "aura-dental",
    title: "Aura Dental 3D Interactive Platform",
    titleAr: "منصة هالة لطب الأسنان والتفاعل ثلاثي الأبعاد (Aura Dental)",
    client: "Aura Dental Clinics & Aesthetic Center",
    clientAr: "مركز ومراكز هالة المتخصصة لطب وتجميل الأسنان",
    category: "Web",
    categoryAr: "مواقع وتطبيقات الويب",
    year: "2026",
    summary:
      "A state-of-the-art interactive digital platform featuring a real-time Three.js 3D dental model viewer, full English/Arabic RTL localization, and a high-converting appointment engine.",
    summaryAr:
      "منصة رقمية فائقة التطور لعيادات طب الأسنان تعتمد على محرك تفاعلي ثلاثي الأبعاد (Three.js)، ودعم كامل ثنائي اللغة للغة العربية والانجليزية لاتجهات (RTL/LTR)، وحجز المواعيد.",
    body: [
      "Aura Dental is a state-of-the-art, interactive digital platform designed for high-end dental clinics and aesthetic healthcare providers.",
      "The platform combines immersive 3D interactive graphics built with Three.js — rendering realistic tooth enamel, translucent physical shaders, and smooth WebGL orbit controls — allowing prospective patients to rotate, zoom, and inspect dental procedures directly in their browser.",
      "Engineered from the ground up with Next.js 16 App Router, React 19, Tailwind CSS v4 glassmorphism, and a native bilingual state architecture with instant RTL/LTR switching for Arabic and English users.",
    ],
    bodyAr: [
      "تُعد منصة أورا لطب الأسنان (Aura Dental) منصة رقمية متطورة ومصممة خصيصاً لمراكز وتجميل الأسنان الرفيعة المستوى.",
      "تجمع المنصة بين رسوم ثلاثية الأبعاد تفاعلية (Three.js) تعكس خامات مينا الأسنان والإضاءات الواقعية مع أدوات تحكم مرنة تتيح للمريض استكشاف نموذج الأسنان وتكبيره بدقة عالية في المتصفح.",
      "تم تطوير المنصة باستخدام تقنيات Next.js 16 App Router، وReact 19، وTailwind CSS v4 مع تأثيرات Glassmorphism الزجاجية، ومعمارية ثنائية اللغة تدعم التبديل السلس والسريع بين العربية (RTL) والإنجليزية (LTR).",
    ],
    services: [
      "Websites & Web Apps",
      "3D WebGL Development",
      "UI/UX Design",
      "RTL & Localization",
    ],
    servicesAr: [
      "مواقع وتطبيقات الويب",
      "تطوير التفاعل ثلاثي الأبعاد (3D WebGL)",
      "تصميم واجهات وتجربة المستخدم",
      "دعم اللغة العربية والترجمة التفاعلية",
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "Three.js",
      "TypeScript",
      "Tailwind CSS v4",
      "Context API",
    ],
    metrics: [
      { label: "Real-Time 3D", labelAr: "تفاعل 3D مباشر", value: "60 FPS" },
      { label: "Bilingual RTL", labelAr: "دعم ثنائي اللغة", value: "100%" },
      { label: "Patient Retention", labelAr: "زيادة التفاعل", value: "+45%" },
    ],
    highlights: [
      "Real-Time 3D Dental Viewer powered by Three.js with OBJ mesh loading, physical material shaders, and touch damping.",
      "Native Bilingual Architecture (Arabic & English) with seamless instant RTL/LTR layout transitions.",
      "Interactive Clinic Showcase & Facility Gallery featuring lightboxes and procedural filtering.",
      "Integrated Patient Appointment & Lead Generation booking engine with real-time validation.",
      "Glassmorphism UI styling built with Tailwind CSS v4, optimized for desktop, tablet, and mobile browsers.",
    ],
    highlightsAr: [
      "استعراض ثلاثي الأبعاد تفاعلي مباشر (Three.js) مع تحميل نماذج OBJ وخامات مينا واقعية وتحكم سلس.",
      "معمارية ثنائية اللغة (عربي/إنجليزي) مع تكييف تلقائي كامل لاتجاه الصفحة والخطوط (RTL/LTR).",
      "معرض صور وتسهيلات تفاعلي يتيح تصفح المرافق والخدمات الطبية بمرونة عالية.",
      "محرك حجز مواعيد وتواصل مباشر مع المريض مع التحقق الفوري من البيانات.",
      "تصميم عصري متطور بخامات زجاجية (Glassmorphic UI) وتوافق تام مع كافة الهواتف والأجهزة.",
    ],
    featured: true,
    coverImage: "/images/projects/aura-dental/cover.png",
    galleryImages: [
      "/images/projects/aura-dental/cover.png",
      "/images/projects/aura-dental/1.png",
      "/images/projects/aura-dental/2.png",
      "/images/projects/aura-dental/3.png",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
