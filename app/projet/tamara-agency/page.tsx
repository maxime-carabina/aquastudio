import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components';

const TAGS = ['DA', 'Refont', 'Social média'];

function RightColScrollable() {
  return (
    <div className="grow">
      <div className="mb-5 lg:mb-10 w-full relative h-[85px] lg:h-[171px]">
        <Image
          src="/images/projects/TAMARA_AGENCY/ANNONCE.jpg"
          alt="ANNONCE"
          fill
          loading="lazy"
          sizes="(max-width: 493px) 100vw, 493px"
          className="rounded-[15px] lg:rounded-[20px] object-cover"
        />
      </div>
      <div className="mb-5 lg:mb-10 w-full relative h-[186px] lg:h-[608px]">
        <Image
          src="/images/projects/TAMARA_AGENCY/LOGO-CONCEPT.jpg"
          alt="ANNONCE"
          fill
          loading="lazy"
          sizes="(max-width: 493px) 100vw, 493px"
          className="rounded-[15px] lg:rounded-[20px] object-cover hidden lg:block"
        />
        <Image
          src="/images/projects/TAMARA_AGENCY/Agency.webp"
          alt="Agency"
          fill
          loading="lazy"
          sizes="(max-width: 493px) 100vw, 493px"
          className="rounded-[15px] lg:rounded-[20px] object-cover lg:hidden"
        />
      </div>
      <div className="mb-5 lg:mb-10 flex gap-5 lg:gap-[34px]">
        <div className="relative hidden lg:block lg:h-[448px] lg:w-[400px]">
          <Image
            src="/images/projects/TAMARA_AGENCY/PHOTO.jpg"
            alt="PHOTO"
            fill
            quality={100}
            sizes="(max-width: 373px) 100vw, 373px"
            className="rounded-[20px] object-cover"
          />
        </div>
        <div className="grow">
          <div className="flex lg:flex-col justify-between gap-5 lg:gap-3 h-full">
            <div className="relative w-[103px] h-[102px] lg:w-full lg:h-[130px]">
              <Image
                src="/images/projects/TAMARA_AGENCY/jaune.jpg"
                alt="jaune"
                fill
                quality={100}
                sizes="(max-width: 373px) 100vw, 373px"
                className="rounded-[20px] object-cover"
              />
            </div>
            <div className="relative w-[103px] h-[102px] lg:w-full lg:h-[130px]">
              <Image
                src="/images/projects/TAMARA_AGENCY/rose.jpg"
                alt="rose"
                fill
                quality={100}
                sizes="(max-width: 373px) 100vw, 373px"
                className="rounded-[20px] object-cover"
              />
            </div>
            <div className="relative w-[103px] h-[102px] lg:w-full lg:h-[130px]">
              <Image
                src="/images/projects/TAMARA_AGENCY/vert.jpg"
                alt="vert"
                fill
                quality={100}
                sizes="(max-width: 373px) 100vw, 373px"
                className="rounded-[20px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5 lg:mb-10 w-full relative lg:h-[452px] hidden lg:block">
        <Image
          src="/images/projects/TAMARA_AGENCY/CIBLE-VALEURS-SERVICES.jpg"
          alt="CIBLE-VALEURS-SERVICES"
          fill
          loading="lazy"
          sizes="(max-width: 493px) 100vw, 493px"
          className="rounded-[20px] object-cover"
        />
      </div>
      <div className="mb-5 lg:mb-10 flex flex-col lg:flex-row gap-5 lg:gap-[34px]">
        <div className="relative w-full h-[400px] lg:h-[392px]">
          <Image
            src="/images/projects/TAMARA_AGENCY/COULEURS.jpg"
            alt="COULEURS"
            fill
            quality={100}
            sizes={`(max-width: 329px) 100vw, 329px`}
            className={`rounded-[20px] object-cover`}
          />
        </div>
        <div className="relative w-full h-[400px] lg:h-[402px]">
          <Image
            src="/images/projects/TAMARA_AGENCY/TYPOGRAPHIES.jpg"
            alt="TYPOGRAPHIES"
            fill
            quality={100}
            sizes="(max-width: 329px) 100vw, 329px"
            className="rounded-[20px] object-cover"
          />
        </div>
      </div>
      <div
        className="mb-5 lg:mb-10 flex flex-col gap-5 lg:gap-14 p-14 lg:px-38 rounded-[20px]"
        style={{ background: '#010101' }}
      >
        <div className="grid grid-cols-2 grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-5 lg:gap-14 place-content-center place-items-center">
          <div className="relative w-[96px] h-[96px] lg:w-[109px] lg:h-[109px]">
            <Image
              src="/images/projects/TAMARA_AGENCY/CONSEILS.svg"
              alt="CONSEILS"
              fill
              quality={100}
              sizes={`(max-width: 109px) 100vw, 109px`}
              className={`object-cover`}
            />
          </div>
          <div className="relative w-[96px] h-[96px] lg:w-[109px] lg:h-[109px]">
            <Image
              src="/images/projects/TAMARA_AGENCY/CRÉATION.svg"
              alt="CRÉATION"
              fill
              quality={100}
              sizes={`(max-width: 109px) 100vw, 109px`}
              className={`object-cover`}
            />
          </div>
          <div className="relative w-[96px] h-[96px] lg:w-[109px] lg:h-[109px]">
            <Image
              src="/images/projects/TAMARA_AGENCY/DÉVELOPPEMENT.svg"
              alt="DÉVELOPPEMENT"
              fill
              quality={100}
              sizes={`(max-width: 109px) 100vw, 109px`}
              className={`object-cover`}
            />
          </div>
          <div className="relative w-[96px] h-[96px] lg:w-[109px] lg:h-[109px]">
            <Image
              src="/images/projects/TAMARA_AGENCY/OPTIMISATION.svg"
              alt="OPTIMISATION"
              fill
              quality={100}
              sizes={`(max-width: 109px) 100vw, 109px`}
              className={`object-cover`}
            />
          </div>
          <div className="relative w-[96px] h-[96px] lg:w-[109px] lg:h-[109px]">
            <Image
              src="/images/projects/TAMARA_AGENCY/DESIGN.svg"
              alt="DESIGN"
              fill
              quality={100}
              sizes={`(max-width: 109px) 100vw, 109px`}
              className={`object-cover`}
            />
          </div>
          <div className="relative w-[96px] h-[96px] lg:w-[109px] lg:h-[109px]">
            <Image
              src="/images/projects/TAMARA_AGENCY/MIGRATION.svg"
              alt="MIGRATION"
              fill
              quality={100}
              sizes={`(max-width: 109px) 100vw, 109px`}
              className={`object-cover`}
            />
          </div>
        </div>
      </div>
      <div className="mb-5 lg:mb-10 w-full relative h-[368px] lg:h-[600px]">
        <Image
          src="/images/projects/TAMARA_AGENCY/mockup-prez-TA.png"
          alt="mockup-prez-TA"
          fill
          loading="lazy"
          sizes="(max-width: 493px) 100vw, 493px"
          className="rounded-[20px] object-cover"
        />
      </div>
      <div
        className={`bg-black w-full p-6 lg:px-[100px] lg:py-[55px] rounded-[20px] hidden lg:flex flex-col gap-5 lg:gap-10`}
      >
        <div className="relative grow h-[150px] lg:h-[310px]">
          <Image
            src="/images/projects/TAMARA_AGENCY/PREZ-2.webp"
            alt="PREZ-2"
            fill
            loading="lazy"
            quality={100}
            sizes={`(max-width: 587px) 100vw, 587px`}
            className={`lg:object-contain`}
          />
        </div>
        <div className="relative grow h-[150px] lg:h-[310px]">
          <Image
            src="/images/projects/TAMARA_AGENCY/PREZ-1.webp"
            alt="PREZ-1"
            fill
            loading="lazy"
            quality={100}
            sizes={`(max-width: 587px) 100vw, 587px`}
            className="lg:object-contain"
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
      <div className="relative mb-10 h-[242px] lg:h-[393px]">
        <Image
          src="/images/projects/TAMARA_AGENCY/tamaraagency.png"
          alt="tamaraagency-mobile"
          fill
          loading="lazy"
          sizes={`(max-width: 493px) 100vw, 493px`}
          className="rounded-[20px] object-cover object-center lg:hidden"
        />
        <Image
          src="/images/projects/TAMARA_AGENCY/TA-mockup-Site.png"
          alt="TA-mockup-Site"
          fill
          loading="lazy"
          sizes={`(max-width: 493px) 100vw, 493px`}
          className="rounded-[20px] object-cover object-[center_30%] hidden lg:block"
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
            <h1 className="mb-8 lg:mb-[30px] aqua-banner text-[50px] leading-[40px] lg:text-[80px] lg:leading-[75px] uppercase max-w-[500px]">
              Tamara Agency
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
              Tamara Agency est une agence de communication spécialisée dans la
              création de contenu pour les réseaux sociaux. Elle a besoin d'une
              identité visuelle et d'un site web pour se lancer.
            </p>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-[50px]">
          <div className="relative w-[699px] h-[491px]">
            <Image
              src="/images/projects/TAMARA_AGENCY/tamaraagency.png"
              alt="tamaraagency"
              fill
              loading="lazy"
              sizes="(max-width: 699px) 100vw, 699px"
              className="rounded-[20px] object-cover"
            />
          </div>
          <div className="grow relative h-[503px]">
            <Image
              src="/images/projects/TAMARA_AGENCY/mockup-ohone-TA.jpg"
              alt="mockup-ohone-TA"
              fill
              priority
              sizes={`(max-width: 481px) 100vw, 481px`}
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
