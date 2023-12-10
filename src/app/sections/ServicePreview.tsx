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
      className="container flex scroll-m-4 flex-col items-center justify-between gap-10 py-8 max-lg:pb-20 max-md:gap-4 max-md:px-5 max-md:py-6 max-sm:scroll-m-20 max-sm:gap-8   md:flex-row"
    >
      <div className="flex w-full flex-col gap-4 sm:w-5/12 lg:w-[525px]">
        <div className="flex w-full flex-col lg:w-[520px]">
          <h1 className="font-google text-3xl leading-[45px] md:leading-[52.4px] lg:text-[40px]">
            Here are also some of our{' '}
            <span className="text-primary"> Organic </span> features
          </h1>
          <p className="text-base">
            Let’s boost your sales off the roof using our premium services
            easier
          </p>
        </div>
        <div className="flex w-full max-w-full  flex-wrap  justify-center gap-8 pt-3  md:pt-6 lg:justify-between lg:gap-10 lg:pt-12">
          {SERVICE_PREVIEW.map((t, idx) => (
            <ServiceCard
              key={idx}
              title={t.title}
              className="border-none  sm:w-[45%]  "
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
      </div>
      <img src="/images/2.png" alt="services" className="rounded-[22px] " />
    </section>
  );
}
