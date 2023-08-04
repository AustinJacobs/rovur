export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Rovur',
  description:
    'Join Rovur to explore fascinating cultures worldwide. Discover captivating traditions, intriguing facts, and immersive experiences from diverse places. Satiate your wanderlust and gain insightful knowledge of our interconnected world. Let Rovur be your guide to a richer cultural journey.',
  navItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Docs',
      href: '/docs',
    },
    {
      label: 'Pricing',
      href: '/pricing',
    },
    {
      label: 'Blog',
      href: '/blog',
    },
    {
      label: 'About',
      href: '/about',
    },
  ],
  navMenuItems: [
    {
      label: 'Profile',
      href: '/profile',
    },
    {
      label: 'Dashboard',
      href: '/dashboard',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Team',
      href: '/team',
    },
    {
      label: 'Calendar',
      href: '/calendar',
    },
    {
      label: 'Settings',
      href: '/settings',
    },
    {
      label: 'Help & Feedback',
      href: '/help-feedback',
    },
    {
      label: 'Logout',
      href: '/logout',
    },
  ],
  links: {
    github: 'https://github.com/AustinJacobs',
    twitter: 'https://twitter.com/austtjac',
  },
};
