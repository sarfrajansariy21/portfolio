import { Project, Skill, NavItem, PersonalInfo } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Sarfraj Ansari',
  emails: ['sarfrajy21@gmail.com', 'sarfrajy21@hotmail.com'],
  phones: ['+917645029969', '+917654920314'],
  location: 'India',
  role: 'Full Stack & Web3 Developer',
  github: 'https://github.com/sarfrajansariy21',
  linkedin: 'https://linkedin.com/in/sarfrajansari',
  profileImage: '/sarfraj-profile.png',
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Gala Wallet',
    description: 'Developed a fully functional Chrome extension enabling users to send, swap, and receive crypto and NFTs across multiple networks; implemented WalletConnect for seamless DApp integration, adopted by 5,000+ users.',
    techStack: ['React.js', 'Web3.js', 'WalletConnect', 'Chrome Extension API'],
    imageUrl: '/gala_wallet_hero_1774943499856.png',
    liveDemoUrl: 'https://chromewebstore.google.com/detail/gala-wallet/enogcihmejeobfbnkkbcgcjffgdieaoj',
    githubUrl: '#',
  },
  {
    id: '2',
    title: 'Enfineo',
    description: 'Engineered end-to-end crypto banking features including Web3 wallet integration, real-time exchange, live price feeds, portfolio dashboards, and secure JWT-authenticated REST APIs.',
    techStack: ['React.js', 'Node.js', 'Web3.js', 'PostgreSQL', 'REST APIs'],
    imageUrl: '/enfineo_dashboard_1774943522264.png',
    liveDemoUrl: 'https://enfineo.com/',
    githubUrl: '#',
  },
  {
    id: '3',
    title: 'BlockAgile',
    description: 'Jira-inspired project management tool built with Next.js SSR, featuring sprint planning, issue tracking, and team collaboration for 500+ daily active users.',
    techStack: ['Next.js', 'React.js', 'TypeScript', 'SSR'],
    imageUrl: '/blockagile_app_1774943541362.png',
    liveDemoUrl: '#',
    githubUrl: '#',
  },
  {
    id: '4',
    title: 'Fanzpick',
    description: 'Ad management platform for live football matches with real-time scheduling and audience targeting.',
    techStack: ['Next.js', 'React.js', 'TypeScript', 'SSR'],
    imageUrl: '/fanzpick_ads_1774943570482.png',
    liveDemoUrl: 'https://fanzpick.com/',
    githubUrl: '#',
  },
  {
    id: '5',
    title: 'BlueChip Bank',
    description: 'Admin dashboard for managing user balances and transaction history with role-based access control.',
    techStack: ['Next.js', 'React.js', 'TypeScript', 'SSR'],
    imageUrl: '/bluechip_bank_admin_1774943589935.png',
    liveDemoUrl: '#',
    githubUrl: '#',
  },
  {
    id: '6',
    title: 'Arbitrage Bot',
    description: 'React/Next.js interface for identifying and executing profitable crypto trading opportunities using real-time market data.',
    techStack: ['Next.js', 'React.js', 'TypeScript', 'SSR'],
    imageUrl: '/arbitrage_bot_interface_1774943608214.png',
    liveDemoUrl: '#',
    githubUrl: '#',
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: 'React/Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Redux/Zustand', category: 'Frontend' },
  { name: 'HTML5/CSS3', category: 'Frontend' },
  // Backend
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express/NestJS', category: 'Backend' },
  { name: 'GraphQL/REST', category: 'Backend' },
  // Database
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Redis', category: 'Database' },
  // Tools
  { name: 'Git/GitHub', category: 'Tools' },
  { name: 'Docker', category: 'Tools' },
  { name: 'CI/CD (GitHub Actions)', category: 'Tools' },
  { name: 'AWS/Vercel', category: 'Tools' },
];
