import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components';

const TAGS = ['DA', 'Packaging', 'PLV'];

function RightColScrollable() {
  const textList = [
    "Format vidéo (reprise des reel instagram) : Permet de visualiser le produit en action en temps réel Renforçe l'engagement de vos clients.",
    'Le prix : Doit être facilement accessible près du titre, même si  celui-ci est déjà inclus dans le CTA de façon sticky.',
    "Création de valeurs : Les bénéfices produit sont visibles instantanément d'un simple coup d'œil !",
    'Preuve sociale : Mise en avant des avis clients (cliquable) Cela vient  rassurer sur l’authenticité de ces avis.',
    'Menu déroulant : Rendre le tout plus digeste.',
    "Cross selling : Présentation des suggestions d'articles complémentaires pour enrichir l’achat, favorisant ainsi une augmentation significative de votre panier moyen.",
  ];

  return (
    <div className="grow">
      <div
        className={`mb-5 lg:mb-10 grow flex flex-col-reverse lg:flex-row justify-between font-Soleil text-[14px] lg:text-[20px] px-4 py-5 lg:px-11 lg:py-8 rounded-[20px] antialiased`}
        style={{ background: '#445D52', color: 'white' }}
      >
        <div>
          <p className="uppercase font-normal">Branding</p>
          <p className="font-light italic">
            Identité visuelle - tone of voice - stratégie
          </p>
        </div>
        <p className="uppercase font-normal self-end lg:self-auto">Temps 01</p>
      </div>
      <div className="mb-5 lg:mb-10 w-full relative h-[645px] lg:h-[710px]">
        <Image
          src="/images/projects/GALBO/Galbo_stratégie_mobile.webp"
          alt="Galbo_stratégie"
          fill
          loading="lazy"
          sizes="(max-width: 493px) 100vw, 493px"
          className="rounded-[15px] lg:rounded-[20px] object-cover lg:hidden"
        />
        <Image
          src="/images/projects/GALBO/Galbo_stratégie.webp"
          alt="Galbo_stratégie"
          fill
          loading="lazy"
          sizes="(max-width: 493px) 100vw, 493px"
          className="rounded-[15px] lg:rounded-[20px] object-cover hidden lg:block"
        />
      </div>
      <div
        className={`mb-5 lg:mb-10 w-full p-10 lg:px-[52px] lg:py-[46px] rounded-[20px] flex flex-col gap-5 lg:gap-10`}
        style={{
          background:
            "url('/images/projects/GALBO/marble-background_mobile.svg')",
          backgroundRepeat: 'repeat',
        }}
      >
        <div className="relative grow h-[340px] lg:h-[213px]">
          <Image
            src="/images/projects/GALBO/Green_mobile.svg"
            alt="Green_mobile"
            fill
            loading="lazy"
            quality={100}
            sizes={`(max-width: 587px) 100vw, 587px`}
            className="object-contain lg:hidden"
          />
          <Image
            src="/images/projects/GALBO/Green.svg"
            alt="Green_mobile"
            fill
            loading="lazy"
            quality={100}
            sizes={`(max-width: 587px) 100vw, 587px`}
            className="object-none hidden lg:block"
          />
        </div>
        <div className="relative grow h-[340px] lg:h-[213px]">
          <Image
            src="/images/projects/GALBO/Blue_mobile.svg"
            alt="Blue_mobile"
            fill
            loading="lazy"
            quality={100}
            sizes={`(max-width: 587px) 100vw, 587px`}
            className={`object-contain lg:hidden`}
          />
          <Image
            src="/images/projects/GALBO/Blue.svg"
            alt="Blue_mobile"
            fill
            loading="lazy"
            quality={100}
            sizes={`(max-width: 587px) 100vw, 587px`}
            className={`object-none hidden lg:block`}
          />
        </div>
        <div className="relative grow h-[340px] lg:h-[213px]">
          <Image
            src="/images/projects/GALBO/Beige_mobile.svg"
            alt="Beige_mobile"
            fill
            loading="lazy"
            quality={100}
            sizes={`(max-width: 587px) 100vw, 587px`}
            className={`object-contain lg:hidden`}
          />
          <Image
            src="/images/projects/GALBO/Beige.svg"
            alt="Beige_mobile"
            fill
            loading="lazy"
            quality={100}
            sizes={`(max-width: 587px) 100vw, 587px`}
            className={`object-none hidden lg:block`}
          />
        </div>
      </div>
      <div className="mb-5 lg:mb-10 w-full relative hidden lg:block h-[727px]">
        <Image
          src="/images/projects/GALBO/EXPLICATIONS-DA.webp"
          alt="EXPLICATIONS-DA"
          fill
          loading="lazy"
          sizes="(max-width: 493px) 100vw, 493px"
          className="rounded-[15px] lg:rounded-[20px] object-cover"
        />
      </div>
      <div className="mb-5 lg:mb-10 w-full relative h-[532px] lg:hidden">
        <Image
          src="/images/projects/GALBO/EXPLICATIONS-DA-1.webp"
          alt="EXPLICATIONS-DA-1"
          fill
          loading="lazy"
          sizes="(max-width: 493px) 100vw, 493px"
          className="rounded-[15px] lg:rounded-[20px] object-cover"
        />
      </div>
      <div className="mb-5 lg:mb-10 w-full relative h-[532px] lg:hidden">
        <Image
          src="/images/projects/GALBO/EXPLICATIONS-DA-2.webp"
          alt="EXPLICATIONS-DA-2"
          fill
          loading="lazy"
          sizes="(max-width: 493px) 100vw, 493px"
          className="rounded-[15px] lg:rounded-[20px] object-cover"
        />
      </div>
      <div className="mb-5 lg:mb-10 w-full relative h-[230px] lg:h-[468px]">
        <Image
          src="/images/projects/GALBO/packaging-galbo.jpg"
          alt="packaging-galbo"
          fill
          loading="lazy"
          sizes="(max-width: 493px) 100vw, 493px"
          className="rounded-[15px] lg:rounded-[20px] object-cover"
        />
      </div>
      <div
        className={`mb-5 lg:mb-10 grow flex flex-col-reverse lg:flex-row justify-between font-Soleil text-[14px] lg:text-[20px] px-4 py-5 lg:px-11 lg:py-8 rounded-[20px] antialiased`}
        style={{ background: '#445D52', color: 'white' }}
      >
        <div>
          <p className="uppercase font-normal">Le site web</p>
          <p className="font-light italic">
            Recherche utilisateur - refonte - CRO
          </p>
        </div>
        <p className="uppercase font-normal self-end lg:self-auto">Temps 02</p>
      </div>
      <div className="mb-5 lg:mb-10 w-full relative h-[303px] lg:h-[616px]">
        <Image
          src="/images/projects/GALBO/Galbo_bannière_mockup.webp"
          alt="Galbo_bannière_mockup"
          fill
          loading="lazy"
          sizes="(max-width: 493px) 100vw, 493px"
          className="rounded-[15px] lg:rounded-[20px] object-cover"
        />
      </div>
      <div className="mb-5 lg:mb-10 w-full relative h-[306px] lg:h-[622px]">
        <Image
          src="/images/projects/GALBO/Galbo_megamenu_mockup.jpg"
          alt="Galbo_megamenu_mockup"
          fill
          loading="lazy"
          sizes="(max-width: 493px) 100vw, 493px"
          className="rounded-[15px] lg:rounded-[20px] object-cover object-[center_30%]"
        />
      </div>
      <div className="mb-5 lg:mb-10 w-full relative h-[312px] lg:h-[634px]">
        <Image
          src="/images/projects/GALBO/NOS-ICONIQES.jpg"
          alt="NOS-ICONIQES"
          fill
          loading="lazy"
          sizes="(max-width: 493px) 100vw, 493px"
          className="rounded-[15px] lg:rounded-[20px] object-cover"
        />
      </div>
      <div className="mb-5 lg:mb-10 flex flex-col-reverse lg:flex-row gap-5 lg:gap-[34px]">
        <div className="grow">
          <div className="flex flex-col justify-between gap-5 h-fit">
            <div className="relative w-full lg:h-[445px] hidden lg:block">
              <Image
                src="/images/projects/GALBO/Galbo_unisex_mockup.jpg"
                alt="Galbo_unisex_mockup"
                fill
                quality={100}
                sizes={`(max-width: 373px) 100vw, 373px`}
                className={`rounded-[20px] object-cover`}
              />
            </div>
            <div className="relative w-full h-[508px] lg:h-[672px]">
              <Image
                src="/images/projects/GALBO/Galbo_mockup_phone.jpg"
                alt="Galbo_mockup_phone"
                fill
                quality={100}
                sizes={`(max-width: 373px) 100vw, 373px`}
                className={`rounded-[20px] object-cover`}
              />
            </div>
          </div>
        </div>
        <div className="relative w-full h-[1350px] lg:h-[1151px] lg:w-[295px]">
          <Image
            src="/images/projects/GALBO/mobile-page-produit.jpg"
            alt="mobile-page-produit"
            fill
            quality={100}
            sizes="(max-width: 295px) 100vw, 295px"
            className="rounded-[20px] object-cover"
          />
        </div>
      </div>
      <div
        className={`lg:mb-10 grow relative bg-[#445D52] px-9 py-12 rounded-[20px] hidden lg:block`}
      >
        <ul className="list-decimal text-white max-w-[619px] m-auto antialiased">
          {textList?.map((text, index) => {
            const newArr = text.split(' : ');

            return (
              <li
                key={index}
                className={`font-Soleil lg:text-[20px] ${index > 0 ? 'mt-8' : ''}`}
              >
                <span className="font-bold lg:text-[22px]">{newArr[0]} : </span>
                {newArr[1]}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mb-5 lg:mb-10 w-full relative h-[403px] lg:h-[613px]">
        <Image
          src="/images/projects/GALBO/Galbo_panier_mockup.jpg"
          alt="Galbo_panier_mockup"
          fill
          loading="lazy"
          sizes="(max-width: 493px) 100vw, 493px"
          className="rounded-[15px] lg:rounded-[20px] object-cover"
        />
      </div>
      <div className="mb-5 lg:mb-10 w-full relative h-[403px] lg:h-[554px] hidden lg:block">
        <Image
          src="/images/projects/GALBO/ELLES-PORTENT.webp"
          alt="ELLES-PORTENT"
          fill
          loading="lazy"
          sizes="(max-width: 493px) 100vw, 493px"
          className="rounded-[15px] lg:rounded-[20px] object-cover"
        />
      </div>
      <div
        className={`mb-5 lg:mb-10 grow flex flex-col-reverse lg:flex-row justify-between font-Soleil text-[14px] lg:text-[20px] px-4 py-5 lg:px-11 lg:py-8 rounded-[20px] antialiased`}
        style={{ background: '#445D52', color: 'white' }}
      >
        <div>
          <p className="uppercase font-normal">Pour aller plus loin</p>
          <p className="font-light italic">Shooting photo & social média</p>
        </div>
        <p className="uppercase font-normal self-end lg:self-auto">Temps 03</p>
      </div>
      <div className="mb-5 lg:mb-10 flex flex-col lg:flex-row gap-5 lg:gap-[34px]">
        <div className="relative h-[395px] lg:h-[380px] w-full">
          <Image
            src="/images/projects/GALBO/MOODBOARD-SHOOTING-01.webp"
            alt="MOODBOARD-SHOOTING-01"
            fill
            quality={100}
            sizes={`(max-width: 373px) 100vw, 373px`}
            className={`rounded-[20px] object-cover`}
          />
        </div>
        <div className="relative w-full h-[395px] lg:h-[380px]">
          <Image
            src="/images/projects/GALBO/MOODBOARD-SHOOTING-02.webp"
            alt="MOODBOARD-SHOOTING-02"
            fill
            quality={100}
            sizes="(max-width: 295px) 100vw, 295px"
            className="rounded-[20px] object-cover"
          />
        </div>
      </div>
      <div
        className="w-full px-[38px] py-[44px] rounded-[20px] flex flex-col lg:flex-row gap-5 lg:gap-[34px]"
        style={{ background: '#F9F3E7' }}
      >
        <div className="grow">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-5 mb-5">
            <div className="relative hidden lg:block lg:w-[192px] lg:h-[339px]">
              <Image
                src="/images/projects/GALBO/insta-2.webp"
                alt="insta-2"
                fill
                quality={100}
                sizes={`(max-width: 192px) 100vw, 192px`}
                className={`object-cover`}
              />
            </div>
            <div className="relative hidden lg:block lg:w-[192px] lg:h-[339px]">
              <Image
                src="/images/projects/GALBO/insta-1.webp"
                alt="insta-1"
                fill
                quality={100}
                sizes={`(max-width: 192px) 100vw, 192px`}
                className={`object-cover`}
              />
            </div>
            <div className="relative w-[228px] h-[405px] lg:w-[192px] lg:h-[339px]">
              <Image
                src="/images/projects/GALBO/insta-3.webp"
                alt="insta-3"
                fill
                quality={100}
                sizes={`(max-width: 192px) 100vw, 192px`}
                className={`object-cover`}
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
            <div className="relative w-[228px] h-[405px] lg:w-[192px] lg:h-[339px]">
              <Image
                src="/images/projects/GALBO/insta-6.webp"
                alt="insta-6"
                fill
                quality={100}
                sizes={`(max-width: 192px) 100vw, 192px`}
                className={`object-cover`}
              />
            </div>
            <div className="relative w-[228px] h-[405px] lg:w-[192px] lg:h-[339px]">
              <Image
                src="/images/projects/GALBO/insta-4.webp"
                alt="insta-4"
                fill
                quality={100}
                sizes={`(max-width: 192px) 100vw, 192px`}
                className={`object-cover`}
              />
            </div>
            <div className="relative hidden lg:block lg:w-[192px] lg:h-[339px]">
              <Image
                src="/images/projects/GALBO/insta-5.webp"
                alt="insta-5"
                fill
                quality={100}
                sizes={`(max-width: 192px) 100vw, 192px`}
                className={`object-cover`}
              />
            </div>
          </div>
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
      <div className="relative mb-10 h-[357px] lg:h-[489px]">
        <Image
          src="/images/projects/GALBO/étiquette-2-galbo.png"
          alt="étiquette-2-galbo"
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
      <div className="px-[22px] md:px-16 lg:px-28 mt-12 lg:mb-[70px] lg:mt-[74px] text-f-primary">
        <div className="mb-6 lg:mb-[70px] flex flex-wrap items-start justify-between gap-8 antialiased">
          <div>
            <h1 className="mb-8 lg:mb-[30px] aqua-banner text-[50px] leading-[20px] lg:text-[80px] lg:leading-[75px] uppercase max-w-[500px]">
              Galbo
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
            <p>Galbo est une marque de mode.</p>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-[50px]">
          <div className="relative w-[368px] h-[490px]">
            <Image
              src="/images/projects/GALBO/carte-2-galbo.jpg"
              alt="carte-2-galbo"
              fill
              loading="lazy"
              sizes="(max-width: 368px) 100vw, 368px"
              className="rounded-[20px] object-cover object-[center_65%]"
            />
          </div>
          <div className="grow relative h-[490px]">
            <Image
              src="/images/projects/GALBO/HOME-PAGE.webp"
              alt="HOME-PAGE"
              fill
              priority
              sizes={`(max-width: 813px) 100vw, 813px`}
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
