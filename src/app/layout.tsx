import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Background } from '@/components/core/layout/background';
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
          <div className='relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-background via-background/95 to-background text-foreground'>
            <Background />
            <Navbar />
            <main className='relative flex-1'>{children}</main>
            <Footer className='relative' />
          </div>
        </Providers>
      </body>
    </html>
  );
}
