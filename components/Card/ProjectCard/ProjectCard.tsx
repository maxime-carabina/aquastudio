'use client';

import { useState } from 'react';

import Image from 'next/image';

import { Button } from '@/components';
import { cn } from '@/lib/utils';

type ImgProps = {
  url: string;
  alt: string;
  objectFit: string; // look https://tailwindcss.com/docs/object-fit documentation for object-fit
  objectPosition: string; // look https://tailwindcss.com/docs/object-position documentation for object-position
  customClass?: string;
};

interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number | string;
  height?: number;
  img: ImgProps;
  contentButton: string;
}

export function ProjectCard(props: ProjectCardProps) {
  const { width, height, img, contentButton, className, ...rest } = props;

  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div
      className={cn(
        `rounded-2xl relative cursor-pointer block overflow-hidden`,
        className,
      )}
      style={{ width, height }}
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseOut={() => {
        setIsHover(false);
      }}
      {...rest}
    >
      <Image
        src={img.url}
        alt={img.alt}
        quality={100}
        fill
        className={`rounded-2xl ${img.objectFit} ${img.objectPosition} ${img.customClass}`}
        sizes="100% 100%"
        loading="lazy"
      />
      <div
        className={`absolute rounded-2xl w-full h-full hidden lg:block hover:bg-black/10 transition-all duration-300 ease-in-out`}
      />
      <div className="absolute bottom-4 left-5 transition-all duration-300 ease-in-out">
        <Button
          className="relative transiton-all duration-100"
          variant="tertiary"
        >
          {isHover ? 'Je veux en voir plus 👀' : contentButton}
        </Button>
      </div>
    </div>
  );
}
