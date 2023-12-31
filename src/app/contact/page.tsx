import { ContactForm } from '@/components/ContactForm';
import React from 'react';
import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function page() {
  const Info = [
    {
      id: '1',
      icon: <Phone className="rounded-md bg-secondary  p-1 text-primary" />,
      content: '(+234) 903 0710 741 ',
      href: 'tel:(+234) 903 0710 741',
    },
    {
      id: '2',
      icon: <Mail className="rounded-md bg-secondary  p-1 text-primary" />,
      content: 'support@tryve.tech',
      href: 'mailto:support@tryve.tech',
    },
  ];
  return (
    <main className="container flex min-h-screen  flex-col items-center justify-between py-[75px] md:py-[120px]">
      <section
        id="contact"
        className="container flex scroll-m-20 items-center justify-between pt-8 max-lg:flex-col max-lg:gap-10 max-lg:py-10 max-md:px-5  max-sm:gap-8 sm:min-h-[720px] sm:items-start lg:mb-36 lg:items-center"
      >
        <div className="flex w-full flex-col lg:w-[465px]">
          <h2 className="text-sm font-light uppercase tracking-[3.5px] text-section max-sm:text-sm">
            contact us
          </h2>
          <h1 className="font-google text-3xl leading-[45px]  md:leading-[52.4px] lg:text-[40px]">
            Reach out and
            <span className="text-primary"> Connect</span> with us
          </h1>
          <p className="pt-6 text-base font-normal leading-[24px] ">
            Don’t hesitate to reach out to us by using the contact details below
            or by filling the form.
          </p>
          <div className="relative mt-[68px] h-[366px] w-full md:w-[366px] ">
            <img
              src="/images/circle-map.png/"
              alt="contact us"
              className="h-[366px] w-full rounded-2xl bg-secondary md:w-[366px]"
            />
            <ul className="absolute -right-28 top-[50%] z-20 flex translate-y-[-50%] flex-col gap-24 max-sm:right-5 max-sm:items-end">
              {Info.map((i) => (
                <li className="" key={i.id}>
                  <Link
                    href={i.href}
                    className="flex w-fit  items-center gap-[10px] rounded-[16px] border border-black border-opacity-20 bg-background p-[10px] text-xl shadow dark:shadow-round"
                  >
                    {i.icon} {i.content}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
