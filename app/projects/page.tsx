import Image from 'next/image';

import { Button } from '@/components';

const TAGS = ['DA', 'Print et packaging', 'PLV'];

export default function ProjectsPage() {
  return (
    <main className="w-full">
      <div className="px-[22px] md:px-16 lg:px-28 pt-5 mt-12 lg:mb-[72px] lg:mt-16 text-f-primary">
        <h1 className="mb-12 aqua-banner text-[20px] leading-[20px] lg:text-[80px] lg:leading-[135px] uppercase">
          Max
        </h1>
        <div className="flex items-center justify-between mb-16">
          <div className="flex flex-wrap gap-3 max-w-72 lg:max-w-none lg:gap-5">
            {TAGS.map((tag, index) => (
              <Button key={index} customClass="w-fit" variant="secondary">
                {tag}
              </Button>
            ))}
          </div>
          <p className="aqua-caption lg:text-[20px] lg:leading-[21.24px] max-w-[520px]">
            Kanpai est une chaine de restaurant asiatique. C’est un restauaurant
            haut de gamme donet donc élégant.
          </p>
        </div>
        <div className="flex items-center gap-[50px]">
          <div className="w-[691px] h-[491px] relative">
            <Image
              src="/images/lpp-baumes.jpg"
              alt="lpp-baumes"
              quality={100}
              fill
              className="rounded-2xl"
            />
          </div>
          <div className="grow h-[491px] relative">
            <Image
              src="/images/lpp-baumes.jpg"
              alt="lpp-baumes"
              quality={100}
              fill
              className="rounded-[20px]"
            />
          </div>
        </div>
      </div>
      <div className="px-[22px] md:px-16 lg:px-28 pt-5">
        <div className="mb-6 lg:pt-[51px] lg:pb-12 flex justify-center gap-[50px] border-b border-t border-primary">
          <div className="w-[466px] max-h-screen sticky top-[51px]">
            <div className="h-[449px] relative mb-10">
              <Image
                src="/images/lpp-baumes.jpg"
                alt="lpp-baumes"
                fill
                quality={100}
                className="rounded-[20px]"
              />
            </div>
            <div
              className="bg-primary rounded-[20px] py-3 px-[19px]"
              style={{ height: 'calc(100vh - 590px)' }}
            >
              <p className=" aqua-caption text-f-secondary text-justify lg:text-[16px] lg:leading-[22px] mb-28">
                <span className="underline decoration-1 underline-offset-4">
                  Ce que j’ai fait :
                </span>{' '}
                Création des packagings pour les nouveaux produits (crème
                hydratante, savon exfoliant, collab X Monoprix, travailler sur
                des PLV, des illustrations ou encore des bannières web).
              </p>
            </div>
          </div>
          <div className="grow">
            <div className="bg-black h-52 rounded-[20px] lg:mb-[80px]" />
            <div className="mb-10 flex items-center gap-[34px] h-fit">
              <div className="w-[212px] h-[299px] relative">
                <Image
                  src="/images/lpp-baumes.jpg"
                  alt="lpp-baumes"
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
                  <p className="text-[15px] font-normal tracking-[5%] lg:leading-[30px]">
                    [Light blue]
                  </p>
                  <p className="text-[12px] font-normal tracking-[5%] lg:leading-[30px]">
                    #C9E6F8
                  </p>
                </div>
                <div className="bg-[#60A7D3] h-[122px] mb-[23px] rounded-[20px] flex flex-col justify-between px-[25px] py-[9px] text-white">
                  <p className="text-[15px] font-normal tracking-[5%] lg:leading-[30px]">
                    [Mid blue]
                  </p>
                  <p className="text-[12px] font-normal tracking-[5%] lg:leading-[30px]">
                    #60A7D3
                  </p>
                </div>
                <div className="bg-black grow rounded-[20px] flex flex-col justify-between px-[25px] py-[9px] text-white">
                  <p className="text-[15px] font-normal tracking-[5%] lg:leading-[30px]">
                    [Pure black]
                  </p>
                  <p className="text-[12px] font-normal tracking-[5%] lg:leading-[30px]">
                    #000000
                  </p>
                </div>
              </div>
              <div className="relative w-[373px]">
                <Image
                  src="/images/lpp-baumes.jpg"
                  alt="lpp-baumes"
                  fill
                  quality={100}
                  className="rounded-[20px]"
                />
              </div>
            </div>
            <div className="w-full h-[539px] relative mb-10">
              <Image
                src="/images/lpp-baumes.jpg"
                alt="lpp-baumes"
                fill
                quality={100}
                className="rounded-[20px]"
              />
            </div>
            <div className="flex gap-[34px] h-[499px] mb-10">
              <div className="w-[399px] h-[499px] relative">
                <Image
                  src="/images/lpp-baumes.jpg"
                  alt="lpp-baumes"
                  fill
                  quality={100}
                  className="rounded-[20px]"
                />
              </div>
              <div className="grow flex flex-col gap-8">
                <div className="h-[193px] bg-black rounded-[20px] px-[26px] py-[31px] flex flex-col justify-end">
                  <p className="text-white font-bold tracking-[5%] lg:text-[80px]">
                    Aa
                  </p>
                  <p className="text-white font-bold tracking-[5%] lg:text-[15px]">
                    Degular Variable bold
                  </p>
                </div>
                <div className="grow bg-[#C9E6F8] rounded-[20px] px-[26px] py-[31px] flex flex-col justify-end">
                  <p className="text-black font-normal tracking-[5%] lg:text-[80px]">
                    Aa
                  </p>
                  <p className="text-black font-bold tracking-[5%] lg:text-[15px]">
                    Avenir next regular
                  </p>
                  <p className="text-black font-medium italic tracking-[5%] lg:text-[15px]">
                    Avenir next Medium italic
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-[51px] py-[46px] rounded-[20px] bg-[#C9E6F8] mb-10">
              <div className="h-[331px] relative mb-10">
                <Image
                  src="/images/lpp-baumes.jpg"
                  alt="lpp-baumes"
                  fill
                  quality={100}
                />
              </div>
              <div className="h-[331px] relative mb-10">
                <Image
                  src="/images/lpp-baumes.jpg"
                  alt="lpp-baumes"
                  fill
                  quality={100}
                />
              </div>
              <div className="h-[331px] relative">
                <Image
                  src="/images/lpp-baumes.jpg"
                  alt="lpp-baumes"
                  fill
                  quality={100}
                />
              </div>
            </div>
            <div className="w-full h-[687px] relative mb-10">
              <Image
                src="/images/lpp-baumes.jpg"
                alt="lpp-baumes"
                fill
                quality={100}
                className="rounded-[20px]"
              />
            </div>
            <div className="w-full text-f-primary">
              <h1 className="aqua-banner lg:text-[50px] lg:leading-[80px]">
                C’est canon !
              </h1>
              <h2 className="aqua-caption lg:text-[25px] lg:leading-[30px] mb-12">
                Mon travail te plait ? ✨
                <br />
                N’hésites pas à me contacter pour discuter !!{' '}
              </h2>
              <Button variant="secondary" customClass="w-fit">
                Je suis intéressé(e) par ton travail !
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
