import React from 'react';

interface IService {
  image?: string;
  title: string;
  text?: string;
  orientation: 'vertical' | 'horizontal';
  width?: number;
  height?: number;
  className?: string;
}

export default function ServiceCard({
  title,
  image,
  text,
  orientation = 'vertical',
  width = 90,
  height = 90,
  className,
}: IService) {
  return (
    <div
      className={` ${className} flex  w-full border-2 border-secondary p-3 shadow-md  ${
        orientation === 'vertical' ? 'flex-col' : 'flex-row items-center'
      }
     gap-3 rounded-[16px] `}
    >
      {image && (
        <img
          src={image}
          alt="Our Services"
          width={width}
          height={height}
          className={`h-[${height}px] w-[${width}px]`}
        />
      )}
      <div className="blogSmall flex flex-col gap-3">
        {text && (
          <p className=" w-fit rounded-[22px] bg-secondary px-3 py-2 text-sm font-bold text-primary">
            {text}
          </p>
        )}
        <span className="font-google text-xl font-light leading-[33px]  ">
          {title}
        </span>
      </div>
    </div>
  );
}
