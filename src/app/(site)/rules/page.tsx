import { type Metadata } from 'next';
import { Suspense } from 'react';

import {
  RulesContent,
  RulesSkeleton
} from '@/components/core/rules/rules-content';

export const metadata: Metadata = {
  title: 'Server Rules | RustRoam',
  description: 'Server rules and guidelines for RustRoam gaming community'
};

export default function RulesPage() {
  return (
    <Suspense fallback={<RulesSkeleton />}>
      <RulesContent />
    </Suspense>
  );
}
