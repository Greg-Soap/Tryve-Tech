import React from 'react';
import Image from 'next/image';
import AboutCoreValues from '@/assets/data/AboutData';
import BoardOfDirectives from '@/assets/data/BoardData';
import Help from '../sections/Help';
export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-[75px] md:pt-[150px]">
      <section className="container flex flex-col gap-10 max-md:px-5 max-md:py-6 md:min-h-[500px]   lg:min-h-[800px] lg:gap-16">
        <div className="flex w-full flex-col gap-7 sm:w-2/3 lg:w-[915px]">
          <h1 className="font-mcqueen text-3xl lg:text-[64px] lg:leading-[84px]">
            Unveiling Our
            <span className="text-primary">Journey: </span> Crafting Excellence
            in
            <span className="text-secondary"> Finance.</span>
          </h1>
          <p className="text-base">
            With a laser focus on creating and managing solutions, we harness
            our unique expertise to meet the needs of our clients, ensuring
            their financial goals and environmental ideals align seamlessly.
          </p>
        </div>
        <img
          src="/images/Union.png"
          alt="hero"
          className="w-full rounded-[22px]"
        />
      </section>
      <section className="container flex scroll-m-20 items-center justify-between max-md:flex-col-reverse max-md:gap-4 max-md:px-5 max-md:py-6 md:min-h-[700px] md:py-5   lg:min-h-[800px] lg:flex-row-reverse">
        <img
          src="/images/about1.png"
          alt="about"
          width={520}
          height={590}
          className="rounded-[22px] sm:w-1/2 lg:w-[518px]"
        />
        <div className="flex w-full flex-col gap-4 sm:w-5/12 lg:w-[525px]">
          <h1 className="font-mcqueen text-3xl lg:text-[40px] lg:leading-[52px]">
            Cultivating <span className="text-primary">values </span> and
            Defining our
            <span className="text-secondary"> Purpose</span>
          </h1>
          <p className="font-mcqueen text-xl font-medium">Who we are</p>
          <p className="text-base">
            Established in 2019, we set out to revolutionize finance in Nigeria
            and beyond. We specialize in various financial services, from
            foreign exchange trading to innovative renewable energy projects.
            What sets us apart is our unwavering commitment to making
            transactions hassle-free. Since our inception on August 5, 2019,
            we&apos;ve been evolving to meet the changing needs of our clients.
            We are not just a company; we&apos;re a dynamic force, dedicated to
            guiding you towards financial ease and comfort.
          </p>
          <p className="font-mcqueen text-xl font-medium">Our Vision</p>
          <p className="text-base">
            To be Africa’s foremost financial services provider
          </p>
          <p className="font-mcqueen text-xl font-medium">Our Mission</p>
          <p className="text-base">
            Empower our clients to achieve financial prosperity and security by
            providing innovative financial solutions.
          </p>
          <p className="text-base">
            Leverage technology and expertise in delivering reliable and
            seamless services across various markets.
          </p>
          <p className="text-base">
            Foster an organization where employees can thrive, grow, and find
            fulfillment in their careers.
          </p>
        </div>
      </section>
      <section className="container flex flex-col gap-10 max-md:px-5 max-md:py-6 md:min-h-[700px] md:py-5   lg:min-h-[700px] ">
        <div className="flex w-full flex-col gap-4 ">
          <h1 className="font-mcqueen text-3xl lg:text-[40px] lg:leading-[52px]">
            Our <span className="text-primary">Core </span>
            <span className="text-secondary"> Values</span>
          </h1>
          <p className="text-base sm:w-5/12 lg:w-[525px]">
            To achieve our vision and carry out our mission, we have a defined
            set of behavioral attributes we expect in guiding our company. These
            set of shared values guide our relationships with each other and
            clients as well.
          </p>
          <div className="flex flex-wrap items-start justify-center gap-6 pt-8 md:pt-12 lg:pt-16">
            {AboutCoreValues.map(({ img, id, heading }) => (
              <div className="flex w-[180px] flex-col gap-3" key={id}>
                <img
                  alt="our values"
                  width={180}
                  height={180}
                  className="rounded-[22px]"
                  src={img}
                />
                <p className="text-center font-mcqueen text-lg">{heading}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container flex flex-col items-center gap-10 max-md:px-5 max-md:py-6 md:min-h-[700px] md:py-10   lg:min-h-[700px]">
        <div className="flex w-full flex-col items-center gap-4">
          <h1 className="text-center font-mcqueen text-3xl lg:text-[40px] lg:leading-[52px]">
            <span className="text-primary">Board </span> of
            <span className="text-secondary"> Directors</span>
          </h1>
          <p className="text-center text-base">
            Visionary leaders who guide our company towards excellence
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 md:pt-12 lg:pt-16">
            {BoardOfDirectives.map((board, idx) => (
              <div className="flex flex-col gap-5" key={idx}>
                <img
                  alt="our values"
                  width={330}
                  height={330}
                  className="h-[330px] rounded-[22px]"
                  src={board.image}
                />
                <p className="font-mcqueen text-xl font-light">{board.name}</p>
                <p className="text-sm font-light">{board.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Help />
    </main>
  );
}
