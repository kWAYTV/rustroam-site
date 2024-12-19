import { ServerIcon } from 'lucide-react';

export function Footer() {
  return (
    <footer className='border-t border-zinc-800'>
      <div className='container mx-auto px-4 py-6 md:py-8'>
        <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
          <div className='flex items-center space-x-2'>
            <ServerIcon className='h-6 w-6 text-orange-500' />
            <span className='font-semibold'>RustRoam</span>
          </div>
          <div className='text-sm text-zinc-400'>
            © {new Date().getFullYear()} RustRoam. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
