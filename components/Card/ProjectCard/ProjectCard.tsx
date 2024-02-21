'use client';

import { useState } from 'react';

import Image from 'next/image';

import { Button } from '@/components';

type ImgProps = {
  url: string;
  alt: string;
  objectFit: string; // look https://tailwindcss.com/docs/object-fit documentation for object-fit
  objectPosition: string; // look https://tailwindcss.com/docs/object-position documentation for object-position
};

type ProjectCardProps = {
  width: number | string;
  height: number;
  img: ImgProps;
  contentButton: string;
  customClass?: string;
};

export function ProjectCard(props: ProjectCardProps) {
  const { width, height, img, contentButton, customClass, ...rest } = props;

  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div
      className={`rounded-2xl relative cursor-pointer
        ${customClass}`}
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
        className={`rounded-2xl ${img.objectFit} ${img.objectPosition}`}
        sizes="100% 100%"
      />
      <div className="absolute rounded-2xl w-full h-full hover:backdrop-blur-[1px] hidden lg:block" />
      <div className="absolute bottom-4 left-5 transition-all duration-300 ease-in-out">
        <Button
          customClass="relative transiton-all duration-100"
          variant="tertiary"
        >
          {isHover ? 'Je veux en voir plus 👀' : contentButton}
        </Button>
      </div>
    </div>
  );
}
