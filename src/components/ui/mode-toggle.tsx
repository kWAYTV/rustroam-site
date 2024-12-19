'use client';

import * as React from 'react';
import { Loader2, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { AnimatePresence, motion } from 'motion/react';

import { Button } from '@/components/ui/button';

export function ModeToggle() {
  const { setTheme, theme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant='ghost' size='icon' className='flex items-center gap-2'>
        <Loader2 className='h-4 w-4 animate-spin' aria-hidden='true' />
      </Button>
    );
  }

  return (
    <Button
      onClick={() => setTheme(currentTheme === 'light' ? 'dark' : 'light')}
      variant='ghost'
      size='icon'
      className='relative'
      aria-label='Toggle theme'
    >
      <AnimatePresence mode='wait' initial={false}>
        <motion.div
          key={currentTheme}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {currentTheme === 'dark' ? (
            <Sun className='h-5 w-5' aria-hidden='true' />
          ) : (
            <Moon className='h-5 w-5' aria-hidden='true' />
          )}
        </motion.div>
      </AnimatePresence>
    </Button>
  );
}
