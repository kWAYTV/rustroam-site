'use client';

import { cn } from '@/lib/utils';

interface BackgroundProps {
  className?: string;
}

export function Background({ className }: BackgroundProps) {
  return (
    <div className={cn('relative', className)}>
      {/* Static gradient background */}
      <div className='absolute inset-0 bg-gradient-to-tr from-orange-500/5 via-red-500/5 to-orange-500/5' />

      {/* Single grid pattern */}
      <div className='absolute inset-0 bg-grid-large opacity-30' />

      {/* Simplified radial fade */}
      <div className='absolute inset-0 bg-background/60' />

      {/* Optimized glow effects */}
      <div className='absolute inset-0 opacity-20'>
        <div className='absolute -left-[10%] top-0 h-[500px] w-[500px] rounded-full bg-orange-500/20 blur-[64px]' />
        <div className='absolute -right-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-red-500/20 blur-[64px]' />
      </div>
    </div>
  );
}
