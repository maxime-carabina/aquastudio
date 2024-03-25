import { ReactNode } from 'react';

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <section className="min-h-screen h-fit">{children}</section>;
}
