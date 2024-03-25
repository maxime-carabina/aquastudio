'use client';

import { ReactNode, useState } from 'react';

type AccordionProps = {
  title: string;
  content: ReactNode;
};

export function Accordion(props: AccordionProps) {
  const { title, content } = props;

  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

  return (
    <div className="py-6 border-t border-secondary">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between items-center w-full"
      >
        <span className="font-Gotham font-normal lg:text-[20px] antialiased">
          {title}
        </span>
        <svg
          className="fill-secondary shrink-0"
          width="21"
          height="21"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="9"
            width="21"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && '!rotate-180'
            }`}
          />
          <rect
            y="9"
            width="21"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && '!rotate-180'
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-f-secondary ${
          accordionOpen
            ? 'grid-rows-[1fr] opacity-100 mt-6'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">{content}</div>
      </div>
    </div>
  );
}
