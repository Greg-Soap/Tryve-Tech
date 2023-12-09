import { Button } from '@/components/ui/button';
import Link from 'next/link';

import React from 'react';

export default function Help() {
  return (
    <section className="container flex flex-col items-center gap-10 max-md:px-5 max-md:py-6 md:min-h-[400px]   lg:min-h-[500px]">
      <div className="flex  w-full flex-col items-center justify-center  rounded-[20px]  bg-secondary  py-4 max-md:px-2 md:py-7 lg:py-14">
        <h1 className="font-google text-xl font-bold text-white md:text-[40px] md:leading-[53px]">
          Need Help?
        </h1>
        <p className="font-google mb-10 text-center text-xl font-light text-white md:text-[40px] md:leading-[53px] lg:w-[850px]">
          Reach out to us as we would respond as soon as possible
        </p>
        <Button
          variant={'review'}
          className="bg-white font-bold text-secondary"
        >
          <Link href="/#contact">Contact us</Link>
        </Button>
      </div>
    </section>
  );
}
