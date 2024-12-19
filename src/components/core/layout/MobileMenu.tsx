'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  items: Array<{ label: string; href: string }>;
}

export function MobileMenu({ items }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='md:hidden'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='rounded-lg p-2 text-zinc-400 hover:bg-zinc-800'
      >
        {isOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
      </button>

      {isOpen && (
        <div className='absolute left-0 right-0 border-t border-zinc-800 bg-zinc-900/95 py-4 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/75'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-col space-y-4'>
              {items.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className='text-sm text-zinc-400 transition-colors hover:text-white'
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button size='sm' className='bg-orange-500 hover:bg-orange-600'>
                Connect
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
