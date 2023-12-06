import Strip from '@/components/strip';
import About from './sections/About';
import Contact from './sections/Contact';
import Hero from './sections/Hero';
import Cta from './sections/Cta';
import Testimonial from './sections/Testimonial';
import ServicePreview from './sections/ServicePreview';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-[72px]">
      <Hero />
      <Strip />
      <About />
      <ServicePreview />
      <Cta />
      <Testimonial />
      <Contact />
    </main>
  );
}
