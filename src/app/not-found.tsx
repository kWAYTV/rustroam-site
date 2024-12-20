import { Background } from '@/components/core/layout/background';
import { NotFound } from '@/components/core/reusable/not-found';

export default function NotFoundPage() {
  return (
    <div className='relative min-h-screen'>
      <Background />
      <NotFound title='404 - Page Not Found'>
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </NotFound>
    </div>
  );
}
