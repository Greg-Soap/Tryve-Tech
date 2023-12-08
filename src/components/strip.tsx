import React from 'react';

const Strip: React.FC = () => {
  return (
    <div className="flex max-w-full overflow-hidden">
      {Array.from({ length: 25 }, (_, index) => (
        <div
          key={index}
          className="flex items-center gap-6 whitespace-nowrap bg-secondary px-4 py-6 text-base font-[500] uppercase text-primary"
        >
          Tryve tech
          <span className="h-2 w-2 rounded-full bg-primary" />
        </div>
      ))}
    </div>
  );
};

export default Strip;
