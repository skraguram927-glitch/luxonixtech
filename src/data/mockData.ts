import { ServiceDetail, Testimonial } from '../types';

export const COMPANY_INFO = {
  name: 'Luxonixstacks',
  tagline: 'Enterprise IT Solutions, Software Development & Digital Engineering',
  email: 'luxonixstacks@gmail.com',
  phone: '+919342320225',
  displayPhone: '+91 93423 20225',
  whatsappUrl: 'https://wa.me/919342320225?text=Hello%20Luxonixstacks%20Team%2C%20I%20would%20like%20to%20discuss%20a%20project.',
  address: {
    line1: 'Assari Kadu, Vengampatti',
    locality: 'Mallur',
    city: 'Salem',
    state: 'Tamil Nadu',
    pincode: '636203',
    country: 'India',
    fullFormatted: 'Assari Kadu, Vengampatti, Mallur, Salem, Tamil Nadu, PIN Code: 636203',
  },
  hours: 'Mon - Sat: 9:00 AM - 7:00 PM IST (24/7 Monitoring for SLA Clients)',
  founded: '2024',
  logoWide: '/assets/aistudio/luxonixstacks_logo_4096__1__685c5c01.png',
  logoSquare: '/assets/aistudio/luxonixstacks_logo_1080x1080_square_b51dbf56.png',
};

export const CORE_SERVICES: ServiceDetail[] = [
  {
    id: 'software-development',
    title: 'Software Development',
    shortTitle: 'Software Dev',
    tagline: 'Robust, cloud-native custom software engineered for scale and enterprise reliability.',
    description:
      'We architect and build full-lifecycle software solutions, from enterprise SaaS platforms and multi-tenant systems to microservices, CRM engines, and bespoke business automation portals. Engineered with strict clean-code discipline and high-throughput databases.',
    iconName: 'Code2',
    highlights: [
      'Custom Enterprise CRM, ERP & Workflow Portals',
      'Scalable SaaS Platforms & Multi-tenant Architectures',
      'High-throughput RESTful & GraphQL Microservice APIs',
      'Legacy System Modernization & Cloud Refactoring',
      'Automated CI/CD Pipelines & Continuous Delivery',
    ],
    deliverables: [
      'Production-ready containerized microservices codebase',
      'Comprehensive API documentation & Postman collections',
      'Database schemas with automated migrations',
      'Rigorous unit, integration, and security test suites',
      'Deployment automation scripts with Docker/Kubernetes',
    ],
    technologies: ['TypeScript', 'Node.js', 'React', 'Python', 'Go', 'PostgreSQL', 'Redis', 'Docker'],
    sla: '99.9% uptime architectural commitment with 2-week sprint releases',
    idealFor: 'Enterprises, startups, and fast-growing organizations requiring bespoke software without technical debt.',
  },
  {
    id: 'it-services',
    title: 'IT Services & Cloud Infrastructure',
    shortTitle: 'IT Services',
    tagline: 'Proactive managed IT, zero-downtime cloud hosting, and enterprise cybersecurity.',
    description:
      'Comprehensive managed IT support, server orchestration, secure networking, and disaster recovery. We safeguard your critical operations 24/7/365, ensuring seamless availability, proactive threat detection, and continuous backup mechanisms.',
    iconName: 'Server',
    highlights: [
      'Cloud Architecture & Managed Hosting (AWS, GCP, Azure)',
      '24/7/365 System Health Monitoring & Incident Mitigation',
      'Enterprise Cybersecurity Audits & Access Governance',
      'Automated Disaster Recovery & Geo-redundant Backups',
      'DevOps Automation, Containerization & Virtualization',
    ],
    deliverables: [
      'Zero-downtime infrastructure migration & setup',
      'Real-time health telemetry dashboards & alerts',
      'Cybersecurity compliance audit & vulnerability reports',
      'Disaster recovery runbook with RPO < 15 min & RTO < 1 hr',
      'Dedicated Tier-3 IT support response desk',
    ],
    technologies: ['AWS', 'Google Cloud', 'Terraform', 'Kubernetes', 'Linux', 'Cloudflare', 'Prometheus', 'Nginx'],
    sla: '15-minute emergency response time with 24/7 active surveillance',
    idealFor: 'Global firms seeking round-the-clock reliability, bulletproof cybersecurity, and seamless cloud operations.',
  },
  {
    id: 'web-designing',
    title: 'Web Designing & Modern UI/UX',
    shortTitle: 'Web Designing',
    tagline: 'Pixel-perfect, high-converting digital storefronts and web portals engineered for speed.',
    description:
      'Transforming brand identities into responsive web experiences with sub-second load times, intuitive user flows, and aesthetic precision. From bespoke corporate portals to high-performance e-commerce platforms, we blend visual elegance with technical optimization.',
    iconName: 'Layout',
    highlights: [
      'Custom Corporate Portals & High-Conversion Landing Pages',
      'Mobile-First Responsive UI with Fluid Micro-Interactions',
      'Complete Design Systems & Interactive Figma Prototypes',
      'Core Web Vitals Perfection (95+ Google Lighthouse Scores)',
      'Enterprise E-Commerce Platforms & Dynamic Portals',
    ],
    deliverables: [
      'Pixel-perfect, WCAG AA compliant responsive UI',
      'Comprehensive typography and design token tokenset',
      'Fast-loading frontend assets with webp/avif optimizations',
      'Interactive component library built in React & Tailwind',
      'Advanced On-Page SEO structure with Schema.org JSON-LD',
    ],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Figma', 'TypeScript', 'Motion', 'Vite', 'Headless CMS'],
    sla: 'Sub-second page load speeds & 100% cross-device compatibility',
    idealFor: 'Brands demanding memorable visual distinction, exceptional mobile responsiveness, and high conversion rates.',
  },
  {
    id: 'job-order-works',
    title: 'Job Order Works & Technical Execution',
    shortTitle: 'Job Order Works',
    tagline: 'On-demand technical execution, rapid batch operations, and specialized engineering tasks.',
    description:
      'Flexible, high-precision technical job orders tailored to your exact operational requirements. Whether you require batch data processing, custom software adaptations, hardware-software integration, or specialized IT job contracts, our skilled Salem team delivers with speed.',
    iconName: 'Cpu',
    highlights: [
      'Specialized IT Job Orders & Subcontracted Technical Execution',
      'Batch Data Transformation, Cleaning & Digitization',
      'Custom Scripting, Data Scraping & API Pipeline Bridges',
      'Dedicated On-Demand Engineering Sprints with Fixed Milestones',
      'Strict Quality Inspection, Non-Disclosure & SLA Compliance',
    ],
    deliverables: [
      'Dedicated Job Order Ticket tracking with transparent progress',
      'Verified quality-checked data or code release packages',
      'Detailed execution and validation log reports',
      'Milestone sign-off certificates with rapid turnaround',
      'NDA-backed data security & IP ownership transfer',
    ],
    technologies: ['Custom Python Pipelines', 'Bash/Shell', 'PostgreSQL', 'ETL Tools', 'Data Validation Suites'],
    sla: 'Guaranteed turn-around time within 24 to 72 hours for standard job orders',
    idealFor: 'Enterprises and overseas companies needing dependable, high-efficiency outsourced technical tasks and batch execution.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Marcus Vance',
    role: 'Chief Technology Officer',
    company: 'Apex Cloud Systems',
    location: 'Austin, Texas, USA',
    rating: 5,
    serviceCategory: 'software-development',
    serviceName: 'Custom SaaS & Cloud Architecture',
    reviewText:
      'Luxonixstacks engineered our multi-tenant SaaS backend from scratch. Their team delivered spotless TypeScript and microservice code well ahead of deadline. The level of architectural discipline and clear communication across time zones was exceptional.',
    projectOutcome: 'Cut server latency by 54% and reduced cloud hosting costs by $18,000 annually.',
    verified: true,
    date: 'February 2026',
  },
  {
    id: 'test-2',
    name: 'Sarah Lindqvist',
    role: 'Head of Operations',
    company: 'Nordic Logistics Group',
    location: 'Stockholm, Sweden',
    rating: 5,
    serviceCategory: 'job-order-works',
    serviceName: 'Technical Job Order Works',
    reviewText:
      'We assigned a mission-critical job order involving over 450,000 legacy logistics records requiring validation, transformation, and database loading. Luxonixstacks completed the batch run with zero error rate in under 48 hours. Incredible dedication!',
    projectOutcome: '100% accurate batch data migration completed 3 days faster than internal estimates.',
    verified: true,
    date: 'January 2026',
  },
  {
    id: 'test-3',
    name: 'Dr. Tariq Al-Mansoor',
    role: 'Managing Director',
    company: 'Gulf HealthTech Dynamics',
    location: 'Dubai, UAE',
    rating: 5,
    serviceCategory: 'it-services',
    serviceName: 'Managed IT & Cloud Security',
    reviewText:
      'Luxonixstacks restructured our entire server architecture with georedundant backups and zero-downtime failover. Their 24/7 monitoring detected and mitigated an infrastructure bottleneck before it could impact our hospital partner portals.',
    projectOutcome: 'Achieved 99.98% system uptime across 12 consecutive months of healthcare operations.',
    verified: true,
    date: 'December 2025',
  },
  {
    id: 'test-4',
    name: 'David Reynolds',
    role: 'Co-Founder & Product Lead',
    company: 'Verve Studio London',
    location: 'London, United Kingdom',
    rating: 5,
    serviceCategory: 'web-designing',
    serviceName: 'Web Designing & Frontend Architecture',
    reviewText:
      'The web designing team at Luxonixstacks transformed our concepts into a breathtaking, lightning-fast digital experience. The attention to typography, smooth transitions, and mobile responsiveness is world-class. Our inbound conversions doubled in 30 days.',
    projectOutcome: 'Google Lighthouse score raised to 98/100, resulting in a 112% surge in organic demo bookings.',
    verified: true,
    date: 'November 2025',
  },
  {
    id: 'test-5',
    name: 'Rajesh Subramanian',
    role: 'Operations Director',
    company: 'Nexus Precision Engineering',
    location: 'Chennai & Salem, India',
    rating: 5,
    serviceCategory: 'job-order-works',
    serviceName: 'Industrial Job Order & ERP Integration',
    reviewText:
      'Being based in Tamil Nadu, we partnered with Luxonixstacks for custom job orders connecting our plant machinery telemetry with an internal dashboard. Their team was hands-on, professional, and delivered robust code with excellent documentation.',
    projectOutcome: 'Real-time telemetry tracking eliminated 3.5 hours of manual daily shift logs.',
    verified: true,
    date: 'March 2026',
  },
  {
    id: 'test-6',
    name: 'Elena Rostova',
    role: 'VP of Digital Experience',
    company: 'Aetheria FinTech Lab',
    location: 'Frankfurt, Germany',
    rating: 5,
    serviceCategory: 'software-development',
    serviceName: 'FinTech Portal & API Engineering',
    reviewText:
      'Luxonixstacks is our trusted development partner for critical customer verification modules. The team in Salem understands global enterprise security guidelines, OWASP standards, and writes clean, maintainable software.',
    projectOutcome: 'Delivered bank-grade verification module passing third-party penetration audits with zero findings.',
    verified: true,
    date: 'January 2026',
  },
];



export const INDUSTRIES = [
  {
    title: 'FinTech & Banking',
    description: 'Secure, low-latency transaction processing portals, KYC pipelines, and compliance-first software.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Manufacturing & Industrial',
    description: 'ERP modernization, batch job order execution, machine telemetry dashboards, and supply chain tracking.',
    icon: 'Factory',
  },
  {
    title: 'Global E-Commerce',
    description: 'High-conversion headless storefronts, inventory sync systems, payment gateway integrations, and order routing.',
    icon: 'ShoppingBag',
  },
  {
    title: 'Healthcare & Life Sciences',
    description: 'HIPAA-compliant portals, encrypted clinical data pipelines, tele-consultation tools, and uptime management.',
    icon: 'Activity',
  },
  {
    title: 'Logistics & Transportation',
    description: 'Fleet tracking backends, automated consignment dispatchers, waybill processing, and geo-routing services.',
    icon: 'Truck',
  },
  {
    title: 'Startups & Scale-ups',
    description: 'Rapid MVP deployment, zero-friction developer handoffs, scalable cloud foundations, and pitch-ready web presence.',
    icon: 'Rocket',
  },
];

export const FAQS = [
  {
    question: 'Where is Luxonixstacks headquartered, and do you work with international clients?',
    answer:
      'Luxonixstacks is headquartered in Assari Kadu, Vengampatti, Mallur, Salem, Tamil Nadu, India (PIN: 636203). We serve global clients spanning North America, Europe, the Middle East, and Asia-Pacific with seamless remote collaboration, dedicated time-zone alignment, and fluent English communication.',
  },
  {
    question: 'What are "Job Order Works" and how does the process work?',
    answer:
      'Job Order Works are specialized, on-demand technical tasks with defined scopes and rapid turnaround times. Examples include custom data migrations, automated batch transformations, specific module engineering, API bridges, and subcontracted execution. Each job order receives a unique tracking ID, defined SLA, and milestone verification.',
  },
  {
    question: 'How do we track the progress of our development or job order?',
    answer:
      'We provide our dedicated Client Job Order Portal right on our website. You can look up your Order ID (such as LX-2026-881) at any time to see real-time percent completion, current engineer milestones, quality check status, and downloadable deliverable summaries.',
  },
  {
    question: 'How do you guarantee quality and intellectual property security?',
    answer:
      'Every project and job order is governed by comprehensive Non-Disclosure Agreements (NDAs), complete IP ownership transfer upon delivery, and strict multi-tier quality assurance before production deployment.',
  },
  {
    question: 'How quickly can Luxonixstacks start on a new software or IT project?',
    answer:
      'Standard job orders can commence within 24 hours of scope agreement. For custom software development and managed IT infrastructure engagements, we typically conduct a discovery call within 24 to 48 hours and kick off development in the following sprint.',
  },
];



