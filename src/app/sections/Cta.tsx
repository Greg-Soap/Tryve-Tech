import React from 'react';

export default function Cta() {
  return (
    <section
      id="cta"
      className="container flex scroll-m-20 items-center justify-between max-md:flex-col max-md:gap-4 max-md:px-5 max-md:py-6 md:min-h-max md:gap-12 lg:min-h-[600px] lg:flex-row-reverse lg:gap-24"
    >
      <div className="flex w-full flex-col gap-4 sm:w-5/12 lg:w-[525px]">
        <h2 className="text-base  uppercase tracking-wide text-section max-sm:text-sm ">
          bralewood energy
        </h2>

        <h1 className="font-google text-3xl lg:text-[40px] lg:leading-[52px]">
          A Right Choice that Makes the{' '}
          <span className="text-primary">Difference</span>
        </h1>
        <p className="text-base">
          Choosing Tryve technologies is not just a business decision; it&apos;s
          an investment in a holistic, tailored approach to digital success that
          promises to unlock unprecedented opportunities and propel your
          business to new heights. Tryve Technologies has overtime understood
          the relationship between analogue and digital marketing.
        </p>
      </div>
      <img
        src="/images/cta.png"
        alt="about"
        width={490}
        height={430}
        className="rounded-[22px] sm:w-1/2 lg:w-[500px]"
      />
    </section>
  );
}
