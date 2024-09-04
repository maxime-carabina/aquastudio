import Image from 'next/image';

import { Header, TextArea, Input } from '@/components';
import Logo from '@/src/assets/test.png';

export default function ContactPage() {
  return (
    <main className="w-full">
      <div className="px-[22px] md:px-16 lg:px-28 pt-5 pb-[35px] lg:pb-[114px] bg-primary min-h-screen lg:min-h-fit">
        <Header color="secondary" />
        <div className="mt-[38px] mb-10 lg:mt-28 lg:mb-[88px] text-f-secondary">
          <h1 className="uppercase aqua-banner text-[20px] lg:text-[50px] leading-none antialiased mb-3 lg:mb-5">
            Je t'ai convaincus ?{' '}
            <span className="inline-block animate-wave origin-[70% 70%] lg:hidden">
              👋
            </span>
          </h1>
          <h2 className="antialiased font-GothamLight font-medium text-[16px] lg:text-[25px]">
            Je suis disponible du lundi au vendredi.
          </h2>
        </div>
        <div className="flex items-center justify-center lg:gap-40 flex-wrap md:flex-nowrap lg:max-h-64">
          <p className="hidden lg:inline-block text-[75px] lg:text-[150px] lg:ml-[88px] animate-wave origin-[70% 70%]">
            👋
          </p>
          <div className="grow h-full">
            <div className="mb-4 lg:mb-10 flex items-center gap-4 lg:gap-11 flex-wrap md:flex-nowrap">
              <div className="font-GothamLight lg:text-[22px] w-full lg:max-w-72 antialiased">
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
      <div className="lg:pt-14 lg:pb-14 text-f-primary">
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
