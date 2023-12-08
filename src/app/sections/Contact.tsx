import { ContactForm } from '@/components/ContactForm';
import React from 'react';
import { Mail, MapPinIcon, Phone } from 'lucide-react';

export default function Contact() {
  const Info = [
    {
      id: '1',
      icon: <Phone className="rounded-md bg-secondary  p-1 text-primary" />,
      content: '(+234) 903 0710 741 ',
    },
    {
      id: '2',
      icon: <Mail className="rounded-md bg-secondary  p-1 text-primary" />,
      content: 'support@tryve.tech',
    },
    {
      id: '3',
      icon: (
        <MapPinIcon className="rounded-md bg-secondary  p-1 text-primary" />
      ),
      content: '1 Unity Estate, Igbo-Elerin, Ojo, Lagos State, Nigeria',
    },
  ];
  return (
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
          <span className="text-secondary"> Connect</span> with us
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
          <ul className="absolute -right-28 top-[50%] z-20 flex translate-y-[-50%] flex-col gap-5 max-sm:right-5 max-sm:items-end">
            {Info.map((i) => (
              <li
                className="flex w-fit items-center gap-[10px] rounded-[16px] border border-black border-opacity-20 bg-background p-[10px] shadow dark:shadow-round"
                key={i.id}
              >
                {i.icon} {i.content}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
