import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components';

const TAGS = ['DA', 'Print', 'UX/UI', 'Social media'];

function RightColScrollable() {
  return (
    <div className="grow">
      <div className="mb-5 lg:mb-10 w-full relative h-[186px] lg:h-[375px]">
        <Image
          src="/images/projects/BRIGITTE/LOGO.jpg"
          alt="LOGO"
          fill
          loading="lazy"
          sizes="(max-width: 493px) 100vw, 493px"
          className="rounded-[15px] lg:rounded-[20px] object-contain lg:object-cover"
        />
      </div>
      <div className="mb-5 lg:mb-10 flex flex-col-reverse lg:flex-row gap-5 lg:gap-[34px]">
        <div className="relative h-[346px] lg:h-[443px] lg:w-[443px]">
          <Image
            src="/images/projects/BRIGITTE/affiche-2-mockup.jpg"
            alt="affiche-2-mockup"
            fill
            quality={100}
            sizes="(max-width: 443px) 100vw, 443px"
            className="rounded-[20px] object-cover"
          />
        </div>
        <div className="grow">
          <div className="flex lg:flex-col justify-between gap-5 h-full">
            <div
              className={`w-full h-[168px] lg:h-[213px] rounded-[20px] px-3 py-4 lg:px-[26px] lg:py-[31px] flex flex-col justify-end`}
              style={{
                backgroundColor: '#2A6088',
                color: 'white',
                fontFamily: 'Allotrope',
              }}
            >
              <p
                className="mb-2 leading-none tracking-wider text-[60px] lg:text-[60px] antialiased"
                style={{
                  fontWeight: 700,
                }}
              >
                Aa
              </p>
              <p
                className="leading-none tracking-wider text-[14px] antialiased mb-2.5"
                style={{
                  fontWeight: 'bold',
                }}
              >
                Allotrope
              </p>
              <p
                className="leading-none tracking-wider text-[14px] antialiased"
                style={{
                  fontWeight: 'bold',
                }}
              >
                bold
              </p>
            </div>
            <div
              className={`grow w-full font-Montserrat rounded-[20px] px-3 py-4 lg:px-[26px] lg:py-[31px] flex flex-col justify-end`}
              style={{
                backgroundColor: '#ED7D1A',
                color: 'white',
              }}
            >
              <p
                className="mb-2 leading-none tracking-wider text-[60px] lg:text-[80px] antialiased"
                style={{
                  fontWeight: 400,
                }}
              >
                Aa
              </p>
              <p
                className="leading-none tracking-wider text-[14px] antialiased mb-2.5"
                style={{
                  fontWeight: 400,
                }}
              >
                Montserrat
              </p>
              <p
                className="leading-none tracking-wider text-[14px] antialiased"
                style={{
                  fontWeight: 400,
                }}
              >
                Regular
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`mb-5 lg:mb-10 w-full p-6 lg:px-[52px] lg:py-[46px] rounded-[20px] flex gap-5 lg:gap-10`}
        style={{
          background: '#2A6088',
        }}
      >
        <div className="relative grow h-[288px] lg:h-[424px]">
          <Image
            src="/images/projects/BRIGITTE/AFFICHE-2.jpg"
            alt="AFFICHE-2"
            fill
            loading="lazy"
            quality={100}
            sizes={`(max-width: 587px) 100vw, 587px`}
            className="object-contain lg:object-cover"
          />
        </div>
        <div className="relative grow lg:h-[424px] hidden lg:block">
          <Image
            src="/images/projects/BRIGITTE/POSTER.webp"
            alt="POSTER"
            fill
            loading="lazy"
            quality={100}
            sizes={`(max-width: 587px) 100vw, 587px`}
            className={`lg:object-cover`}
          />
        </div>
      </div>
      <div className="mb-5 lg:mb-10 flex flex-col lg:flex-row gap-5 lg:gap-[34px]">
        <div className="grow">
          <div className="flex flex-col justify-between gap-5 h-full">
            <div
              className={`relative rounded-[10px] lg:rounded-[20px] flex flex-col justify-end px-5 py-2 lg:px-[25px] lg:py-[9px] font-Montserrat text-white antialiased h-[68px] lg:h-full`}
              style={{
                backgroundColor: '#2A6088',
              }}
            >
              <p className="text-[16px] lg:text-[12px] font-normal lg:leading-[30px]">
                #2A6088
              </p>
            </div>
            <div
              className={`relative rounded-[10px] lg:rounded-[20px] flex flex-col justify-end px-5 py-2 lg:px-[25px] lg:py-[9px] font-Montserrat text-white antialiased h-[68px] lg:h-full`}
              style={{
                backgroundColor: '#C72022',
              }}
            >
              <p className="text-[16px] lg:text-[12px] font-normal lg:leading-[30px]">
                #C72022
              </p>
            </div>
            <div
              className={`relative rounded-[10px] lg:rounded-[20px] flex flex-col justify-end px-5 py-2 lg:px-[25px] lg:py-[9px] font-Montserrat text-white antialiased h-[68px] lg:h-full`}
              style={{
                backgroundColor: '#ED7D1A',
              }}
            >
              <p className="text-[16px] lg:text-[12px] font-normal lg:leading-[30px]">
                #ED7D1A
              </p>
            </div>
            <div
              className={`relative rounded-[10px] lg:rounded-[20px] flex flex-col justify-end px-5 py-2 lg:px-[25px] lg:py-[9px] font-Montserratantialiased h-[68px] lg:h-full`}
              style={{
                backgroundColor: '#FEF2E8',
                color: '#015982',
              }}
            >
              <p className="text-[16px] lg:text-[12px] font-normal lg:leading-[30px]">
                #015982
              </p>
            </div>
          </div>
        </div>
        <div className="relative h-[362px] lg:h-[467px] lg:w-[418px]">
          <Image
            src="/images/projects/BRIGITTE/Brigitte_mockup-Menu.jpg"
            alt="Brigitte_mockup-Menu"
            fill
            quality={100}
            sizes="(max-width: 418px) 100vw, 418px"
            className="rounded-[20px] object-cover object-center"
          />
        </div>
      </div>
      <div className="mb-5 lg:mb-10 flex flex-col lg:flex-row gap-5 lg:gap-[34px]">
        <div className="relative w-full h-[346px] lg:w-[407px] lg:h-[407px]">
          <Image
            src="/images/projects/BRIGITTE/ticket-de-commande-mockup.jpg"
            alt="ticket-de-commande-mockup"
            fill
            quality={100}
            sizes={`(max-width: 407px) 100vw, 407px`}
            className={`rounded-[20px] object-cover`}
          />
        </div>
        <div className="relative grow h-[272px] lg:h-[407px]">
          <Image
            src="/images/projects/BRIGITTE/Logo-secondaire.webp"
            alt="Logo-secondaire"
            fill
            quality={100}
            sizes="(max-width: 264px) 100vw, 264px"
            className="rounded-[20px] object-cover"
          />
        </div>
      </div>
      <div className="mb-5 lg:mb-10 w-full relative h-[381px] lg:h-[442px]">
        <Image
          src="/images/projects/BRIGITTE/mockup-appli-brigitte.jpg"
          alt="mockup-appli-brigitte"
          fill
          loading="lazy"
          sizes="(max-width: 493px) 100vw, 493px"
          className="rounded-[20px] object-cover"
        />
      </div>
      <div
        className={`mb-5 lg:mb-10 w-full px-6 py-12 lg:px-[52px] lg:py-[46px] rounded-[20px] flex flex-col lg:flex-row gap-5 lg:gap-10`}
        style={{
          background: '#ED7D1A',
        }}
      >
        <div className="relative grow h-[376px]">
          <Image
            src="/images/projects/BRIGITTE/CHARGEMENT.webp"
            alt="CHARGEMENT"
            fill
            loading="lazy"
            quality={100}
            sizes={`(max-width: 587px) 100vw, 587px`}
            className="object-contain"
          />
        </div>
        <div className="relative grow h-[376px]">
          <Image
            src="/images/projects/BRIGITTE/ARRIVÉE.jpg"
            alt="ARRIVÉE"
            fill
            loading="lazy"
            quality={100}
            sizes={`(max-width: 587px) 100vw, 587px`}
            className={`object-contain`}
          />
        </div>
        <div className="relative grow h-[376px]">
          <Image
            src="/images/projects/BRIGITTE/PAGE-D'ACCUEIL.webp"
            alt="PAGE-D'ACCUEIL"
            fill
            loading="lazy"
            quality={100}
            sizes={`(max-width: 587px) 100vw, 587px`}
            className={`object-contain`}
          />
        </div>
      </div>
      <div
        className="mb-5 lg:mb-10 flex flex-col gap-5 lg:gap-14 p-14 lg:px-38 rounded-[20px]"
        style={{ background: '#015982' }}
      >
        <div className="grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 gap-8 lg:gap-11 place-content-center place-items-center">
          <div className="relative w-[228px] h-[404px] lg:w-[262px] lg:h-[465px]">
            <Image
              src="/images/projects/BRIGITTE/profil_tinder.webp"
              alt="profil_tinder"
              fill
              quality={100}
              sizes={`(max-width: 109px) 100vw, 109px`}
              className={`object-cover`}
            />
          </div>
          <div className="relative w-[228px] h-[404px] lg:w-[262px] lg:h-[465px]">
            <Image
              src="/images/projects/BRIGITTE/orgasme_culinaire.webp"
              alt="orgasme_culinaire"
              fill
              quality={100}
              sizes={`(max-width: 109px) 100vw, 109px`}
              className={`object-cover`}
            />
          </div>
          <div className="relative w-[228px] h-[404px] lg:w-[262px] lg:h-[465px]">
            <Image
              src="/images/projects/BRIGITTE/flamme.webp"
              alt="flamme"
              fill
              quality={100}
              sizes={`(max-width: 109px) 100vw, 109px`}
              className={`object-cover`}
            />
          </div>
          <div className="relative w-[228px] h-[404px] lg:w-[262px] lg:h-[465px]">
            <Image
              src="/images/projects/BRIGITTE/l_amour.webp"
              alt="l_amour"
              fill
              quality={100}
              sizes={`(max-width: 109px) 100vw, 109px`}
              className={`object-cover`}
            />
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
      <div className="relative mb-10 h-[346px] lg:h-[489px]">
        <Image
          src="/images/projects/BRIGITTE/Brigitte_carte_mockups.png"
          alt="carte-de-visite-mockup"
          fill
          loading="lazy"
          sizes={`(max-width: 493px) 100vw, 493px`}
          className="rounded-[20px] object-cover object-center"
        />
      </div>
      <div className="bg-primary rounded-[20px] px-8 py-6 lg:py-[34px] lg:px-[45px]">
        <div className="font-GothamLight antialiased text-f-secondary text-[14px] leading-[16px] lg:text-[20px] lg:leading-[22px]">
          <p className="mb-8 antialiased">
            <span className="font-Gotham font-bold antialiased">
              Le challenge :
            </span>{' '}
            Concevoir une identité mémorable et distinctive. Produire diverses
            déclinaisons telles que des publications pour les réseaux sociaux et
            des affiches.
          </p>
          <p className="antialiased">
            <span className="font-Gotham font-bold antialiased">Mots 🔑 :</span>{' '}
            Vintage - mascotte - coloré
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
              Brigitte
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
              Brigitte incarne le concept d'un{' '}
              <span className="font-GothamBook font-medium antialiased">
                food truck parisien
              </span>
              , avec une application pour des commandes simplifiées et le suivi
              en temps réel de leur emplacement.
            </p>
            <p className="mb-5">
              Leur communication souligne l'importance des rencontres et la
              satisfaction de bien manger, comparant cette expérience à un
              moment amoureux
            </p>
            <p>
              “Chez Brigitte, on ne swipe pas des profils pour une conquête,
              mais pour savourer de bons plats.”
            </p>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-[50px]">
          <div className="relative w-full h-[513px]">
            <Image
              src="/images/projects/BRIGITTE/Bannière.webp"
              alt="Bannière"
              fill
              priority
              quality={100}
              sizes="(max-width: 691px) 100vw, 691px"
              className="rounded-[20px] object-cover"
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
