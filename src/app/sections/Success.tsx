import React from 'react';

export default function Success() {
  const Feature = [
    { title: 'stories', text: 'our succes', percent: '87%' },
    { title: 'client', text: 'our happy', percent: '95%' },
    { title: 'student', text: 'our active', percent: '90%' },
  ];
  return (
    <section className=" w-full  bg-primary ">
      <div className="container flex flex-col items-start justify-start gap-8 max-md:px-5 max-md:py-6 md:px-10 md:py-12">
        {Feature.map((item, index) => (
          <div key={index} className="w-full">
            <div className="flex gap-1 text-white">
              <p className="text-xl capitalize">{item.text}</p>
              <p className="text-xl font-bold capitalize">{item.title}</p>
            </div>
            <div className="progress-bar w-full rounded-[22px] md:w-1/2">
              <div
                className="progress-bar-fill flex items-center bg-secondary p-3"
                style={{ width: item.percent }}
              >
                <p className="text-lg font-bold text-white">{item.percent}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
