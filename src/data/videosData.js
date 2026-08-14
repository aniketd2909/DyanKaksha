// DnyanKaksha 360° (ज्ञानकक्षा 360°) - Video Dataset mapped directly to https://www.youtube.com/@dnyankaksha360/videos

export const CHANNEL_INFO = {
  name: "DnyanKaksha 360°",
  marathiName: "ज्ञानकक्षा 360°",
  handle: "@dnyankaksha360",
  youtubeUrl: "https://www.youtube.com/@dnyankaksha360",
  instagramUrl: "https://www.instagram.com/dnyankaksha360",
  whatsappUrl: "https://whatsapp.com/channel/dnyankaksha360",
  telegramUrl: "https://t.me/dnyankaksha360",
  tagline: "ज्ञानाची सुरुवात... विचारांची दिशा... आत्मविश्वासाची उभारणी... आणि उज्ज्वल भविष्याची खुली वाट!",
  subMotto: "चला... ज्ञानाची भक्कम पायाभरणी करूया, एकत्र शिकूया, एकत्र घडूया!",
  description: "इयत्ता १ ली ते १० वी विद्यार्थी, स्पर्धा परीक्षा, पालक व शिक्षकांसाठी सविस्तर मार्गदर्शक व्हिडिओ."
};

export const FOUNDER_INFO = {
  name: "नामदेव धनावडे (N D)",
  englishName: "Namdev Dhanawade (N D)",
  experience: "३८ वर्षांचा अध्यापन अनुभव",
  experienceEng: "38+ Years of Teaching Experience",
  subtext: "३८ वर्षांच्या अध्यापन अनुभवाचा नव्या स्वरूपात प्रवास...",
  quote: "शिक्षक सेवानिवृत्त होतो... पण त्याच्यातील शिक्षक कधीच निवृत्त होत नाही.",
  quoteEnglish: "A teacher retires... but the teacher within him never retires."
};

export const TARGET_AUDIENCE = [
  {
    id: "competitive",
    marathiTitle: "स्पर्धा परीक्षा तयारी करणारे विद्यार्थी",
    englishTitle: "Competitive Exam Aspirants",
    desc: "शिष्यवृत्ती, सैनिक शाळा, नवोदय व पायाभूत परीक्षा",
    icon: "Award",
    color: "#f59e0b"
  },
  {
    id: "parents",
    marathiTitle: "पालक",
    englishTitle: "Parents Guidance",
    desc: "मुलांच्या अभ्यासाचे नियोजन आणि परीक्षा निवड",
    icon: "Users",
    color: "#ec4899"
  },
  {
    id: "teachers",
    marathiTitle: "शिक्षक",
    englishTitle: "Teachers Community",
    desc: "अध्यापन पद्धती, नवकल्पना आणि शैक्षणिक साहित्य",
    icon: "UserCheck",
    color: "#10b981"
  },
  {
    id: "learners",
    marathiTitle: "आयुष्यभर शिकू इच्छिणारे सर्व जिज्ञासू",
    englishTitle: "Lifelong Learners",
    desc: "ज्ञानाची ओढ असणाऱ्या सर्व वाचकांसाठी खुली वाट",
    icon: "Sparkles",
    color: "#06b6d4"
  }
];

export const SOCIAL_CHANNELS = [
  {
    id: "youtube",
    name: "YouTube",
    handle: "@dnyankaksha360",
    desc: "सविस्तर शैक्षणिक व्हिडिओ",
    descEng: "Detailed Educational Video Lessons",
    link: CHANNEL_INFO.youtubeUrl,
    color: "#ff0000",
    badge: "Subscribe Now"
  },
  {
    id: "instagram",
    name: "Instagram",
    handle: "@dnyankaksha360",
    desc: "झटपट ज्ञान, टिप्स आणि प्रेरणादायी विचार",
    descEng: "Quick Knowledge, Study Tips & Motivation",
    link: CHANNEL_INFO.instagramUrl,
    color: "#e1306c",
    badge: "Follow Us"
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    handle: "DnyanKaksha 360",
    desc: "नियमित अपडेट्स आणि सूचना",
    descEng: "Regular Updates & Notifications",
    link: CHANNEL_INFO.whatsappUrl,
    color: "#25d366",
    badge: "Join Community"
  },
  {
    id: "telegram",
    name: "Telegram",
    handle: "DnyanKaksha 360",
    desc: "नोट्स, अभ्यास साहित्य आणि विशेष मार्गदर्शन",
    descEng: "PDF Notes, Study Material & Special Guidance",
    link: CHANNEL_INFO.telegramUrl,
    color: "#0088cc",
    badge: "Get PDF Notes"
  }
];

export const GRADES = [
  { id: "all", label: "सर्व व्हिडिओ (All)", icon: "GraduationCap" },
  { id: "Class 1", label: "Class 1 (इ. १ ली)", icon: "BookOpen", isComingSoon: true },
  { id: "Class 2", label: "Class 2 (इ. २ री)", icon: "BookOpen", isComingSoon: true },
  { id: "Class 3", label: "Class 3 (इ. ३ री)", icon: "BookOpen", isComingSoon: true },
  { id: "Class 4", label: "Class 4 (इ. ४ थी)", icon: "BookOpen", isComingSoon: false },
  { id: "Class 5", label: "Class 5 (इ. ५ वी)", icon: "BookOpen", isComingSoon: true },
  { id: "Class 6", label: "Class 6 (इ. ६ वी)", icon: "BookOpen", isComingSoon: true },
  { id: "Class 7", label: "Class 7 (इ. ७ वी)", icon: "BookOpen", isComingSoon: false },
  { id: "Class 8", label: "Class 8 (इ. ८ वी)", icon: "BookOpen", isComingSoon: true },
  { id: "Class 9", label: "Class 9 (इ. ९ वी)", icon: "BookOpen", isComingSoon: true },
  { id: "Class 10", label: "Class 10 (इ. १० वी)", icon: "Award", isComingSoon: true },
  { id: "Competitive Exams", label: "स्पर्धा परीक्षा Prep", icon: "Award", isComingSoon: false },
  { id: "Parents & Teachers", label: "पालक व शिक्षक", icon: "Users", isComingSoon: false },
  { id: "Career Guidance", label: "Career Guidance", icon: "Compass", isComingSoon: true }
];

// Class-specific subject mapping
export const GRADE_SUBJECTS_MAP = {
  "all": [
    { id: "all", label: "All Subjects (सर्व विषय)" },
    { id: "Mathematics", label: "Mathematics (गणित)", color: "#6366f1" },
    { id: "Science", label: "Science (विज्ञान)", color: "#10b981" },
    { id: "English", label: "English (इंग्रजी)", color: "#ec4899" },
    { id: "Social Science", label: "Social Science (सामाजिक शास्त्रे)", color: "#f59e0b" },
    { id: "Scholarship & NTSE", label: "Scholarship & NTSE", color: "#ef4444" },
    { id: "Exam Guidance", label: "Exam Guidance (मार्गदर्शन)", color: "#8b5cf6" },
    { id: "Channel Intro", label: "Channel Intro", color: "#06b6d4" }
  ],
  "Class 1": [
    { id: "all", label: "All Subjects" },
    { id: "Mathematics", label: "Mathematics (गणित)", color: "#6366f1" },
    { id: "English", label: "English (इंग्रजी)", color: "#ec4899" },
    { id: "Marathi", label: "Marathi (मराठी)", color: "#f59e0b" },
    { id: "EVS", label: "Environmental Studies (परिसर अभ्यास)", color: "#10b981" }
  ],
  "Class 2": [
    { id: "all", label: "All Subjects" },
    { id: "Mathematics", label: "Mathematics (गणित)", color: "#6366f1" },
    { id: "English", label: "English (इंग्रजी)", color: "#ec4899" },
    { id: "Marathi", label: "Marathi (मराठी)", color: "#f59e0b" },
    { id: "EVS", label: "Environmental Studies (परिसर अभ्यास)", color: "#10b981" }
  ],
  "Class 3": [
    { id: "all", label: "All Subjects" },
    { id: "Mathematics", label: "Mathematics (गणित)", color: "#6366f1" },
    { id: "English", label: "English (इंग्रजी)", color: "#ec4899" },
    { id: "Marathi", label: "Marathi (मराठी)", color: "#f59e0b" },
    { id: "EVS", label: "Environmental Studies (परिसर अभ्यास)", color: "#10b981" }
  ],
  "Class 4": [
    { id: "all", label: "All Subjects" },
    { id: "Mathematics", label: "Mathematics (गणित)", color: "#6366f1" },
    { id: "English", label: "English (इंग्रजी)", color: "#ec4899" },
    { id: "Marathi", label: "Marathi (मराठी)", color: "#f59e0b" },
    { id: "EVS", label: "Environmental Studies (परिसर अभ्यास)", color: "#10b981" },
    { id: "Scholarship & NTSE", label: "Scholarship (शिष्यवृत्ती)", color: "#ef4444" }
  ],
  "Class 5": [
    { id: "all", label: "All Subjects" },
    { id: "Mathematics", label: "Mathematics (गणित)", color: "#6366f1" },
    { id: "English", label: "English (इंग्रजी)", color: "#ec4899" },
    { id: "Marathi", label: "Marathi (मराठी)", color: "#f59e0b" },
    { id: "EVS", label: "Environmental Studies (परिसर अभ्यास)", color: "#10b981" },
    { id: "Scholarship & NTSE", label: "Scholarship Exam (शिष्यवृत्ती)", color: "#ef4444" }
  ],
  "Class 6": [
    { id: "all", label: "All Subjects" },
    { id: "Mathematics", label: "Mathematics (गणित)", color: "#6366f1" },
    { id: "Science", label: "Science (विज्ञान)", color: "#10b981" },
    { id: "English", label: "English (इंग्रजी)", color: "#ec4899" },
    { id: "Social Science", label: "Social Science (सामाजिक शास्त्रे)", color: "#f59e0b" }
  ],
  "Class 7": [
    { id: "all", label: "All Subjects" },
    { id: "Mathematics", label: "Mathematics (गणित)", color: "#6366f1" },
    { id: "Science", label: "Science (विज्ञान)", color: "#10b981" },
    { id: "English", label: "English (इंग्रजी)", color: "#ec4899" },
    { id: "Social Science", label: "Social Science (सामाजिक शास्त्रे)", color: "#f59e0b" },
    { id: "Scholarship & NTSE", label: "Scholarship (शिष्यवृत्ती)", color: "#ef4444" }
  ],
  "Class 8": [
    { id: "all", label: "All Subjects" },
    { id: "Mathematics", label: "Mathematics (गणित)", color: "#6366f1" },
    { id: "Science", label: "Science (विज्ञान)", color: "#10b981" },
    { id: "English", label: "English (इंग्रजी)", color: "#ec4899" },
    { id: "Social Science", label: "Social Science (सामाजिक शास्त्रे)", color: "#f59e0b" },
    { id: "Scholarship & NTSE", label: "Scholarship Exam (शिष्यवृत्ती)", color: "#ef4444" }
  ],
  "Class 9": [
    { id: "all", label: "All Subjects" },
    { id: "Mathematics", label: "Mathematics (गणित)", color: "#6366f1" },
    { id: "Science", label: "Science (विज्ञान)", color: "#10b981" },
    { id: "English", label: "English (इंग्रजी)", color: "#ec4899" },
    { id: "Social Science", label: "Social Science (सामाजिक शास्त्रे)", color: "#f59e0b" }
  ],
  "Class 10": [
    { id: "all", label: "All Subjects" },
    { id: "Mathematics", label: "Mathematics (गणित)", color: "#6366f1" },
    { id: "Science", label: "Science (विज्ञान)", color: "#10b981" },
    { id: "English", label: "English (इंग्रजी)", color: "#ec4899" },
    { id: "Social Science", label: "Social Science (सामाजिक शास्त्रे)", color: "#f59e0b" }
  ],
  "Competitive Exams": [
    { id: "all", label: "All Topics" },
    { id: "Scholarship & NTSE", label: "Scholarship (शिष्यवृत्ती)", color: "#f59e0b" },
    { id: "Exam Guidance", label: "Sainik & Govt School Entrance", color: "#ef4444" },
    { id: "Mathematics", label: "Maths & Mental Ability (बुद्धिमत्ता)", color: "#6366f1" }
  ],
  "Parents & Teachers": [
    { id: "all", label: "All Guides" },
    { id: "Channel Intro", label: "Channel Intro", color: "#10b981" },
    { id: "Exam Guidance", label: "School Entrance Guidance", color: "#ef4444" },
    { id: "Parenting & Teaching", label: "Parenting & Study Tips", color: "#8b5cf6" }
  ],
  "Career Guidance": [
    { id: "all", label: "All Career Guides" },
    { id: "Stream Selection", label: "Stream Selection (Science/Commerce/Arts)", color: "#6366f1" },
    { id: "Exam Prep", label: "Competitive Exams Prep", color: "#ef4444" },
    { id: "Skill Building", label: "Digital Skills & Soft Skills", color: "#06b6d4" }
  ]
};

// Exact Live Videos from YouTube Channel: https://www.youtube.com/@dnyankaksha360/videos
export const VIDEOS_DATA = [
  // --- FULL-LENGTH LESSONS ---
  {
    id: "v-live-05",
    youtubeId: "x6pppIxBtTk",
    title: "इयत्ता ७ वी | गणित | संख्याज्ञान – प्रकरण १",
    description: "या व्हिडिओमध्ये आपण सम संख्या, विषम संख्या, मूळ संख्या, जोडमूळ संख्या, सहमूळ संख्या आणि संयुक्त संख्या हे महत्त्वाचे घटक सोप्या आणि समजण्यासारख्या पद्धतीने शिकणार आहोत. विद्यार्थ्यांची मूलभूत संकल्पना मजबूत करण्यासाठी आणि गणिताचा पाया भक्कम करण्यासाठी हा व्हिडिओ नक्की पाहा.",
    grade: "Class 7",
    subject: "Mathematics",
    duration: "26:09",
    isShort: false,
    type: "video",
    uploadedAt: "Latest Upload",
    isFeatured: false,
    tags: ["इयत्ता7वी", "संख्याज्ञान", "गणित", "class 7 maths", "dnyankaksha360", "सम व विषम संख्या"],
    keyTakeaways: [
      "सम संख्या आणि विषम संख्या मूलभूत संकल्पना",
      "मूळ संख्या, जोडमूळ संख्या व सहमूळ संख्या स्पष्टीकरण",
      "संयुक्त संख्या आणि उदाहरणांसह सोपे मार्गदर्शन",
      "विद्यार्थ्यांची गणितातील पायाभरणी व सराव"
    ]
  },
  {
    id: "v-live-02",
    youtubeId: "VDELnsCnmVI",
    title: "संख्याज्ञान | इयत्ता ४ थी गणित | भाग १: आंतरराष्ट्रीय संख्याचिन्हे – वाचन व लेखन",
    description: "या व्हिडिओमध्ये आपण संख्याज्ञान या घटकातील मूलभूत संकल्पना सोप्या आणि समजण्यासारख्या पद्धतीने शिकणार आहोत. आंतरराष्ट्रीय संख्याचिन्हे वाचन व लेखन, पाच अंकी संख्यांचे वाचन-लेखन आणि सरावासाठी उपयुक्त प्रश्न.",
    grade: "Class 4",
    subject: "Mathematics",
    duration: "28:24",
    isShort: false,
    type: "video",
    uploadedAt: "Official Upload",
    isFeatured: false,
    tags: ["इयत्ता4थी", "संख्याज्ञान", "गणित", "class 4 maths", "dnyankaksha360"],
    keyTakeaways: [
      "१.१ आंतरराष्ट्रीय संख्याचिन्हे – वाचन व लेखन",
      "१.२ पाच अंकी संख्यांचे वाचन व लेखन सोप्या पद्धतीने",
      "संख्यांचे योग्य वाचन व लेखनाचे नियम",
      "उदाहरणांसह सोपे स्पष्टीकरण व सरावासाठी उपयुक्त प्रश्न"
    ]
  },
  {
    id: "v-live-03",
    youtubeId: "8HbY3qPa7J0",
    title: "इयत्ता ४ थी आणि ७ वी शिष्यवृत्ती अभ्यासक्रम | paper pattern | प्रकरणनिहाय गुण",
    description: "तुमच्या मुलाच्या/विद्यार्थ्यांच्या शिष्यवृत्ती परीक्षेच्या यशासाठी योग्य नियोजन आणि माहिती! इयत्ता ४ थी आणि ७ वी शिष्यवृत्ती परीक्षेचा paper pattern, विषयानुसार अभ्यासक्रम आणि प्रकरणनिहाय गुण वितरण (Mark Distribution).",
    grade: "Competitive Exams",
    secondaryGrade: "Class 7",
    subject: "Scholarship & NTSE",
    duration: "36:22",
    isShort: false,
    type: "video",
    uploadedAt: "Official Upload",
    isFeatured: false,
    tags: ["scholarship exam", "इयत्ता4थी", "इयत्ता7वी", "शिष्यवृत्ती परीक्षा", "dnyankaksha360"],
    keyTakeaways: [
      "शिष्यवृत्ती परीक्षेची पेपरविषयक माहिती व रचना",
      "विषयानुसार अभ्यासक्रम व प्रकरणनिहाय गुणांचे वितरण",
      "अभ्यासाचे नियोजन कसे करावे?",
      "पालक आणि विद्यार्थ्यांसाठी महत्त्वाच्या यशाच्या सूचना"
    ]
  },
  {
    id: "v-live-04",
    youtubeId: "bXY-DBO8LEY",
    title: "इयत्ता १ ते १० | स्पर्धा परीक्षा मार्गदर्शिका (निवासी, लष्करी व शासकीय शाळा प्रवेश)",
    description: "तुमच्या मुलाला किंवा विद्यार्थ्याला कोणती प्रवेश परीक्षा योग्य आहे? इयत्ता १ ते १० मधील निवासी शाळा, लष्करी शाळा (Sainik School), शासकीय शाळा आणि आश्रमशाळा प्रवेश परीक्षांची सोपी माहिती.",
    grade: "Competitive Exams",
    subject: "Exam Guidance",
    duration: "18:28",
    isShort: false,
    type: "video",
    uploadedAt: "Official Upload",
    isFeatured: false,
    tags: ["स्पर्धा परीक्षा", "निवासी शाळा प्रवेश", "लष्करी शाळा", "इयत्ता १ ते १०", "dnyankaksha360"],
    keyTakeaways: [
      "निवासी शाळा व आश्रमशाळा प्रवेश परीक्षांची माहिती",
      "लष्करी शाळा (Sainik School) प्रवेश परीक्षा स्वरूप",
      "शासकीय शाळा प्रवेश परीक्षा व पात्रता",
      "पालक, विद्यार्थी आणि शिक्षकांसाठी उपयुक्त मार्गदर्शिका"
    ]
  },
  {
    id: "v-live-01",
    youtubeId: "2WjsmSDZQzE",
    title: "ज्ञानकक्षा 360° मध्ये तुमचं स्वागत! ३८ वर्षांचा अध्यापन प्रवास एका नव्या रूपात…",
    description: "ज्ञानकक्षा 360° हा विद्यार्थी, पालक आणि शिक्षकांसाठी समर्पित शैक्षणिक उपक्रम आहे. ३८ वर्षांचा अध्यापन अनुभव असणारे श्री. नामदेव धनावडे (N D Sir) यांच्या सोबत शालेय शिक्षण, स्पर्धा परीक्षा, गणित, बुद्धिमत्ता व सोप्या ट्रिक्स.",
    grade: "Parents & Teachers",
    subject: "Channel Intro",
    duration: "03:24",
    isShort: false,
    type: "video",
    uploadedAt: "Official Upload",
    isFeatured: true,
    tags: ["ज्ञानकक्षा360", "welcome video", "n d sir", "marathi education"],
    keyTakeaways: [
      "३८ वर्षांचा अध्यापन प्रवास आणि नव्या स्वरूपातील उपक्रम",
      "इयत्ता १ ते १० शालेय शिक्षण व स्पर्धा परीक्षा संकल्पना",
      "गणित, बुद्धिमत्ता चाचणी व शॉर्ट ट्रिक्स",
      "पालक व शिक्षकांसाठी विशेष मार्गदर्शन"
    ]
  },
];

export const CAREER_ROADMAPS = [
  {
    id: "science",
    title: "Science Stream (PCM / PCB)",
    icon: "Atom",
    color: "#6366f1",
    summary: "Ideal for students passionate about technology, medical sciences, engineering, research, and problem-solving.",
    careers: ["Software Development & AI", "Medical Doctor & Healthcare", "Data Science & Robotics", "Aerospace & Architecture", "Biotechnology & Pharmacy"]
  },
  {
    id: "commerce",
    title: "Commerce Stream (Maths / IP)",
    icon: "TrendingUp",
    color: "#10b981",
    summary: "Perfect for students interested in business, finance, stock markets, accounting, and entrepreneurship.",
    careers: ["Chartered Accountant (CA)", "Investment Banking & Finance", "Company Secretary (CS)", "Business Analytics", "Digital Marketing & E-Commerce"]
  },
  {
    id: "arts",
    title: "Arts & Humanities",
    icon: "Palette",
    color: "#ec4899",
    summary: "Great for creative thinkers, communicators, law enthusiasts, administrators, and social policy researchers.",
    careers: ["Civil Services (UPSC / State PSC)", "Corporate Law & Judicial Services", "Psychology & Counseling", "UX/UI & Graphic Design", "Journalism & Mass Media"]
  },
  {
    id: "vocational",
    title: "Vocational & Tech Skills",
    icon: "Cpu",
    color: "#f59e0b",
    summary: "Hands-on specialized training focusing on high-demand practical industries and tech certifications.",
    careers: ["Full-Stack Web Development", "Animation & 3D Modeling", "Cybersecurity Specialist", "Event & Hospitality Management", "Digital Content Creation"]
  }
];
