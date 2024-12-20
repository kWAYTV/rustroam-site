import { type Metadata } from 'next';
import { Suspense } from 'react';

import {
  ServersContent,
  ServersSkeleton
} from '@/components/core/servers/servers-content';

export const metadata: Metadata = {
  title: 'Our Servers | RustRoam',
  description: 'Browse our Rust gaming servers.'
};

export default function ServersPage() {
  return (
    <Suspense fallback={<ServersSkeleton />}>
      <ServersContent />
    </Suspense>
  );
}
