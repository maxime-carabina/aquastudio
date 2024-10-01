import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components';

const TAGS = ['Packaging', 'PLV', 'Social media'];

function RightColScrollable() {
  return (
    <div className="grow">
      <div className="mb-5 lg:mb-10 w-full relative h-[342px] lg:h-[379px]">
        <Image
          src="/images/projects/LES_PETITS_PRODIGES/1.svg"
          alt="1"
          fill
          loading="lazy"
          sizes="(max-width: 493px) 100vw, 493px"
          className="rounded-[15px] lg:rounded-[20px] object-bottom object-cover hidden lg:block"
        />
        <Image
          src="/images/projects/LES_PETITS_PRODIGES/savons-exfoliant_mobile.webp"
          alt="4"
          fill
          loading="lazy"
          sizes="(max-width: 493px) 100vw, 493px"
          className="rounded-[15px] lg:rounded-[20px] object-cover lg:hidden"
        />
      </div>
      <div className="mb-5 lg:mb-10 flex gap-5 lg:gap-[34px]">
        <div className="relative hidden lg:block lg:h-[360px] lg:w-[374px]">
          <Image
            src="/images/projects/LES_PETITS_PRODIGES/4.svg"
            alt="4"
            fill
            quality={100}
            sizes={`(max-width: 300px) 100vw, 300px`}
            className={`rounded-[20px] object-cover`}
          />
        </div>
        <div className="relative grow h-[370px] lg:h-[360px]">
          <Image
            src="/images/projects/LES_PETITS_PRODIGES/fleur-de-monoi.svg"
            alt="fleur-de-monoi"
            fill
            quality={100}
            sizes="(max-width: 295px) 100vw, 295px"
            className="rounded-[20px] object-cover"
          />
        </div>
      </div>
      <div className="mb-5 lg:mb-10 flex flex-col-reverse lg:flex-row gap-5 lg:gap-[34px]">
        <div className="relative w-full h-[352px] lg:w-[347px]">
          <Image
            src="/images/projects/LES_PETITS_PRODIGES/6.svg"
            alt="6"
            fill
            quality={100}
            sizes={`(max-width: 300px) 100vw, 300px`}
            className={`rounded-[20px] object-cover`}
          />
        </div>
        <div className="relative lg:grow h-[167px] lg:h-[352px]">
          <Image
            src="/images/projects/LES_PETITS_PRODIGES/7.svg"
            alt="7"
            fill
            quality={100}
            sizes="(max-width: 295px) 100vw, 295px"
            className="rounded-[20px] object-cover"
          />
        </div>
      </div>
      <div className="mb-5 lg:mb-10 w-full relative h-[318px] lg:h-[432px]">
        <Image
          src="/images/projects/LES_PETITS_PRODIGES/8.svg"
          alt="8"
          fill
          loading="lazy"
          sizes="(max-width: 493px) 100vw, 493px"
          className="rounded-[15px] lg:rounded-[20px] object-right lg:object-center object-cover"
        />
      </div>
      <div className="mb-5 lg:mb-10 w-full relative h-[234px] lg:h-[468px]">
        <Image
          src="/images/projects/LES_PETITS_PRODIGES/9.svg"
          alt="9"
          fill
          loading="lazy"
          sizes="(max-width: 493px) 100vw, 493px"
          className="rounded-[15px] lg:rounded-[20px] object-cover"
        />
      </div>
      <div className="mb-5 lg:mb-10 flex flex-col lg:flex-row gap-5 lg:gap-[34px]">
        <div className="relative w-full h-[211px] lg:h-[478px] lg:w-[269px]">
          <Image
            src="/images/projects/LES_PETITS_PRODIGES/10.svg"
            alt="10"
            fill
            quality={100}
            sizes={`(max-width: 269px) 100vw, 269px`}
            className={`rounded-[20px] object-cover hidden lg:block`}
          />
          <Image
            src="/images/projects/LES_PETITS_PRODIGES/10_mobile.webp"
            alt="10_mobilr"
            fill
            quality={100}
            sizes={`(max-width: 346px) 100vw, 346px`}
            className={`rounded-[20px] object-contain lg:hidden`}
          />
        </div>
        <div className="relative lg:grow h-[428px] lg:h-[478px]">
          <Image
            src="/images/projects/LES_PETITS_PRODIGES/11.webp"
            alt="11"
            fill
            quality={100}
            sizes="(max-width: 386px) 100vw, 386px"
            className="rounded-[20px] object-cover"
          />
        </div>
      </div>
      <div className="mb-5 lg:mb-10 w-full relative h-[224px] lg:h-[443px]">
        <Image
          src="/images/projects/LES_PETITS_PRODIGES/12.webp"
          alt="12"
          fill
          loading="lazy"
          sizes="(max-width: 688px) 100vw, 688px"
          className="rounded-[15px] lg:rounded-[20px] object-cover"
        />
      </div>
      <div className="mb-5 lg:mb-10 flex flex-col lg:flex-row gap-5 lg:gap-[34px]">
        <div className="relative w-full h-[414px] lg:h-[418px] lg:w-[349px]">
          <Image
            src="/images/projects/LES_PETITS_PRODIGES/13.webp"
            alt="13"
            fill
            quality={100}
            sizes={`(max-width: 349px) 100vw, 349px`}
            className={`rounded-[20px] object-cover`}
          />
        </div>
        <div className="relative lg:grow h-[473px] lg:h-[418px]">
          <Image
            src="/images/projects/LES_PETITS_PRODIGES/14.webp"
            alt="14"
            fill
            quality={100}
            sizes="(max-width: 306px) 100vw, 306px"
            className="rounded-[20px] object-cover"
          />
        </div>
      </div>
      <div className="mb-5 w-full relative h-[227px] lg:hidden">
        <Image
          src="/images/projects/LES_PETITS_PRODIGES/16.webp"
          alt="16"
          fill
          loading="lazy"
          sizes="(max-width: 345px) 100vw, 345px"
          className="rounded-[15px] lg:rounded-[20px] object-cover"
        />
      </div>
      <div className="w-full relative h-[426px] lg:h-[486px]">
        <Image
          src="/images/projects/LES_PETITS_PRODIGES/15.webp"
          alt="15"
          fill
          loading="lazy"
          sizes="(max-width: 345px) 100vw, 345px"
          className="rounded-[15px] lg:rounded-[20px] object-left object-cover"
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
          src="/images/projects/LES_PETITS_PRODIGES/kit.webp"
          alt="kit"
          fill
          loading="lazy"
          sizes={`(max-width: 493px) 100vw, 493px`}
          className="rounded-[20px] object-cover"
        />
      </div>
      <div className="bg-primary rounded-[20px] px-8 py-6 lg:py-[34px] lg:px-[45px]">
        <div className="font-GothamLight antialiased text-f-secondary text-[14px] leading-[16px] lg:text-[20px] lg:leading-[22px]">
          <p className="mb-8 antialiased">
            <span className="font-Gotham font-bold antialiased">
              Le challenge :
            </span>{' '}
            Conception de nouveaux packagings, révision de la direction
            artistique pour une collaboration avec Monoprix, création de
            coffrets, réalisation d'illustrations, etc.
          </p>
          <p className="antialiased">
            <span className="font-Gotham font-bold antialiased">Mots 🔑 :</span>{' '}
            Féminin - illustation - Coloré
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
            <h1 className="mb-8 lg:mb-[30px] aqua-banner text-[50px] leading-[60px] lg:text-[80px] lg:leading-[80px] uppercase max-w-[500px]">
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
          <div className="relative w-full h-[491px]">
            <Image
              src="/images/projects/LES_PETITS_PRODIGES/Banner.svg"
              alt="Banner"
              fill
              priority
              sizes={`(max-width: 1312px) 100vw, 1312px`}
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
