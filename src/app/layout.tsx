import type { Metadata } from 'next';
import { Roboto, Work_Sans } from 'next/font/google';
import './globals.css';
import React from 'react';

const roboto = Roboto({ subsets: ['cyrillic'], display: 'swap', weight: ['400', '500', '700'] });
const work_sans = Work_Sans({ subsets: ['latin'], display: 'swap', weight: '700' })

export const metadata: Metadata = {
  title: "Currency exchanger",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
