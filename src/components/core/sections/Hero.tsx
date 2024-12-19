import { Button } from '@/components/ui/button';
import { ServerIcon } from 'lucide-react';

export function Hero() {
  return (
    <div className='container mx-auto px-4 py-12 md:py-24'>
      <div className='flex flex-col items-center space-y-6 text-center md:space-y-8'>
        <ServerIcon className='h-16 w-16 text-orange-500 md:h-20 md:w-20' />
        <h1 className='text-4xl font-bold tracking-tighter md:text-6xl'>
          Welcome to{' '}
          <span className='bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent'>
            RustRoam
          </span>
        </h1>
        <p className='max-w-2xl text-lg text-zinc-400 md:text-xl'>
          Experience the ultimate Rust gaming environment with high-performance
          servers, active community, and regular events.
        </p>
        <div className='flex flex-col gap-4 sm:flex-row'>
          <Button
            size='lg'
            className='w-full bg-orange-500 hover:bg-orange-600 sm:w-auto'
          >
            Connect Now
          </Button>
          <Button
            size='lg'
            variant='outline'
            className='w-full border-orange-500 text-orange-500 hover:bg-orange-500/10 sm:w-auto'
          >
            View Rules
          </Button>
        </div>
      </div>
    </div>
  );
}
