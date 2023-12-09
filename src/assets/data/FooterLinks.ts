type FooterItem = {
  title: string;
  slug: string;
};

type FooterColumn = {
  leadText: string;
  items: FooterItem[];
};

type FooterLink = {
  column: number;
  data: FooterColumn;
};

const footerLinks: FooterLink[] = [
  {
    column: 1,
    data: {
      leadText: 'Company',
      items: [
        { title: 'About us', slug: '/about' },
        { title: 'Our Services', slug: '/services' },
        { title: 'Power Class', slug: '/class' },
      ],
    },
  },
  {
    column: 2,
    data: {
      leadText: 'Get in touch',
      items: [
        { title: 'Contact Form ', slug: '/contact' },
        { title: 'support@tryve.tech', slug: 'mailto:support@tryve.tech' },
        { title: '(+234) 903 0710 741', slug: 'tel:(+234) 903 0710 741' },
      ],
    },
  },
];

export default footerLinks;
