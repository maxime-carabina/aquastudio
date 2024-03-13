'use client';

import { useState, useEffect } from 'react';

import dynamic from 'next/dynamic';

import { EmailInput } from '@/components';

const Time = dynamic(() => import('./Time'), { ssr: false });

export function Footer() {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="px-[22px] pt-10 pb-14 lg:px-28 lg:pt-[61px] lg:pb-32 bg-primary text-f-secondary flex flex-col lg:flex-row lg:items-start justify-between gap-12 lg:gap-0">
      <div>
        <p className="aqua-banner text-[30px] leading-[27px] lg:text-[50px] lg:leading-[45px] lg:mb-[54px]">
          Aqua
          <br />
          studio
        </p>
        <ul className="list-none aqua-caption lg:flex flex-col lg:gap-10">
          <li className="">
            <a
              target="_blank"
              href="https://www.instagram.com/aqua_stud_/"
              className="relative aqua-caption text-[10px] lg:text-[20px] leading-[30px] uppercase after:content-[''] after:w-0 after:h-[1.5px] after:bg-secondary after:absolute after:left-0 after:-bottom-1.5 after:transition-all duration-[550ms] after:pointer-events-none hover:after:w-full"
            >
              Instagram
            </a>
          </li>
          <li className="">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/marine-perraud-b05a25199/"
              className="relative aqua-caption text-[10px] lg:text-[20px] leading-[30px] uppercase after:content-[''] after:w-0 after:h-[1.5px] after:bg-secondary after:absolute after:left-0 after:-bottom-1.5 after:transition-all duration-[550ms] after:pointer-events-none hover:after:w-full"
            >
              Linkedin
            </a>
          </li>
        </ul>
      </div>
      <div className="max-w-lg w-full mb-20 lg:mb-0">
        <div className="mb-3 flex items-center justify-between aqua-caption text-[12px] leading-[20px] lg:text-[20px] lg:leading-[75px]">
          <p>C’est l’heure de tenter l’expérience !</p>
          <Time time={time} />
        </div>
        <div className="">
          <EmailInput />
        </div>
      </div>
    </footer>
  );
}
