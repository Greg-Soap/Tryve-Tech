import { SecondaryHeader } from '@/components/SecondaryNav';

export const metadata = {
  title: 'Bralewood Investments Blog',
  description:
    'Explore insights and updates on intelligent investments, financial growth, and wealth management. Stay informed with Bralewood Investments’ latest articles and thought leadership.',
  classification: 'Financial Services Blog',
  keywords:
    'Bralewood Investments, financial growth, intelligent investments, diversified portfolios, wealth management',
  ogTitle:
    'Bralewood Investments Blog - Intelligent Investments and Financial Growth',
  ogDescription:
    'Explore insights and updates on intelligent investments, financial growth, and wealth management. Stay informed with Bralewood Investments’ latest articles and thought leadership.',
  ogType: 'website',
  ogImage: '/favicon.ico',
  ogUrl: 'https://www.bralewood.com/blog',
  twitterTitle:
    'Bralewood Investments Blog - Intelligent Investments and Financial Growth',
  twitterDescription:
    'Explore insights and updates on intelligent investments, financial growth, and wealth management. Stay informed with Bralewood Investments’ latest articles and thought leadership.',
  twitterImage: '/favicon.ico',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SecondaryHeader lead="Homepage" slug="/" />
      {children}
    </>
  );
}
