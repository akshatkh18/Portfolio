/**
 * Central portfolio data.
 * Keep factual entries aligned with your verified resume.
 * UI components should render links and actions.
 */

export type Palette = {
  from: string;
  via: string;
  to: string;
  accent: string;
};

export const profile = {
  fullName: 'Akshat Gupta',
  displayName: 'Akshat Gupta',
  firstName: 'Akshat',
  seriesTag: 'THE SERIES',
  originalLabel: 'AN AKSHAT ORIGINAL',
  role: 'AI & ML Developer',
  tagline: ['AI & ML Developer', 'Machine Learning', 'Data Analytics'],
  intro:
    'B.Tech Artificial Intelligence and Machine Learning student with experience in data science, predictive modeling, data analytics, and building Python-based applications. Interested in applying machine learning and data-driven insights to practical problems.',
  location: 'Jaipur, Rajasthan',
  email: 'akshatkhandelwal1805@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/akshat-gupta18/',
    github: 'https://github.com/akshatkh18',
  },
  resumePdf: '/assets/Akshat_Gupta_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet:
      '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Akshat Gupta',
  },
  interests: [
    'Machine Learning',
    'Natural Language Processing',
    'Computer Vision',
    'Predictive Modeling',
    'Data Analytics',
  ],
};

export const education = [
  {
    school: 'JECRC University',
    place: 'Jaipur, India',
    degree:
      'Bachelor of Technology in Artificial Intelligence and Machine Learning',
    period: 'August 2023 – Present',
  },
];

export const experience = [
  {
    company: 'DataSutram',
    role: 'Data Analyst',
    place: 'Remote',
    period: 'June 2025 – October 2025',
    points: [
      'Built a Python-based Bank Statement Analyzer that extracts and pattern-matches transaction data, reducing processing time by 70%.',
      'Worked with 15+ credit managers to identify workflow inefficiencies and recommend improvements to loan approval workflows.',
      'Enhanced Bank Statement Analysis reports with statistical analysis and predictive insights to support faster credit decisions.',
    ],
  },
  {
    company: 'GirlScript Summer of Code Extended (GSSOC EXTD24)',
    role: 'Open Source Contributor',
    place: 'Remote',
    period: 'August 2024 – December 2024',
    points: [
      'Fixed bugs and shipped features across open-source repositories using Python and JavaScript.',
      'Built a FastAPI backend and Streamlit frontend for a demand-forecasting tool that provided pricing recommendations.',
    ],
  },
];

export type Metric = {
  value: string;
  label: string;
};

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository is not public. */
  github?: string;
  /** Public URL of the deployed project. */
  live?: string;
  palette: Palette;
  motif: 'brain' | 'chart' | 'flow';
};

export const projects: Project[] = [
  {
    id: 'sage-automl',
    title: 'SAGE: AutoML Platform',
    year: '2026',
    genre: 'AI • Machine Learning • AutoML',
    logline:
      'An end-to-end AutoML platform that automates data analysis, model selection, hyperparameter tuning, explainability, and report generation.',
    stack: [
      'Python',
      'Streamlit',
      'LightGBM',
      'XGBoost',
      'Optuna',
      'SHAP',
      'SQLite',
    ],
    build: [
      'Built SAGE (Smart Adaptive Guided Experimentation), an end-to-end AutoML platform with six core modules, including automated EDA, adaptive preprocessing, and a seven-model arena with Optuna hyperparameter tuning.',
      'Integrated SHAP explainability, SQLite experiment tracking, and automated PDF report generation into a multipage Streamlit interface, then deployed the platform on Hugging Face Spaces.',
    ],
    features: [
      'Automated exploratory data analysis',
      'Adaptive preprocessing pipeline',
      'Seven-model comparison and evaluation',
      'Optuna hyperparameter optimization',
      'SHAP-based model explainability',
      'SQLite experiment tracking',
      'Automated PDF report generation',
    ],
    metrics: [
      { value: '7', label: 'models in the comparison arena' },
      { value: '6', label: 'core modules' },
    ],
    live: 'https://huggingface.co/spaces/akshat18/SAGE',
    palette: {
      from: '#10102b',
      via: '#3434a5',
      to: '#070712',
      accent: '#8b8bff',
    },
    motif: 'brain',
  },
  {
    id: 'dynamic-pricing',
    title: 'Dynamic Pricing System',
    year: '2026',
    genre: 'Machine Learning • Predictive Analytics',
    logline:
      'A machine learning pricing pipeline combining predictive modeling and location-based features for data-driven pricing decisions.',
    stack: [
      'Python',
      'Pandas',
      'Scikit-learn',
      'Geopy',
      'XGBoost',
    ],
    build: [
      'Built an end-to-end pricing model pipeline covering data processing, feature engineering, model training, and real-time inference, with modular components that can be independently replaced or redeployed.',
      'Integrated reverse geocoding to extract location-based features, improving model accuracy by 15% and strengthening the pipeline’s predictive capabilities.',
    ],
    features: [
      'End-to-end machine learning pipeline',
      'Data cleaning and feature engineering',
      'XGBoost-based predictive modeling',
      'Reverse geocoding for location-based features',
      'Real-time model inference',
    ],
    metrics: [
      { value: '15%', label: 'improvement in model accuracy' },
    ],
    live: 'https://akshatdynamicpricing.streamlit.app/',
    palette: {
      from: '#102116',
      via: '#237347',
      to: '#07100b',
      accent: '#55e69a',
    },
    motif: 'chart',
  },
  {
    id: 'dj-beat-visualizer',
    title: 'DJ Beat Visualizer',
    year: '2026',
    genre:
      'Audio Visualization • Signal Processing • Interactive Media',
    logline:
      'An interactive music visualization application that transforms audio into dynamic, beat-responsive visual experiences.',
    stack: [
      'Python',
      'Streamlit',
      'Audio Processing',
      'Data Visualization',
    ],
    build: [
      'Developed an interactive DJ Beat Visualizer that transforms audio signals into dynamic visual representations for an engaging music experience.',
      'Built a Streamlit-based interface for exploring audio-responsive visuals and deployed the application publicly for browser-based access.',
    ],
    features: [
      'Interactive audio visualization',
      'Dynamic music-responsive graphics',
      'Audio signal processing',
      'Browser-based interactive interface',
      'Streamlit cloud deployment',
    ],
    metrics: [],
    live: 'https://dj-beats-visualizer.streamlit.app/',
    palette: {
      from: '#210d2e',
      via: '#8a24b5',
      to: '#090510',
      accent: '#e879f9',
    },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'nasa-space-apps',
    title: 'Global Nominee',
    org: 'NASA Space Apps Challenge 2024',
    detail:
      'Selected as a global nominee and pre-final round qualifier for AQUORA, a water quality prediction project.',
    laurel: 'Global Nominee',
  },
  {
    id: 'aws-cloud-club',
    title: 'Active Member',
    org: 'AWS Cloud Club, JECRC University',
    detail:
      'Participated in cloud computing workshops and technical learning activities.',
    laurel: 'Cloud Computing',
  },
  {
    id: 'gssoc',
    title: 'Open Source Contributor',
    org: 'GirlScript Summer of Code Extended',
    detail:
      'Contributed Python and JavaScript fixes and features to open-source projects.',
    laurel: 'Open Source',
  },
];

export type Certification = {
  issuer: string;
  name: string;
};

export const certifications: Certification[] = [
  {
    issuer: 'DeepLearning.AI',
    name: 'Supervised Machine Learning',
  },
  {
    issuer: 'Google Cloud',
    name: 'Generative AI',
  },
  {
    issuer: 'Postman',
    name: 'Postman API Expert',
  },
];

export type Skill = {
  name: string;
  mono: string;
  note?: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  subtitle: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Programming and querying',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'R', mono: 'R' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'Java', mono: 'Jv' },
    ],
  },
  {
    id: 'ml',
    title: 'Machine Learning & AI',
    subtitle: 'Modeling and intelligent applications',
    skills: [
      { name: 'TensorFlow', mono: 'Tf' },
      { name: 'Scikit-learn', mono: 'Sk' },
      { name: 'Pandas', mono: 'Pd' },
      { name: 'NumPy', mono: 'Np' },
      { name: 'Keras', mono: 'Kr' },
      { name: 'XGBoost', mono: 'Xg' },
      { name: 'Natural Language Processing', mono: 'NLP' },
      { name: 'Computer Vision', mono: 'CV' },
    ],
  },
  {
    id: 'cloud-tools',
    title: 'Cloud & Tools',
    subtitle: 'Development and cloud platforms',
    skills: [
      { name: 'AWS EC2', mono: 'EC' },
      { name: 'AWS S3', mono: 'S3' },
      { name: 'AWS Lambda', mono: 'La' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'Git', mono: 'Gt' },
      { name: 'Jupyter Notebook', mono: 'Jn' },
      { name: 'Postman API', mono: 'Pa' },
    ],
  },
  {
    id: 'analytics',
    title: 'Data Analytics',
    subtitle: 'Visualization and statistical insight',
    skills: [
      { name: 'Power BI', mono: 'BI' },
      { name: 'Tableau', mono: 'Tb' },
      { name: 'Matplotlib', mono: 'Mp' },
      { name: 'Seaborn', mono: 'Sb' },
      { name: 'Statistical Analysis', mono: 'St' },
      { name: 'Predictive Modeling', mono: 'Pm' },
    ],
  },
];

/**
 * Evidence links point to entries in portfolio data.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: [
    'SAGE: AutoML Platform',
    'Dynamic Pricing System',
    'DJ Beat Visualizer',
    'DataSutram experience',
    'GirlScript Summer of Code Extended',
  ],
  'Machine Learning': [
    'SAGE: AutoML Platform',
    'Dynamic Pricing System',
  ],
  'Scikit-learn': ['Dynamic Pricing System'],
  XGBoost: [
    'SAGE: AutoML Platform',
    'Dynamic Pricing System',
  ],
  Pandas: ['Dynamic Pricing System'],
  'Postman API': ['Postman API Expert'],
  'Statistical Analysis': ['DataSutram experience'],
  'Predictive Modeling': [
    'Dynamic Pricing System',
    'DataSutram experience',
  ],
  'Cloud Computing': [
    'AWS Cloud Club, JECRC University',
  ],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = {
  from: '#24060b',
  via: '#6e0d1d',
  to: '#09070a',
  accent: '#ff3d5a',
};

const amber: Palette = {
  from: '#1c1003',
  via: '#6b3c06',
  to: '#0a0806',
  accent: '#ffb547',
};

const ocean: Palette = {
  from: '#04121f',
  via: '#0f4c6e',
  to: '#05080d',
  accent: '#4cc9ff',
};

const violet: Palette = {
  from: '#120822',
  via: '#3d1a6e',
  to: '#07060c',
  accent: '#b98bff',
};

const jade: Palette = {
  from: '#03150f',
  via: '#0d5a40',
  to: '#050a08',
  accent: '#46e3a8',
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2023 – 2027',
    synopsis:
      'Pursuing a B.Tech in Artificial Intelligence and Machine Learning at JECRC University.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description:
          'Started a B.Tech in Artificial Intelligence and Machine Learning at JECRC University, Jaipur.',
        tags: ['B.Tech', 'AI & ML'],
        runtime: 'Aug 2023 – Aug 2027',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Learning in Practice',
    period: '2024 – 2025',
    synopsis:
      'Contributed to open-source software and supported data analysis and credit assessment workflows.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Contributor',
        description:
          'Contributed Python and JavaScript fixes and features during GirlScript Summer of Code Extended.',
        tags: ['Open Source', 'Python', 'JavaScript'],
        runtime: 'Aug – Dec 2024',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Analyst',
        description:
          'Worked on transaction analysis, credit assessment support, and reporting at DataSutram.',
        tags: ['Data Analytics', 'FinTech'],
        runtime: 'Jun – Oct 2025',
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: 'Building with Data',
    period: '2026',
    synopsis:
      'Applied machine learning and predictive analytics to build practical data-driven applications.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Pricing Engineer',
        description:
          'Automated pricing analysis and developed a data-driven pricing engine at Unessa Foundation.',
        tags: ['Pricing', 'Analytics'],
        runtime: 'May – Jun 2026',
        palette: jade,
      },
      {
        code: 'S03 E02',
        title: 'The AutoML Builder',
        description:
          'Built SAGE with model comparison, tuning, explainability and experiment tracking.',
        tags: ['AutoML', 'SHAP', 'Optuna'],
        runtime: '2026',
        palette: violet,
      },
      {
        code: 'S03 E03',
        title: 'The Visualizer',
        description:
          'Deployed DJ Beat Visualizer as an interactive Streamlit application.',
        tags: ['Audio', 'Streamlit'],
        runtime: '2026',
        palette: crimson,
      },
    ],
  },
];

export type TopPick = {
  label: string;
  title: string;
  detail: string;
  palette: Palette;
};

export const topPicks: TopPick[] = [
  {
    label: 'Featured project',
    title: 'SAGE: AutoML Platform',
    detail: '7 models • 6 modules',
    palette: violet,
  },
  {
    label: 'Predictive analytics',
    title: 'Dynamic Pricing System',
    detail: '15% reported model accuracy improvement',
    palette: jade,
  },
  {
    label: 'Creative coding',
    title: 'DJ Beat Visualizer',
    detail: 'Interactive audio visualization',
    palette: crimson,
  },
  {
    label: 'Core language',
    title: 'Python',
    detail: 'Used across projects and professional experience',
    palette: amber,
  },
  {
    label: 'OpenSource Contribution experience',
    title: 'GSSOC Extd.24',
    detail: '8Contributed Python and JavaScript fixes and features to open-source projects.',
    palette: ocean,
  },
  {
    label: 'Data analytics experience',
    title: 'DataSutram',
    detail: '70% reported reduction in processing time',
    palette: jade,
  },
  {
    label: 'Recognition',
    title: 'NASA Space Apps Challenge',
    detail: 'Global Nominee • 2024',
    palette: crimson,
  },
  {
    label: 'Open source',
    title: 'GirlScript Summer of Code Extended',
    detail: 'Python and JavaScript contributions',
    palette: violet,
  },
  {
    label: 'Certification',
    title: 'Supervised Machine Learning',
    detail: 'DeepLearning.AI',
    palette: amber,
  },
  {
    label: 'Technical focus',
    title: 'Machine Learning & Data Analytics',
    detail: 'Predictive modeling • NLP • Computer Vision',
    palette: ocean,
  },
];

export type IntroSlide = {
  kicker: string;
  title: string;
  lines: string[];
  chips?: string[];
};

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · AI & ML',
    lines: [
      'JECRC University, Jaipur, India',
      'August 2023 – August 2027',
    ],
  },
  {
    kicker: 'Technical skills',
    title: 'Python, ML & Analytics',
    lines: [
      'Python · R · SQL · TensorFlow · Scikit-learn',
      'AWS · Docker · Power BI · Tableau · Postman API',
    ],
    chips: ['Python', 'Machine Learning', 'Data Analytics'],
  },
  {
    kicker: 'Experience',
    title: 'Learning by Building',
    lines: [
      'DataSutram · Data Analyst',
      'GirlScript Summer of Code Extended · Open Source Contributor',
    ],
  },
  {
    kicker: 'Projects',
    title: 'Three Originals',
    lines: [
      'SAGE: AutoML Platform — 7 models, 6 modules',
      'Dynamic Pricing System — predictive pricing',
      'DJ Beat Visualizer — interactive audio visuals',
    ],
  },
  {
    kicker: 'Achievements',
    title: 'Top Moments',
    lines: [
      'NASA Space Apps Challenge 2024 — Global Nominee',
      'AWS Cloud Club, JECRC University — Active Member',
    ],
  },
  {
    kicker: 'Certifications',
    title: 'Learning Continues',
    lines: [
      'Supervised Machine Learning · DeepLearning.AI',
      'Generative AI · Google Cloud · Postman API Expert',
    ],
  },
  {
    kicker: 'Technical focus',
    title: 'Data-driven solutions',
    lines: [
      'Machine Learning · Natural Language Processing · Computer Vision · Predictive Modeling',
    ],
  },
];

export type ProfileId =
  | 'Akshat'
  | 'recruiter'
  | 'developer'
  | 'creative';

export type SectionId =
  | 'about'
  | 'journey'
  | 'originals'
  | 'picks'
  | 'skills'
  | 'moments'
  | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'Akshat',
    name: 'Akshat',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: [
      'about',
      'journey',
      'originals',
      'picks',
      'skills',
      'moments',
      'story',
    ],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: [
      'story',
      'moments',
      'skills',
      'originals',
      'about',
      'journey',
      'picks',
    ],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: [
      'originals',
      'skills',
      'journey',
      'moments',
      'about',
      'picks',
      'story',
    ],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: [
      'journey',
      'picks',
      'originals',
      'moments',
      'about',
      'skills',
      'story',
    ],
  },
];

export const sectionMeta: Record<
  SectionId,
  {
    nav: string;
    card: string;
    meta: string;
    palette: Palette;
  }
> = {
  about: {
    nav: 'About',
    card: 'About Me',
    meta: 'The Pilot • Education & training',
    palette: violet,
  },
  journey: {
    nav: 'Journey',
    card: 'My Journey',
    meta: `${seasons.length} Seasons • ${seasons.reduce(
      (n, s) => n + s.episodes.length,
      0
    )} Episodes`,
    palette: amber,
  },
  originals: {
    nav: 'Originals',
    card: 'My Projects',
    meta: `${projects.length} Originals • 2026`,
    palette: crimson,
  },
  picks: {
    nav: 'Top Picks',
    card: 'Top Picks',
    meta: '10 portfolio highlights',
    palette: jade,
  },
  skills: {
    nav: 'Skills',
    card: 'My Skills',
    meta: `${skillCategories.length} Categories`,
    palette: ocean,
  },
  moments: {
    nav: 'Moments',
    card: 'My Achievements',
    meta: `${achievements.length} Moments • ${certifications.length} Certifications`,
    palette: crimson,
  },
  story: {
    nav: 'Resume',
    card: 'The Full Story',
    meta: 'Resume • View & download',
    palette: violet,
  },
};