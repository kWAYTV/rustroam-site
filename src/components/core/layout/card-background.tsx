'use client';

export function CardBackground() {
  return (
    <>
      {/* Simplified gradient overlay with reduced animation complexity */}
      <div className='absolute inset-0 bg-gradient-to-r from-orange-500/5 via-red-500/5 to-orange-500/5' />

      {/* Simplified grid with reduced opacity */}
      <div className='pointer-events-none absolute inset-0 bg-grid-small opacity-30' />

      {/* Simplified radial mask */}
      <div className='pointer-events-none absolute inset-0 bg-background/10' />
    </>
  );
}
