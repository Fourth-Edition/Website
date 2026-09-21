/**
 * Authentic Fourth Edition Company Information & Story.
 * Full Bilingual English & Arabic Data.
 */

export interface AboutStat {
  label: string;
  labelAr?: string;
  value: string;
}

export interface StudioValue {
  index: string;
  title: string;
  titleAr?: string;
  description: string;
  descriptionAr?: string;
}

export interface Milestone {
  year: string;
  title: string;
  titleAr?: string;
  description: string;
  descriptionAr?: string;
}

export interface TeamMember {
  name: string;
  nameAr?: string;
  role: string;
  roleAr?: string;
  focus: string;
  focusAr?: string;
  initials: string;
}

export const stats: AboutStat[] = [
  { label: "Founded", labelAr: "سنة التأسيس", value: "Jan 2026" },
  { label: "Projects Shipped", labelAr: "مشاريع مُنجزة", value: "5+" },
  { label: "Maturity Phase", labelAr: "مرحلة النضج", value: "Edition 4" },
  { label: "Team Focus", labelAr: "تركيز الفريق", value: "100% Lean" },
];

export const values: StudioValue[] = [
  {
    index: "01",
    title: "Stage 4 Maturity from Day One",
    titleAr: "نضج كامل من اليوم الأول",
    description:
      "Derived from our name '4th Edition' — we bypass the 3 basic development stages (planning, trial, initial dev) to deliver fully mature, future-proof software.",
    descriptionAr:
      "مستوحى من اسم 'Fourth Edition' — نتجاوز المراحل الثلاث الأولى من التطوير لنقدم برمجيات ناضجة وجاهزة للمستقبل من أول يوم.",
  },
  {
    index: "02",
    title: "Lean High-Efficiency Nucleus",
    titleAr: "فريق صغير، كفاءة عالية",
    description:
      "A compact team of elite engineers beats bloated departments. Extreme agility, rapid decision-making, and zero execution delay.",
    descriptionAr:
      "فريق مختار من المهندسين يتفوق على أقسام كبيرة مترهلة. مرونة عالية، قرارات سريعة، وتنفيذ بلا تأخير.",
  },
  {
    index: "03",
    title: "Systematic Design & Architecture",
    titleAr: "تصميم منهجي وبنية تقنية محكمة",
    description:
      "We pair meticulous architectural planning with modern, clean code to tailor solutions precisely to client requirements.",
    descriptionAr:
      "نجمع بين التخطيط المعماري الدقيق والكود البرمجي الحديث لنقدم حلولاً مُصمَّمة خصيصاً لمتطلبات كل عميل.",
  },
  {
    index: "04",
    title: "Built for Rapid Execution",
    titleAr: "مصمم للتسليم السريع",
    description:
      "Innovative, flexible software solutions designed to help ambitious businesses thrive in a fast-paced technology landscape.",
    descriptionAr:
      "حلول برمجية مبتكرة ومرنة تساعد الشركات الطموحة على النمو في بيئة تقنية متسارعة.",
  },
];

export const timeline: Milestone[] = [
  {
    year: "يناير 2026",
    title: "The Launch & Core Foundation",
    titleAr: "التأسيس والانطلاق",
    description:
      "Founded with an ambitious vision to redefine software services. Assembled a high-competency technical nucleus prioritizing efficiency, rapid decision-making, and execution over bloated team size.",
    descriptionAr:
      "تأسست الشركة برؤية طموحة لإعادة تعريف خدمات البرمجيات، وبنينا نواة تقنية عالية الكفاءة تعطي الأولوية للتنفيذ السريع واتخاذ القرار الفعّال.",
  },
  {
    year: "مطلع 2026",
    title: "The '4th Edition' Philosophy",
    titleAr: "بناء الهوية وترسيخ الفلسفة",
    description:
      "Established the brand identity around '4th Edition' — symbolizing full professional maturity, skipping basic trial phases directly to production-ready software. Combined systematic design with modern code bases.",
    descriptionAr:
      "رسّخنا هوية العلامة التجارية حول مفهوم 'الإصدار الرابع' — رمز للنضج المهني الكامل وتجاوز مراحل التجربة مباشرةً إلى برمجيات جاهزة للإنتاج.",
  },
  {
    year: "2026",
    title: "Expansion & 5+ Shipped Products",
    titleAr: "التوسع وإنجاز أكثر من خمسة مشاريع",
    description:
      "Proved market reliability and competitive strength by engineering and launching over 5 successful software systems across enterprise CRM, medical portals, and high-performance web platforms.",
    descriptionAr:
      "أثبتنا موثوقيتنا في السوق من خلال تصميم وإطلاق أكثر من خمسة أنظمة برمجية ناجحة، تشمل أنظمة إدارة العملاء والبوابات الطبية ومنصات الويب عالية الأداء.",
  },
];

export const team: TeamMember[] = [
  {
    name: "Engineering Nucleus",
    nameAr: "النواة الهندسية",
    role: "Architectural & Technical Leadership",
    roleAr: "قيادة معمارية وتقنية",
    focus: "Full-Stack Architecture, System Design & Rapid Delivery",
    focusAr: "تطوير متكامل، تصميم الأنظمة، وتسليم سريع",
    initials: "4E",
  },
];
