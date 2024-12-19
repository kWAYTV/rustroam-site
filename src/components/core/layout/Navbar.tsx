import { ServerIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MobileMenu } from '@/components/core/layout/MobileMenu';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Rules', href: '/rules' },
  { label: 'Store', href: '/store' },
  { label: 'Leaderboard', href: '/leaderboard' }
];

export function Navbar() {
  return (
    <nav className='sticky top-0 z-50 border-b border-zinc-800 bg-zinc-900/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/75'>
      <div className='container mx-auto px-4'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-2'>
            <ServerIcon className='h-6 w-6 text-orange-500' />
            <span className='font-bold text-white'>RustRoam</span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex md:items-center md:space-x-6'>
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className='text-sm text-zinc-400 transition-colors hover:text-white'
              >
                {item.label}
              </Link>
            ))}
            <Button size='sm' className='bg-orange-500 hover:bg-orange-600'>
              Connect
            </Button>
          </div>

          {/* Mobile Menu */}
          <MobileMenu items={navItems} />
        </div>
      </div>
    </nav>
  );
}
