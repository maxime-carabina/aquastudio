import { ReactNode } from 'react';

import { Header } from '@/components';

export default function ProjectLayout({ children }: { children: ReactNode }) {
  return (
    <section className="min-h-screen">
      <div className="px-[22px] md:px-16 lg:px-28 pt-5">
        <Header />
      </div>
      {children}
    </section>
  );
}
