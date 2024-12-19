import { Suspense } from 'react';

import {
  Features,
  FeaturesSkeleton
} from '@/components/core/sections/features';
import { Hero, HeroSkeleton } from '@/components/core/sections/hero';
import { Stats, StatsSkeleton } from '@/components/core/sections/stats';

export default function Home() {
  return (
    <>
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<FeaturesSkeleton />}>
        <Features />
      </Suspense>
      <Suspense fallback={<StatsSkeleton />}>
        <Stats />
      </Suspense>
    </>
  );
}
