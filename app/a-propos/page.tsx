import Image from 'next/image';
import Link from 'next/link';

import {
  Header,
  Button,
  Accordion,
  Tabs,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  ProjectCard,
  LinkedinCard,
} from '@/components';
import Logo from '@/src/assets/test.png';

const TAGS = ['Photoshop', 'Illustrator', 'Figma', 'After Effect'];

// const PROJECTS = [
//   {
//     width: 621,
//     height: 481,
//     img: {
//       url: '/images/lpp-baumes.jpg',
//       alt: 'lpp-baumes',
//       objectFit: 'object-none',
//       objectPosition: 'object-[center_85%]',
//     },
//     contentButton: 'Beauté ✨',
//   },
//   {
//     width: 621,
//     height: 481,
//     img: {
//       url: '/images/lpp-baumes.jpg',
//       alt: 'lpp-baumes',
//       objectFit: 'object-none',
//       objectPosition: 'object-[center_85%]',
//     },
//     contentButton: 'Beauté ✨',
//   },
//   {
//     width: 621,
//     height: 481,
//     img: {
//       url: '/images/lpp-baumes.jpg',
//       alt: 'lpp-baumes',
//       objectFit: 'object-none',
//       objectPosition: 'object-[center_85%]',
//     },
//     contentButton: 'Beauté ✨',
//   },
//   {
//     width: 621,
//     height: 481,
//     img: {
//       url: '/images/lpp-baumes.jpg',
//       alt: 'lpp-baumes',
//       objectFit: 'object-none',
//       objectPosition: 'object-[center_85%]',
//     },
//     contentButton: 'Beauté ✨',
//   },
// ];

const PROJECTS = [
  {
    width: 621,
    height: 481,
    img: {
      url: '/images/lpp-baumes.jpg',
      alt: 'lpp-baumes',
      objectFit: 'object-none',
      objectPosition: 'object-[center_85%]',
    },
    contentButton: 'Beauté ✨',
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
  },
];

export default function AboutPage() {
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
                  className={index === 0 ? 'pl-24' : ''}
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
                  className={index === 0 ? 'pl-24' : ''}
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
    <main className="w-full">
      <div className="px-[22px] md:px-16 lg:px-28 pt-5 pb-[35px] lg:pb-[53px] bg-primary">
        <Header color="secondary" />
        <div className="mt-[38px] lg:mt-[62px] text-f-secondary flex flex-wrap md:flex-nowrap gap-5 md:gap-[46px]">
          <div className="w-[346px] h-[312px] md:w-[546px] md:h-[633px] relative">
            <Image
              src="/images/Marine-Perraud.jpg"
              alt="Marine Perraud"
              quality={100}
              fill
              className="rounded-[20px] object-cover object-top"
              sizes="(max-width: 546px) 100vw, 546px"
            />
          </div>
          <div className="grow">
            <h2 className="font-GothamLight font-medium text-[12px] lg:leading-[19.12px] lg:text-[18px] antialiased mb-2">
              Directrice artistique - UXUI designer
            </h2>
            <h1 className="uppercase aqua-banner text-[20px] lg:text-[50px] leading-none antialiased mb-5 lg:mb-12">
              Marine Perraud
            </h1>
            <div className="mb-[31px] md:mb-12 flex flex-wrap gap-3 lg:max-w-none lg:gap-5">
              {TAGS.map((tag, index) => (
                <Button key={index} className="w-fit">
                  {tag}
                </Button>
              ))}
            </div>
            <p className="mb-[30px] aqua-caption text-[12px] lg:text-[16px] lg-leading-[22px] max-w-[640px] antialiased">
              La création a toujours été une composante essentielle de mon
              existence.
              <br />
              Mon intérêt pour l'art s'est manifesté à travers ma passion pour
              la danse ainsi que mon attrait pour le dessin. C'est donc tout
              naturellement que j'ai choisi de suivre une carrière créative.
              <br />
              Ce métier représente l'harmonie idéale entre les aspects
              commerciaux et créatifs indispensables à mon épanouissement.
            </p>
            <div className="mb-[30px] lg:mb-[60px]">
              <Button
                variant="tertiary"
                className="rounded-[5px] lg:rounded-[20px] lg:text-[25px] py-4 lg:py-[22px]" //h-7 lg:h-[71px]
              >
                Je veux te contacter ! ✨
              </Button>
            </div>
            <Accordion
              title="Où j’ai travaillé ?"
              content={
                <ul className="list-disc pl-5 lg:pl-4">
                  <li className="mb-[37px] lg:mb-11">
                    <span className="antialiased font-Gotham font-normal text-[12px] lg:text-[20px]">
                      TAMARA AGENCY - Experts Shopify
                    </span>
                    <div className="mt-2 lg:mt-[23px] relative antialiased before:content-[''] before:h-[83px] before:md:h-[93px] before:w-[1px] before:bg-secondary before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2">
                      <div className="mb-[11px] font-GothamBook antialiased text-[10px] leading-[10.71px] lg:leading-[17px] lg:text-[16px] pl-3">
                        Alternance et freelance/2023
                      </div>
                      <div className="mb-8 lg:mb-12 font-GothamLight text-[12px] leading-[13px] lg:leading-[17px] lg:text-[16px] pl-3">
                        Refonte DA de l’agence - identité visuelle des clients -
                        social média
                      </div>
                      <div className="font-GothamLight text-[12px] leading-[14px] lg:leading-[17px] lg:text-[16px] pl-3">
                        Stage/2021
                      </div>
                    </div>
                  </li>
                  <li>
                    <span className="antialiased font-Gotham font-normal text-[12px] lg:text-[20px]">
                      LES PETITS PRÖDIGES
                    </span>
                    <div className="pt-2 lg:pt-[23px] pb-10 antialiased">
                      <div className="mb-[11px] font-GothamBook text-[10px] leading-[10.71px] lg:leading-[17px] lg:text-[16px]">
                        Stage 6 mois/2022
                      </div>
                      <div className="font-GothamLight text-[12px] leading-[14px] lg:leading-[17px] lg:text-[16px]">
                        Création de packagings - vitrines (Monop’ beauty) -
                        illustrations - PLV - assistance aux shootings - social
                        média
                      </div>
                    </div>
                  </li>
                </ul>
              }
            />
            <Accordion
              title="Où j’ai appris ? "
              content={
                <ul className="list-disc pl-4">
                  <li className="mb-[37px] lg:mb-11">
                    <span className="antialiased font-Gotham font-normal text-[12px] lg:text-[20px]">
                      ISCOM PARIS - Master manager de la marque
                    </span>
                    <div className="pt-2 lg:pt-[23px] antialiased">
                      <div className="mb-[11px] font-GothamBook font-medium text-[10px] leading-[10.71px] lg:leading-[17px] lg:text-[16px]">
                        Spécialité CREA360/2020-2023
                      </div>
                      <div className="font-GothamLight text-[12px] leading-[14px] lg:leading-[17px] lg:text-[16px] lg:max-w-[620px]">
                        Print/édition/packagings - Direction artistique -
                        Stratégie de marque Conception rédaction - Cultural
                        studies - Motion design - Activation digitale.
                      </div>
                    </div>
                  </li>
                  <li>
                    <span className="antialiased font-Gotham font-normal text-[12px] lg:text-[20px]">
                      BTS MUC - Notre Dame Les Oiseaux
                    </span>
                    <div className="pt-2 lg:pt-[23px] lg:pb-10 antialiased">
                      <div className="mb-[11px] font-GothamBook font-medium text-[10px] leading-[10.71px] lg:leading-[17px] lg:text-[16px]">
                        2 ans/2018-2020
                      </div>
                      <div className="font-GothamLight text-[12px] leading-[14px] lg:leading-[17px] lg:text-[16px] lg:max-w-[620px]">
                        Marketing général - Management - Merchandising - Droit -
                        Économie - Gestion.
                      </div>
                    </div>
                  </li>
                </ul>
              }
            />
          </div>
        </div>
      </div>
      <div className="pt-8 pb-11 lg:pt-12 lg:pb-36 text-f-primary">
        <div className="mb-5 md:mb-0 px-[22px] md:px-16 lg:px-20 flex justify-between items-center">
          <h1 className="aqua-banner text-[28px] leading-[20px] lg:text-[80px] lg:leading-[135px] uppercase antialiased">
            Ce que je fais..
          </h1>
          <Link href="/projets" className="hidden lg:block">
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
      </div>
      <div className="px-[22px] py-11 md:px-16 lg:px-20 lg:py-20 bg-primary text-f-secondary">
        <h1 className="mb-6 lg:mb-14 aqua-banner text-[28px] leading-[20px] lg:text-[80px] lg:leading-[80px] uppercase antialiased">
          Pourquoi moi ?
        </h1>
        <div className="hidden lg:flex items-center justify-between">
          <div className="text-center">
            <div className="lg:text-[60px] mb-7">👀</div>
            <div className="uppercase antialiased font-GothamBook font-medium text-[20px]">
              Curieuse
            </div>
          </div>
          <div className="text-center">
            <div className="lg:text-[60px] mb-7">✨</div>
            <div className="uppercase antialiased font-GothamBook font-medium text-[20px]">
              Rigoureuse
            </div>
          </div>
          <div className="text-center">
            <div className="lg:text-[60px] mb-7">🤜</div>
            <div className="uppercase antialiased font-GothamBook font-medium text-[20px]">
              Entreprenante
            </div>
          </div>
          <div className="text-center">
            <div className="lg:text-[60px] mb-7">🎧</div>
            <div className="uppercase antialiased font-GothamBook font-medium text-[20px]">
              À l'écoute
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center p-10 items-center">
          <Carousel className="lg:hidden w-full max-w-xs">
            <CarouselContent className="w-full">
              <CarouselItem className="pl-5 basis-full h-full">
                <div className="text-center h-full flex flex-col items-center justify-center">
                  <div className="text-[60px] mb-5 lg:mb-7">👀</div>
                  <div className="uppercase antialiased font-GothamBook text-[20px]">
                    Curieuse
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-full">
                <div className="text-center h-full flex flex-col items-center justify-center">
                  <div className="text-[60px] mb-5 lg:mb-7">✨</div>
                  <div className="uppercase antialiased font-GothamBook text-[20px]">
                    Rigoureuse
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-full">
                <div className="text-center h-full flex flex-col items-center justify-center">
                  <div className="text-[60px] mb-5 lg:mb-7">🤜</div>
                  <div className="uppercase antialiased font-GothamBook text-[20px]">
                    Entreprenante
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-full">
                <div className="text-center h-full flex flex-col items-center justify-center">
                  <div className="text-[60px] mb-5 lg:mb-7">🎧</div>
                  <div className="uppercase antialiased font-GothamBook text-[20px]">
                    À l'écoute
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious variant="tertiary" className="w-12 h-12" />
            <CarouselNext variant="tertiary" className="w-12 h-12" />
          </Carousel>
        </div>
      </div>
      <div className="pt-11 lg:pt-14 lg:pb-[70px] text-f-primary">
        <div className="px-[22px] md:px-16 lg:px-20 lg:mb-11">
          <h1 className="mb-6 lg:mb-[22px] aqua-banner text-[28px] leading-[20px] lg:text-[80px] lg:leading-[80px] uppercase antialiased">
            ILS ONT AIMÉS !
          </h1>
          <div>
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
                />
                <p className="aqua-banner text-[30px] md:text-[70px]">
                  CONTACTEZ-MOI
                </p>
              </div>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
