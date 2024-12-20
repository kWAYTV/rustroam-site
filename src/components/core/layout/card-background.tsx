'use client';

export function CardBackground() {
  return (
    <>
      {/* Animated gradient overlay */}
      <div className='animate-gradient-xy absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-orange-500/10' />

      {/* Enhanced grid pattern */}
      <div className='bg-grid-small pointer-events-none absolute inset-0' />

      {/* Radial mask */}
      <div className='pointer-events-none absolute inset-0 bg-background/20 [mask-image:var(--tw-gradient-radial-to-tr)]' />
    </>
  );
}
