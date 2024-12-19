'use client';

import { Shield, Users, Zap } from 'lucide-react';
import { motion } from 'motion/react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const features = [
  {
    icon: Zap,
    title: 'High Performance',
    description:
      'Experience smooth gameplay with our optimized servers and minimal latency.'
  },
  {
    icon: Users,
    title: 'Active Community',
    description:
      'Join thousands of active players and make new friends along the way.'
  },
  {
    icon: Shield,
    title: 'Anti-Cheat Protection',
    description:
      'Play with confidence knowing our servers are protected against cheaters.'
  }
];

export function Features() {
  return (
    <section className='relative border-t border-border/40 bg-muted/20 py-24 dark:bg-muted/5 md:py-32'>
      <div className='pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]' />
      <div className='container relative mx-auto px-4'>
        <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-12 lg:gap-16'>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className='group h-full border-none bg-gradient-to-b from-background/80 to-background shadow-none backdrop-blur transition-colors hover:from-background/40 hover:to-background/40 supports-[backdrop-filter]:from-background/60 supports-[backdrop-filter]:to-background/60'>
                <CardHeader>
                  <div className='mb-2 flex items-center justify-center'>
                    <div className='rounded-xl bg-orange-500/10 p-3 ring-1 ring-orange-600/10 transition-colors group-hover:bg-orange-500/20 group-hover:ring-orange-600/20 dark:bg-orange-500/10 dark:ring-orange-500/10 dark:group-hover:bg-orange-500/20 dark:group-hover:ring-orange-500/20'>
                      <feature.icon className='h-8 w-8 text-orange-600 dark:text-orange-500' />
                    </div>
                  </div>
                  <CardTitle className='text-center text-xl'>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <Separator className='mb-6 bg-border/40' />
                <CardContent>
                  <p className='text-center text-muted-foreground'>
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturesSkeleton() {
  return (
    <section className='relative border-t border-border/40 bg-muted/20 py-24 dark:bg-muted/5 md:py-32'>
      <div className='pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]' />
      <div className='container relative mx-auto px-4'>
        <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-12 lg:gap-16'>
          {[1, 2, 3].map(index => (
            <Card
              key={index}
              className='h-full border-none bg-gradient-to-b from-background/80 to-background shadow-none backdrop-blur supports-[backdrop-filter]:from-background/60 supports-[backdrop-filter]:to-background/60'
            >
              <CardHeader>
                <div className='mb-2 flex items-center justify-center'>
                  <div className='h-14 w-14 animate-pulse rounded-xl bg-muted' />
                </div>
                <div className='h-6 w-32 animate-pulse rounded-md bg-muted' />
              </CardHeader>
              <Separator className='mb-6 bg-border/40' />
              <CardContent>
                <div className='space-y-2'>
                  <div className='h-4 w-full animate-pulse rounded bg-muted' />
                  <div className='h-4 w-4/5 animate-pulse rounded bg-muted' />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
