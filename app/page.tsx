'use client';

import { useState, useEffect, Suspense } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import {
  Button,
  Header,
  Tabs,
  ProjectCard,
  LinkedinCard,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  SkillType,
  Accordion,
  Tooltip,
} from '@/components';
import Logo from '@/src/assets/test.png';

const TAGS = ['DA', 'Social média', 'UXUI design', 'Print et packaging', 'CRO'];

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

const SKILLS_DA: SkillType[] = [
  {
    name: 'Identité visuelle',
    list: [
      'Direction artistique générale',
      'Logo',
      'Couleurs',
      'Typographies',
      'Iconographies',
      'Déclinaisons',
    ],
  },
  {
    name: 'Print et Packagings',
    list: ['Design des packs', 'Fichiers d’impressions', 'PLV'],
  },
  {
    name: 'Social média',
    list: ['Concept et stratégie', 'Feed instagram', 'Stories'],
  },
  {
    name: 'Stratégie de com',
    list: ['Valeurs', 'Tone of voice'],
  },
];

const SKILLS_UXUI: SkillType[] = [
  {
    name: 'Recherche utilisateur',
    list: ['Cible', 'Tendances'],
  },
  {
    name: 'CRO',
    list: ['Audit de l’existant', 'Création de valeur'],
  },
  {
    name: 'Maquette',
    list: ['Choix graphiques', 'Iconographies'],
  },
];

export default function Home() {
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
                    <Suspense
                      fallback={
                        <div
                          className={`rounded-2xl relative cursor-pointer block overflow-hidden bg-slate-700 animate-pulse`}
                          style={{
                            width: project.width,
                            height: project.height,
                          }}
                        />
                      }
                    >
                      <ProjectCard
                        width={project.width}
                        height={project.height}
                        img={project.img}
                        contentButton={project.contentButton}
                      />
                    </Suspense>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="lg:hidden flex flex-col gap-4 px-[22px] md:px-16">
            {PROJECTS_DA.map((project, index) => (
              <Link href={`/projet/${project.linkToPage}`}>
                <Suspense
                  fallback={
                    <div
                      className={`rounded-2xl relative cursor-pointer block overflow-hidden bg-slate-700 animate-pulse`}
                      style={{
                        width: project.width,
                        height: project.height,
                      }}
                    />
                  }
                >
                  <ProjectCard
                    key={index}
                    width={'auto'}
                    height={project.mobileHeight || 236}
                    img={project.img}
                    contentButton={project.contentButton}
                  />
                </Suspense>
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

  const [scrollTextOpacity, setScrollTextOpacity] = useState(1);

  const handleScroll = () => {
    setScrollTextOpacity(window.scrollY > 15 ? 0 : 1);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="w-full">
      <section className="px-[22px] md:px-16 lg:px-28 pt-5 min-h-screen h-fit bg-primary">
        <Header color="secondary" />
        <div className="mt-12 mb-56 lg:mt-28 lg:mb-44 text-f-secondary">
          <h1 className="mb-1.5 lg:mb-0.5 aqua-big-banner text-[38px] leading-[50px] lg:text-[120px] lg:leading-[135px] uppercase max-w-5xl">
            Ne soyez plus dans le flou
          </h1>
          <h2 className="mb-10 lg:mb-14 aqua-title font-GothamLight text-[13px] lg:text-[25px]">
            La beauté est essentielle, la pertinence la valorise.
          </h2>
          <div className="flex flex-wrap gap-3 max-w-80 lg:max-w-none lg:gap-5">
            {TAGS.map((tag, index) => (
              <Button key={index} className="w-fit">
                {tag}
              </Button>
            ))}
          </div>
        </div>
        <p
          className="hidden lg:block aqua-caption text-f-secondary text-[14px] lg:text-[18px] uppercase transition-all duration-500 ease-in-out"
          style={{ opacity: scrollTextOpacity }}
        >
          (SCROLL) pour voir ce que je fais.. 👀
        </p>
      </section>
      <section
        className="pt-11 pb-[66px] lg:pt-12 lg:pb-36 text-f-primary"
        data-textcolor="#fff8f3"
      >
        <div className="mb-5 md:mb-0 px-[22px] md:px-16 lg:px-20 flex justify-between items-center">
          <h1 className="aqua-banner text-[28px] leading-[20px] lg:text-[80px] lg:leading-[135px] uppercase">
            Ce que je fais..
          </h1>
          <Link href="/projet" className="hidden lg:block">
            <Button variant="secondary" className="w-fit">
              Voir tous les projets
            </Button>
          </Link>
        </div>
        <Tabs
          customClass="px-[22px] lg:px-20"
          defaultIndex={0}
          tabsConfig={tabsConfig}
        />
        <Link href="/projet" className="px-[22px] mt-4 block lg:hidden">
          <Button className="text-[16px] py-4">Voir tous les projets 👀</Button>
        </Link>
      </section>
      <section className="px-[22px] pt-11 md:px-16 lg:px-20 lg:pt-12 bg-primary text-f-secondary h-fit relative">
        <div className="mb-5 lg:mb-12 flex justify-between items-end lg:items-center">
          <h1 className="aqua-banner text-[28px] leading-[20px] lg:text-[80px] lg:leading-[135px] uppercase">
            CE QUE JE PROPOSE..
          </h1>
          <div className="hidden lg:block text-right">
            <p className="aqua-big-caption text-[10px] lg:text-[25px]">
              300 euros / jour
            </p>
            <p className="aqua-caption text-[8px] lg:text-[20px]">
              Du lundi au vendredi
            </p>
          </div>
          <Tooltip
            placement="bottom-end"
            className="lg:hidden"
            contentText={
              <div className="w-28 text-center">
                <p className="aqua-big-caption text-[12px] lg:text-[25px]">
                  300 euros / jour
                </p>
                <p className="aqua-caption text-[10px] lg:text-[20px]">
                  Du lundi au vendredi
                </p>
              </div>
            }
          />
        </div>
        <Accordion
          title="Direction artistique"
          content={
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-[402px]">
              <p className="aqua-big-caption text-[12px] max-w-60 lg:text-[25px] lg:max-w-[490px] antialiased">
                Vous aider à avoir une identité visuelle impactante à la hauteur
                de votre offre !
              </p>
              <div className="ml-auto flex flex-col gap-3 lg:gap-6 w-full max-w-48 lg:max-w-96 pb-0.5">
                {SKILLS_DA.map((skill, index) => (
                  <Accordion
                    key={index}
                    variant="list"
                    isOpen={index === 0}
                    title={
                      <>
                        <div className="font-Gotham text-[10px] lg:text-[15px] text-right w-8">
                          {`0${index + 1}.`}
                        </div>
                        <div className="relative aqua-big-caption text-[12px] lg:text-[25px] after:content-[''] after:w-0 after:h-[1.5px] after:bg-secondary after:absolute after:left-0 after:-bottom-0.5 after:transition-all duration-500 after:pointer-events-none hover:after:w-full focus:after:w-0">
                          {skill.name}
                        </div>
                      </>
                    }
                    content={
                      <ul className="list-disc ml-16 lg:mt-2 lg:ml-24 mb-3">
                        {skill.list.map((item, itemIdx) => (
                          <li
                            key={itemIdx}
                            className="aqua-caption text-[10px] lg:text-[16px] antialiased"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    }
                  />
                ))}
              </div>
            </div>
          }
          size="large"
          allowClose={false}
        />
        <Accordion
          title="UXUI Design"
          content={
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-[402px]">
              <p className="aqua-big-caption text-[12px] max-w-60 lg:text-[25px] lg:max-w-[490px] antialiased">
                Vous accompagner sur la conception d’un site e-commerce sexy et
                attractif.
              </p>
              <div className="ml-auto flex flex-col gap-3 lg:gap-6 w-full max-w-48 lg:max-w-96 pb-0.5">
                {SKILLS_UXUI.map((skill, index) => (
                  <Accordion
                    key={index}
                    variant="list"
                    title={
                      <>
                        <div className="font-Gotham text-[10px] lg:text-[15px] text-right w-8">
                          {`0${index + 1}.`}
                        </div>
                        <div className="relative aqua-big-caption text-[12px] lg:text-[25px] after:content-[''] after:w-0 after:h-[1.5px] after:bg-secondary after:absolute after:left-0 after:-bottom-0.5 after:transition-all duration-500 after:pointer-events-none hover:after:w-full">
                          {skill.name}
                        </div>
                      </>
                    }
                    content={
                      <ul className="list-disc ml-16 lg:mt-2 lg:ml-24 mb-3">
                        {skill.list.map((item, itemIdx) => (
                          <li
                            key={itemIdx}
                            className="aqua-caption text-[10px] lg:text-[16px] antialiased"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    }
                  />
                ))}
              </div>
            </div>
          }
          size="large"
          allowClose={false}
        />
      </section>
      <section className="pt-11 lg:pt-14 lg:pb-[70px] text-f-primary">
        <div className="px-[22px] md:px-16 lg:px-20 lg:mb-11">
          <h1 className="mb-6 lg:mb-[22px] aqua-banner text-[28px] leading-[20px] lg:text-[80px] lg:leading-[80px] uppercase antialiased">
            ILS ONT AIMÉS !
          </h1>
          <div className="lg:mb-20">
            <p className="mb-3 lg:mb-12 font-GothamBook font-normal text-[12px] lg:text-[25px] lg:leading-[30px] antialiased">
              “Elle a su s’adapter et être autonome”
            </p>
            <LinkedinCard />
          </div>
        </div>
        <div className="block overflow-hidden uppercase">
          <div className="block whitespace-nowrap">
            <span className="inline-block text-center whitespace-nowrap animate-infinite-loop">
              <div className="flex items-center">
                <Image
                  src={Logo}
                  alt="Aqua Studio Logo"
                  className="w-[89.33px] h-[89.33px] md:w-[147.89px] md:h-[147.89px]"
                  loading="lazy"
                />
                <p className="aqua-banner text-[30px] md:text-[70px]">
                  CONTACTEZ-MOI
                </p>
              </div>
            </span>
            <span className="inline-block text-center whitespace-nowrap animate-infinite-loop">
              <div className="flex items-center">
                <Image
                  src={Logo}
                  alt="Aqua Studio Logo"
                  className="w-[89.33px] h-[89.33px] md:w-[147.89px] md:h-[147.89px]"
                  loading="lazy"
                />
                <p className="aqua-banner text-[30px] md:text-[70px]">
                  CONTACTEZ-MOI
                </p>
              </div>
            </span>
            <span className="inline-block text-center whitespace-nowrap animate-infinite-loop">
              <div className="flex items-center">
                <Image
                  src={Logo}
                  alt="Aqua Studio Logo"
                  className="w-[89.33px] h-[89.33px] md:w-[147.89px] md:h-[147.89px]"
                  loading="lazy"
                />
                <p className="aqua-banner text-[30px] md:text-[70px]">
                  CONTACTEZ-MOI
                </p>
              </div>
            </span>
            <span className="inline-block text-center whitespace-nowrap animate-infinite-loop">
              <div className="flex items-center">
                <Image
                  src={Logo}
                  alt="Aqua Studio Logo"
                  className="w-[89.33px] h-[89.33px] md:w-[147.89px] md:h-[147.89px]"
                  loading="lazy"
                />
                <p className="aqua-banner text-[30px] md:text-[70px]">
                  CONTACTEZ-MOI
                </p>
              </div>
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
