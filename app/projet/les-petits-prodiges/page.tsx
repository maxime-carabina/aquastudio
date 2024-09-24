import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components';

const TAGS = ['Packaging', 'PLV', 'Social media'];

function RightColScrollable() {
  return (
    <div className="grow">
      <div className="mb-5 lg:mb-10 w-full relative h-[90px] lg:h-[172px]">
        <Image
          src="/images/projects/MAX/bannière-linkedin.jpg"
          alt="bannière-linkedin"
          fill
          loading="lazy"
          sizes="(max-width: 493px) 100vw, 493px"
          className="rounded-[15px] lg:rounded-[20px] object-contain lg:object-cover"
        />
      </div>

      <h1 className="mt-16 mb-5 lg:mb-2 aqua-banner text-f-primary text-[50px] leading-none lg:leading-[80px] antialiased">
        C’est canon !
      </h1>
      <h2 className="mb-8 aqua-caption text-f-primary text-[14px] lg:text-[16px] lg:leading-[22px] antialiased">
        Mon travail te plait ? ✨
        <br />
        N’hésites pas à me contacter pour discuter de ton projet !!
      </h2>
      <div className="max-w-96">
        <Link href="/contact">
          <Button variant="secondary" className="antialiased hidden lg:block">
            Je suis intéressé(e) par ton travail !
          </Button>
          <Button className="py-4 antialiased lg:hidden">
            Je suis intéressé(e) par ton travail !
          </Button>
        </Link>
      </div>
    </div>
  );
}

function LeftColSticky() {
  return (
    <div className="w-full md:w-[493px] h-fit lg:sticky lg:top-[51px] lg:max-h-screen">
      <div className="relative mb-10 h-[326px] lg:h-[491px]">
        <Image
          src="/images/projects/MAX/carte-de-visite-mockup.png"
          alt="carte-de-visite-mockup"
          fill
          loading="lazy"
          sizes={`(max-width: 493px) 100vw, 493px`}
          className="rounded-[20px] object-cover"
        />
      </div>
      <div className="bg-primary rounded-[20px] px-8 py-6 lg:py-[34px] lg:px-[45px]">
        <div className="font-GothamLight antialiased text-justify text-f-secondary text-[14px] leading-[16px] lg:text-[20px] lg:leading-[22px]">
          <p className="mb-8 antialiased">
            <span className="font-Gotham font-bold antialiased">
              Le challenge :
            </span>{' '}
            Capturer la personnalité distinctive du client tout en renforçant sa
            crédibilité et son expertise dans son domaine.
          </p>
          <p className="antialiased">
            <span className="font-Gotham font-bold antialiased">Mots 🔑 :</span>{' '}
            Web3 - Gaming - moderne
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="text-f-primary">
      <div className="px-[22px] md:px-16 lg:px-28 mt-12 lg:mb-[70px] lg:mt-[74px] text-f-primary">
        <div className="mb-6 lg:mb-[70px] flex flex-wrap items-end justify-between gap-8 antialiased">
          <div>
            <h1 className="mb-8 lg:mb-[30px] aqua-banner text-[50px] leading-[60px] lg:text-[80px] lg:leading-[75px] uppercase max-w-[500px]">
              Les petits prödiges
            </h1>
            <div className="flex flex-wrap gap-3 max-w-72 lg:max-w-none lg:gap-5">
              {TAGS.map((tag, index) => (
                <Button key={index} className="w-fit" variant="secondary">
                  {tag}
                </Button>
              ))}
            </div>
          </div>
          <div className="aqua-caption text-[14px] leading-[18px] lg:text-[16px] lg:leading-[24px] max-w-[683px] antialiased">
            <p>
              Les Petits Prödiges est une marque de cosmétiques respectueuse de
              l'environnement, fabriquée en France.
            </p>
            <p>
              <span className="underline underline-offset-4 decoration-1">
                Leur objectif :
              </span>{' '}
              réduire le nombre de produits dans nos salles de bains.
            </p>
            <p className="mb-5">
              <span className="underline underline-offset-4 decoration-1">
                Leur produit phare :
              </span>{' '}
              le baume Magique.
            </p>
            <p>
              J'ai eu l'opportunité de travailler en tant que directrice
              artistique, en autonomie, lors d'un stage de six mois.
            </p>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-[50px]">
          <div className="relative w-[691px] h-[491px]">
            <Image
              src="/images/projects/MAX/stickers-mockup-2.png"
              alt="stickers-mockup-2"
              fill
              loading="lazy"
              sizes="(max-width: 691px) 100vw, 691px"
              className="rounded-[20px] object-cover object-[center_65%]"
            />
          </div>
          <div className="grow relative h-[491px]">
            <Image
              src="/images/projects/MAX/start.jpg"
              alt="start"
              fill
              priority
              sizes={`(max-width: 489px) 100vw, 489px`}
              className={`rounded-[20px] object-cover`}
            />
          </div>
        </div>
      </div>
      <div className="px-[22px] md:px-16 lg:px-[109px]">
        <div className="lg:pt-[70px] pb-[70px] flex flex-wrap md:flex-nowrap justify-center gap-5 lg:gap-[50px] lg:border-b lg:border-t border-primary">
          <LeftColSticky />
          <RightColScrollable />
        </div>
      </div>
    </div>
  );
}
