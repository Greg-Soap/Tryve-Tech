import { SERVICE_DATA } from '@/assets/data/ServiceData';
import ServiceCard from '@/components/serviceCard';
import React from 'react';

export default function pages() {
  return (
    <main className=" container flex min-h-screen flex-col items-center justify-between py-[50px] md:py-[100px]">
      <section className="flex flex-col gap-10 max-md:py-6 md:min-h-[500px]   lg:min-h-[800px] lg:gap-16">
        <div className="flex w-full max-w-full flex-wrap items-center gap-12 pt-3 md:pt-6 lg:justify-between lg:gap-24 lg:pt-12">
          {SERVICE_DATA.map((t, idx) => (
            <div
              key={idx}
              className={`w-full lg:w-${
                idx === 2 ? 'full' : '[45%]'
              }  items-center`}
            >
              <h1 className="text-center font-google text-3xl lg:text-[60px] lg:leading-[80px]">
                {t.category}
              </h1>
              <p className="m-auto mb-10 w-full text-center text-lg lg:w-1/2">
                {t.text}
              </p>
              <div className="flex flex-wrap justify-center gap-5 py-5 ">
                {t.services.map((s, idx) => (
                  <ServiceCard
                    key={idx}
                    title={s.title}
                    image={s.image}
                    orientation="vertical"
                    className={`single-services-box items-center border-none text-center text-xl sm:w-[48%] lg:w-[30%]`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
