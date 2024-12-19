import { ServerIcon } from 'lucide-react';
import Link from 'next/link';

import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn('mt-auto border-t border-border/40', className)}>
      <div className='container mx-auto px-4 py-12 md:py-16'>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-5'>
          {/* Logo + Social */}
          <div className='lg:col-span-2'>
            <Link href='/' className='flex items-center space-x-2'>
              <div className='rounded-lg bg-orange-500/10 p-1.5'>
                <ServerIcon className='h-5 w-5 text-orange-600 dark:text-orange-500' />
              </div>
              <span className='bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text font-bold text-transparent dark:from-orange-500 dark:to-red-500'>
                RustRoam
              </span>
            </Link>
            <p className='mt-4 text-sm text-muted-foreground'>
              Experience the ultimate Rust gaming environment with
              high-performance servers and an active community.
            </p>
          </div>
        </div>

        <Separator className='my-8 bg-border/40' />

        <div className='flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left'>
          <p className='text-sm text-muted-foreground'>
            © {new Date().getFullYear()} RustRoam. All rights reserved.
          </p>
          <div className='flex items-center space-x-4 text-sm text-muted-foreground'>
            <Link href='#' className='hover:text-foreground'>
              Terms
            </Link>
            <span>·</span>
            <Link href='#' className='hover:text-foreground'>
              Privacy
            </Link>
            <span>·</span>
            <Link href='#' className='hover:text-foreground'>
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
