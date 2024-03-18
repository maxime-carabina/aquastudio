import Image from 'next/image';

import {
  Button,
  Tabs,
  ProjectCard,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components';

const TAGS = ['DA', 'Personnal Branding '];

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

export default function ProjectsPage() {
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
    <main className="w-full">
      <div className="px-[22px] md:px-16 lg:px-28 mt-12 lg:mb-[70px] lg:mt-[74px] text-f-primary">
        <div className="lg:mb-[70px] flex items-end justify-between antialiased">
          <div>
            <h1 className="lg:mb-[30px] aqua-banner text-[20px] leading-[20px] lg:text-[80px] lg:leading-[135px] uppercase">
              Max
            </h1>
            <div className="flex flex-wrap gap-3 max-w-72 lg:max-w-none lg:gap-5">
              {TAGS.map((tag, index) => (
                <Button key={index} customClass="w-fit" variant="secondary">
                  {tag}
                </Button>
              ))}
            </div>
          </div>
          <p className="aqua-caption text-justify lg:text-[20px] lg:leading-[21.24px] max-w-[617px]">
            Maxime Carabina, un jeune développeur, a l'intention de débuter une
            carrière en freelance. Il reconnaît que cultiver son personal
            branding sera un atout significatif pour se démarquer dans son
            cheminement professionnel.
          </p>
        </div>
        <div className="flex items-center gap-[50px]">
          <div className="w-[691px] h-[491px] relative">
            <Image
              src="/images/projects/MAX/stickers-mockup-2.png"
              alt="stickers-mockup-2"
              quality={100}
              fill
              sizes="(max-width: 691px) 100vw, 691px"
              className="rounded-2xl object-cover object-[center_65%]"
            />
          </div>
          <div className="grow h-[491px] relative">
            <Image
              src="/images/projects/MAX/start.jpg"
              alt="lpp-baumes"
              quality={100}
              fill
              sizes="(max-width: 691px) 100vw, 491px"
              className="rounded-[20px] object-cover"
            />
          </div>
        </div>
      </div>
      <div className="px-[22px] md:px-16 lg:px-[109px]">
        <div className="lg:pt-[70px] lg:pb-[70px] flex justify-center gap-[50px] border-b border-t border-primary">
          <div className={`w-[493px] h-fit sticky top-[51px]`}>
            <div className="h-[464px] relative mb-10">
              <Image
                src="/images/projects/MAX/carte-de-visite-mockup.png"
                alt="lpp-baumes"
                fill
                quality={100}
                className="rounded-[20px]"
              />
            </div>
            <div
              className="bg-primary rounded-[20px] py-[34px] px-[45px]"
              // style={{ height: 'calc(100vh - 590px)' }}
            >
              <div className="mb-28 font-GothamLight antialiased text-justify text-f-secondary lg:text-[20px] lg:leading-[22px]">
                <span className="font-Gotham font-bold text-left">
                  Le challenge :{' '}
                </span>
                Capturer la personnalité distinctive du client tout en
                renforçant sa crédibilité et son expertise dans son domaine.
                <br />
                <br />
                <span className="font-Gotham font-bold">Mots 🔑 :</span> Web3 -
                Gaming - moderne
              </div>
            </div>
          </div>
          <div className="grow">
            <div className="lg:mb-[80px] w-full h-[172PX] relative">
              <Image
                src="/images/projects/MAX/bannière-linkedin.jpg"
                alt="banner-linkedin"
                fill
                quality={100}
                className="rounded-[20px]"
              />
            </div>
            <div className="mb-10 flex items-center gap-[34px] h-fit">
              <div className="w-[212px] h-[299px] relative">
                <Image
                  src="/images/projects/MAX/image3D.jpg"
                  alt="image3D"
                  fill
                  quality={100}
                  className="rounded-[20px]"
                />
              </div>
              <div className="grow relative h-[299px]">
                <Image
                  src="/images/lpp-baumes.jpg"
                  alt="lpp-baumes"
                  fill
                  quality={100}
                  className="rounded-[20px]"
                />
              </div>
            </div>
            <div className="h-[494px] flex gap-[34px] mb-10">
              <div className="grow flex flex-col">
                <div className="bg-[#C9E6F8] h-[122px] mb-[14px] rounded-[20px] flex flex-col justify-between px-[25px] py-[9px] text-black">
                  <p className="antialiased text-[15px] font-AvenirNext font-normal tracking-[5%] lg:leading-[30px]">
                    [Light blue]
                  </p>
                  <p className="antialiased text-[12px] font-AvenirNext font-normal tracking-[5%] lg:leading-[30px]">
                    #C9E6F8
                  </p>
                </div>
                <div className="bg-[#60A7D3] h-[122px] mb-[23px] rounded-[20px] flex flex-col justify-between px-[25px] py-[9px] text-white">
                  <p className="antialiased text-[15px] font-AvenirNext font-normal tracking-[5%] lg:leading-[30px]">
                    [Mid blue]
                  </p>
                  <p className="antialiased text-[12px] font-AvenirNext font-normal tracking-[5%] lg:leading-[30px]">
                    #60A7D3
                  </p>
                </div>
                <div className="bg-black grow rounded-[20px] flex flex-col justify-between px-[25px] py-[9px] text-white">
                  <p className="antialiased text-[15px] font-AvenirNext font-normal tracking-[5%] lg:leading-[30px]">
                    [Pure black]
                  </p>
                  <p className="antialiased text-[12px] font-AvenirNext font-normal tracking-[5%] lg:leading-[30px]">
                    #000000
                  </p>
                </div>
              </div>
              <div className="relative w-[373px]">
                <Image
                  src="/images/projects/MAX/affiche.png"
                  alt="affiche"
                  fill
                  quality={100}
                  className="rounded-[20px]"
                />
              </div>
            </div>
            <div className="w-full h-[539px] relative mb-10">
              <Image
                src="/images/projects/MAX/mockup-2.jpg"
                alt="mockup-2"
                fill
                quality={100}
                className="rounded-[20px] object-cover"
              />
            </div>
            <div className="flex gap-[34px] h-[499px] mb-10">
              <div className="w-[399px] h-[499px] relative">
                <Image
                  src="/images/projects/MAX/max-mockup.png"
                  alt="max-mockup"
                  fill
                  quality={100}
                  className="rounded-[20px] object-cover"
                />
              </div>
              <div className="grow flex flex-col gap-8">
                <div className="h-[193px] bg-black rounded-[20px] px-[26px] py-[31px] flex flex-col justify-end">
                  <p className="mb-2 font-DegularVariable leading-none text-white font-bold tracking-wider lg:text-[80px] antialiased">
                    Aa
                  </p>
                  <p className="text-white font-DegularVariable leading-none font-bold tracking-wider lg:text-[15px] antialiased">
                    Degular Variable bold
                  </p>
                </div>
                <div className="grow bg-[#C9E6F8] rounded-[20px] px-[26px] py-[31px] flex flex-col justify-end">
                  <p className="text-black font-AvenirNext font-normal leading-none tracking-wider lg:text-[80px] antialiased">
                    Aa
                  </p>
                  <p className="mb-1 text-black font-AvenirNext font-normal tracking-wider lg:text-[15px] antialiased">
                    Avenir next regular
                  </p>
                  <p className="text-black font-AvenirNext font-medium italic tracking-wider lg:text-[15px] antialiased">
                    Avenir next Medium italic
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-[51px] py-[46px] rounded-[20px] bg-[#C9E6F8] mb-10">
              <div className="h-[331px] relative mb-10">
                <Image
                  src="/images/projects/MAX/about-1.jpg"
                  alt="about-1"
                  fill
                  quality={100}
                />
              </div>
              <div className="h-[331px] relative mb-10">
                <Image
                  src="/images/projects/MAX/about-2.jpg"
                  alt="about-2"
                  fill
                  quality={100}
                />
              </div>
              <div className="h-[331px] relative">
                <Image
                  src="/images/projects/MAX/about-3.jpg"
                  alt="about-3"
                  fill
                  quality={100}
                />
              </div>
            </div>
            <div className="mb-16 w-full h-[687px] relative">
              <Image
                src="/images/projects/MAX/site-mockup.png"
                alt="site-mockup"
                fill
                quality={100}
                className="rounded-[20px]"
              />
            </div>
            <h1 className="mb-2 aqua-banner text-f-primary lg:text-[50px] lg:leading-[80px] antialiased">
              C’est canon !
            </h1>
            <h2 className="mb-8 aqua-caption text-f-primary lg:text-[16px] lg:leading-[22px] antialiased">
              Mon travail te plait ? ✨
              <br />
              N’hésites pas à me contacter pour discuter de ton projet !!
            </h2>
            <div className="max-w-96">
              <Button variant="secondary" customClass="antialiased">
                Je suis intéressé(e) par ton travail !
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-11 pb-[26px] lg:pt-12 lg:pb-[70px] text-f-primary">
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
    </main>
  );
}
