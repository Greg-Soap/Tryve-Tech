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
      leadText: '',
      items: [
        { title: 'Blog', slug: '#' },
        { title: 'FAQs', slug: '#' },
        { title: 'Career', slug: '#' },
      ],
    },
  },
  {
    column: 2,
    data: {
      leadText: '',
      items: [
        { title: 'Insights', slug: '#' },
        { title: 'Privacy Policy', slug: '#' },
        { title: 'Terms and Conditions', slug: '#' },
      ],
    },
  },
];

export default footerLinks;
