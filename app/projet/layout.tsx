import { ReactNode } from 'react';

import Link from 'next/link';

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

const PROJECTS_DA = [
  {
    width: 621,
    height: 481,
    img: {
      url: '/images/projects/LES_PETITS_PRODIGES/baumes.webp',
      alt: 'lpp-baumes',
      objectFit: 'object-cover',
      objectPosition: 'object-center',
    },
    contentButton: 'Beauté ✨',
    linkToPage: 'les-petits-prodiges',
  },
  {
    width: 470,
    height: 481,
    mobileHeight: 285,
    img: {
      url: '/images/projects/BRIGITTE/Brigitte_carte_mockups.png',
      alt: 'Brigitte_carte_mockups',
      objectFit: 'object-cover',
      objectPosition: 'object-center',
    },
    contentButton: 'Food 🍔',
    linkToPage: 'brigitte',
  },
  {
    width: 481,
    height: 481,
    mobileHeight: 219,
    img: {
      url: '/images/projects/TAMARA_AGENCY/mockup-ohone-TA.jpg',
      alt: 'mockup-ohone-TA',
      objectFit: 'object-cover',
      objectPosition: 'object-center',
    },
    contentButton: 'Web 📱',
    linkToPage: 'tamara-agency',
  },
  {
    width: 621,
    height: 481,
    mobileHeight: 335,
    img: {
      url: '/images/projects/GALBO/étiquette-2-galbo.png',
      alt: 'étiquette-2-galbo',
      objectFit: 'object-cover',
      objectPosition: 'object-center',
    },
    contentButton: 'Mode 🛍️',
    linkToPage: 'galbo',
  },
];

const PROJECTS_UX_UI = [
  {
    width: 621,
    height: 481,
    img: {
      url: '/images/projects/LES_4_SAISONS/logo-vert.jpg',
      alt: 'logo-vert',
      objectFit: 'object-cover',
      objectPosition: 'object-center',
    },
    contentButton: 'Food 🍔',
    linkToPage: 'les-4-saisons',
  },
  {
    width: 470,
    height: 481,
    mobileHeight: 285,
    img: {
      url: '/images/projects/LATYPIQUE/mockup-2-latypique.jpg',
      alt: 'mockup-2-latypique',
      objectFit: 'object-cover',
      objectPosition: 'object-center',
    },
    contentButton: 'Cosmétiques ✨',
    linkToPage: 'latypique',
  },
  {
    width: 621,
    height: 481,
    mobileHeight: 335,
    img: {
      url: '/images/projects/GALBO/Galbo_bannière_mockup.webp',
      alt: 'Galbo_bannière_mockup',
      objectFit: 'object-cover',
      objectPosition: 'object-[center_90%]',
    },
    contentButton: 'Mode 🛍️',
    linkToPage: 'galbo',
  },
  {
    width: 481,
    height: 481,
    mobileHeight: 300,
    img: {
      url: '/images/projects/BRIGITTE/mockup-appli-brigitte.jpg',
      alt: 'mockup-appli-brigitte',
      objectFit: 'object-cover',
      objectPosition: 'object-center',
    },
    contentButton: 'Web 📱',
    linkToPage: 'brigitte',
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
              {PROJECTS_DA.map((project, index) => (
                <CarouselItem
                  key={index}
                  className={index === 0 ? 'pl-24' : ''}
                >
                  <Link href={`/projet/${project.linkToPage}`}>
                    <ProjectCard
                      width={project.width}
                      height={project.height}
                      img={project.img}
                      contentButton={project.contentButton}
                    />
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="lg:hidden flex flex-col gap-4 px-[22px] md:px-16">
            {PROJECTS_DA.map((project, index) => (
              <Link key={index} href={`/projet/${project.linkToPage}`}>
                <ProjectCard
                  key={index}
                  width={'auto'}
                  height={project.mobileHeight || 236}
                  img={project.img}
                  contentButton={project.contentButton}
                />
              </Link>
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
              {PROJECTS_UX_UI.map((project, index) => (
                <CarouselItem
                  key={index}
                  className={index === 0 ? 'pl-24' : ''}
                >
                  <Link href={`/projet/${project.linkToPage}`}>
                    <ProjectCard
                      width={project.width}
                      height={project.height}
                      img={project.img}
                      contentButton={project.contentButton}
                    />
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="lg:hidden flex flex-col gap-4 px-[22px] md:px-16">
            {PROJECTS_UX_UI.map((project, index) => (
              <Link href={`/projet/${project.linkToPage}`}>
                <ProjectCard
                  key={index}
                  width={'100%'}
                  height={project.mobileHeight || 236}
                  img={project.img}
                  contentButton={project.contentButton}
                />
              </Link>
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
      <div className="pb-[26px] lg:pt-12 lg:pb-[70px] text-f-primary">
        <div className="mb-5 md:mb-0 px-[22px] md:px-16 lg:px-[109px]">
          <h1 className="aqua-banner text-[28px] leading-[20px] lg:text-[80px] lg:leading-[135px] uppercase">
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
