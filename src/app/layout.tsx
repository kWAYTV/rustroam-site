import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Background } from '@/components/core/layout/background';
import { BackToTop } from '@/components/core/layout/back-to-top';
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
          <div className='relative flex min-h-screen flex-col'>
            <Background className='fixed inset-0' />
            <Navbar />
            <main className='relative z-10 flex-1'>{children}</main>
            <Footer className='relative z-10' />
            <BackToTop />
          </div>
        </Providers>
      </body>
    </html>
  );
}
