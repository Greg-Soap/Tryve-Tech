import React from 'react';

interface IService {
  image: string;
  title: string;
  text: string;
  orientation: 'vertical' | 'horizontal';
  width?: number;
  height?: number;
}

export default function ServiceCard({
  title,
  image,
  text,
  orientation = 'vertical',
  width = 90,
  height = 90,
}: IService) {
  return (
    <div
      className={`flex w-fit max-sm:w-full ${
        orientation === 'vertical' ? 'flex-col' : 'flex-row items-center'
      }
     gap-3 rounded-[16px] `}
    >
      <img
        src={image}
        alt="Our Services"
        width={width}
        height={height}
        className={`h-[${height}px] w-[${width}px]`}
      />
      <div className="blogSmall flex flex-col gap-3">
        <p className=" w-fit rounded-[22px] bg-secondary px-3 py-2 text-sm font-bold text-primary">
          {text}
        </p>{' '}
        <span className="font-mcqueen text-xl font-light leading-[33px]  ">
          {title}
        </span>
      </div>
    </div>
  );
}
