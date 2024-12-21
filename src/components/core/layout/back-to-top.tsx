'use client';

import { ArrowUpIcon } from 'lucide-react';
import { motion, useScroll } from 'motion/react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';

export function BackToTop() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    return scrollY.on('change', latest => {
      setIsVisible(latest > 200);
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      className='fixed bottom-4 right-4 z-50 md:bottom-8 md:right-8'
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
      transition={{ duration: 0.2 }}
    >
      <Button
        size='icon'
        onClick={scrollToTop}
        className='group h-10 w-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 shadow-lg transition-all duration-300 hover:scale-110 hover:from-orange-600 hover:to-red-600 hover:shadow-[0_0_2rem_-0.5rem_theme(colors.orange.500)] dark:bg-gradient-to-r'
      >
        <ArrowUpIcon className='h-5 w-5 text-white transition-transform duration-300 group-hover:-translate-y-0.5' />
      </Button>
    </motion.div>
  );
}
