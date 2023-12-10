import Link from 'next/link';
import React from 'react';

export default function MiniContact() {
  return (
    <section className="container flex scroll-m-20 items-center justify-center py-6 max-md:flex-col max-md:gap-4 max-md:px-5  lg:flex-row">
      <img
        src="/images/woman.png"
        alt="contact us"
        className="rounded-[22px]  "
      />
      <div className="flex w-full flex-col gap-4 sm:w-5/12 lg:w-[525px]">
        <h1 className="font-google text-3xl lg:text-[40px] lg:leading-[52px]">
          Have Any Questions?
        </h1>

        <Link href="tel:(+234) 903 0710 741" className="text-xl">
          (+234) 903 0710 741
        </Link>
      </div>
    </section>
  );
}
