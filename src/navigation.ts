export const headerData = {
  links: [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/#about' },
    { text: 'Resume', href: '/#resume' },
    { text: 'Portfolio', href: '/#portfolio' },
    { text: 'Blog', href: '/#blog' },
  ],
  actions: [{ text: 'Github', href: 'https://github.com/sondy91', target: '_blank', icon: 'tabler:brand-github' }],
};

export const footerData = {
  links: [
    {
      title: 'Navigation',
      links: [
        { text: 'Home', href: '/' },
        { text: 'About', href: '/#about' },
        { text: 'Resume', href: '/#resume' },
        { text: 'Portfolio', href: '/#portfolio' },
        { text: 'Blog', href: '/blog' },
        { text: 'Contact', href: '/contact' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/sondy91' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/austin-sonderman/' },
  ],
  footNote: `© ${new Date().getFullYear()} Austin Sonderman. All rights reserved.`,
};
