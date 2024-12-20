'use client';

export function CardBackground() {
  return (
    <>
      {/* Animated gradient overlay */}
      <div className='absolute inset-0 animate-gradient-xy bg-gradient-to-r from-orange-500/10 via-red-500/10 to-orange-500/10' />

      {/* Enhanced grid pattern */}
      <div className='pointer-events-none absolute inset-0 bg-grid-small' />

      {/* Radial mask */}
      <div className='pointer-events-none absolute inset-0 bg-background/20 [mask-image:var(--tw-gradient-radial-to-tr)]' />
    </>
  );
}
