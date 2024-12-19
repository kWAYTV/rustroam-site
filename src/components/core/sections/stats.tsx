'use client';

import { motion } from 'motion/react';

import { Card, CardContent } from '@/components/ui/card';

const stats = [
  { value: '99.9%', label: 'Uptime' },
  { value: '∞', label: 'Active Admins' },
  { value: '1', label: 'Global Servers' },
  { value: '24/7', label: 'Support' }
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
            <Card className='group h-full border-none bg-gradient-to-b from-background/80 to-background shadow-none backdrop-blur transition-colors hover:from-background/40 hover:to-background/40 supports-[backdrop-filter]:from-background/60 supports-[backdrop-filter]:to-background/60'>
              <CardContent className='flex flex-col items-center justify-center space-y-2 p-6 text-center'>
                <span className='bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-3xl font-bold text-transparent dark:from-orange-500 dark:to-red-500 md:text-4xl'>
                  {stat.value}
                </span>
                <span className='text-sm text-muted-foreground'>
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
