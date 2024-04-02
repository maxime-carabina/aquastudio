'use client';

import { ReactNode, useState } from 'react';

type AccordionProps = {
  title: string | ReactNode;
  content: ReactNode;
  variant?: 'border' | 'list';
  size?: 'default' | 'large'; // Add a prop to allow the accordion to be 'large
  allowClose?: boolean; // Add a prop to allow the accordion to be closed
  isOpen?: boolean;
  customClass?: string;
};

export function Accordion(props: AccordionProps) {
  const { size = 'default', variant = 'border' } = props;

  return variant === 'list' ? (
    <ListAccordion {...props} />
  ) : size === 'large' ? (
    <LargeAccordion {...props} />
  ) : (
    <DefaultAccordion {...props} />
  );
}

function ListAccordion(props: AccordionProps) {
  const { title, content, isOpen = false, customClass } = props;

  const [accordionOpen, setAccordionOpen] = useState<boolean>(isOpen);

  return (
    <div className={`${customClass}`}>
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex items-center gap-6 lg:gap-12 hover:text-f-secondary/75 transition-all duration-300 w-full antialiased"
      >
        {title}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-f-secondary ${
          accordionOpen
            ? 'grid-rows-[1fr] opacity-100 mt-2'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">{content}</div>
      </div>
    </div>
  );
}

function LargeAccordion(props: AccordionProps) {
  const { title, content, allowClose = true } = props;

  const [accordionOpen, setAccordionOpen] = useState<boolean>(
    allowClose ? false : true,
  );

  return (
    <div className="py-6 pb-7 lg:pt-3.5 lg:pb-20 border-t border-secondary">
      <button
        onClick={() => {
          if (!allowClose) return;
          setAccordionOpen(!accordionOpen);
        }}
        className={`flex justify-between items-center w-full ${allowClose ? '' : 'cursor-default'}`}
      >
        <span className="font-Gotham font-normal text-[14px] lg:text-[40px] antialiased">
          {title}
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-f-secondary ${
          accordionOpen
            ? 'grid-rows-[1fr] opacity-100 mt-2.5 lg:mt-6'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">{content}</div>
      </div>
    </div>
  );
}

function DefaultAccordion(props: AccordionProps) {
  const { title, content } = props;

  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

  return (
    <div className="py-6 border-t border-secondary">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between items-center w-full"
      >
        <span className="font-Gotham font-normal text-[12px] lg:text-[20px] antialiased">
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
