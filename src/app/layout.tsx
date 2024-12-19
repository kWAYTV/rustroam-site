import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/core/layout/Navbar';
import { Footer } from '@/components/core/layout/Footer';

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
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex min-h-screen flex-col bg-gradient-to-b from-zinc-900 to-black text-white'>
          <Navbar />
          <main className='flex-1'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
