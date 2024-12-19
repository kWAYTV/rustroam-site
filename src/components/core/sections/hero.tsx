'use client';

import { ServerIcon } from 'lucide-react';
import { motion } from 'motion/react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function Hero() {
  return (
    <section className='container mx-auto px-4 py-24 md:py-32'>
      <Card className='relative overflow-hidden border-none bg-background/60 p-6 shadow-none backdrop-blur supports-[backdrop-filter]:bg-background/60 md:p-12 lg:p-16'>
        <div className='absolute inset-0 bg-gradient-to-r from-orange-500/5 via-red-500/5 to-orange-500/5' />
        <div className='pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]' />
        <div className='pointer-events-none absolute inset-0 bg-background/40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,transparent_0%,#000000_100%)]' />
        <div className='relative flex flex-col items-center space-y-8 text-center md:space-y-12'>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className='rounded-2xl bg-orange-500/10 p-4 dark:bg-orange-500/10'>
              <ServerIcon className='h-16 w-16 text-orange-600 dark:text-orange-500 md:h-20 md:w-20' />
            </div>
          </motion.div>
          <div className='space-y-4 md:space-y-6'>
            <Badge
              variant='secondary'
              className='bg-orange-700/10 text-orange-600'
            >
              Now in Beta
            </Badge>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl'
            >
              Welcome to{' '}
              <span className='bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent dark:from-orange-500 dark:to-red-500'>
                RustRoam
              </span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl lg:text-2xl'
            >
              Experience the ultimate Rust gaming environment with
              high-performance servers, active community, and friendly staff.
            </motion.p>
          </div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='flex w-full flex-col gap-4 sm:w-auto sm:flex-row'
          >
            <Button
              size='lg'
              className='group relative w-full overflow-hidden bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-600/90 hover:to-red-600/90 dark:from-orange-500 dark:to-red-500 sm:w-auto'
            >
              <span className='relative z-10'>Connect Now</span>
              <div className='absolute inset-0 -z-0 translate-y-[100%] bg-gradient-to-r from-orange-700 to-red-700 transition-transform duration-300 group-hover:translate-y-0 dark:from-orange-600 dark:to-red-600' />
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='w-full border-orange-600/20 bg-orange-600/5 text-orange-600 hover:bg-orange-600/10 hover:text-orange-600 dark:border-orange-500/20 dark:bg-orange-500/5 dark:text-orange-500 dark:hover:bg-orange-500/10 dark:hover:text-orange-500 sm:w-auto'
            >
              View Rules
            </Button>
          </motion.div>
        </div>
      </Card>
    </section>
  );
}

export function HeroSkeleton() {
  return (
    <section className='container mx-auto px-4 py-24 md:py-32'>
      <Card className='relative overflow-hidden border-none bg-background/60 p-6 shadow-none backdrop-blur supports-[backdrop-filter]:bg-background/60 md:p-12 lg:p-16'>
        <div className='flex flex-col items-center space-y-8 text-center md:space-y-12'>
          <div className='h-16 w-16 animate-pulse rounded-full bg-muted md:h-20 md:w-20' />
          <div className='space-y-4 md:space-y-6'>
            <div className='mx-auto h-6 w-24 animate-pulse rounded-full bg-muted' />
            <div className='mx-auto h-12 w-3/4 animate-pulse rounded-lg bg-muted md:h-16' />
            <div className='mx-auto h-20 w-2/3 animate-pulse rounded-lg bg-muted' />
          </div>
          <div className='flex w-full flex-col gap-4 sm:w-auto sm:flex-row'>
            <div className='h-11 w-full animate-pulse rounded-md bg-muted sm:w-32' />
            <div className='h-11 w-full animate-pulse rounded-md bg-muted sm:w-32' />
          </div>
        </div>
      </Card>
    </section>
  );
}
