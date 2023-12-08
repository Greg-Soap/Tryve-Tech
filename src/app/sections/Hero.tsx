import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="container flex scroll-m-20 items-center justify-between max-md:flex-col max-md:gap-4 max-md:px-5 max-md:py-6 md:min-h-[500px] lg:min-h-[600px]"
    >
      <div className="flex w-full flex-col gap-4 sm:w-5/12 lg:w-[612px]">
        <h2 className="text-base  uppercase tracking-wide text-section max-sm:text-sm ">
          Tryve Technologies
        </h2>
        <h1 className="font-google text-3xl lg:text-[60px] lg:leading-[80px]">
          Gateway to <span className="text-primary">Digital</span> Success
        </h1>
        <p className="text-base">
          Unleash the power of tailored digital solutions designed to elevate
          your brand, boost sales, and generate leads. Our team of seasoned
          professionals brings a wealth of experience to the table, blending
          global trends with local insights to create strategies that resonate
          with your audience.
        </p>
        <Button asChild className="w-fit rounded-[20px] bg-secondary font-bold">
          <Link href="#contact">Contact us</Link>
        </Button>
      </div>
      <img
        src="/images/solution.png"
        alt="hero"
        width={518}
        height={607}
        className="rounded-[22px]  sm:w-1/2 lg:w-[518px]"
      />
    </section>
  );
}
