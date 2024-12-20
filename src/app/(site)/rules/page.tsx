import { type Metadata } from 'next';

import { RulesContent } from '@/components/core/rules/rules-content';

export const metadata: Metadata = {
  title: 'Server Rules | RustRoam',
  description: 'Server rules and guidelines for RustRoam gaming community'
};

export default function RulesPage() {
  return <RulesContent />;
}
