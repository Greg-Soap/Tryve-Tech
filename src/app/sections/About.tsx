import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function About() {
  return (
    <section
      id="about"
      className="container flex scroll-m-20 items-center justify-between max-md:flex-col max-md:gap-4 max-md:px-5 max-md:py-6 md:min-h-[600px]  lg:min-h-[800px] lg:flex-row-reverse"
    >
      <div className="flex w-full flex-col gap-4 sm:w-5/12 lg:w-[525px]">
        <h1 className="font-google text-3xl lg:text-[40px] lg:leading-[52px]">
          Our <span className="text-primary">Commitment</span> to Teamwork,
          Trust, and Integrity
        </h1>
        <p className="text-base">
          We recognize that the collective strength of our team far surpasses
          individual capabilities. We foster an environment where collaboration
          is not only encouraged but celebrated. By leveraging diverse
          perspectives and skills, we create a dynamic synergy that propels us
          towards innovation and excellence.
        </p>
        <p className="text-base">
          Trust is the bedrock of any successful relationship, and within our
          company, it forms the foundation of every interaction. We trust in the
          competence and commitment of each team member, fostering an atmosphere
          of mutual reliance. This trust extends beyond our internal teams to
          our clients, partners, and stakeholders, building enduring
          relationships based on transparency and reliability.
        </p>
        <Button
          asChild
          variant={'outline'}
          className="w-fit rounded-[20px] font-bold"
        >
          <Link href="/about">Learn More</Link>
        </Button>
      </div>
      <img
        src="/images/about.png"
        alt="about"
        width={520}
        height={590}
        className="rounded-[22px]  sm:w-1/2 lg:w-[518px]"
      />
    </section>
  );
}
