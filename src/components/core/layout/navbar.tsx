'use client';

import { ServerIcon } from 'lucide-react';
import Link from 'next/link';

import { MobileMenu } from '@/components/core/layout/mobile-menu';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Rules', href: '/rules' }
];

export function Navbar() {
  return (
    <nav className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto px-4'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <Link href='/' className='group flex items-center space-x-2'>
            <div className='rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 p-1.5 backdrop-blur-sm transition-colors duration-300 group-hover:from-orange-500/30 group-hover:to-red-500/30'>
              <ServerIcon className='h-5 w-5 text-orange-500' />
            </div>
            <span className='bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text font-bold text-transparent'>
              RustRoam
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex md:items-center md:space-x-6'>
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className='text-sm text-muted-foreground transition-colors hover:text-foreground'
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              variant='ringHover'
              size='sm'
              className='bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600'
            >
              <Link href='/servers'>Our Servers</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <MobileMenu items={navItems} />
        </div>
      </div>
    </nav>
  );
}
