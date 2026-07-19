/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT ME — This is the single source of truth for your site.
 *  Change your name, bio, projects, resume, and links here and
 *  every page updates automatically.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  /** Your name — shown in the nav wordmark, hero, and page titles. */
  name: 'Elliezer Christian Evan Sagena',
  /** Short role/tagline shown under your name. */
  role: 'Junior iOS Developer | Android Developer | Software Engineer',
  /** Your email — used on the Contact page and in the footer. */
  email: 'elliezerevansagena@gmail.com',
  /** Where you're based (optional — shown on Contact). Leave '' to hide. */
  location: 'Bali, Indonesia',
  /** Base URL of the deployed site (also set in astro.config.mjs). */
  url: 'https://elliezer.dev',
};

/** Top navigation links. Order = display order. */
export const nav = [
  { label: 'About', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contact' },
];

/** Social / external links. Remove any you don't use. */
export const socials = [
  { label: 'GitHub', href: 'https://github.com/ell28' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/elliezerc' }
];

/** Home page intro paragraphs (About). Each string is its own paragraph. */
export const about = {
  /**
   * Path to your headshot placed in /public
   * (e.g. '/images/headshot.jpg'). Leave '' to show an initials monogram.
   */
  headshot: '/images/headshot.jpg',
  headline:
    "Hi, I'm Elliezer!",
  intro: [
    "A tech enthusiast from 10 years old and jumped into informatics as my first passion. I'm a mobile developer focused on building clean, reliable iOS and watchOS apps with Swift and SwiftUI, with a growing footprint on Android too. I care about the small details that make an app feel effortless to use.",
    "Most of what you'll see here started as a challenge at the Apple Developer Academy because my freelance project are usually NDAs (I really wanted to tell you guys about it, seriously). From AR experiences to Apple Watch companions. When I'm not shipping apps, I'm usually exploring new frameworks, prototyping ideas, or refining a design until it feels right.",
  ],
};

export type Project = {
  title: string;
  description: string;
  /** Small tech/tag chips. */
  tags: string[];
  /** App screenshot / cover image in /public (e.g. '/images/projects/pourfect.png'). Optional. */
  image?: string;
  /** How the image fills the card: 'contain' (default, shows the whole screenshot) or 'cover' (crops to fill). */
  imageFit?: 'contain' | 'cover';
  /** Live/demo link (optional). */
  link?: string;
  /** Label for the `link` button (defaults to "Live"). e.g. "TestFlight". */
  linkLabel?: string;
  /** Source code link (optional). */
  repo?: string;
  /** Year or timeframe (optional). */
  year?: string;
  /** Set true to feature on the home page. */
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'Pourfect: AR Latte Art',
    description:
      'Role: Developer (Presentation Layer). An augmented-reality iOS app that teaches latte art. Pourfect uses AprilTag fiducial tracking to lock onto the cup and pitcher, then overlays a real-time, GPU-accelerated fluid simulation so you can practice pours — Heart, Tulip, Rosetta — with any liquid and get instant visual feedback. Built after pivoting from ML-based object tracking to robust, zero-training 6DoF geometry.',
    tags: ['Swift', 'ARKit', 'MetalKit', 'Vision', 'AprilTags'],
    // Drop a screenshot in /public/images/projects/ and set its path here:
    image: '/images/projects/pourfect.png',
    link: 'https://testflight.apple.com/join/yVR2tSkA',
    linkLabel: 'TestFlight',
    repo: 'https://github.com/kennethmuyoyo/latte-art',
    year: '2026',
    featured: true,
  },
  {
    title: 'Zony',
    description:
      // TODO: Replace with a real one-line summary of what Zony does.
      'Role: Tech Lead, System Architect, and Developer. A dual-platform experience spanning iPhone and Apple Watch, built for the Apple Developer Academy’s “From Pieces to Product” challenge (Challenge 3). To empower parents with ashtmatic children to keep their child doing their desired sports with realtime tracking of their child’s oxygen saturation and heart rate, Zony is a companion app that allows parents to monitor their child’s health data while they are away. The app is distributed to testers via TestFlight.',
    tags: ['Swift', 'SwiftUI', 'watchOS', 'iOS'],
    image: '/images/projects/zony.png',
    link: 'https://testflight.apple.com/join/pvbBqrZc',
    linkLabel: 'TestFlight',
    repo: 'https://github.com/ell28/CH3_FromPiecesToProduct',
    year: '2026',
    featured: true,
  },
  {
    title: 'No-Ex Contact',
    description:
      // TODO: Replace with a real one-line summary of what No-Ex Contact does.
      'Role: Developer.A native iOS app created for the Apple Developer Academy’s Challenge 2 "Recreate & Remix" in pair(Coder+Designer). A Remixed Contact App with auto delete functionality with timers and a swipe feature like dating app mechanism (named no-ex for a reason lol), distributed to testers via TestFlight.',
    tags: ['Swift', 'SwiftUI', 'iOS'],
    image: '/images/projects/no-ex.png',
    link: 'https://testflight.apple.com/join/pvbBqrZc',
    linkLabel: 'TestFlight',
    year: '2026',
    featured: false,
  },
  {
    title: 'ODD',
    description:
      // TODO: Replace with a real one-line summary of what ODD does.
      'A native Android marketplace app built entirely in Kotlin for a Indonesian perfume brand called ODD. Built with Jetpack Compose, MVVM architecture, and a clean code approach. The app features a product catalog, shopping cart, and checkout process, providing users with a seamless shopping experience. Implemented payment gateway using Xendit, and integrated email notifications for order updates. The app is designed to be responsive and user-friendly, with a focus on performance and scalability.',
    tags: ['Kotlin', 'Android', 'Gradle'],
    image: '/images/projects/odd-android.png',
    // repo: 'https://github.com/ell28/MarketPlace-android',
    year: '2025',
    featured: true,
  },
];

export type ResumeEntry = {
  title: string;
  org: string;
  period: string;
  location?: string;
  points: string[];
};

export const resume = {
  /** Path to a downloadable PDF in /public. Leave '' to hide the button. */
  pdf: '/Elliezer-Christian-Sagena-CV.pdf',
  summary:
    'Final-year Computer Engineering student (Software Engineering) at ITHB and a 2nd-cohort member of the Apple Developer Academy @BINUS, Bali. A mobile developer across iOS (Swift/SwiftUI) and Android (Kotlin) with hands-on full-stack, ERP, and client-project experience — plus a track record of leading small teams. Seeking an introductory Mobile Developer role.',
  experience: [
    {
      title: 'iOS Developer — 2nd Cohort',
      org: 'Apple Developer Academy @BINUS, Bali',
      period: 'Mar 2026 — Dec 2026',
      location: 'Bali, Indonesia',
      points: [
        'Joined the first international Apple Developer Academy in Asia as part of the 2nd cohort.',
        'Trained to build world-class apps to Apple’s standards and guidelines, working as a coder focused on Swift and SwiftUI.',
        'Led the tech team on the third challenge — running Scrum with three coders.',
      ],
    },
    {
      title: 'Web & Android Developer / Project Manager',
      org: 'Self-employed',
      period: 'Jun 2024 — Present',
      location: 'Bandung, Indonesia',
      points: [
        'Delivered an RFID Document Management System for Bank BJB (Patrol Branch Office) via PT. Partnership Procurement Solution, acting as third-party developer and project manager.',
        'Owned the analysis and architecture design for the entire system.',
        'Built the backend and server communication for the web app — server/SSH setup and Express.js.',
        'Modified the RFID handheld vendor’s Android SDK to meet client requirements.',
        'Also shipped an RFID General Asset Management System (NDA) and 3+ web apps for other clients.',
      ],
    },
    {
      title: 'Brand Manager',
      org: 'ODD Fragrance',
      period: 'Jan 2025 — Jan 2026',
      location: 'Bandung, Indonesia',
      points: [
        'Managed a local fragrance brand end-to-end, moving all business processes into an ERP.',
        'Built and hosted an ERP system on Odoo Community Edition 18.',
        'Built the brand’s Android marketplace app in Kotlin.',
        'Ran KOL / influencer collaborations for online brand-awareness campaigns.',
        'Owned monthly financial reporting and per-channel sales analytics.',
      ],
    },
    {
      title: 'Founder & Operations',
      org: 'Overseas Worker Agency (self-employed)',
      period: 'Feb 2023 — Present',
      location: 'Bandung, Indonesia',
      points: [
        'Run a business helping Indonesians find general work abroad, mainly across Europe.',
        'Finalized partnerships with 5+ European work agencies.',
        'Managed the full pipeline from onboarding to departure — 50+ candidates placed.',
      ],
    },
  ] satisfies ResumeEntry[],
  education: [
    {
      title: 'Informatics Engineering',
      org: 'Institut Teknologi Harapan Bangsa (ITHB)',
      period: 'Expected Dec 2026',
      location: 'Bandung, Indonesia',
      points: ['Concentration in Software Engineering.', 'GPA 3.18 / 4.00.'],
    },
    {
      title: 'SAP Introduction & Configuration',
      org: 'ITHB Career Resource Center',
      period: 'Dec 2025',
      location: 'Bandung, Indonesia',
      points: [
        'Professional training in SAP HANA — FI/CO, SD, MM, and PP modules.',
      ],
    },
  ] satisfies ResumeEntry[],
  skills: [
    'Swift',
    'SwiftUI',
    'Kotlin',
    'Jetpack Compose',
    'Java',
    'Python',
    'Go',
    'JavaScript',
    'Express.js',
    'MySQL',
    'PostgreSQL',
    'Oracle PL/SQL',
    'Odoo / ERP',
    'Scrum',
    'Git',
  ],
};
