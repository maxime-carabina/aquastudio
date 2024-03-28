'use client';

import { useState, useEffect } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// import { gsap } from 'gsap';
// import { Flip } from 'gsap/Flip';

// gsap.registerPlugin(Flip);

type NavBarProps = {
  defaultIndex?: number;
};

const LINKS = [
  {
    href: '/',
    label: '🏠',
  },
  {
    href: '',
    label: 'Quoi ?',
  },
  {
    href: '/a-propos',
    label: 'Qui ?',
  },
  {
    href: '/contact',
    label: 'Où et Quand ?',
  },
];

type LinksHovered = {
  id: number;
  isHovered: boolean;
};

export function NavBar(props: NavBarProps) {
  const { defaultIndex = 0 } = props;

  const pathname = usePathname();

  useEffect(() => {
    setSelectedIndex(
      LINKS.findIndex((link) => link.href === pathname) || defaultIndex,
    );
  }, [pathname]);

  const [selectedIndex, setSelectedIndex] = useState<number>(
    LINKS.findIndex((link) => link.href === pathname),
  );
  const [linksHovered, setLinksHovered] = useState<LinksHovered[]>([
    { id: 0, isHovered: false },
    { id: 1, isHovered: false },
    { id: 2, isHovered: false },
    { id: 3, isHovered: false },
  ]);

  function handleClick(index: number) {
    setSelectedIndex(index);
  }

  return (
    <nav className="fixed left-0 bottom-12 w-full z-50">
      <div
        className={`m-auto px-1 py-1 w-fit h-fit bg-secondary/80 backdrop-blur-lg text-f-primary border border-primary/10 rounded-[5px]
                flex items-center justify-center`}
      >
        {LINKS.map((link, index) => (
          <Link
            key={`link-${index}`}
            className={`default-navbar aqua-buttons text-[13px] leading-[0px] lg:text-[20px] lg:leading-[21.24px] h-7 lg:h-10 max-w-full relative flex items-center
              ${
                index === selectedIndex &&
                !linksHovered.some((link) => link.isHovered) &&
                'default-navbar-active'
              }
            `}
            href={link.href}
            onClick={() => handleClick(index)}
            onMouseOver={() => {
              setLinksHovered((prev) =>
                prev.map((link) =>
                  link.id === index ? { ...link, isHovered: true } : link,
                ),
              );
            }}
            onMouseOut={() => {
              setLinksHovered((prev) =>
                prev.map((link) =>
                  link.id === index ? { ...link, isHovered: false } : link,
                ),
              );
            }}
          >
            <div className="relative inline-block z-20">{link.label}</div>
            {linksHovered[index].isHovered && <div className="menu-shape" />}
          </Link>
        ))}
      </div>
    </nav>
  );
}
