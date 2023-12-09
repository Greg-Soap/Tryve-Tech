import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';
import ServiceCard from '@/components/serviceCard';
import { SERVICE_PREVIEW } from '@/assets/data/ServiceData';

export default function ServicePreview() {
  return (
    <section
      id="service-preview"
      className="container flex scroll-m-4 flex-col justify-center gap-10 py-8 max-lg:pb-20 max-md:gap-4 max-md:px-5 max-md:py-6 max-sm:scroll-m-20 max-sm:gap-8  sm:min-h-[800px]"
    >
      <div className="flex w-full flex-col lg:w-[520px]">
        <h2 className="text-base  uppercase tracking-wide text-section max-sm:text-sm ">
          Here are also some of our Organic features
        </h2>
        <h1 className="font-google text-3xl leading-[45px] md:leading-[52.4px] lg:text-[40px]">
          Let’s boost your sales off the roof using our{' '}
          <span className="text-primary">premium </span>services easier
        </h1>
      </div>
      <div className="flex w-full max-w-full  flex-wrap items-center justify-center gap-8 pt-3  md:pt-6 lg:justify-between lg:gap-10 lg:pt-12">
        {SERVICE_PREVIEW.map((t, idx) => (
          <ServiceCard
            key={idx}
            title={t.title}
            image={t.image}
            text={t.category}
            className="sm:w-[45%]  lg:w-[30%] "
            orientation="vertical"
          />
        ))}
      </div>
      <Button
        asChild
        variant={'outline'}
        className="flex w-fit items-center gap-3 rounded-[20px] font-bold"
      >
        <Link href={'/services'}>
          Our Services <ArrowRightIcon />
        </Link>
      </Button>
    </section>
  );
}
