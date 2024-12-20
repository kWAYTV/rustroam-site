'use client';

export function Background() {
  return (
    <>
      {/* Animated gradient background */}
      <div className='animate-gradient-xy pointer-events-none absolute inset-0 bg-gradient-to-tr from-orange-500/5 via-red-500/5 to-orange-500/5' />

      {/* Grid patterns */}
      <div className='bg-grid-small pointer-events-none absolute inset-0' />
      <div className='bg-grid-large pointer-events-none absolute inset-0' />

      {/* Radial fade */}
      <div className='pointer-events-none absolute inset-0 bg-background/80 [mask-image:var(--tw-gradient-radial-to-b)]' />

      {/* Glow effects */}
      <div className='absolute inset-0 opacity-30'>
        <div className='absolute -left-[10%] top-0 h-[500px] w-[500px] rounded-full bg-orange-500 opacity-20 blur-[128px]' />
        <div className='absolute -right-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-red-500 opacity-20 blur-[128px]' />
      </div>
    </>
  );
}
