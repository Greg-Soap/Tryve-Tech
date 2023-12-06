import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { ModeToggle } from './theme-toggle';

export function SecondaryHeader({
  lead,
  slug,
}: {
  lead: string;
  slug: string;
}) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-b-muted bg-background">
      <nav className="container mx-auto  flex w-full items-center justify-between bg-background px-6 py-4">
        <a
          className="flex items-center gap-3 font-bold text-neutral-400 transition hover:text-neutral-500"
          href={slug}
        >
          <ArrowLeft /> back to {lead}
        </a>
        <div className="flex gap-4">
          <ModeToggle />
          <a href="/">
            <Logo />
          </a>
        </div>
      </nav>
    </header>
  );
}

function Logo() {
  return <img src="/images/logo.jpg" width={75} height={50} alt="logo" />;
}
