import Image from 'next/image';

import { Header, TextArea, Input } from '@/components';
import Logo from '@/src/assets/test.png';

export default function ContactPage() {
  return (
    <main className="w-full">
      <div className="px-[22px] md:px-16 lg:px-28 pt-5 pb-[35px] lg:pb-[114px] bg-primary">
        <Header color="secondary" />
        <div className="mt-[38px] lg:mt-28 lg:mb-[88px] text-f-secondary">
          <h1 className="uppercase aqua-banner text-[20px] lg:text-[50px] leading-none antialiased mb-5">
            Je t'ai convaincus ?
          </h1>
          <h2 className="antialiased aqua-title text-[14px] lg:text-[25px]">
            Je suis disponible du lundi au vendredi.
          </h2>
        </div>
        <div className="flex items-center gap-40 max-h-64">
          <p className="lg:text-[150px] ml-[88px] animate-wave origin-[70% 70%]">
            👋
          </p>
          <div className="grow h-full">
            <div className="mb-10 flex items-center gap-11">
              <div className="font-GothamLight lg:text-[22px] w-full max-w-72 antialiased">
                <Input placeholder="Marine PERRAUD" />
              </div>
              <div className="font-GothamLight lg:text-[22px] w-full antialiased">
                <Input placeholder="marine.aquastud@gmail.com" />
              </div>
            </div>
            <TextArea placeholder="Message..." />
          </div>
        </div>
      </div>
      <div className="pt-11 lg:pt-14 lg:pb-14 text-f-primary">
        <div className="block overflow-hidden uppercase">
          <div className="block whitespace-nowrap">
            <span className="inline-block text-center whitespace-nowrap animate-infinite-loop">
              <div className="flex items-center">
                <Image
                  src={Logo}
                  alt="Aqua Studio Logo"
                  className="w-[89.33px] h-[89.33px] md:w-[147.89px] md:h-[147.89px]"
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
