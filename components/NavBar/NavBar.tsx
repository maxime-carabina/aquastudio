'use client';

import { useState, useEffect } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavBarProps = {
  defaultIndex?: number;
};

const LINKS = [
  {
    href: '/',
    label: '🏠',
    id: 'home',
  },
  {
    href: '/projet',
    label: 'Quoi ?',
    id: 'what',
  },
  {
    href: '/a-propos',
    label: 'Qui ?',
    id: 'who',
  },
  {
    href: '/contact',
    label: 'Où et Quand ?',
    id: 'where',
  },
];

export function NavBar(props: NavBarProps) {
  const { defaultIndex = 0 } = props;

  const pathname = usePathname();

  useEffect(() => {
    LINKS.forEach((link) => {
      if (pathname.includes(link.href)) {
        setActiveLink(link.id);
      }
    });
  }, [pathname]);

  const [activeLink, setActiveLink] = useState(LINKS[defaultIndex].id);
  const [hoveredLink, setHoveredLink] = useState<null | string>(null);

  const handleClick = (link: string) => {
    setActiveLink(link);
  };

  const handleHover = (link: string) => {
    setHoveredLink(link);
  };

  const handleLeave = () => {
    setHoveredLink(null);
  };

  return (
    <div className="fixed left-0 bottom-12 w-full">
      <nav className="default-nav z-50 m-auto border border-primary/10 rounded-lg bg-secondary/80 backdrop-blur-lg shadow w-fit">
        <ul className="flex items-center aqua-caption antialiased text-f-primary text-[13px] lg:text-[20px] lg:leading-[21.24px] p-1 list-none relative">
          {LINKS.map((link, id) => (
            <li className="z-10" key={id}>
              <Link
                href={link.href}
                id={link.id}
                className={`rounded-md inline-flex items-center px-2.5 py-4 transition-colors duration-300 h-9 lg:h-11 ${
                  activeLink === link.id && hoveredLink == null ? 'active' : ''
                }`}
                onClick={() => handleClick(link.id)}
                onMouseEnter={() => handleHover(link.id)}
                onMouseLeave={handleLeave}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
