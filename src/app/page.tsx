import Hero from './sections/Hero';
import Cta from './sections/Cta';
import ServicePreview from './sections/ServicePreview';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-[72px]">
      <Hero />
      <Cta />
      <ServicePreview />
    </main>
  );
}
