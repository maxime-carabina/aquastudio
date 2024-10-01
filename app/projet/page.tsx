import Image from 'next/image';
import Link from 'next/link';

import { Tabs, Button, ProjectCard } from '@/components';
import Logo from '@/src/assets/test.png';

export default function ProjectPage() {
  const tabsConfig = [
    {
      label: 'Direction artistique',
      content: (
        <div className="mt-5 lg:mt-14 grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-12 gap-4 lg:gap-[34px]">
          <div className="lg:col-span-3 lg:row-span-3 p-4 lg:px-8 lg:py-12 bg-primary rounded-[20px] text-f-secondary antialiased flex flex-col justify-between gap-4 lg:gap-0">
            <div>
              <h1 className="font-Gotham font-normal antialiased text-[14px] lg:text-[50px] leading-none mb-1 lg:mb-2">
                Direction artistique
              </h1>
              <h3 className="text-[10px] lg:text-[20px] font-GothamLight antialiased">
                [Nom féminin]
              </h3>
            </div>
            <div className="font-GothamLight antialiased">
              <p className="mb-3 lg:mb-8 text-[12px] lg:text-[20px] leading-[14px] lg:leading-[30px]">
                Représente la création et l'implémentation d'une identité
                visuelle distinctive.
              </p>
              <p className="text-[12px] lg:text-[20px] leading-[14px] lg:leading-[30px]">
                <span className="font-Gotham font-normal">Mon objectif</span> 👉
                Refléter l'identité et les valeurs de la marque tout en évoquant
                une réponse émotionnelle chez le public cible. Ainsi, la
                reconnaissance de la marque et l'engagement des consommateurs se
                verra renforcé.
              </p>
            </div>
          </div>
          <div className="lg:col-span-2 lg:row-span-4 lg:col-start-4 relative">
            <Link href="/projet/brigitte">
              <ProjectCard
                className="w-full h-72 lg:h-full"
                img={{
                  url: '/images/projects/BRIGITTE/affiche-2-mockup.jpg',
                  alt: 'Affiche Brigitte',
                  objectFit: 'object-cover',
                  objectPosition: 'object-center',
                }}
                contentButton="Food 🍔"
              />
            </Link>
          </div>
          <div className="lg:col-span-3 lg:row-span-3 lg:row-start-4 relative">
            <Link href="/projet/les-petits-prodiges">
              <ProjectCard
                className="w-full h-60 lg:h-full"
                img={{
                  url: '/images/lpp-baumes.jpg',
                  alt: 'baumes',
                  objectFit: 'object-none',
                  objectPosition: 'object-[center_85%]',
                }}
                contentButton="Cosmétiques ✨"
              />
            </Link>
          </div>
          <div className="lg:col-span-2 lg:row-span-3 lg:col-start-4 lg:row-start-5 relative">
            <Link href="/projet/max">
              <ProjectCard
                className="w-full h-[272px] lg:h-full"
                img={{
                  url: '/images/projects/MAX/carte-de-visite-mockup.png',
                  alt: 'carte de visite',
                  objectFit: 'object-cover',
                  objectPosition: 'object-center',
                }}
                contentButton="Web📱"
              />
            </Link>
          </div>
          <div className="lg:col-span-3 lg:row-span-4 lg:row-start-7 relative">
            <Link href="/projet/galbo">
              <ProjectCard
                className="w-full h-[335px] lg:h-full"
                img={{
                  url: '/images/projects/GALBO/packaging-galbo.jpg',
                  alt: 'packaging galbo',
                  objectFit: 'object-cover',
                  objectPosition: 'object-center',
                }}
                contentButton="Mode 🛍️"
              />
            </Link>
          </div>
          <div className="lg:col-span-2 lg:row-span-3 lg:col-start-4 lg:row-start-8 relative">
            <Link href="/projet/tamara-agency">
              <ProjectCard
                className="w-full h-56 lg:h-full"
                img={{
                  url: '/images/projects/TAMARA_AGENCY/mockup-ohone-TA.jpg',
                  alt: 'mockup ophone TA',
                  objectFit: 'object-cover',
                  objectPosition: 'object-center',
                }}
                contentButton="Web📱"
              />
            </Link>
          </div>
          <div className="lg:col-span-5 lg:row-span-2 lg:row-start-11 p-4 lg:p-12 bg-primary rounded-[20px] text-f-secondary font-GothamLight">
            <h1 className="mb-2 lg:mb-6 font-Gotham font-normal text-[35px] lg:text-[50px] antialiased">
              C’est canon !
            </h1>
            <p className="lg:mb-11 text-[12px] lg:text-[22px] antialiased">
              Mon travail te plait ? ✨<br />
              N’hésites pas à me contacter !!
            </p>
            <Link href="/contact">
              <Button className="w-fit hidden lg:block">
                Je suis intéressé(e) par ton travail ! 👉
              </Button>
            </Link>
          </div>
        </div>
      ),
    },
    {
      label: 'UXUI Design',
      content: (
        <div className="mt-5 lg:mt-14 grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-10 gap-4 lg:gap-[34px]">
          <div className="lg:col-span-3 lg:row-span-3 p-4 lg:px-8 lg:py-12 bg-primary rounded-[20px] text-f-secondary font-GothamLight antialiased flex flex-col justify-between gap-4 lg:gap-[60px]">
            <div>
              <h1 className="font-Gotham font-normal text-[14px] lg:text-[50px] leading-none mb-1 lg:mb-2">
                UX/UI Design
              </h1>
              <h3 className="text-[10px] lg:text-[20px]">[Noms féminins]</h3>
            </div>
            <div>
              <p className="mb-3 lg:mb-8 text-[12px] lg:text-[20px] leading-[14px] lg:leading-[30px]">
                Conception d'expériences utilisateur (UX) et d'interfaces
                utilisateur (UI) pour les produits numériques tels que les
                applications mobiles et les sites web.
              </p>
              <p className="text-[12px] lg:text-[20px] leading-[14px] lg:leading-[30px]">
                <span className="font-Gotham font-normal">Mon objectif</span> 👉
                Optimiser l'interaction entre l'utilisateur et le produit, en
                tenant compte de l'utilisabilité, de l'accessibilité et de
                l'esthétique pour fournir une expérience utilisateur fluide,
                intuitive et satisfaisante.
              </p>
            </div>
          </div>
          <div className="lg:col-span-2 lg:row-span-4 lg:col-start-4 relative">
            <Link href="/projet/les-4-saisons">
              <ProjectCard
                className="w-full h-[435px] lg:h-full"
                img={{
                  url: '/images/projects/LES_4_SAISONS/visuel-page-collection.jpg',
                  alt: 'mockup iphone',
                  objectFit: 'object-cover',
                  objectPosition: 'object-center',
                }}
                contentButton="Food 🍔"
              />
            </Link>
          </div>
          <div className="lg:col-span-3 lg:row-span-4 lg:row-start-4 relative">
            <Link href="/projet/latypique">
              <ProjectCard
                className="w-full h-80 lg:h-full"
                img={{
                  url: '/images/projects/LATYPIQUE/mockup-2-latypique.jpg',
                  alt: 'mockup 2 latypique',
                  objectFit: 'object-cover',
                  objectPosition: 'object-center',
                }}
                contentButton="Cosmétiques ✨"
              />
            </Link>
          </div>
          <div className="lg:col-span-2 lg:row-span-3 lg:col-start-4 lg:row-start-5 relative">
            <Link href="/projet/galbo">
              <ProjectCard
                className="w-full h-80 lg:h-full"
                img={{
                  url: '/images/projects/GALBO/Galbo_bannière_mockup.webp',
                  alt: 'Galbo bannière mockup',
                  objectFit: 'object-cover',
                  objectPosition: 'object-center',
                }}
                contentButton="Mode 🛍️"
              />
            </Link>
          </div>
          <div className="lg:col-span-3 lg:row-span-3 lg:row-start-8 relative">
            <Link href="/projet/brigitte">
              <ProjectCard
                className="w-full h-64 lg:h-full"
                img={{
                  url: '/images/projects/BRIGITTE/mockup-appli-brigitte.jpg',
                  alt: 'mockup appli brigitte',
                  objectFit: 'object-cover',
                  objectPosition: 'object-center',
                }}
                contentButton="Food 🍔"
              />
            </Link>
          </div>
          <div className="lg:col-span-2 lg:row-span-3 lg:col-start-4 lg:row-start-8 p-4 lg:px-8 lg:py-12 bg-primary rounded-[20px] text-f-secondary font-GothamLight antialiased">
            <h1 className="mb-2 lg:mb-6 font-Gotham font-normal text-[35px] lg:text-[50px] antialiased">
              C’est canon !
            </h1>
            <p className="lg:mb-11 text-[12px] lg:text-[22px] antialiased">
              Mon travail te plait ? ✨<br />
              N’hésites pas à me contacter !!
            </p>
            <Link href="/contact">
              <Button className="w-fit hidden lg:block">
                Je suis intéressé(e) par ton travail ! 👉
              </Button>
            </Link>
          </div>
        </div>
      ),
    },
  ];

  return (
    <main className="pt-11 lg:pt-12 lg:pb-36 text-f-primary">
      <h1 className="mb-6 lg:mb-3 aqua-banner text-[36px] leading-[20px] lg:text-[80px] lg:leading-[135px] uppercase px-[22px] md:px-16 lg:px-28">
        Ce que je fais..
      </h1>
      <div className="px-[22px] md:px-16 lg:px-28">
        <Tabs defaultIndex={0} tabsConfig={tabsConfig} />
      </div>
      <div className="text-f-primary lg:pt-28">
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
      </div>
    </main>
  );
}
