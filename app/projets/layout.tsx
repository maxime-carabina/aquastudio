import { ReactNode } from 'react';

import { Header } from '@/components';

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return (
    <section className="min-h-screen h-fit">
      <div className="px-[22px] md:px-16 lg:px-28 pt-5">
        <Header />
      </div>
      {children}
    </section>
  );
}
