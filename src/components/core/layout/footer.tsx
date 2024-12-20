'use client';

import { ServerIcon } from 'lucide-react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        'mt-auto border-t border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60',
        className
      )}
    >
      <div className='container mx-auto px-4'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <Link href='/' className='group flex items-center space-x-2'>
              <div className='rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 p-1.5 backdrop-blur-sm transition-colors duration-300 group-hover:from-orange-500/30 group-hover:to-red-500/30'>
                <ServerIcon className='h-5 w-5 text-orange-600 transition-colors duration-300 group-hover:text-orange-500 dark:text-orange-500 dark:group-hover:text-orange-400' />
              </div>
              <span className='bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text font-bold text-transparent transition-colors duration-300 group-hover:from-orange-500 group-hover:to-red-500 dark:from-orange-500 dark:to-red-500 dark:group-hover:from-orange-400 dark:group-hover:to-red-400'>
                RustRoam
              </span>
            </Link>
            <span className='text-sm text-muted-foreground'>
              © {new Date().getFullYear()}
            </span>
          </div>

          <p className='text-sm text-muted-foreground'>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
