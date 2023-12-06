import { Header } from '@/components/Nav';
import './globals.css';
import { Quicksand } from 'next/font/google';
import localFont from 'next/font/local';
import { ThemeProvider } from '@/components/theme-provider';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Tryve Technologies - Elevate Your Digital Presence',
  description:
    'Unlock the full potential of your brand with Tryve Technologies. We offer a range of cutting-edge digital marketing services to boost your online visibility and drive growth.',
  classification: 'Digital Marketing Services',
  keywords:
    'Tryve Technologies, digital marketing, online presence, SEO, social media marketing, content strategy, web development',
  ogTitle: 'Tryve Technologies - Elevate Your Digital Presence',
  ogDescription:
    'Unlock the full potential of your brand with Tryve Technologies. We offer a range of cutting-edge digital marketing services to boost your online visibility and drive growth.',
  ogType: 'website',
  ogImage: '/tryve_logo.jpg',
  ogUrl: 'https://www.tryve.tech',
  twitterTitle: 'Tryve Technologies - Elevate Your Digital Presence',
  twitterDescription:
    'Unlock the full potential of your brand with Tryve Technologies. We offer a range of cutting-edge digital marketing services to boost your online visibility and drive growth.',
  twitterImage: '/tryve_favicon.ico',
};

const quicksand = Quicksand({ subsets: ['latin'] });
const mcQueen = localFont({
  src: [
    {
      path: '../assets/fonts/mcqueen-regular.ttf',
      weight: '400',
      style: 'normal',
    },
    { path: '../assets/fonts/McQueen.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-mcqueen',
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/android-chrome-192x192.png"
          sizes="192x192"
        />
        <link
          rel="icon"
          type="image/png"
          href="/android-chrome-512x512.png"
          sizes="512x512"
        />
      </head>
      <body className={`${quicksand.className} ${mcQueen.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
