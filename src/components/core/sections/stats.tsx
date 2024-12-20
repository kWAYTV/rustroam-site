'use client';

import { motion } from 'motion/react';

import { Card, CardContent } from '@/components/ui/card';

const stats = [
  { value: '24/7', label: 'Server Availability' },
  { value: '0%', label: 'Pay to Win' },
  { value: '5+', label: 'Active Admins' },
  { value: 'Discord', label: 'Live Support' }
];

export function Stats() {
  return (
    <section className='container mx-auto px-4 py-24 md:py-32'>
      <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-4 md:gap-8 lg:gap-12'>
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className='group relative h-full overflow-hidden border-none bg-gradient-to-b from-background/80 to-background shadow-none backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_theme(colors.orange.500)] supports-[backdrop-filter]:from-background/60 supports-[backdrop-filter]:to-background/60'>
              <div className='absolute inset-0 bg-gradient-to-r from-orange-500/0 via-red-500/0 to-orange-500/0 transition-all duration-300 group-hover:from-orange-500/5 group-hover:via-red-500/5 group-hover:to-orange-500/5' />
              <div className='bg-grid-small pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
              <CardContent className='relative flex flex-col items-center justify-center space-y-2 p-6 text-center'>
                <span className='bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-3xl font-bold text-transparent transition-colors group-hover:from-orange-500 group-hover:to-red-500 dark:from-orange-500 dark:to-red-500 md:text-4xl'>
                  {stat.value}
                </span>
                <span className='text-sm text-muted-foreground transition-colors group-hover:text-foreground'>
                  {stat.label}
                </span>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function StatsSkeleton() {
  return (
    <section className='container mx-auto px-4 py-24 md:py-32'>
      <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-4 md:gap-8 lg:gap-12'>
        {[1, 2, 3, 4].map(index => (
          <Card
            key={index}
            className='h-full border-none bg-gradient-to-b from-background/80 to-background shadow-none backdrop-blur supports-[backdrop-filter]:from-background/60 supports-[backdrop-filter]:to-background/60'
          >
            <CardContent className='flex flex-col items-center justify-center space-y-4 p-6'>
              <div className='h-8 w-20 animate-pulse rounded-md bg-muted' />
              <div className='h-4 w-16 animate-pulse rounded bg-muted' />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
