/* eslint-disable react-refresh/only-export-components */

import type { Metadata } from 'next';
import './globals.css';

import { Footer } from '@/components';

export const metadata: Metadata = {
  title: 'AquaStudio',
  description: 'AquaStudio is a web-based portfolio.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className="bg-background max-w-screen-2xl m-auto">
        {children}
        <Footer />
        {/* <NavBar /> */}
      </body>
    </html>
  );
}
