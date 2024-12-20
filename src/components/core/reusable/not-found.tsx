'use client';

import { AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'next-view-transitions';
import type { ReactNode } from 'react';

import { CardBackground } from '@/components/core/layout/card-background';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

type Props = {
  title: string;
  children?: ReactNode;
};

export function NotFound({ children, title }: Props) {
  return (
    <div className='flex min-h-[80vh] items-center justify-center px-4'>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className='relative overflow-hidden border-none bg-background/40 p-8 shadow-none backdrop-blur-xl supports-[backdrop-filter]:bg-background/40 sm:p-12'>
          <CardBackground />
          <div className='relative max-w-md text-center'>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <AlertCircle className='mx-auto mb-6 h-16 w-16 text-orange-500' />
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h1 className='mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl'>
                {title}
              </h1>
              {children && (
                <div className='mb-8 text-muted-foreground'>{children}</div>
              )}
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className='flex flex-col justify-center space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0'
            >
              <Link href='/' passHref>
                <Button
                  size='lg'
                  className='group relative w-full overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_theme(colors.orange.500)] sm:w-auto'
                >
                  <span className='relative z-10'>Back to Home</span>
                  <div className='absolute inset-0 -z-0 translate-y-[100%] bg-gradient-to-r from-orange-600 to-red-600 transition-transform duration-300 group-hover:translate-y-0' />
                </Button>
              </Link>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
