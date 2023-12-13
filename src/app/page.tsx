import Hero from './sections/Hero';
import Cta from './sections/Cta';
import ServicePreview from './sections/ServicePreview';
import Partner from './sections/Partner';
import Success from './sections/Success';
import MiniContact from './sections/MiniContact';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-[72px]">
      <Hero />
      <Partner />
      <Cta />
      <ServicePreview />
      <MiniContact />
    </main>
  );
}
