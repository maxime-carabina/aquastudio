import { ReactNode } from 'react';

import { Header } from '@/components';

export default function ProjectLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <div className="px-[22px] md:px-16 lg:px-28 pt-5 max-w-screen-2xl m-auto">
        <Header />
      </div>
      {children}
    </section>
  );
}
