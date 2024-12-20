'use client';

import { ServerIcon } from 'lucide-react';
import Link from 'next/link';

import { MobileMenu } from '@/components/core/layout/mobile-menu';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ui/mode-toggle';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Rules', href: '/rules' },
  { label: 'Servers', href: '/servers' }
];

export function Navbar() {
  return (
    <nav className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto px-4'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <Link href='/' className='group flex items-center space-x-2'>
            <div className='rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 p-1.5 backdrop-blur-sm transition-colors duration-300 group-hover:from-orange-500/30 group-hover:to-red-500/30'>
              <ServerIcon className='h-5 w-5 text-orange-600 transition-colors duration-300 group-hover:text-orange-500 dark:text-orange-500 dark:group-hover:text-orange-400' />
            </div>
            <span className='bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text font-bold text-transparent transition-colors duration-300 group-hover:from-orange-500 group-hover:to-red-500 dark:from-orange-500 dark:to-red-500 dark:group-hover:from-orange-400 dark:group-hover:to-red-400'>
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
            <ModeToggle />
            <Button
              asChild
              variant='ringHover'
              size='sm'
              className='bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-600/90 hover:to-red-600/90 dark:from-orange-500 dark:to-red-500'
            >
              <Link href='/servers'>Connect</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <MobileMenu items={navItems} />
        </div>
      </div>
    </nav>
  );
}
