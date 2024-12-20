'use client';

import { cn } from '@/lib/utils';

interface BackgroundProps {
  className?: string;
}

export function Background({ className }: BackgroundProps) {
  return (
    <div className={cn('relative', className)}>
      {/* Animated gradient background */}
      <div className='absolute inset-0 animate-gradient-xy bg-gradient-to-tr from-orange-500/5 via-red-500/5 to-orange-500/5' />

      {/* Grid patterns */}
      <div className='absolute inset-0 bg-grid-small' />
      <div className='absolute inset-0 bg-grid-large' />

      {/* Radial fade */}
      <div className='absolute inset-0 bg-background/80 [mask-image:var(--tw-gradient-radial-to-b)]' />

      {/* Glow effects */}
      <div className='absolute inset-0 opacity-30'>
        <div className='absolute -left-[10%] top-0 h-[500px] w-[500px] rounded-full bg-orange-500 opacity-20 blur-[128px]' />
        <div className='absolute -right-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-red-500 opacity-20 blur-[128px]' />
      </div>
    </div>
  );
}
