'use client';

import { ServerIcon } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

import { CardBackground } from '@/components/core/layout/card-background';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function Hero() {
  return (
    <section className='container mx-auto px-4 py-24 md:py-32'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Card className='relative overflow-hidden border-none bg-background/40 p-6 shadow-none backdrop-blur-sm supports-[backdrop-filter]:bg-background/40 md:p-12 lg:p-16'>
          <CardBackground />
          <div className='relative flex flex-col items-center space-y-8 text-center md:space-y-12'>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className='animate-float'
            >
              <div className='rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 p-4'>
                <ServerIcon className='h-16 w-16 text-orange-500 dark:text-orange-400 md:h-20 md:w-20' />
              </div>
            </motion.div>

            <div className='space-y-4 md:space-y-6'>
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Badge
                  variant='secondary'
                  className='bg-gradient-to-r from-orange-500/10 to-red-500/10 text-orange-500'
                >
                  Now in Beta
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl'
              >
                Welcome to{' '}
                <span className='bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent'>
                  RustRoam
                </span>
              </motion.h1>

              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className='mx-auto max-w-2xl text-base text-muted-foreground/90 sm:text-lg md:text-xl lg:text-2xl'
              >
                Experience the ultimate Rust gaming environment with
                high-performance servers, active community, and regular events.
              </motion.p>
            </div>

            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className='flex w-full flex-col gap-4 sm:w-auto sm:flex-row'
            >
              <Button
                size='lg'
                asChild
                className='group relative w-full overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_theme(colors.orange.500)] sm:w-auto'
              >
                <Link href='/servers'>Our Servers</Link>
              </Button>

              <Button
                size='lg'
                variant='outline'
                asChild
                className='w-full border-orange-500/20 bg-orange-500/5 text-orange-500 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-orange-500/10 hover:text-orange-400 hover:shadow-[0_0_2rem_-0.5rem_theme(colors.orange.500)] sm:w-auto'
              >
                <Link href='/rules'>View Rules</Link>
              </Button>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}

export function HeroSkeleton() {
  return (
    <section className='container mx-auto px-4 py-24 md:py-32'>
      <Card className='relative overflow-hidden border-none bg-background/40 p-6 shadow-none backdrop-blur supports-[backdrop-filter]:bg-background/40 md:p-12 lg:p-16'>
        <CardBackground />
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
