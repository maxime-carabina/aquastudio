'use client';

import { useState, useEffect } from 'react';

import dynamic from 'next/dynamic';
import Link from 'next/link';

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
    <footer className="px-[22px] pt-10 lg:px-28 lg:pt-[61px] lg:pb-[73px] bg-primary text-f-secondary flex flex-col lg:flex-row lg:items-center justify-between gap-12 lg:gap-0">
      <div>
        <p className="aqua-banner text-[30px] leading-[27px] lg:text-[50px] lg:leading-[45px] lg:mb-10">
          Aqua
          <br />
          studio
        </p>
        <ul className="hidden list-none lg:flex flex-col aqua-caption leading-[50px]">
          <li>
            <Link
              href=""
              className="relative after:content-[''] after:w-0 after:h-[1.5px] after:bg-secondary after:absolute after:left-0 after:-bottom-1.5 after:transition-all duration-[550ms] after:pointer-events-none hover:after:w-full"
            >
              Quoi ?
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="relative after:content-[''] after:w-0 after:h-[1.5px] after:bg-secondary after:absolute after:left-0 after:-bottom-1.5 after:transition-all duration-[550ms] after:pointer-events-none hover:after:w-full"
            >
              Qui ?
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="relative after:content-[''] after:w-0 after:h-[1.5px] after:bg-secondary after:absolute after:left-0 after:-bottom-1.5 after:transition-all duration-[550ms] after:pointer-events-none hover:after:w-full"
            >
              Où et Quand ?
            </Link>
          </li>
        </ul>
      </div>
      <div className="max-w-lg w-full">
        <div className="mb-3 flex items-center justify-between aqua-caption text-[12px] leading-[20px] lg:text-[20px] lg:leading-[75px]">
          <p>C’est l’heure de tenter l’expérience !</p>
          <Time time={time} />
        </div>
        <div className="mb-7 lg:mb-24">
          <EmailInput />
        </div>
        <div className="flex items-center justify-end gap-14 lg:gap-24">
          <a
            target="_blank"
            href="https://www.instagram.com/aqua_stud_/"
            className="aqua-caption text-[10px] lg:text-[20px] leading-[75px] uppercase hover:text-f-secondary/75 transition-all duration-300"
          >
            Instagram
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/marine-perraud-b05a25199/"
            className="aqua-caption text-[10px] lg:text-[20px] leading-[75px] uppercase hover:text-f-secondary/75 transition-all duration-300"
          >
            Linkedin
          </a>
        </div>
      </div>
    </footer>
  );
}
