import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components';

const TAGS = ['DA', 'Personnal branding'];

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
      <div className="mb-5 lg:mb-10 flex gap-5 lg:gap-[34px]">
        <div className="relative w-[106px] h-[150px] lg:h-[300px] lg:w-[212px]">
          <Image
            src="/images/projects/MAX/image3D.jpg"
            alt="Buttons"
            fill
            quality={100}
            sizes={`(max-width: 300px) 100vw, 300px`}
            className={`rounded-[20px] object-cover`}
          />
        </div>
        <div className="relative grow">
          <Image
            src="/images/projects/MAX/Logo_max.jpg"
            alt="mockup-latypique"
            fill
            quality={100}
            sizes="(max-width: 295px) 100vw, 295px"
            className="rounded-[20px] object-cover"
          />
        </div>
      </div>
      <div className="mb-5 lg:mb-10 flex gap-5 lg:gap-[34px]">
        <div className="grow">
          <div className="flex flex-col justify-between gap-5 h-full">
            <div
              className={`relative rounded-[10px] lg:rounded-[20px] flex flex-col justify-between px-5 py-2 lg:px-[25px] lg:py-[9px] font-AvenirNext text-black antialiased h-[60px] lg:h-[122px]`}
              style={{
                backgroundColor: '#C9E6F8',
              }}
            >
              <p className="text-[10px] lg:text-[15px] font-normal lg:leading-[30px]">
                [Light blue]
              </p>
              <p className="text-[10px] lg:text-[12px] font-normal lg:leading-[30px]">
                #2A6088
              </p>
            </div>
            <div
              className={`relative rounded-[10px] lg:rounded-[20px] flex flex-col justify-between px-5 py-2 lg:px-[25px] lg:py-[9px] font-AvenirNext text-white antialiased h-[60px] lg:h-[122px]`}
              style={{
                backgroundColor: '#60A7D3',
              }}
            >
              <p className="text-[10px] lg:text-[15px] font-normal lg:leading-[30px]">
                [Mid blue]
              </p>
              <p className="text-[10px] lg:text-[12px] font-normal lg:leading-[30px]">
                #C72022
              </p>
            </div>
            <div
              className={`grow relative rounded-[10px] lg:rounded-[20px] flex flex-col justify-between px-5 py-2 lg:px-[25px] lg:py-[9px] font-AvenirNext text-white antialiased`}
              style={{
                backgroundColor: '#000000',
              }}
            >
              <p className="text-[10px] lg:text-[15px] font-normal lg:leading-[30px]">
                [Pure black]
              </p>
              <p className="text-[10px] lg:text-[12px] font-normal lg:leading-[30px]">
                #ED7D1A
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-[180px] h-[240px] lg:h-[494px] lg:w-[418px]">
          <Image
            src="/images/projects/MAX/affiche.png"
            alt="affiche"
            fill
            quality={100}
            sizes="(max-width: 418px) 100vw, 418px"
            className="rounded-[20px] object-cover object-center"
          />
        </div>
      </div>
      <div className="mb-5 lg:mb-10 w-full relative h-[272px] lg:h-[540px]">
        <Image
          src="/images/projects/MAX/mockup-2.jpg"
          alt="mockup-2"
          fill
          loading="lazy"
          sizes="(max-width: 493px) 100vw, 493px"
          className="rounded-[15px] lg:rounded-[20px] object-cover"
        />
      </div>
      <div className="mb-5 lg:mb-10 flex gap-5 lg:gap-[34px]">
        <div className="relative w-[200px] h-[251px] lg:h-[500px] lg:w-[400px]">
          <Image
            src="/images/projects/MAX/max-mockup.png"
            alt="max-mockup"
            fill
            quality={100}
            sizes="(max-width: 400px) 100vw, 400px"
            className="rounded-[20px] object-cover"
          />
        </div>
        <div className="grow">
          <div className="flex flex-col gap-4 lg:gap-5 h-full">
            <div
              className={`w-full h-[97px] lg:h-[193px] rounded-[20px] px-3 py-4 lg:px-[26px] lg:py-[31px] flex flex-col justify-end font-DegularVariable bg-black`}
              style={{
                color: 'white',
              }}
            >
              <p
                className="mb-2 leading-none tracking-wider text-[40px] lg:text-[80px] antialiased"
                style={{
                  fontWeight: 700,
                }}
              >
                Aa
              </p>
              <p
                className="leading-none tracking-wider text-[10px] lg:text-[14px] antialiased"
                style={{
                  fontWeight: 'bold',
                }}
              >
                Degular Variable bold
              </p>
            </div>
            <div
              className={`grow w-full font-AvenirNext rounded-[20px] px-3 py-4 lg:px-[26px] lg:py-[31px] flex flex-col justify-end`}
              style={{
                backgroundColor: '#C9E6F8',
                color: 'black',
              }}
            >
              <p
                className="mb-2 leading-none tracking-wider text-[40px] lg:text-[80px] antialiased"
                style={{
                  fontWeight: 400,
                }}
              >
                Aa
              </p>
              <p
                className="leading-none tracking-wider text-[10px] lg:text-[14px] antialiased mb-2.5"
                style={{
                  fontWeight: 400,
                }}
              >
                Avenir next regular
              </p>
              <p
                className="leading-none tracking-wider text-[8px] lg:text-[14px] antialiased"
                style={{
                  fontWeight: 500,
                  fontStyle: 'italic',
                }}
              >
                Avenir next Medium italic
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`mb-5 lg:mb-10 w-full p-10 lg:px-[52px] lg:py-[46px] rounded-[20px] hidden lg:flex flex-col gap-5 lg:gap-10`}
        style={{
          background: '#C9E6F8',
        }}
      >
        <div className="relative grow lg:h-[331px]">
          <Image
            src="/images/projects/MAX/about-1.jpg"
            alt="about-1"
            fill
            loading="lazy"
            quality={100}
            sizes={`(max-width: 587px) 100vw, 587px`}
            className="object-cover"
          />
        </div>
        <div className="relative grow lg:h-[331px]">
          <Image
            src="/images/projects/MAX/about-2.jpg"
            alt="about-2"
            fill
            loading="lazy"
            quality={100}
            sizes={`(max-width: 587px) 100vw, 587px`}
            className="object-cover"
          />
        </div>
        <div className="relative grow lg:h-[331px]">
          <Image
            src="/images/projects/MAX/about-3.jpg"
            alt="about-3"
            fill
            loading="lazy"
            quality={100}
            sizes={`(max-width: 587px) 100vw, 587px`}
            className="object-cover"
          />
        </div>
      </div>
      <div className="w-full relative h-[342px] lg:h-[687px]">
        <Image
          src="/images/projects/MAX/site-mockup.png"
          alt="site-mockup"
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
      <div className="px-[22px] md:px-16 lg:px-28 mt-12 lg:mb-[70px] lg:mt-[74px] text-f-primary max-w-screen-2xl m-auto">
        <div className="mb-6 lg:mb-[70px] flex flex-wrap items-end justify-between gap-8 antialiased">
          <div>
            <h1 className="mb-4 lg:mb-[30px] aqua-banner text-[60px] leading-[60px] lg:text-[80px] lg:leading-[97px] uppercase max-w-[500px]">
              Max
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
              Maxime Carabina, un jeune développeur, a l'intention de débuter
              une carrière en freelance. Il reconnaît que cultiver son personal
              branding sera un atout significatif pour se démarquer dans son
              cheminement professionnel.
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
      <div className="px-[22px] md:px-16 lg:px-[109px] max-w-screen-2xl m-auto">
        <div className="lg:pt-[70px] pb-[70px] flex flex-wrap md:flex-nowrap justify-center gap-5 lg:gap-[50px] lg:border-b lg:border-t border-primary">
          <LeftColSticky />
          <RightColScrollable />
        </div>
      </div>
    </div>
  );
}
