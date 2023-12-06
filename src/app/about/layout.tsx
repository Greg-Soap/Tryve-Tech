import { SecondaryHeader } from '@/components/SecondaryNav';

export const metadata = {
  title: 'About Bralewood Investments',
  description:
    'Learn more about Bralewood Investments, your partner in financial growth. Discover our expertise in creating success through strategic and diversified investments.',
  classification: 'Financial Services',
  keywords:
    'Bralewood Investments, financial growth, intelligent investments, diversified portfolios, wealth management',
  ogTitle: 'About Bralewood Investments',
  ogDescription:
    'Learn more about Bralewood Investments, your partner in financial growth. Discover our expertise in creating success through strategic and diversified investments.',
  ogType: 'website',
  ogImage: '/favicon.ico',
  ogUrl: 'https://www.bralewood.com/about',
  twitterTitle: 'About Bralewood Investments',
  twitterDescription:
    'Learn more about Bralewood Investments, your partner in financial growth. Discover our expertise in creating success through strategic and diversified investments.',
  twitterImage: '/favicon.ico',
};

export default function AboutLayout({
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
