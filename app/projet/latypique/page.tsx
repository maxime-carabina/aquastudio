import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components';

const TAGS = ['UX/UI', 'Maquettes figma', 'Choix de thème'];

function RightColScrollable() {
  const icons = [
    {
      image: {
        src: '/images/projects/LATYPIQUE/ICONES/PAIEMENT-SÉCURISÉ.svg',
        alt: 'PAIEMENT-SÉCURISÉ',
        width: 42,
        height: 43,
      },
      name: 'Paiement sécurisé',
    },
    {
      image: {
        src: '/images/projects/LATYPIQUE/ICONES/LIVRAISON.svg',
        alt: 'LIVRAISON',
        width: 51,
        height: 40,
      },
      name: 'Livraison express et point relais',
    },
    {
      image: {
        src: '/images/projects/LATYPIQUE/ICONES/CARTE.svg',
        alt: 'CARTE',
        width: 52,
        height: 38,
      },
      name: 'Paiement en plusieurs fois',
    },
    {
      image: {
        src: '/images/projects/LATYPIQUE/ICONES/CONNEXION.svg',
        alt: 'CONNEXION',
        width: 39,
        height: 41,
      },
      name: 'Service personnal shopper',
    },
  ];

  return (
    <div className="grow">
      <div className="mb-5 lg:mb-10 w-full relative h-[226px] lg:h-[452px]">
        <Image
          src="/images/projects/LATYPIQUE/Presentation.webp"
          alt="Presentation"
          fill
          loading="lazy"
          sizes="(max-width: 493px) 100vw, 493px"
          className="rounded-[15px] lg:rounded-[20px] object-contain lg:object-cover"
        />
      </div>
      <div
        className={`mb-5 lg:mb-10 w-full p-10 lg:px-[52px] lg:py-[46px] rounded-[20px]`}
        style={{
          background: '#D8CABF',
        }}
      >
        <div className="relative grow h-[350px] lg:h-[307px]">
          <Image
            src="/images/projects/LATYPIQUE/SHOP-THE-LOOK_mobile.webp"
            alt="SHOP-THE-LOOK_mobile"
            fill
            loading="lazy"
            quality={100}
            sizes={`(max-width: 587px) 100vw, 587px`}
            className="object-contain lg:hidden"
          />
          <Image
            src="/images/projects/LATYPIQUE/SHOP-THE-LOOK.jpg"
            alt="SHOP-THE-LOOK"
            fill
            loading="lazy"
            quality={100}
            sizes={`(max-width: 587px) 100vw, 587px`}
            className="object-cover hidden lg:block"
          />
        </div>
      </div>
      <div className="mb-5 lg:mb-10 flex flex-col lg:flex-row gap-5 lg:gap-[34px]">
        <div className="relative h-[304px] lg:h-[402px] w-full">
          <Image
            src="/images/projects/LATYPIQUE/Buttons.webp"
            alt="Buttons"
            fill
            quality={100}
            sizes={`(max-width: 373px) 100vw, 373px`}
            className={`rounded-[20px] object-cover`}
          />
        </div>
        <div className="relative w-full h-[468px] lg:h-[402px]">
          <Image
            src="/images/projects/LATYPIQUE/mockup-latypique.jpg"
            alt="mockup-latypique"
            fill
            quality={100}
            sizes="(max-width: 295px) 100vw, 295px"
            className="rounded-[20px] object-cover"
          />
        </div>
      </div>
      <div className="mb-5 lg:mb-10 flex flex-col lg:flex-row gap-5 lg:gap-[34px]">
        <div className="grow">
          <div className="flex flex-col justify-between gap-5 lg:gap-[34px] h-fit">
            <div className="relative w-full lg:h-[486px]">
              <Image
                src="/images/projects/LATYPIQUE/mockup-iphone.jpg"
                alt="mockup-iphone"
                fill
                quality={100}
                sizes={`(max-width: 373px) 100vw, 373px`}
                className={`rounded-[20px] object-cover`}
              />
            </div>
            <div className="relative w-full lg:h-[490px] hidden lg:block">
              <Image
                src="/images/projects/LATYPIQUE/creme.jpg"
                alt="creme"
                fill
                quality={100}
                sizes={`(max-width: 373px) 100vw, 373px`}
                className={`rounded-[20px] object-cover`}
              />
            </div>
          </div>
        </div>
        <div className="relative w-full h-[1112px] lg:h-[1010px] lg:w-[295px]">
          <Image
            src="/images/projects/LATYPIQUE/PAGE-PRODUIT-MOBILE.jpg"
            alt="PAGE-PRODUIT-MOBILE"
            fill
            quality={100}
            sizes="(max-width: 295px) 100vw, 295px"
            className="rounded-[20px] object-cover"
          />
        </div>
      </div>
      <div className="lg:mb-10 grow relative px-9 py-[53px] rounded-[20px] bg-white">
        <ul className="list-none flex items-center lg:items-start justify-between">
          {icons?.map((icon, index) => (
            <li key={index} className="flex flex-col items-center gap-5">
              <img src={icon.image.src} alt={icon.image.alt} height={43} />
              <p className="font-Poppins lg:text-[10px] max-w-28 text-center antialiased text-black hidden lg:block">
                {icon.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`w-full p-10 lg:px-[52px] lg:py-[46px] rounded-[20px] hidden lg:block`}
        style={{
          background: '#D8CABF',
        }}
      >
        <div className="relative grow lg:h-[262px]">
          <Image
            src="/images/projects/LATYPIQUE/Aperçu-siteweb.webp"
            alt="Aperçu-siteweb"
            fill
            loading="lazy"
            quality={100}
            sizes={`(max-width: 587px) 100vw, 587px`}
            className="object-cover"
          />
        </div>
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
      <div className="relative mb-10 h-[287px] lg:h-[404px]">
        <Image
          src="/images/projects/LATYPIQUE/mockup-2-latypique.jpg"
          alt="mockup-2-latypique"
          fill
          loading="lazy"
          sizes={`(max-width: 493px) 100vw, 493px`}
          className="rounded-[20px] object-cover object-center"
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
            Pop - authentique
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="text-f-primary">
      <div className="px-[22px] md:px-16 lg:px-28 mt-12 lg:mb-[70px] lg:mt-[74px] text-f-primary max-w-screen-2xl m-auto">
        <div className="mb-6 lg:mb-[70px] flex flex-wrap items-start justify-between gap-8 antialiased">
          <div>
            <h1 className="mb-8 lg:mb-[30px] aqua-banner text-[50px] leading-[20px] lg:text-[80px] lg:leading-[75px] uppercase max-w-[500px]">
              L.atypique
            </h1>
            <div className="flex flex-wrap gap-3 max-w-72 lg:max-w-none lg:gap-5">
              {TAGS.map((tag, index) => (
                <Button key={index} className="w-fit" variant="secondary">
                  {tag}
                </Button>
              ))}
            </div>
          </div>
          <div className="aqua-caption text-[14px] leading-[18px] lg:text-[20px] lg:leading-[24px] max-w-[634px] antialiased">
            <p>L.atypique est une marque de cosmétique.</p>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-[50px]">
          <div className="relative w-[695px] h-[503px]">
            <Image
              src="/images/projects/LATYPIQUE/HOME-PAGE-DESCKTOP.webp"
              alt="HOME-PAGE-DESCKTOP"
              fill
              loading="lazy"
              sizes="(max-width: 695px) 100vw, 695px"
              className="rounded-[20px] object-cover"
            />
          </div>
          <div className="grow relative h-[503px]">
            <Image
              src="/images/projects/LATYPIQUE/mockup-macbook.jpg"
              alt="mockup-macbook"
              fill
              priority
              sizes={`(max-width: 489px) 100vw, 489px`}
              className={`rounded-[20px] object-cover`}
            />
          </div>
        </div>
      </div>
      <div className="px-[22px] md:px-16 lg:px-[109px] max-w-screen-2xl m-auto">
        <div className="lg:pt-[70px] pb-[70px] flex flex-wrap md:flex-nowrap justify-center gap-5 lg:gap-[50px] lg:border-b lg:border-t border-primary">
          <LeftColSticky />
          <RightColScrollable />
        </div>
      </div>
    </div>
  );
}
