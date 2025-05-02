import type { Metadata } from 'next';

import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';

import { NavBar } from '@/component';
import { cn } from '@/libs/cn';

import Provider from './_provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Echo Nest',
  description: 'The Resonance of Ideas',
  icons: {
    icon: 'vercel.svg',
    apple: 'vercel.svg',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(geistSans.variable, geistMono.variable, `antialiased`)}>
        <Provider>
          <NavBar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
