// Public site content exposed through the MCP server. Same data any visitor
// sees on abatools.info — no private or user data here.

export const courses = [
  {
    slug: "abat",
    title: "ABAT — Applied Behavior Analysis Technician",
    description:
      "مسار تأسيسي لفهم تحليل السلوك التطبيقي، جمع البيانات، تدريس المهارات، التواصل الوظيفي، وخفض السلوكيات الصعبة ضمن ممارسات أخلاقية.",
    hours: "40 ساعة",
    status: "قريباً",
    format: "Online (غير مباشر)",
    languages: "AR + EN",
    access: "3 أشهر",
    url: "/courses/abat",
    modules: [
      "Module 1 — مدخل إلى ABAT وتحليل السلوك التطبيقي",
      "Module 2 — التوحد والاضطرابات النمائية",
      "Module 3 — مبادئ السلوك",
      "Module 4 — القياس وجمع البيانات",
      "Module 5 — تدريس المهارات",
      "Module 6 — خفض السلوكيات الصعبة",
      "Module 7 — التواصل الوظيفي والتعاون مع الأسرة",
      "Module 8 — الأخلاقيات والمراجعة النهائية",
    ],
    audience: [
      "أخصائيو التربية الخاصة",
      "المعلمون",
      "أخصائيو النطق",
      "أخصائيو العلاج الوظيفي",
      "أولياء الأمور",
      "الخريجون",
    ],
  },
  { slug: "qasp-s", title: "QASP-S Preparation", description: "تحضير لاختبار QASP-S وفق المعايير المهنية.", hours: "TBA", status: "قريباً", url: "/courses" },
  { slug: "qba", title: "QBA Preparation", description: "الإعداد لشهادة محلل السلوك المؤهل QBA.", hours: "TBA", status: "قريباً", url: "/courses" },
  { slug: "rbt", title: "RBT Basics", description: "أساسيات مساعد تحليل السلوك المسجّل RBT.", hours: "TBA", status: "قريباً", url: "/courses" },
  { slug: "vb-mapp", title: "VB-MAPP", description: "أداة تقييم اللغة والسلوك اللفظي للأطفال.", hours: "TBA", status: "قريباً", url: "/courses" },
  { slug: "pecs", title: "PECS", description: "نظام التواصل بتبادل الصور خطوة بخطوة.", hours: "TBA", status: "قريباً", url: "/courses" },
  { slug: "early-intervention", title: "التدخل المبكر", description: "برامج ومسارات التدخل المبكر للأطفال.", hours: "TBA", status: "قريباً", url: "/courses" },
  { slug: "behavior-management", title: "إدارة السلوك", description: "استراتيجيات عملية لإدارة السلوكيات الصعبة.", hours: "TBA", status: "قريباً", url: "/courses" },
  { slug: "communication-skills", title: "مهارات التواصل", description: "تنمية مهارات التواصل الوظيفي والاجتماعي.", hours: "TBA", status: "قريباً", url: "/courses" },
] as const;

export const services = [
  { title: "للأسرة والطفل", description: "إرشاد عملي لبناء روتين يومي، دعم التواصل، وفهم السلوكيات الصعبة." },
  { title: "للأخصائيين", description: "تطوير مهني، مراجعة خطط، وحقائب عمل تساعد على جودة الجلسات والتوثيق." },
  { title: "للمؤسسات", description: "برامج تدريب فرق، سياسات متابعة، وأدوات قياس للمراكز والمدارس." },
  { title: "الاستشارات", description: "جلسات فردية لتحديد الأولويات ووضع خطة متابعة قصيرة وواضحة." },
  { title: "التدريب", description: "برامج تدريبية حول التواصل، السلوك، التقييم، وإدارة الصف." },
  { title: "التقييم", description: "تنظيم أدوات الملاحظة ونماذج البيانات لتحديد مستوى المهارات والاحتياجات." },
] as const;

export const serviceProcess = [
  "1 — الاستفسار: أرسل طلبك عبر النموذج مع تحديد نوع الخدمة.",
  "2 — التقييم: جلسة أولى لتحديد الأولويات والاحتياجات.",
  "3 — الخطة: بناء خطة متابعة قصيرة وقابلة للتطبيق.",
  "4 — المتابعة: دعم مستمر ومراجعة دورية للنتائج.",
] as const;

export const products = [
  { title: "دليل الأسرة العملي PDF", description: "دليل مبسّط للأسرة لبناء روتين ودعم التواصل.", price: 19, currency: "MAD" },
  { title: "أوراق عمل التواصل", description: "أوراق عمل قابلة للطباعة لدعم التواصل الوظيفي.", price: 12, currency: "MAD" },
  { title: "بطاقات تعليمية قابلة للطباعة", description: "بطاقات بصرية لمهارات متعددة.", price: 17, currency: "MAD" },
  { title: "دفتر متابعة السلوك", description: "أداة يومية لتتبّع السلوك وتحليله.", price: 21, currency: "MAD" },
  { title: "نماذج تقييم المهارات", description: "نماذج جاهزة لتقييم المهارات وتوثيق البيانات.", price: 15, currency: "MAD" },
  { title: "حقيبة الاستشارات الأسرية", description: "حقيبة متكاملة لجلسات الإرشاد الأسري.", price: 39, currency: "MAD" },
  { title: "حقيبة تدريب ABAT", description: "مادة تدريبية داعمة لمسار ABAT.", price: 49, currency: "MAD" },
  { title: "دليل المعلم داخل الصف", description: "أدوات عملية للمعلمين لإدارة الصف.", price: 24, currency: "MAD" },
] as const;

export const blogPosts = [
  { title: "التواصل الوظيفي: من أين نبدأ؟", excerpt: "مبادئ عامة لبناء نظام تواصل يخدم الطفل والأسرة.", date: "قريباً", author: "كوثر سامي" },
  { title: "دور المعلم في دمج الطفل داخل الصف", excerpt: "أدوات مبسّطة لدعم المعلم داخل البيئة الصفية.", date: "قريباً", author: "فريق AbaTools" },
  { title: "التعاون مع الأسرة: مفتاح النجاح", excerpt: "لماذا يعتبر التعاون الأسري ركيزة أساسية للتقدم؟", date: "قريباً", author: "كوثر سامي" },
  { title: "الأخلاقيات المهنية في ABA", excerpt: "مبادئ عامة يجب أن يلتزم بها كل ممارس في المجال.", date: "قريباً", author: "فريق AbaTools" },
] as const;

export const contactInfo = {
  email: "kaoutarsami@abatools.info",
  phone: "+212 6 54 24 48 44",
  whatsapp: "+212 6 54 24 48 44",
  supervisor: "كوثر سامي — محللة سلوك مؤهلة (QBA)",
  contactPage: "/contact",
} as const;

export const sitePages = [
  { path: "/", title: "الرئيسية" },
  { path: "/about", title: "من نحن" },
  { path: "/services", title: "الخدمات والاستشارات" },
  { path: "/courses", title: "الدورات والمسارات" },
  { path: "/courses/abat", title: "دورة ABAT" },
  { path: "/resources", title: "الموارد الرقمية" },
  { path: "/shop", title: "المتجر الرقمي" },
  { path: "/blog", title: "المدونة" },
  { path: "/contact", title: "تواصل معنا" },
] as const;