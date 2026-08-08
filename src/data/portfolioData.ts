import {
  TopBarInfo,
  Service,
  Project,
  PricePlan,
  Skill,
  ExperienceItem,
  EducationItem,
  CertificationItem,
} from '../types';

export const topBarData: TopBarInfo = {
  email: 'ta759777@gmail.com',
  phone: '+92 328-1166513',
  whatsapp: 'https://wa.me/923281166513',
  github: 'https://github.com/Tayyabansari109',
  linkedin: 'https://www.linkedin.com/in/tayyab-ansari-9a2557390/',
  facebook: 'https://www.facebook.com/share/1M9T8KMHsQ/',
  instagram: 'https://www.instagram.com/tayyabansari530?igsh=MmV1YnNqa3hrMXFk',
};

export const heroData = {
  greeting: 'AVAILABLE FOR HIRE',
  name: 'Muhammad Tayyab',
  titles: [
    'Frontend React Developer',
    'UI/UX Web Specialist',
    'Responsive Design Expert',
    'Firebase Application Builder',
  ],
  description:
    'Create beautiful, responsive and modern websites using React.js, JavaScript, Bootstrap and Firebase with clean architecture and delightful animations.',
  avatarUrl: '/src/assets/images/hero_developer_avatar_1785912317953.jpg',
  stats: {
    experience: '8 Months',
    projects: '15+ Completed',
    clients: '10+ Happy Clients',
  },
};

export const aboutData = {
  heading: 'About Me',
  title: 'Passionate Frontend React Developer & UI Specialist',
  bioParagraph1:
    'I am a dedicated Frontend React Developer with 8 months of hands-on experience turning complex ideas into sleek, scalable, and responsive web applications. My passion lies at the intersection of aesthetic design and engineering precision.',
  bioParagraph2:
    'Specializing in React.js, modern JavaScript (ES6+), Bootstrap 5, Tailwind CSS, and Firebase, I build web experiences optimized for performance, accessibility, and user engagement across mobile, tablet, laptop, and desktop devices.',
  highlights: [
    'Frontend Development with React & modern hooks',
    'Responsive design for all screen resolutions',
    'Firebase Authentication, Firestore & Cloud Hosting',
    'Git & GitHub team collaboration & CI/CD workflows',
    'Clean, reusable, semantic and modular codebase',
  ],
};

export const servicesData: Service[] = [
  {
    id: 'frontend',
    iconName: 'Code',
    title: 'Frontend Development',
    description:
      'Responsive, lightning-fast websites crafted with semantic HTML5, CSS3, Bootstrap 5, JavaScript, and React.js.',
    features: [
      'Semantic HTML5 & Modern CSS3',
      'Bootstrap 5 & Tailwind Styling',
      'JavaScript ES6+ Best Practices',
      'Cross-Browser & Device Compatibility',
    ],
  },
  {
    id: 'react',
    iconName: 'Atom',
    title: 'React.js Development',
    description:
      'Modern, component-driven React applications built with custom hooks, state management, and optimized rendering.',
    features: [
      'Single Page Application (SPA) Design',
      'Context API & Redux Toolkit State',
      'React Router Dynamic Navigation',
      'Performance Optimization & Lazy Loading',
    ],
  },
  {
    id: 'responsive',
    iconName: 'Layout',
    title: 'Responsive Website Design',
    description:
      'Fully responsive layouts engineered desktop-first or mobile-first to ensure pixel-perfect delivery across all screen sizes.',
    features: [
      'Fluid Grid & Flexbox Systems',
      'Touch-Optimized Mobile Interfaces',
      'High DPI & Retina Display Support',
      'Adaptive Layout Breakpoints',
    ],
  },
  {
    id: 'firebase',
    iconName: 'Flame',
    title: 'Firebase Integration',
    description:
      'Robust backend services integration including Firestore NoSQL database, User Authentication, and Cloud Hosting.',
    features: [
      'Firebase Auth (Email, Google, OAuth)',
      'Realtime Firestore DB Synchronization',
      'Firebase Cloud Storage & Functions',
      'Secure Security Rules Configuration',
    ],
  },
  {
    id: 'redesign',
    iconName: 'Palette',
    title: 'Website Redesign',
    description:
      'Transform outdated websites into modern, high-converting, accessibility-focused user interfaces with smooth transitions.',
    features: [
      'UI/UX Audit & Visual Modernization',
      'Speed & Performance Overhaul',
      'SEO & Mobile Optimization',
      'Interactive Glassmorphism & Animations',
    ],
  },
  {
    id: 'git',
    iconName: 'GitBranch',
    title: 'Git & GitHub Workflows',
    description:
      'Version control setup, collaborative workflow management, branch strategies, and automated deployment pipelines.',
    features: [
      'Git Version Control & Branching',
      'GitHub Actions & Deployment',
      'Repository Clean Code Standards',
      'Code Reviews & Team Collaboration',
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: 'p1',
    name: 'E-Commerce Platform',
    category: 'React',
    description:
      'Full-featured electronic commerce platform with product filtering, dynamic shopping cart, checkout workflow, and dark mode.',
    image:
      'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
    technologies: ['React.js', 'Bootstrap 5', 'Context API', 'Firebase'],
    liveUrl: 'https://example.com/ecommerce-demo',
    githubUrl: 'https://github.com/alexrivera-dev/ecommerce-react-app',
    featured: true,
  },
  {
    id: 'p2',
    name: 'Restaurant Website',
    category: 'Bootstrap',
    description:
      'Interactive culinary portal featuring online food menu reservation, customer reviews, photo gallery, and Google Maps location.',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    technologies: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript'],
    liveUrl: 'https://example.com/restaurant-demo',
    githubUrl: 'https://github.com/alexrivera-dev/gourmet-restaurant-site',
  },
  {
    id: 'p3',
    name: 'Gym & Fitness Hub',
    category: 'React',
    description:
      'Modern health and fitness web app with workout schedule planner, membership calculator, trainer profiles, and class booking.',
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    technologies: ['React.js', 'Framer Motion', 'Tailwind', 'JavaScript'],
    liveUrl: 'https://example.com/gym-demo',
    githubUrl: 'https://github.com/alexrivera-dev/powerfit-gym-app',
    featured: true,
  },
  {
    id: 'p4',
    name: 'Hospital & Healthcare Portal',
    category: 'React',
    description:
      'Telemedicine and medical center platform with online doctor appointment scheduling, patient records portal, and emergency contact.',
    image:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    technologies: ['React.js', 'Firebase Auth', 'Bootstrap 5', 'CSS3'],
    liveUrl: 'https://example.com/hospital-demo',
    githubUrl: 'https://github.com/alexrivera-dev/careplus-hospital-portal',
  },
  {
    id: 'p5',
    name: 'Portfolio Website',
    category: 'JavaScript',
    description:
      'Ultra-slick interactive developer portfolio featuring dark/light theme switcher, animated skills, glassmorphism cards, and resume export.',
    image:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    technologies: ['React.js', 'JavaScript ES6+', 'Bootstrap 5', 'Motion'],
    liveUrl: 'https://example.com/portfolio-demo',
    githubUrl: 'https://github.com/alexrivera-dev/developer-portfolio-site',
    featured: true,
  },
  {
    id: 'p6',
    name: 'School & Academy Portal',
    category: 'Bootstrap',
    description:
      'Educational institution web application with course curriculum viewer, student registration form, upcoming events calendar, and staff directory.',
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    technologies: ['HTML5', 'Bootstrap 5', 'JavaScript', 'CSS3'],
    liveUrl: 'https://example.com/school-demo',
    githubUrl: 'https://github.com/alexrivera-dev/apex-academy-portal',
  },
  {
    id: 'p7',
    name: 'Travel & Tour Booking',
    category: 'JavaScript',
    description:
      'Immersive travel discovery and vacation tour booking platform with destination search filters, user testimonials, and weather widget.',
    image:
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
    technologies: ['JavaScript ES6+', 'HTML5', 'CSS3', 'Bootstrap 5'],
    liveUrl: 'https://example.com/travel-demo',
    githubUrl: 'https://github.com/alexrivera-dev/wanderlust-travel-web',
  },
];

export const pricingPlansData: PricePlan[] = [
  {
    id: 'basic',
    title: 'Basic',
    price: 'PKR 5,000',
    description: 'Perfect for personal sites & single landing pages.',
    features: [
      'Single Landing Page',
      '100% Fully Responsive Layout',
      'Interactive Contact Form',
      'Clean Semantic HTML/CSS',
      'Social Media Links Integration',
      'Standard Delivery (3 Days)',
    ],
    buttonText: 'Order Now',
  },
  {
    id: 'standard',
    title: 'Standard',
    price: 'PKR 10,000',
    description: 'Great for small businesses and service showcases.',
    features: [
      'Up to 5 Custom Pages',
      'Fully Responsive Layout',
      'Smooth Scroll & Animations',
      'SEO Friendly Structure',
      'Contact Form with Email Alerts',
      'Fast Delivery (5 Days)',
    ],
    buttonText: 'Order Now',
  },
  {
    id: 'business',
    title: 'Business',
    price: 'PKR 20,000',
    description: 'Ideal for growing companies needing dynamic applications.',
    features: [
      'Full React.js Application',
      'Firebase Backend Integration',
      'Dynamic Content & State',
      'Dark / Light Mode Toggle',
      'High Speed & Performance',
      'Express Delivery (7 Days)',
    ],
    buttonText: 'Order Now',
  },
  {
    id: 'ecommerce',
    title: 'Ecommerce',
    price: 'PKR 35,000',
    description: 'Complete online store setup with shopping catalog.',
    features: [
      'Full Shopping Web Store',
      'Product Detail & Filter Pages',
      'Interactive Shopping Cart',
      'Checkout & Payment Gateway',
      'Customer Order Notifications',
      'Professional Support (10 Days)',
    ],
    buttonText: 'Order Now',
  },
  {
    id: 'premium',
    title: 'Premium',
    price: 'PKR 50,000',
    popular: true,
    badge: 'POPULAR PLAN',
    description: 'Comprehensive business solution with custom admin panel.',
    features: [
      'Full Business Application',
      'Admin Dashboard Control',
      'Firebase Firestore & Auth',
      'Priority 24/7 VIP Support',
      'Complete Source Code Access',
      'Custom Domain & Hosting Setup',
    ],
    buttonText: 'Order Now',
  },
  {
    id: 'custom',
    title: 'Custom',
    price: 'Custom Price',
    description: 'Bespoke solutions tailored to your unique requirements.',
    features: [
      'Custom Architecture & Stack',
      'Complex Micro-Interactions',
      'Third-Party API Integrations',
      'Dedicated Long-term Maintenance',
      '1-on-1 Engineering Consultation',
      'Flexible Timeline',
    ],
    buttonText: 'Contact Me',
  },
];

export const skillsData: Skill[] = [
  {
    name: 'HTML5',
    percentage: 95,
    category: 'frontend',
    icon: 'FileCode',
    color: '#E34F26',
  },
  {
    name: 'CSS3',
    percentage: 90,
    category: 'frontend',
    icon: 'Palette',
    color: '#1572B6',
  },
  {
    name: 'Bootstrap 5',
    percentage: 90,
    category: 'frontend',
    icon: 'LayoutGrid',
    color: '#7952B3',
  },
  {
    name: 'JavaScript (ES6+)',
    percentage: 85,
    category: 'frontend',
    icon: 'Terminal',
    color: '#F7DF1E',
  },
  {
    name: 'React.js',
    percentage: 90,
    category: 'frontend',
    icon: 'Atom',
    color: '#61DAFB',
  },
  {
    name: 'Firebase',
    percentage: 80,
    category: 'backend',
    icon: 'Flame',
    color: '#FFCA28',
  },
  {
    name: 'Git & GitHub',
    percentage: 85,
    category: 'tools',
    icon: 'GitBranch',
    color: '#F05032',
  },
  {
    name: 'VS Code',
    percentage: 95,
    category: 'tools',
    icon: 'Code2',
    color: '#007ACC',
  },
];

export const resumeData = {
  profile: {
    name: 'Muhammad Tayyab',
    title: 'Senior Frontend React Developer',
    email: 'ta759777@gmail.com',
    phone: '+92 328-1166513',
    whatsapp: 'https://wa.me/923281166513',
    location: 'Pakistan / Remote',
    github: 'https://github.com/Tayyabansari109',
    linkedin: 'https://www.linkedin.com/in/tayyab-ansari-9a2557390/',
    website: 'https://alexrivera-portfolio.dev',
    summary:
      'Results-driven Frontend React Developer with 8 months of hands-on experience specializing in React.js, modern JavaScript, Bootstrap 5, and Firebase. Proven track record of building accessible, high-performance web applications and design systems.',
  },
  experience: [
    {
      id: 'e1',
      role: 'Senior Frontend Developer',
      company: 'TechVision Solutions Inc.',
      period: '2023 - Present',
      location: 'San Francisco, CA',
      description:
        'Leading frontend development for enterprise client dashboards and React applications.',
      achievements: [
        'Architected modern React components reducing page load latency by 35%.',
        'Spearheaded transition to Bootstrap 5 and Tailwind design system across 12 client products.',
        'Mentored junior developers and conducted code reviews enforcing strict TypeScript standards.',
      ],
    },
    {
      id: 'e2',
      role: 'React.js Web Engineer',
      company: 'Nexus Digital Agency',
      period: '2021 - 2023',
      location: 'Austin, TX (Remote)',
      description:
        'Engineered responsive web applications, e-commerce frontends, and Firebase integrations.',
      achievements: [
        'Integrated Firebase Firestore and Auth for 20+ web apps servicing over 100k active users.',
        'Designed pixel-perfect glassmorphism cards and smooth CSS3 animations for brand showcases.',
        'Collaborated directly with UI/UX designers to translate Figma frames into semantic JSX code.',
      ],
    },
    {
      id: 'e3',
      role: 'Junior Web Developer',
      company: 'PixelCraft Studio',
      period: '2019 - 2021',
      location: 'Seattle, WA',
      description:
        'Developed cross-browser compatible landing pages using HTML5, CSS3, Bootstrap, and JavaScript.',
      achievements: [
        'Converted legacy non-responsive web pages into mobile-first Bootstrap 5 layouts.',
        'Maintained Git repositories, optimized image assets, and improved lighthouse SEO scores to 95+.',
      ],
    },
  ] as ExperienceItem[],

  education: [
    {
      id: 'edu1',
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of California, Berkeley',
      period: '2015 - 2019',
      score: 'GPA 3.8 / 4.0',
      details:
        'Specialized in Software Engineering, Web Development, Algorithms, and Human-Computer Interaction.',
    },
  ] as EducationItem[],

  certifications: [
    {
      id: 'c1',
      title: 'Meta Front-End Developer Professional Certificate',
      issuer: 'Meta / Coursera',
      year: '2022',
      credentialId: 'META-FED-98421',
    },
    {
      id: 'c2',
      title: 'Legacy & Modern Web Architecture with React',
      issuer: 'freeCodeCamp',
      year: '2021',
    },
    {
      id: 'c3',
      title: 'Google Cloud Certified - Firebase Specialist',
      issuer: 'Google Cloud',
      year: '2023',
    },
  ] as CertificationItem[],

  languages: [
    { name: 'English', proficiency: 'Native / Professional' },
    { name: 'Spanish', proficiency: 'Conversational' },
    { name: 'Urdu / Hindi', proficiency: 'Professional Working' },
  ],
};
