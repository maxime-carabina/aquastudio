import { ReactNode } from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Header,
  ProjectCard,
  Tabs,
} from '@/components';

const PROJECTS = [
  {
    width: 621,
    height: 453,
    img: {
      url: '/images/lpp-baumes.jpg',
      alt: 'lpp-baumes',
      objectFit: 'object-none',
      objectPosition: 'object-[center_85%]',
    },
    contentButton: 'Beauté ✨',
  },
  {
    width: 757,
    height: 453,
    img: {
      url: '/images/projects/MAX/stickers-mockup-2.png',
      alt: 'stickers-mockup-2',
      objectFit: 'object-cover',
      objectPosition: 'object-[center_60%]',
    },
    contentButton: 'Beauté ✨',
  },
  {
    width: 621,
    height: 453,
    img: {
      url: '/images/lpp-baumes.jpg',
      alt: 'lpp-baumes',
      objectFit: 'object-none',
      objectPosition: 'object-[center_85%]',
    },
    contentButton: 'Beauté ✨',
  },
  {
    width: 621,
    height: 453,
    img: {
      url: '/images/lpp-baumes.jpg',
      alt: 'lpp-baumes',
      objectFit: 'object-none',
      objectPosition: 'object-[center_85%]',
    },
    contentButton: 'Beauté ✨',
  },
];

export default function ProjectLayout({ children }: { children: ReactNode }) {
  const tabsConfig = [
    {
      label: 'Direction artistique',
      content: (
        <div className="mt-5 lg:mt-16 text-f-primary">
          <Carousel className="hidden lg:block lg:w-full">
            <CarouselContent className="w-full">
              {PROJECTS.map((project, index) => (
                <CarouselItem
                  key={index}
                  className={index === 0 ? 'pl-[109px]' : ''}
                >
                  <ProjectCard
                    width={project.width}
                    height={project.height}
                    img={project.img}
                    contentButton={project.contentButton}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="lg:hidden flex flex-col gap-4 px-[22px] md:px-16">
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={index}
                width={'100%'}
                height={236}
                img={project.img}
                contentButton={project.contentButton}
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      label: 'UXUI Design',
      content: (
        <div className="mt-5 lg:mt-16 text-f-primary">
          <Carousel className="hidden lg:block lg:w-full">
            <CarouselContent className="w-full">
              {PROJECTS.map((project, index) => (
                <CarouselItem
                  key={index}
                  className={index === 0 ? 'pl-[109px]' : ''}
                >
                  <ProjectCard
                    width={project.width}
                    height={project.height}
                    img={project.img}
                    contentButton={project.contentButton}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="lg:hidden flex flex-col gap-4 px-[22px] md:px-16">
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={index}
                width={'100%'}
                height={236}
                img={project.img}
                contentButton={project.contentButton}
              />
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="min-h-screen">
      <div className="px-[22px] md:px-16 lg:px-28 pt-5">
        <Header />
      </div>
      {children}
      <div className="hidden lg:block pt-11 pb-[26px] lg:pt-12 lg:pb-[70px] text-f-primary">
        <div className="mb-5 md:mb-0 px-[22px] md:px-16 lg:px-[109px]">
          <h1 className="aqua-banner text-[20px] leading-[20px] lg:text-[80px] lg:leading-[135px] uppercase">
            En voir plus !
          </h1>
        </div>
        <Tabs
          customClass="px-[22px] lg:px-[109px]"
          defaultIndex={0}
          tabsConfig={tabsConfig}
        />
      </div>
    </section>
  );
}
