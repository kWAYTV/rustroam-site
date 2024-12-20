import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import { Hero, HeroSkeleton } from '@/components/core/sections/hero';
import { StatsSkeleton } from '@/components/core/sections/stats';

// Dynamically import heavy components
const Features = dynamic(
  () => import('@/components/core/sections/features').then(mod => mod.Features),
  {
    loading: () => <FeaturesSkeleton />
  }
);

const Stats = dynamic(
  () => import('@/components/core/sections/stats').then(mod => mod.Stats),
  {
    loading: () => <StatsSkeleton />
  }
);

// Import skeletons statically
const { FeaturesSkeleton } = await import(
  '@/components/core/sections/features'
);

export default function Home() {
  return (
    <div className='space-y-12 sm:space-y-16 lg:space-y-20'>
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>
      <Features />
      <Stats />
    </div>
  );
}
