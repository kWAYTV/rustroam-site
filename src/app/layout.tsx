import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Footer } from '@/components/core/layout/footer';
import { Navbar } from '@/components/core/layout/navbar';
import { Providers } from '@/components/providers/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RustRoam - Ultimate Rust Gaming Experience',
  description:
    'Experience the ultimate Rust gaming environment with high-performance servers, active community, and regular events.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className='relative flex min-h-screen flex-col bg-gradient-to-b from-background to-background text-foreground'>
            <div className='pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]' />
            <div className='pointer-events-none absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,transparent_0%,#000000_100%)]' />
            <Navbar />
            <main className='relative flex-1'>{children}</main>
            <Footer className='relative' />
          </div>
        </Providers>
      </body>
    </html>
  );
}
