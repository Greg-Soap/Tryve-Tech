import Link from 'next/link';
import React from 'react';

export default function pages() {
  return (
    <main className="container flex min-h-screen  flex-col items-center justify-between py-[75px] md:py-[120px]">
      <section className="flex flex-col gap-10  max-md:py-6 md:min-h-[500px]   lg:min-h-[800px] lg:gap-16">
        <div className="flex w-full flex-col gap-7 ">
          <h1 className="font-google text-3xl lg:text-[64px] lg:leading-[84px]">
            No Degree or Prior <span className="text-primary">Experience </span>{' '}
            Required to Get Started
          </h1>
          <p className="text-base">
            Ladies and gentlemen, esteemed individuals and aspiring
            professionals,
          </p>
          <p className="text-base">
            We are thrilled to stand before you today to unveil an extraordinary
            opportunity that has the potential to transform your career
            trajectory and enhance your skill set. Our Power Class, hosted twice
            a year, is not just an educational experience; it&apos;s a gateway
            to unlocking your true potential in the dynamic world of Digital
            Marketing and Business analysis.
          </p>{' '}
          <p className="text-base">
            Imagine gaining unparalleled insights into two pivotal topics that
            shape the very essence of success in our field. In our upcoming
            sessions, we will delve deep into a major in Digital marketing and a
            major in Business Intelligence, demystifying complex concepts and
            equipping you with the practical knowledge needed to thrive in
            today&apos;s competitive landscape.
          </p>{' '}
          <p className="text-base">
            What sets our Power Class apart is not just the content, but the
            journey it kickstart. Once you&apos;ve completed the program,
            you&apos;ll not only walk away with newfound expertise but also a
            certification that serves as a testament to your commitment to
            excellence. This certification is not just a piece of paper;
            it&apos;s a badge of honor that opens doors to endless possibilities
            in your professional journey.
          </p>{' '}
          <p className="text-base">
            But that&apos;s not all. We understand that true mastery comes from
            application. That&apos;s why, for a small fee, you&apos;ll gain
            exclusive access to the course content, allowing you to revisit and
            reinforce your learning whenever you need. It&apos;s an investment
            in your ongoing success.
          </p>
          <p className="text-base font-bold">
            Now, here&apos;s the game-changer. To further solidify your
            understanding and skills, we&apos;re offering internship programs
            exclusively for our Power Class participants. Yes, you heard it
            right. This is your chance to apply the knowledge you&apos;ve
            acquired in a real-world setting, all without the need for a degree
            or prior experience.
          </p>{' '}
          <p className="text-base">
            We believe that talent knows no bounds, and our Power Class is
            designed to be inclusive. Whether you&apos;re a recent graduate, a
            seasoned professional looking to pivot, or someone simply passionate
            about Digital marketing and Business analysis, this is your
            opportunity to shine.
          </p>{' '}
          <p className="text-base">
            Don&apos;t miss out on this chance to empower yourself, elevate your
            career, and join a community of like-minded individuals committed to
            excellence. Seize the opportunity, embrace the knowledge, and let
            your journey towards success begin with our Power Class.
          </p>{' '}
          <p className="text-base">
            Enroll now, and let&apos;s shape the future together!
          </p>
          <p className="text-base">
            Course content of our recently just concluded &quot;Mastering Social
            media management&quot; power class is available at a giveaway price
          </p>
          <p className="text-base">
            Reach out on WhatsApp :{' '}
            <Link
              className="text-xl font-bold underline"
              href="tel:(+234) 903 0710 741"
            >
              +234 903 071 0741
            </Link>
          </p>
        </div>
        {/* <img
        src="/images/Union.png"
        alt="hero"
        className="w-full rounded-[22px]"
      /> */}
      </section>
    </main>
  );
}
