// All page copy lives here, in English, French and Arabic.
// Facts come from public/resume.pdf and the public GitHub repositories. Do not add claims that are not in either.

export type Lang = 'en' | 'fr' | 'ar'
export type Tx = Record<Lang, string>
export type Area = 'lms' | 'ai' | 'software'

export const LANGS: Lang[] = ['en', 'fr', 'ar']
export const SITE_URL = 'https://hamzakhalem.pages.dev'
export const langPath = (lang: Lang) => (lang === 'en' ? '/' : `/${lang}/`)
export const langFromPath = (path: string): Lang => (path.startsWith('/fr') ? 'fr' : path.startsWith('/ar') ? 'ar' : 'en')

export const links = {
  email: 'hamzakhalem97@gmail.com',
  linkedin: 'https://www.linkedin.com/in/hamza-khalem-436b29201/',
  github: 'https://github.com/hamzakhalem',
  medium: 'https://medium.com/@hoh_112',
  cv: '/resume.pdf',
}

export const meta: Record<'title' | 'description' | 'ogTitle', Tx> = {
  title: {
    en: 'Hamza Khalem — Software Engineer',
    fr: 'Hamza Khalem — Ingénieur logiciel',
    ar: 'حمزة خالم — مهندس برمجيات',
  },
  ogTitle: {
    en: 'Hamza Khalem — Software Engineer',
    fr: 'Hamza Khalem — Ingénieur logiciel',
    ar: 'حمزة خالم — مهندس برمجيات',
  },
  description: {
    en: 'Software engineer with 4+ years building web platforms, APIs and LLM-powered features, on platforms serving 300k users (25k concurrent). Based in Algiers, open to remote work or relocation.',
    fr: 'Ingénieur logiciel avec plus de 4 ans d’expérience en plateformes web, API et fonctionnalités basées sur des LLM, sur des plateformes servant 300 000 utilisateurs (25 000 simultanés). Basé à Alger, ouvert au télétravail ou à une relocalisation.',
    ar: 'مهندس برمجيات بخبرة تتجاوز 4 سنوات في بناء منصات الويب وواجهات API وميزات النماذج اللغوية الكبيرة، على منصات تخدم 300 ألف مستخدم (25 ألفاً بالتزامن). مقيم في الجزائر العاصمة، ومنفتح على العمل عن بُعد أو الانتقال.',
  },
}

export const hero = {
  availability: {
    en: 'Open to Software Engineer roles (AI integration, full-stack) · Remote or relocation · Full-time or contract',
    fr: 'Ouvert aux postes d’ingénieur logiciel (intégration IA, full-stack) · Télétravail ou relocalisation · Temps plein ou contrat',
    ar: 'منفتح على وظائف مهندس برمجيات (تكامل الذكاء الاصطناعي، التطوير المتكامل Full-stack) · عن بُعد أو مع الانتقال · دوام كامل أو بعقد',
  },
  eyebrow: {
    en: 'Software Engineer · Full-stack & AI integrations',
    fr: 'Ingénieur logiciel · Full-stack & intégrations IA',
    ar: 'مهندس برمجيات · تطوير متكامل وتكامل الذكاء الاصطناعي',
  },
  headline: {
    en: 'I build software that scales',
    fr: 'Je construis des logiciels qui tiennent la charge',
    ar: 'أبني برمجيات قابلة للتوسع',
  },
  headlineAccent: {
    en: 'and the AI features inside it.',
    fr: 'et les fonctionnalités IA qu’ils intègrent.',
    ar: 'وميزات الذكاء الاصطناعي التي تعمل بداخلها.',
  },
  sub: {
    en: "I'm Hamza Khalem, a software engineer with 4+ years building web platforms, APIs and LLM-powered features, most recently on platforms serving 300k users. Based in Algiers (UTC+1).",
    fr: 'Je suis Hamza Khalem, ingénieur logiciel avec plus de 4 ans d’expérience en plateformes web, API et fonctionnalités basées sur des LLM, récemment sur des plateformes servant 300 000 utilisateurs. Basé à Alger (UTC+1).',
    ar: 'أنا حمزة خالم، مهندس برمجيات بخبرة تتجاوز 4 سنوات في بناء منصات الويب وواجهات API وميزات النماذج اللغوية الكبيرة (LLM)، آخرها على منصات تخدم 300 ألف مستخدم. مقيم في الجزائر العاصمة (UTC+1).',
  },
  stats: [
    { value: '4+', label: { en: 'years in production engineering', fr: 'ans d’ingénierie en production', ar: 'سنوات في هندسة أنظمة الإنتاج' } },
    { value: '300k', label: { en: 'users on platforms I worked on', fr: 'utilisateurs sur les plateformes où j’ai travaillé', ar: 'مستخدم على المنصات التي عملت عليها' } },
    { value: '25k', label: { en: 'concurrent users supported', fr: 'utilisateurs simultanés pris en charge', ar: 'مستخدم متزامن تدعمه المنصة' } },
  ],
  facts: [
    { label: { en: 'Most recent role', fr: 'Dernier poste', ar: 'آخر منصب' }, value: { en: 'Software Engineer · Naseej · 2022–2026', fr: 'Ingénieur logiciel · Naseej · 2022–2026', ar: 'مهندس برمجيات · Naseej · ‏2022–2026' } },
    { label: { en: 'Location', fr: 'Localisation', ar: 'الموقع' }, value: { en: 'Algiers, Algeria · UTC+1', fr: 'Alger, Algérie · UTC+1', ar: 'الجزائر العاصمة، الجزائر · UTC+1' } },
    { label: { en: 'Core stack', fr: 'Stack principale', ar: 'التقنيات الأساسية' }, value: { en: 'PHP · Python/Django · JavaScript/React · PostgreSQL · Docker · LLM APIs', fr: 'PHP · Python/Django · JavaScript/React · PostgreSQL · Docker · API LLM', ar: 'PHP · Python/Django · JavaScript/React · PostgreSQL · Docker · LLM APIs' } },
    { label: { en: 'Education', fr: 'Formation', ar: 'التعليم' }, value: { en: 'Master’s, Intelligent Computer Systems · University of Algiers 1', fr: 'Master, systèmes informatiques intelligents · Université d’Alger 1', ar: 'ماستر في الأنظمة الحاسوبية الذكية · جامعة الجزائر 1' } },
    { label: { en: 'Languages', fr: 'Langues', ar: 'اللغات' }, value: { en: 'Arabic · French (B2) · English', fr: 'Arabe · Français (B2) · Anglais', ar: 'العربية · الفرنسية (B2) · الإنجليزية' } },
  ],
}

export type Role = { title: Tx; company: string; location?: Tx; dates: Tx; stack?: string; bullets: Tx[] }
export const experience: Role[] = [
  {
    title: { en: 'Software Engineer', fr: 'Ingénieur logiciel', ar: 'مهندس برمجيات' },
    company: 'Naseej',
    dates: { en: 'May 2022 – Feb 2026', fr: 'mai 2022 – févr. 2026', ar: 'مايو 2022 – فبراير 2026' },
    stack: 'PHP 8.1 · PostgreSQL · Redis · Docker · LLM APIs · Moodle',
    bullets: [
      {
        en: 'Built and maintained enterprise e-learning platforms in PHP 8.1, PostgreSQL and Redis, serving 300,000+ users and up to 25,000 concurrent users.',
        fr: 'Construit et maintenu des plateformes e-learning d’entreprise (PHP 8.1, PostgreSQL, Redis) servant plus de 300 000 utilisateurs et jusqu’à 25 000 utilisateurs simultanés.',
        ar: 'بنيت وصنت منصات تعليم إلكتروني مؤسسية باستخدام PHP 8.1 وPostgreSQL وRedis، تخدم أكثر من 300 ألف مستخدم وحتى 25 ألف مستخدم متزامن.',
      },
      {
        en: 'Built LLM-powered product features (an AI tutor, AI question generation and AI-assisted proctoring) and developed platform modules for authentication, enrolment, messaging, reporting and file repositories.',
        fr: 'Développé des fonctionnalités produit basées sur des LLM (tuteur IA, génération de questions par IA, surveillance assistée par IA) et des modules de plateforme pour l’authentification, l’inscription, la messagerie, le reporting et les dépôts de fichiers.',
        ar: 'بنيت ميزات منتج مدعومة بالنماذج اللغوية الكبيرة (معلّم ذكي، وتوليد الأسئلة، والمراقبة المدعومة بالذكاء الاصطناعي)، وطوّرت وحدات للمنصة تشمل المصادقة والتسجيل والمراسلة والتقارير ومستودعات الملفات.',
      },
      {
        en: 'Designed REST APIs and integrated payment gateways, SMS providers and third-party authentication; improved performance through query optimisation and caching, and supported deployments with Docker, Rancher and Azure DevOps pipelines.',
        fr: 'Conçu des API REST et intégré des passerelles de paiement, des fournisseurs SMS et des services d’authentification tiers ; amélioré les performances par l’optimisation des requêtes et le cache, et contribué aux déploiements avec Docker, Rancher et Azure DevOps.',
        ar: 'صمّمت واجهات REST API ودمجت بوابات الدفع ومزوّدي الرسائل القصيرة وخدمات المصادقة الخارجية؛ وحسّنت الأداء عبر تحسين الاستعلامات والتخزين المؤقت، ودعمت عمليات النشر باستخدام Docker وRancher وAzure DevOps.',
      },
    ],
  },
  {
    title: { en: 'Software Engineer', fr: 'Ingénieur logiciel', ar: 'مهندس برمجيات' },
    company: 'Gen42',
    dates: { en: 'Mar 2022 – May 2022', fr: 'mars 2022 – mai 2022', ar: 'مارس 2022 – مايو 2022' },
    stack: 'Django · Laravel · React · React Native',
    bullets: [
      {
        en: 'Built web features for banking and commercial clients, including Banque Extérieure d’Algérie’s website and Samsung Algeria’s official site and product landing pages.',
        fr: 'Développé des fonctionnalités web pour des clients bancaires et commerciaux, dont le site de la Banque Extérieure d’Algérie et le site officiel et les pages produits de Samsung Algérie.',
        ar: 'طوّرت ميزات ويب لعملاء من القطاع البنكي والتجاري، منها موقع البنك الخارجي الجزائري (BEA) والموقع الرسمي لسامسونج الجزائر وصفحات منتجاتها.',
      },
      {
        en: 'Developed front-end and back-end features with Django, Laravel, React and React Native.',
        fr: 'Développé des fonctionnalités front-end et back-end avec Django, Laravel, React et React Native.',
        ar: 'طوّرت ميزات للواجهات الأمامية والخلفية باستخدام Django وLaravel وReact وReact Native.',
      },
    ],
  },
  {
    title: { en: 'No-Code Engineer', fr: 'Ingénieur no-code', ar: 'مهندس No-Code' },
    company: 'Drakaap',
    dates: { en: 'Jan 2022 – Mar 2022', fr: 'janv. 2022 – mars 2022', ar: 'يناير 2022 – مارس 2022' },
    bullets: [
      {
        en: 'Implemented features and optimised existing interfaces on French government websites.',
        fr: 'Implémenté des fonctionnalités et optimisé les interfaces existantes de sites web du gouvernement français.',
        ar: 'نفّذت ميزات وحسّنت واجهات قائمة في مواقع حكومية فرنسية.',
      },
    ],
  },
  {
    title: { en: 'Software Developer', fr: 'Développeur logiciel', ar: 'مطوّر برمجيات' },
    company: 'IT Creative',
    dates: { en: 'Dec 2018 – Sep 2019', fr: 'déc. 2018 – sept. 2019', ar: 'ديسمبر 2018 – سبتمبر 2019' },
    stack: 'C# · .NET',
    bullets: [
      {
        en: 'Developed C#/.NET features for educational management systems used by educational institutions, and maintained existing applications.',
        fr: 'Développé des fonctionnalités C#/.NET pour des systèmes de gestion destinés à des établissements d’enseignement, et maintenu les applications existantes.',
        ar: 'طوّرت ميزات بلغة C#/.NET لأنظمة إدارة تعليمية تستخدمها مؤسسات تعليمية، وصنت التطبيقات القائمة.',
      },
    ],
  },
]

export type Project = {
  title: string
  category: Area
  eyebrow: Tx
  context: Tx
  role: Tx
  stack: string[]
  result?: Tx
  status?: Tx
  proprietary?: boolean
  featured?: boolean
  links?: { label: Tx; href: string; kind?: 'github' | 'site' | 'download' }[]
}

const naseejNote = { en: 'Naseej e-learning platform', fr: 'plateforme e-learning de Naseej', ar: 'منصة التعليم الإلكتروني لدى Naseej' }

export const projects: Project[] = [
  {
    title: 'AI PDF Assistant',
    category: 'ai',
    featured: true,
    eyebrow: { en: 'OPEN-SOURCE LLM APPLICATION', fr: 'APPLICATION LLM OPEN SOURCE', ar: 'تطبيق LLM مفتوح المصدر' },
    context: {
      en: 'AI document assistant that lets learners summarise, translate and question their PDF and Word course files. Shipped as a Moodle plugin.',
      fr: 'Assistant documentaire IA qui permet aux apprenants de résumer, traduire et interroger leurs fichiers de cours PDF et Word. Distribué sous forme de plugin Moodle.',
      ar: 'مساعد مستندات بالذكاء الاصطناعي يتيح للمتعلمين تلخيص ملفات المقررات بصيغة PDF وWord وترجمتها وطرح الأسئلة عليها. يُوزَّع كإضافة لنظام Moodle.',
    },
    role: {
      en: 'I designed and built it end to end: a provider-agnostic LLM layer (OpenAI, Claude, Gemini, DeepSeek, Ollama), PDF and Word text extraction, passage retrieval for long documents, per-user rate limits and answer caching.',
      fr: 'Je l’ai conçu et développé de bout en bout : couche LLM indépendante du fournisseur (OpenAI, Claude, Gemini, DeepSeek, Ollama), extraction de texte PDF et Word, recherche de passages pour les longs documents, quotas par utilisateur et cache des réponses.',
      ar: 'صمّمته وطوّرته بالكامل: طبقة نماذج لغوية مستقلة عن المزوّد (OpenAI وClaude وGemini وDeepSeek وOllama)، واستخراج النصوص من ملفات PDF وWord، واسترجاع المقاطع للمستندات الطويلة، وحدود استخدام لكل مستخدم، وتخزين مؤقت للإجابات.',
    },
    stack: ['PHP', 'JavaScript', 'LLM APIs', 'PHPUnit', 'Behat', 'Moodle 4.2+'],
    status: { en: 'Live on the Moodle marketplace · Open source · GPL v3', fr: 'Disponible sur le marketplace Moodle · Open source · GPL v3', ar: 'متاح على متجر Moodle الرسمي · مفتوح المصدر · GPL v3' },
    links: [
      { kind: 'site', label: { en: 'Moodle marketplace', fr: 'Marketplace Moodle', ar: 'متجر Moodle' }, href: 'https://marketplace.moodle.com/plugins/block_aipdfassistant' },
      { kind: 'download', label: { en: 'Download v0.1.1', fr: 'Télécharger v0.1.1', ar: 'تنزيل v0.1.1' }, href: 'https://github.com/hamzakhalem/moodle-block_aipdfassistant/releases/tag/v0.1.1' },
      { label: { en: 'View on GitHub', fr: 'Voir sur GitHub', ar: 'عرض على GitHub' }, href: 'https://github.com/hamzakhalem/moodle-block_aipdfassistant' },
    ],
  },
  {
    title: 'Medad / TVTC Platform',
    category: 'lms',
    proprietary: true,
    eyebrow: { en: 'HIGH-TRAFFIC PLATFORM', fr: 'PLATEFORME À FORT TRAFIC', ar: 'منصة عالية الحركة' },
    context: {
      en: 'E-learning platform serving 300k users, 25k concurrent.',
      fr: 'Plateforme e-learning servant 300 000 utilisateurs, dont 25 000 simultanés.',
      ar: 'منصة تعليم إلكتروني تخدم 300 ألف مستخدم، منهم 25 ألفاً بشكل متزامن.',
    },
    role: {
      en: 'I built platform features and modules for authentication, enrolment, messaging, reporting and file repositories, extended the platform core, and optimised database queries and caching under load.',
      fr: 'J’ai développé des fonctionnalités et des modules d’authentification, d’inscription, de messagerie, de reporting et de dépôts de fichiers, étendu le cœur de la plateforme, et optimisé les requêtes et le cache sous charge.',
      ar: 'طوّرت ميزات ووحدات للمصادقة والتسجيل والمراسلة والتقارير ومستودعات الملفات، ووسّعت نواة المنصة، وحسّنت استعلامات قاعدة البيانات والتخزين المؤقت تحت الضغط.',
    },
    stack: ['PHP 8.1', 'PostgreSQL', 'Docker', 'Moodle'],
  },
  {
    title: 'Platform API & Integrations',
    category: 'software',
    proprietary: true,
    eyebrow: { en: 'APIS & INTEGRATIONS', fr: 'API ET INTÉGRATIONS', ar: 'واجهات API والتكاملات' },
    context: {
      en: 'Custom APIs and third-party integrations for a high-traffic platform: authentication, payments, messaging and data transfer.',
      fr: 'API sur mesure et intégrations tierces pour une plateforme à fort trafic : authentification, paiements, messagerie et transfert de données.',
      ar: 'واجهات API مخصّصة وتكاملات مع خدمات خارجية لمنصة عالية الحركة: المصادقة والدفع والمراسلة ونقل البيانات.',
    },
    role: {
      en: 'I designed and implemented REST APIs and services, and integrated payment gateways, SMS providers and third-party authentication services.',
      fr: 'J’ai conçu et implémenté des API REST et des services, et intégré des passerelles de paiement, des fournisseurs SMS et des services d’authentification tiers.',
      ar: 'صمّمت ونفّذت واجهات REST API وخدمات، ودمجت بوابات الدفع ومزوّدي الرسائل القصيرة وخدمات المصادقة الخارجية.',
    },
    stack: ['PHP', 'REST APIs', 'PostgreSQL', 'Redis'],
  },
  {
    title: 'AI Tutor',
    category: 'ai',
    proprietary: true,
    eyebrow: { en: 'AI IN EDUCATION', fr: 'IA DANS L’ÉDUCATION', ar: 'الذكاء الاصطناعي في التعليم' },
    context: {
      en: 'Conversational AI tutor that helps learners work through their course content.',
      fr: 'Tuteur IA conversationnel qui aide les apprenants à travailler leurs contenus de cours.',
      ar: 'معلّم ذكي تفاعلي يساعد المتعلمين على استيعاب محتوى مقرراتهم.',
    },
    role: {
      en: `I developed the AI Tutor feature for the ${naseejNote.en}, integrating the OpenAI API into the learner experience.`,
      fr: `J’ai développé la fonctionnalité AI Tutor pour la ${naseejNote.fr}, en intégrant l’API OpenAI au parcours de l’apprenant.`,
      ar: `طوّرت ميزة AI Tutor على ${naseejNote.ar}، ودمجت واجهة OpenAI API في تجربة المتعلم.`,
    },
    stack: ['OpenAI API', 'PHP', 'Moodle'],
  },
  {
    title: 'AI Question Creator',
    category: 'ai',
    proprietary: true,
    eyebrow: { en: 'ASSESSMENT AUTOMATION', fr: 'AUTOMATISATION DES ÉVALUATIONS', ar: 'أتمتة التقييم' },
    context: {
      en: 'AI-assisted question authoring that helps educators turn course content into assessment material.',
      fr: 'Création de questions assistée par IA qui aide les enseignants à transformer leurs contenus en évaluations.',
      ar: 'إعداد أسئلة بمساعدة الذكاء الاصطناعي يساعد المدرّسين على تحويل محتوى المقررات إلى مواد تقييم.',
    },
    role: {
      en: `I developed the AI Question Creator for the ${naseejNote.en}, using the OpenAI API to generate questions from learning content.`,
      fr: `J’ai développé AI Question Creator pour la ${naseejNote.fr}, en utilisant l’API OpenAI pour générer des questions à partir des contenus pédagogiques.`,
      ar: `طوّرت أداة AI Question Creator على ${naseejNote.ar}، مستخدماً OpenAI API لتوليد الأسئلة من المحتوى التعليمي.`,
    },
    stack: ['OpenAI API', 'PHP', 'Moodle'],
  },
  {
    title: 'AI-Assisted Quiz Proctoring',
    category: 'ai',
    proprietary: true,
    eyebrow: { en: 'SMART ASSESSMENTS', fr: 'ÉVALUATIONS INTELLIGENTES', ar: 'تقييمات ذكية' },
    context: {
      en: 'AI-enabled proctoring embedded in online quiz workflows to support remote assessment.',
      fr: 'Surveillance assistée par IA intégrée aux questionnaires en ligne pour encadrer les évaluations à distance.',
      ar: 'مراقبة مدعومة بالذكاء الاصطناعي مدمجة في الاختبارات الإلكترونية لدعم التقييم عن بُعد.',
    },
    role: {
      en: 'I developed the AI-based proctoring capability within the platform’s quiz delivery.',
      fr: 'J’ai développé la fonctionnalité de surveillance basée sur l’IA au sein des questionnaires de la plateforme.',
      ar: 'طوّرت قدرة المراقبة المعتمدة على الذكاء الاصطناعي ضمن نظام الاختبارات في المنصة.',
    },
    stack: ['OpenAI API', 'PHP', 'Moodle'],
  },
  {
    title: 'Aymen Promotion Website',
    category: 'software',
    eyebrow: { en: 'CLIENT WEBSITE · 2022', fr: 'SITE CLIENT · 2022', ar: 'موقع عميل · 2022' },
    context: {
      en: 'Company website for Aymen Promotion, delivered in 2022.',
      fr: 'Site web de l’entreprise Aymen Promotion, livré en 2022.',
      ar: 'الموقع الإلكتروني لشركة Aymen Promotion، أُنجز عام 2022.',
    },
    role: {
      en: 'I was the lead developer in a small team, building the site with a Django back end and a React front end.',
      fr: 'J’étais développeur principal au sein d’une petite équipe, avec un back-end Django et un front-end React.',
      ar: 'كنت المطوّر الرئيسي ضمن فريق صغير، وبنينا الموقع بواجهة خلفية Django وواجهة أمامية React.',
    },
    stack: ['Django', 'Python', 'React'],
    links: [{ kind: 'site', label: { en: 'Visit site', fr: 'Voir le site', ar: 'زيارة الموقع' }, href: 'https://aymenpromotion-dz.com/' }],
  },
  {
    title: 'L-E-COURS',
    category: 'lms',
    featured: true,
    eyebrow: { en: 'OPEN-SOURCE FULL-STACK PRODUCT', fr: 'PRODUIT FULL-STACK OPEN SOURCE', ar: 'منتج متكامل مفتوح المصدر' },
    context: {
      en: 'Arabic-first academic library that turns scattered Google Drive folders of university course files into one public catalogue students can browse without an account.',
      fr: 'Bibliothèque universitaire pensée d’abord en arabe, qui transforme des dossiers Google Drive dispersés en un catalogue public consultable sans compte.',
      ar: 'مكتبة جامعية عربية أولاً تحوّل مجلدات Google Drive المتفرقة لملفات المقررات إلى فهرس عام واحد يتصفحه الطلبة دون حساب.',
    },
    role: {
      en: 'I built it end to end: a Django REST API that imports Drive folders recursively and maps them to year, branch, speciality and subject, and a React + TypeScript front end with RTL, dark mode, search, favourites and an in-app PDF reader.',
      fr: 'Je l’ai développé de bout en bout : une API Django REST qui importe récursivement les dossiers Drive et les associe à l’année, la filière, la spécialité et la matière, et un front-end React + TypeScript avec RTL, mode sombre, recherche, favoris et lecteur PDF intégré.',
      ar: 'طوّرته بالكامل: واجهة Django REST API تستورد مجلدات Drive بشكل متكرر وتربطها بالسنة والشعبة والتخصص والمادة، وواجهة React + TypeScript تدعم الاتجاه من اليمين إلى اليسار والوضع الداكن والبحث والمفضلة وقارئ PDF مدمجاً.',
    },
    stack: ['Django REST Framework', 'React', 'TypeScript', 'PostgreSQL', 'Google Drive API'],
    status: { en: 'Open source · v1.5, v1.6 in progress', fr: 'Open source · v1.5, v1.6 en cours', ar: 'مفتوح المصدر · الإصدار 1.5، و1.6 قيد التطوير' },
    links: [{ label: { en: 'View on GitHub', fr: 'Voir sur GitHub', ar: 'عرض على GitHub' }, href: 'https://github.com/hamzakhalem/l-e-cours' }],
  },
  {
    title: 'BEA & Samsung Algeria Websites',
    category: 'software',
    eyebrow: { en: 'CLIENT WEBSITES · GEN42', fr: 'SITES CLIENTS · GEN42', ar: 'مواقع عملاء · GEN42' },
    context: {
      en: 'Public websites for Banque Extérieure d’Algérie and Samsung Algeria, including Samsung’s product landing pages.',
      fr: 'Sites publics de la Banque Extérieure d’Algérie et de Samsung Algérie, dont les pages produits de Samsung.',
      ar: 'المواقع العامة للبنك الخارجي الجزائري (BEA) وسامسونج الجزائر، بما فيها صفحات منتجات سامسونج.',
    },
    role: {
      en: 'At Gen42 I contributed to developing and maintaining the BEA website, and worked on Samsung Algeria’s official site and product landing pages.',
      fr: 'Chez Gen42, j’ai contribué au développement et à la maintenance du site de la BEA, et travaillé sur le site officiel et les pages produits de Samsung Algérie.',
      ar: 'في Gen42 ساهمت في تطوير موقع البنك الخارجي الجزائري وصيانته، وعملت على الموقع الرسمي لسامسونج الجزائر وصفحات منتجاتها.',
    },
    stack: ['WordPress'],
  },
  {
    title: 'CookinApp',
    category: 'software',
    eyebrow: { en: 'MOBILE APP', fr: 'APPLICATION MOBILE', ar: 'تطبيق هاتف' },
    context: {
      en: 'Cross-platform recipe app: pick the ingredients you have and discover dishes you can cook with them.',
      fr: 'Application de recettes multiplateforme : choisissez les ingrédients dont vous disposez et découvrez les plats à cuisiner.',
      ar: 'تطبيق وصفات متعدد المنصات: اختر المكوّنات المتوفرة لديك واكتشف الأطباق التي يمكنك طهيها بها.',
    },
    role: {
      en: 'I built the React Native app: a categorised ingredient selector with icons, recipe discovery from the selected ingredients, English and French localisation, and dark mode.',
      fr: 'J’ai développé l’application React Native : sélecteur d’ingrédients par catégories avec icônes, découverte de recettes selon les ingrédients choisis, traduction anglais/français et mode sombre.',
      ar: 'طوّرت تطبيق React Native: اختيار المكوّنات حسب الفئات مع أيقونات، واكتشاف الوصفات انطلاقاً من المكوّنات المختارة، ودعم الإنجليزية والفرنسية، والوضع الداكن.',
    },
    stack: ['React Native', 'TypeScript', 'Android', 'iOS'],
    status: { en: 'Open source', fr: 'Open source', ar: 'مفتوح المصدر' },
    links: [{ label: { en: 'View on GitHub', fr: 'Voir sur GitHub', ar: 'عرض على GitHub' }, href: 'https://github.com/hamzakhalem/cookingapp' }],
  },
  {
    title: 'WZR Quiz',
    category: 'software',
    eyebrow: { en: 'MOBILE APP', fr: 'APPLICATION MOBILE', ar: 'تطبيق هاتف' },
    context: {
      en: 'Light-hearted Arabic trivia app for Android and iOS with an Algerian flavour: six categories, one right answer and a few deliberately funny wrong ones.',
      fr: 'Application de quiz en arabe, pleine d’humour et à saveur algérienne, pour Android et iOS : six catégories, une bonne réponse et quelques mauvaises volontairement drôles.',
      ar: 'تطبيق أسئلة ثقافية بالعربية بنكهة جزائرية وروح مرحة لأندرويد وiOS: ست فئات، وإجابة صحيحة واحدة مع إجابات خاطئة مضحكة عن قصد.',
    },
    role: {
      en: 'I built the React Native app: category grid, answer checking with random reaction images, a score screen, and progress saved on the device with SQLite so players pick up where they left off.',
      fr: 'J’ai développé l’application React Native : grille de catégories, vérification des réponses avec images de réaction aléatoires, écran de score, et progression enregistrée sur l’appareil avec SQLite pour reprendre là où l’on s’est arrêté.',
      ar: 'طوّرت تطبيق React Native: شبكة الفئات، والتحقق من الإجابات مع صور تفاعل عشوائية، وشاشة النتيجة، وحفظ التقدّم على الجهاز باستخدام SQLite لمتابعة الاختبار من حيث توقف المستخدم.',
    },
    stack: ['React Native', 'JavaScript', 'SQLite', 'Android', 'iOS'],
    status: { en: 'Open source', fr: 'Open source', ar: 'مفتوح المصدر' },
    links: [{ label: { en: 'View on GitHub', fr: 'Voir sur GitHub', ar: 'عرض على GitHub' }, href: 'https://github.com/hamzakhalem/quiz-app' }],
  },
]

export const areas: { id: Area; number: string; title: Tx; description: Tx; proof: Tx; tags: Tx[] }[] = [
  {
    id: 'software', number: '01',
    title: { en: 'Software Engineering', fr: 'Ingénierie logicielle', ar: 'هندسة البرمجيات' },
    description: { en: 'End-to-end product engineering: web and mobile apps, APIs, databases and integrations that hold up in production.', fr: 'Ingénierie produit de bout en bout : applications web et mobiles, API, bases de données et intégrations fiables en production.', ar: 'هندسة منتجات متكاملة: تطبيقات ويب وهاتف وواجهات API وقواعد بيانات وتكاملات موثوقة في بيئة الإنتاج.' },
    proof: { en: 'REST APIs integrating payment gateways, SMS providers and third-party authentication.', fr: 'API REST intégrant passerelles de paiement, fournisseurs SMS et authentification tierce.', ar: 'واجهات REST API تربط بوابات الدفع ومزوّدي الرسائل القصيرة وخدمات المصادقة الخارجية.' },
    tags: [{ en: 'Web & mobile', fr: 'Web et mobile', ar: 'الويب والهاتف' }, { en: 'APIs & databases', fr: 'API et bases de données', ar: 'واجهات API وقواعد البيانات' }, { en: 'Integrations', fr: 'Intégrations', ar: 'التكاملات' }],
  },
  {
    id: 'ai', number: '02',
    title: { en: 'Artificial Intelligence', fr: 'Intelligence artificielle', ar: 'الذكاء الاصطناعي' },
    description: { en: 'Practical AI features integrated into real products and workflows—not just demos.', fr: 'Fonctionnalités IA concrètes intégrées à de vrais produits et processus.', ar: 'ميزات ذكاء اصطناعي عملية ضمن منتجات وسير عمل حقيقية، لا مجرد عروض تجريبية.' },
    proof: { en: 'AI Tutor, AI Question Creator and the open-source AI PDF Assistant.', fr: 'AI Tutor, AI Question Creator et AI PDF Assistant, open source.', ar: 'AI Tutor وAI Question Creator وAI PDF Assistant مفتوح المصدر.' },
    tags: [{ en: 'LLM integrations', fr: 'Intégrations LLM', ar: 'تكامل النماذج اللغوية' }, { en: 'AI for education', fr: 'IA pour l’éducation', ar: 'الذكاء الاصطناعي في التعليم' }, { en: 'Product workflows', fr: 'Processus produit', ar: 'مسارات المنتج' }],
  },
  {
    id: 'lms', number: '03',
    title: { en: 'EdTech & LMS', fr: 'EdTech et LMS', ar: 'تقنيات التعليم وLMS' },
    description: { en: 'The domain where I’ve shipped most: assessment, learning workflows and platforms under heavy concurrent load.', fr: 'Le domaine où j’ai le plus livré : évaluations, parcours d’apprentissage et plateformes à forte charge simultanée.', ar: 'المجال الذي أنجزت فيه أكثر أعمالي: التقييم ومسارات التعلم والمنصات تحت ضغط استخدام متزامن كبير.' },
    proof: { en: 'Medad / TVTC platform: 300k users, 25k concurrent.', fr: 'Plateforme Medad / TVTC : 300 000 utilisateurs, 25 000 simultanés.', ar: 'منصة Medad / TVTC: ‏300 ألف مستخدم و25 ألفاً بالتزامن.' },
    tags: [{ en: 'LMS', fr: 'LMS', ar: 'LMS' }, { en: 'Learning platforms', fr: 'Plateformes d’apprentissage', ar: 'منصات التعلم' }],
  }
]

export const education = {
  degrees: [
    { degree: { en: 'Master’s in Intelligent Computer Systems Engineering', fr: 'Master en ingénierie des systèmes informatiques intelligents', ar: 'ماستر في هندسة الأنظمة الحاسوبية الذكية' }, school: { en: 'University of Algiers 1', fr: 'Université d’Alger 1', ar: 'جامعة الجزائر 1' }, years: '2019 – 2021' },
    { degree: { en: 'Bachelor’s in Computer Systems', fr: 'Licence en systèmes informatiques', ar: 'ليسانس في الأنظمة الحاسوبية' }, school: { en: 'University of Algiers 1', fr: 'Université d’Alger 1', ar: 'جامعة الجزائر 1' }, years: '2016 – 2019' },
  ],
  certifications: [
    { en: 'Designing RESTful APIs', fr: 'Designing RESTful APIs', ar: 'Designing RESTful APIs' },
    { en: 'React: Software Architecture', fr: 'React: Software Architecture', ar: 'React: Software Architecture' },
    { en: 'Unit Testing in Django', fr: 'Unit Testing in Django', ar: 'Unit Testing in Django' },
    { en: 'CAL French Language Diploma — B2', fr: 'Diplôme de langue française CAL — B2', ar: 'دبلوم اللغة الفرنسية CAL — مستوى B2' },
  ],
  languages: [
    { name: { en: 'Arabic', fr: 'Arabe', ar: 'العربية' }, level: { en: 'Native', fr: 'Langue maternelle', ar: 'اللغة الأم' } },
    { name: { en: 'French', fr: 'Français', ar: 'الفرنسية' }, level: { en: 'B2', fr: 'B2', ar: 'B2' } },
    { name: { en: 'English', fr: 'Anglais', ar: 'الإنجليزية' }, level: { en: 'Professional working proficiency', fr: 'Compétence professionnelle', ar: 'كفاءة مهنية' } },
  ],
}

// Curated repositories. Descriptions are written here on purpose, never pulled from GitHub.
export const repos: { name: string; url: string; tech: string; description: Tx }[] = [
  {
    name: 'moodle-block_aipdfassistant', url: 'https://github.com/hamzakhalem/moodle-block_aipdfassistant', tech: 'PHP · LLM APIs',
    description: { en: 'Provider-agnostic AI assistant for PDF and Word documents (OpenAI, Claude, Gemini, Ollama), packaged as a Moodle plugin.', fr: 'Assistant IA indépendant du fournisseur pour documents PDF et Word (OpenAI, Claude, Gemini, Ollama), distribué comme plugin Moodle.', ar: 'مساعد ذكاء اصطناعي مستقل عن المزوّد لمستندات PDF وWord ‏(OpenAI وClaude وGemini وOllama)، يُوزَّع كإضافة لـ Moodle.' },
  },
  {
    name: 'l-e-cours', url: 'https://github.com/hamzakhalem/l-e-cours', tech: 'Django REST · React',
    description: { en: 'Arabic-first academic library that organises university course files imported from Google Drive into one public catalogue.', fr: 'Bibliothèque universitaire pensée d’abord en arabe, qui regroupe dans un catalogue public les fichiers de cours importés depuis Google Drive.', ar: 'مكتبة جامعية عربية أولاً تنظّم ملفات المقررات المستوردة من Google Drive في فهرس عام واحد.' },
  },
  {
    name: 'quiz-app', url: 'https://github.com/hamzakhalem/quiz-app', tech: 'React Native · SQLite',
    description: { en: 'Arabic trivia app for Android and iOS with six categories, reaction images and progress saved on the device.', fr: 'Application de quiz en arabe pour Android et iOS : six catégories, images de réaction et progression enregistrée sur l’appareil.', ar: 'تطبيق أسئلة ثقافية بالعربية لأندرويد وiOS بست فئات وصور تفاعل وحفظ التقدّم على الجهاز.' },
  },
]

// Articles: pin or hide Medium posts by URL. Pinned posts come first, the rest newest first, at most three shown.
export const articleConfig = {
  max: 3,
  pinned: [] as string[],
  hidden: ['https://medium.com/@hoh_112/creating-a-crud-application-in-django-with-image-handling-e726ba270659'],
}

export const about: Record<'heading' | 'headingAccent' | 'body', Tx> = {
  heading: { en: 'What I do,', fr: 'Ce que je fais,', ar: 'ما أقوم به،' },
  headingAccent: { en: 'and where I want to do it.', fr: 'et où je veux le faire.', ar: 'وأين أريد أن أقوم به.' },
  body: {
    en: 'I’m a software engineer who builds complete product features: APIs and databases, web and mobile interfaces with React and React Native, third-party integrations, and LLM features that ship inside real products, such as AI tutoring, question generation and document Q&A. At Naseej I worked on platforms serving more than 300,000 users with up to 25,000 concurrent users, including their performance and production stability. I want to join a product team as a software engineer, in an AI integration or full-stack role, remotely or with relocation.',
    fr: 'Je suis ingénieur logiciel et je développe des fonctionnalités produit complètes : API et bases de données, interfaces web et mobiles avec React et React Native, intégrations tierces, et fonctionnalités LLM livrées dans de vrais produits, comme le tutorat IA, la génération de questions et les questions-réponses sur documents. Chez Naseej, j’ai travaillé sur des plateformes servant plus de 300 000 utilisateurs et jusqu’à 25 000 utilisateurs simultanés, y compris sur leurs performances et leur stabilité en production. Je souhaite rejoindre une équipe produit en tant qu’ingénieur logiciel, sur un poste d’intégration IA ou full-stack, en télétravail ou avec relocalisation.',
    ar: 'أنا مهندس برمجيات أبني ميزات منتج متكاملة: واجهات API وقواعد البيانات، وواجهات ويب وهاتف باستخدام React وReact Native، والتكامل مع الخدمات الخارجية، وميزات النماذج اللغوية الكبيرة داخل منتجات حقيقية مثل المعلّم الذكي وتوليد الأسئلة والإجابة عن أسئلة المستندات. في Naseej عملت على منصات تخدم أكثر من 300 ألف مستخدم وحتى 25 ألف مستخدم متزامن، بما في ذلك أداؤها واستقرارها في بيئة الإنتاج. أطمح للانضمام إلى فريق منتج كمهندس برمجيات، في دور تكامل الذكاء الاصطناعي أو التطوير المتكامل، عن بُعد أو مع الانتقال.',
  },
}

// Short interface labels.
const u = (en: string, fr: string, ar: string): Tx => ({ en, fr, ar })
export const ui = {
  brandCaption: u('SOFTWARE ENGINEER', 'INGÉNIEUR LOGICIEL', 'مهندس برمجيات'),
  navExperience: u('Experience', 'Expérience', 'الخبرة'),
  navWork: u('Work', 'Réalisations', 'الأعمال'),
  navEducation: u('Education', 'Formation', 'التعليم'),
  navOpenSource: u('Open source', 'Open source', 'المصادر المفتوحة'),
  navArticles: u('Articles', 'Articles', 'المقالات'),
  navAbout: u('About', 'À propos', 'نبذة عني'),
  letsTalk: u('Let’s talk', 'Parlons-en', 'لنتحدث'),
  terminal: u('Terminal', 'Terminal', 'الطرفية'),
  downloadCv: u('Download CV', 'Télécharger le CV', 'تحميل السيرة الذاتية'),
  viewGithub: u('View GitHub', 'Voir GitHub', 'عرض GitHub'),
  contactMe: u('Contact me', 'Me contacter', 'تواصل معي'),
  atAGlance: u('AT A GLANCE', 'EN BREF', 'لمحة سريعة'),
  scroll: u('SCROLL TO EXPLORE', 'DÉFILER POUR EXPLORER', 'مرّر للاستكشاف'),

  expOverline: u('EXPERIENCE', 'EXPÉRIENCE', 'الخبرة المهنية'),
  expHeading: u('Where I’ve', 'Là où j’ai', 'مسيرتي'),
  expHeadingAccent: u('worked.', 'travaillé.', 'المهنية.'),

  workOverline: u('SELECTED WORK', 'RÉALISATIONS CHOISIES', 'أعمال مختارة'),
  workHeading: u('Selected', 'Réalisations', 'أعمال'),
  workHeadingAccent: u('work.', 'choisies.', 'مختارة.'),
  allWork: u('All work', 'Tout', 'الكل'),
  filterSoftware: u('Software', 'Logiciel', 'البرمجيات'),
  context: u('Context', 'Contexte', 'السياق'),
  myRole: u('My role', 'Mon rôle', 'دوري'),
  stack: u('Stack', 'Stack', 'التقنيات'),
  result: u('Result', 'Résultat', 'النتيجة'),
  status: u('Status', 'Statut', 'الحالة'),
  proprietary: u('Proprietary — details on request', 'Propriétaire — détails sur demande', 'مشروع خاص — التفاصيل عند الطلب'),
  featured: u('Featured', 'À la une', 'مميز'),
  artSoftware: u('SYSTEMS / ENGINEERING', 'SYSTÈMES / INGÉNIERIE', 'الأنظمة / الهندسة'),
  artAi: u('INTELLIGENCE / AI', 'INTELLIGENCE / IA', 'الذكاء / AI'),
  artLms: u('EDTECH / LMS', 'EDTECH / LMS', 'تقنيات التعليم / LMS'),

  areasOverline: u('FOCUS AREAS', 'DOMAINES D’EXPERTISE', 'مجالات التركيز'),
  areasHeading: u('Three areas.', 'Trois domaines.', 'ثلاثة مجالات،'),
  areasHeadingAccent: u('One engineering mindset.', 'Une même approche.', 'بعقلية هندسية واحدة.'),
  areasAside: u('Pick an area to filter the work above.', 'Choisissez un domaine pour filtrer les réalisations.', 'اختر مجالاً لتصفية الأعمال أعلاه.'),
  proof: u('PROOF', 'PREUVE', 'دليل'),
  exploreArea: u('SEE RELATED WORK', 'VOIR LES RÉALISATIONS', 'عرض الأعمال المرتبطة'),

  eduOverline: u('EDUCATION & CERTIFICATIONS', 'FORMATION ET CERTIFICATIONS', 'التعليم والشهادات'),
  eduHeading: u('Education &', 'Formation et', 'التعليم'),
  eduHeadingAccent: u('certifications.', 'certifications.', 'والشهادات.'),
  degrees: u('Degrees', 'Diplômes', 'الشهادات الجامعية'),
  certifications: u('Certifications', 'Certifications', 'الشهادات المهنية'),
  languages: u('Languages', 'Langues', 'اللغات'),

  ossOverline: u('OPEN SOURCE & CODE', 'OPEN SOURCE ET CODE', 'المصادر المفتوحة والبرمجة'),
  ossHeading: u('Building in', 'Construire en', 'أبني وأشارك'),
  ossHeadingAccent: u('public.', 'public.', 'علناً.'),
  ossIntro: u('Selected public repositories and my GitHub contribution activity.', 'Une sélection de dépôts publics et mon activité de contribution GitHub.', 'مستودعات عامة مختارة ونشاط مساهماتي على GitHub.'),
  contribActivity: u('CONTRIBUTION ACTIVITY', 'ACTIVITÉ DE CONTRIBUTION', 'نشاط المساهمات'),
  contribCalendar: u('Public GitHub contribution calendar', 'Calendrier public des contributions GitHub', 'تقويم مساهمات GitHub العامة'),
  contribPastYear: u('contributions in the past year', 'contributions cette année', 'مساهمة خلال السنة الماضية'),
  contribError: u('Contribution data could not be loaded.', 'Les contributions n’ont pas pu être chargées.', 'تعذّر تحميل بيانات المساهمات.'),
  openProfile: u('Open profile instead ↗', 'Voir le profil ↗', 'افتح الملف الشخصي ↗'),
  less: u('LESS', 'MOINS', 'أقل'),
  more: u('MORE', 'PLUS', 'أكثر'),
  fullActivity: u('View full activity', 'Voir toute l’activité', 'عرض النشاط كاملاً'),
  selectedRepos: u('Selected repositories', 'Dépôts sélectionnés', 'مستودعات مختارة'),

  articlesOverline: u('ARTICLES & NOTES', 'ARTICLES ET NOTES', 'مقالات وأفكار'),
  articlesHeading: u('Ideas from my Medium blog.', 'Des idées issues de mon blog Medium.', 'أفكار ومقالات من مدونتي على Medium.'),
  readArticle: u('Read article', 'Lire l’article', 'اقرأ المقال'),
  moreOnMedium: u('More on Medium', 'Plus d’articles sur Medium', 'المزيد على Medium'),
  articlesLoading: u('Loading Medium articles…', 'Chargement des articles Medium…', 'جارٍ تحميل مقالات Medium…'),
  articlesError: u('Articles are temporarily unavailable. Visit my Medium profile to read my writing.', 'Les articles sont temporairement indisponibles. Consultez mon profil Medium pour lire mes publications.', 'المقالات غير متاحة مؤقتاً. زوروا حسابي على Medium لقراءة كتاباتي.'),

  aboutOverline: u('A LITTLE ABOUT ME', 'À PROPOS DE MOI', 'نبذة عني'),

  contactOverline: u('GET IN TOUCH', 'CONTACT', 'تواصل معي'),
  contactHeading: u('Hiring a software engineer', 'Vous recrutez un ingénieur logiciel', 'هل تبحثون عن مهندس برمجيات'),
  contactHeadingAccent: u('for full-stack or AI integration work?', 'en full-stack ou intégration IA ?', 'للتطوير المتكامل أو تكامل الذكاء الاصطناعي؟'),
  contactBody: u('Email me directly, or reach me on LinkedIn or GitHub.', 'Écrivez-moi directement, ou retrouvez-moi sur LinkedIn ou GitHub.', 'راسلني مباشرة عبر البريد الإلكتروني، أو تواصل معي على LinkedIn أو GitHub.'),
  footer: u('Designed with intent. Built with curiosity.', 'Conçu avec intention. Réalisé avec curiosité.', 'تصميم هادف، وبناء بفضول.'),

  termWelcome: u('Welcome! This is a tiny interactive terminal. Type', 'Bienvenue ! Ceci est un petit terminal interactif. Tapez', 'مرحباً! هذه طرفية تفاعلية بسيطة. اكتب'),
  termStart: u('to get started.', 'pour commencer.', 'للبدء.'),
  termPlaceholder: u('type a command…', 'saisir une commande…', 'اكتب أمراً…'),
  termTry: u('Try:', 'Essayez :', 'جرّب:'),
  termClose: u('ESC / click outside to close', 'Échap / clic à l’extérieur pour fermer', 'Esc / اضغط خارج النافذة للإغلاق'),
  termNotFound: u('Command not found:', 'Commande introuvable :', 'الأمر غير معروف:'),
  termHelpHint: u('Type “help” to see available commands.', 'Tapez « help » pour voir les commandes.', 'اكتب help لعرض الأوامر المتاحة.'),
  termHelp: u('Available: help, about, skills, projects, contact, clear', 'Commandes : help, about, skills, projects, contact, clear', 'الأوامر: help, about, skills, projects, contact, clear'),
  termAbout: u('Hamza Khalem: software engineer, full-stack & AI integrations, based in Algiers (UTC+1).', 'Hamza Khalem : ingénieur logiciel, full-stack & intégrations IA, basé à Alger (UTC+1).', 'حمزة خالم: مهندس برمجيات، تطوير متكامل وتكامل الذكاء الاصطناعي، مقيم في الجزائر العاصمة (UTC+1).'),
  termProjects: u('Scroll to “Selected work” for AI PDF Assistant, Medad / TVTC, AI Tutor and more.', 'Voir « Réalisations choisies » : AI PDF Assistant, Medad / TVTC, AI Tutor, etc.', 'راجع قسم «أعمال مختارة»: AI PDF Assistant وMedad / TVTC وAI Tutor وغيرها.'),
}
