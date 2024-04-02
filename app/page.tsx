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
} from '@/components';
import Logo from '@/src/assets/test.png';

const TAGS = ['DA', 'Print et packaging', 'Social média', 'UXUI design', 'CRO'];

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
      <div className="px-[22px] md:px-16 lg:px-28 pt-5 min-h-screen h-fit bg-primary">
        <Header color="secondary" />
        <div className="mt-12 mb-36 lg:mt-28 lg:mb-44 text-f-secondary">
          <h1 className="mb-1.5 lg:mb-0.5 aqua-big-banner text-[42.5px] leading-[50px] lg:text-[120px] lg:leading-[135px] uppercase max-w-5xl">
            Ne soyez plus dans le flou
          </h1>
          <h2 className="mb-14 aqua-title text-[14px] lg:text-[25px]">
            La beauté est essentielle, la pertinence la valorise.
          </h2>
          <div className="flex flex-wrap gap-3 max-w-72 lg:max-w-none lg:gap-5">
            {TAGS.map((tag, index) => (
              <Button key={index} customClass="w-fit">
                {tag}
              </Button>
            ))}
          </div>
        </div>
        <p className="hidden lg:block aqua-caption text-f-secondary text-[14px] uppercase">
          SCROLL
        </p>
      </div>
      <div className="pt-11 pb-[26px] lg:pt-12 lg:pb-36 text-f-primary">
        <div className="mb-5 md:mb-0 px-[22px] md:px-16 lg:px-20 flex justify-between items-center">
          <h1 className="aqua-banner text-[20px] leading-[20px] lg:text-[80px] lg:leading-[135px] uppercase">
            Ce que je fais..
          </h1>
          <Link href="/projets">
            <Button variant="secondary" customClass="w-fit">
              Voir tous les projets
            </Button>
          </Link>
        </div>
        <Tabs
          customClass="px-[22px] lg:px-20"
          defaultIndex={0}
          tabsConfig={tabsConfig}
        />
      </div>
      <div className="px-[22px] pt-11 md:px-16 lg:px-20 lg:pt-12 bg-primary text-f-secondary h-fit">
        <div className="mb-5 lg:mb-12 flex justify-between items-center">
          <h1 className="aqua-banner text-[20px] leading-[20px] lg:text-[80px] lg:leading-[135px] uppercase">
            CE QUE JE PROPOSE..
          </h1>
          <div className="text-right">
            <p className="aqua-big-caption text-[10px] lg:text-[25px]">
              300 euros / jour
            </p>
            <p className="aqua-caption text-[8px] lg:text-[20px]">
              Du lundi au vendredi
            </p>
          </div>
        </div>
        <Accordion
          title="Direction artistique"
          content={
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-[402px]">
              <p className="aqua-big-caption text-[12px] max-w-60 lg:text-[25px] lg:max-w-[490px] antialiased">
                Vous aider à avoir une identité visuelle impactante à la hauteur
                de votre offre !
              </p>
              <div className="ml-auto flex flex-col gap-3 lg:gap-6 w-full max-w-48 lg:max-w-96">
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
                        <div className="aqua-big-caption text-[12px] lg:text-[25px]">
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
              <div className="ml-auto flex flex-col gap-3 lg:gap-6 w-full max-w-48 lg:max-w-96">
                {SKILLS_UXUI.map((skill, index) => (
                  <Accordion
                    key={index}
                    variant="list"
                    title={
                      <>
                        <div className="font-Gotham text-[10px] lg:text-[15px] text-right w-8">
                          {`0${index + 1}.`}
                        </div>
                        <div className="aqua-big-caption text-[12px] lg:text-[25px]">
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
      </div>
      <div className="pt-11 lg:pt-14 lg:pb-[70px] text-f-primary">
        <div className="px-[22px] md:px-16 lg:px-20 lg:mb-11">
          <h1 className="mb-6 lg:mb-[22px] aqua-banner text-[20px] leading-[20px] lg:text-[80px] lg:leading-[80px] uppercase antialiased">
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
