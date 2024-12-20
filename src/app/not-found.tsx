import { Background } from '@/components/core/layout/background';
import { NotFound } from '@/components/core/reusable/not-found';

export default function NotFoundPage() {
  return (
    <div className='relative min-h-screen'>
      <Background />
      <NotFound title='404 - Page Not Found'>
        Sorry, we couldn't find the page you're looking for.
      </NotFound>
    </div>
  );
}
