import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components';

const TAGS = ['DA', 'Application mobile', 'PLV'];

function RightColScrollable() {
  return (
    <div className="grow">
      <div
        className={`mb-5 lg:mb-10 grow flex flex-col-reverse lg:flex-row justify-between font-Soleil text-[14px] lg:text-[20px] px-4 py-5 lg:px-11 lg:py-8 rounded-[20px] antialiased`}
        style={{ background: '#015A59', color: 'white' }}
      >
        <div>
          <p className="uppercase font-normal">Branding</p>
          <p className="font-light italic">
            Identité visuelle - Naming - Tone of voice
          </p>
        </div>
        <p className="uppercase font-normal self-end lg:self-auto">Temps 01</p>
      </div>
      <div className="mb-5 lg:mb-10 flex flex-col-reverse lg:flex-row gap-5 lg:gap-[34px]">
        <div className="relative h-[346px] lg:h-[616px] lg:w-[532px]">
          <Image
            src="/images/projects/LES_4_SAISONS/mockup-appli-2.webp"
            alt="mockup-appli-2"
            fill
            quality={100}
            sizes="(max-width: 443px) 100vw, 443px"
            className="rounded-[20px] border border-black object-cover"
          />
        </div>
        <div className="grow">
          <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-1 lg:grid-rows-4 justify-between gap-5 h-full">
            <div
              className={`relative rounded-[30px] flex justify-center items-center px-5 py-2 lg:px-[25px] lg:py-[9px] w-[163px] lg:w-full h-[163px] lg:h-[137px]`}
              style={{
                backgroundColor: '#FC95E8',
              }}
            >
              <div className="relative w-[71px] h-[114px] lg:h-[95px] lg:w-[59px]">
                <Image
                  src="/images/projects/LES_4_SAISONS/Logo.svg"
                  alt="mockup-appli-2"
                  fill
                  quality={100}
                  sizes="(max-width: 443px) 100vw, 443px"
                  className="object-cover"
                />
              </div>
            </div>
            <div
              className={`relative rounded-[30px] flex justify-center items-center px-5 py-2 lg:px-[25px] lg:py-[9px] w-[163px] lg:w-full h-[163px] lg:h-[137px]`}
              style={{
                backgroundColor: '#A4DCFF',
              }}
            >
              <div className="relative w-[71px] h-[114px] lg:h-[95px] lg:w-[59px]">
                <Image
                  src="/images/projects/LES_4_SAISONS/Logo.svg"
                  alt="mockup-appli-2"
                  fill
                  quality={100}
                  sizes="(max-width: 443px) 100vw, 443px"
                  className="object-cover"
                />
              </div>
            </div>
            <div
              className={`relative rounded-[30px] flex justify-center items-center px-5 py-2 lg:px-[25px] lg:py-[9px] w-[163px] lg:w-full h-[163px] lg:h-[137px]`}
              style={{
                backgroundColor: '#FBC117',
              }}
            >
              <div className="relative w-[71px] h-[114px] lg:h-[95px] lg:w-[59px]">
                <Image
                  src="/images/projects/LES_4_SAISONS/Logo.svg"
                  alt="mockup-appli-2"
                  fill
                  quality={100}
                  sizes="(max-width: 443px) 100vw, 443px"
                  className="object-cover"
                />
              </div>
            </div>
            <div
              className={`relative rounded-[30px] flex justify-center items-center px-5 py-2 lg:px-[25px] lg:py-[9px] w-[163px] lg:w-full h-[163px] lg:h-[137px]`}
              style={{
                backgroundColor: '#015A59',
              }}
            >
              <div className="relative w-[71px] h-[114px] lg:h-[95px] lg:w-[59px]">
                <Image
                  src="/images/projects/LES_4_SAISONS/Logo.svg"
                  alt="mockup-appli-2"
                  fill
                  quality={100}
                  sizes="(max-width: 443px) 100vw, 443px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5 lg:mb-10 w-full relative h-[379px] lg:h-[769px]">
        <Image
          src="/images/projects/LES_4_SAISONS/Instagram-post.jpg"
          alt="Instagram-post"
          fill
          loading="lazy"
          sizes="(max-width: 493px) 100vw, 493px"
          className="rounded-[15px] lg:rounded-[20px] object-cover"
        />
      </div>
      <div className="mb-5 lg:mb-10 w-full relative h-[435px] lg:h-[900px]">
        <Image
          src="/images/projects/LES_4_SAISONS/billets.jpg"
          alt="Instagram-post"
          fill
          loading="lazy"
          sizes="(max-width: 493px) 100vw, 493px"
          className="rounded-[20px] object-cover"
        />
      </div>
      <div className="mb-5 lg:mb-10 flex gap-5 lg:gap-[34px]">
        <div className="grow">
          <div className="flex flex-col justify-between gap-5 h-[378px] lg:h-full">
            <div
              className={`grow rounded-[20px] px-3 py-4 lg:px-[26px] lg:py-[31px] flex flex-col justify-end items-center lg:items-start font-TiltWarp font-normal`}
              style={{
                backgroundColor: '#FF8CED',
                color: 'white',
              }}
            >
              <p
                className="mb-2 leading-none tracking-wider text-[200px] antialiased"
                style={{
                  fontWeight: 400,
                }}
              >
                Aa
              </p>
              <p
                className="leading-none tracking-wider text-[30px] antialiased pb-8"
                style={{
                  fontWeight: 400,
                }}
              >
                Tilt Warp regular
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-[200px] h-[250px] lg:h-[507px] lg:w-[280px] hidden lg:block">
          <Image
            src="/images/projects/LES_4_SAISONS/femme-qui-cuisine.jpg"
            alt="femme-qui-cuisine"
            fill
            quality={100}
            sizes="(max-width: 399px) 100vw, 399px"
            className="rounded-[10px] lg:rounded-[20px] object-cover"
          />
        </div>
      </div>
      <div
        className={`mb-5 lg:mb-10 grow flex flex-col-reverse lg:flex-row justify-between font-Soleil text-[14px] lg:text-[20px] px-4 py-5 lg:px-11 lg:py-8 rounded-[20px] antialiased`}
        style={{ background: '#015A59', color: 'white' }}
      >
        <div>
          <p className="uppercase font-normal">Design d’application</p>
          <p className="font-light italic">Page d’acceuil - page recette</p>
        </div>
        <p className="uppercase font-normal self-end lg:self-auto">Temps 02</p>
      </div>
      <div className="mb-5 lg:mb-10 flex justify-center gap-5 lg:gap-[34px]">
        <div className="relative w-full h-[357px] lg:h-[726px]">
          <Image
            src="/images/projects/LES_4_SAISONS/PAGE-LOADING.png"
            alt="PAGE-LOADING"
            fill
            quality={100}
            sizes="(max-width: 399px) 100vw, 399px"
            className="rounded-[10px] lg:rounded-[20px] object-contain"
          />
        </div>
        <div className="relative w-full h-[357px] lg:h-[726px]">
          <Image
            src="/images/projects/LES_4_SAISONS/PAGE-HUMEUR.png"
            alt="PAGE-HUMEUR"
            fill
            quality={100}
            sizes="(max-width: 399px) 100vw, 399px"
            className="rounded-[10px] lg:rounded-[20px] object-contain"
          />
        </div>
      </div>
      <div className="mb-5 lg:mb-10 w-full relative h-[391px] lg:h-[793px]">
        <Image
          src="/images/projects/LES_4_SAISONS/app-mockup.png"
          alt="app-mockup"
          fill
          loading="lazy"
          sizes="(max-width: 493px) 100vw, 493px"
          className="rounded-[20px] object-cover"
        />
      </div>
      <div className="flex justify-center gap-5 lg:gap-[34px]">
        <div className="relative w-full h-[357px] lg:h-[726px]">
          <Image
            src="/images/projects/LES_4_SAISONS/PAGE-D_ACCEUIL.png"
            alt="PAGE-D_ACCEUIL"
            fill
            quality={100}
            sizes="(max-width: 399px) 100vw, 399px"
            className="rounded-[10px] lg:rounded-[20px] object-contain"
          />
        </div>
        <div className="relative w-full h-[357px] lg:h-[726px]">
          <Image
            src="/images/projects/LES_4_SAISONS/PAGE-RECETTE.png"
            alt="PAGE-RECETTE"
            fill
            quality={100}
            sizes="(max-width: 399px) 100vw, 399px"
            className="rounded-[10px] lg:rounded-[20px] object-contain"
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
      <div className="relative mb-10 h-[370px] lg:h-[500px]">
        <Image
          src="/images/projects/LES_4_SAISONS/logo-vert.jpg"
          alt="logo-vert"
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
            <h1 className="mb-8 lg:mb-[30px] aqua-banner text-[50px] leading-[50px] lg:text-[80px] lg:leading-[75px] uppercase max-w-[500px]">
              Les 4 saisons
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
            <p>
              Les 4 saisons est une application mobile qui permet de proposer
              des recettes de saison, de les cuisiner et de les partager avec sa
              communauté.
            </p>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-[50px]">
          <div className="relative w-[390px] h-[490px]">
            <Image
              src="/images/projects/LES_4_SAISONS/visuel-page-collection.jpg"
              alt="visuel-page-collection"
              fill
              loading="lazy"
              sizes="(max-width: 691px) 100vw, 691px"
              className="rounded-[20px] object-cover"
            />
          </div>
          <div className="grow relative h-[491px]">
            <Image
              src="/images/projects/LES_4_SAISONS/Affiche-mockup.jpg"
              alt="start"
              fill
              priority
              sizes={`(max-width: 489px) 100vw, 489px`}
              className="rounded-[20px] object-cover"
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
