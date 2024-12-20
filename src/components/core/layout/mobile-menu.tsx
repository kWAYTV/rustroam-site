'use client';

import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { CardBackground } from '@/components/core/layout/card-background';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ui/mode-toggle';

interface MobileMenuProps {
  items: Array<{ label: string; href: string }>;
}

export function MobileMenu({ items }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className='md:hidden'>
      <Button
        variant='ghost'
        size='icon'
        onClick={() => setIsOpen(!isOpen)}
        className='relative h-9 w-9 rounded-lg p-0 hover:bg-orange-500/10'
      >
        <AnimatePresence mode='wait'>
          {isOpen ? (
            <motion.div
              key='close'
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <X className='h-5 w-5 text-orange-500' />
            </motion.div>
          ) : (
            <motion.div
              key='menu'
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className='h-5 w-5 text-orange-500' />
            </motion.div>
          )}
        </AnimatePresence>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className='absolute left-0 right-0 top-16 border-t border-border/40'
          >
            <div className='relative bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60'>
              <CardBackground />
              <div className='container mx-auto px-4 py-6'>
                <div className='flex flex-col space-y-6'>
                  <div className='flex flex-col space-y-2'>
                    {items.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.2,
                          delay: index * 0.05
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`block w-full rounded-lg px-4 py-2 text-base font-medium transition-colors ${
                            pathname === item.href
                              ? 'bg-orange-500/10 text-foreground'
                              : 'text-muted-foreground hover:bg-orange-500/10 hover:text-foreground'
                          }`}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: items.length * 0.05 }}
                    className='flex flex-col space-y-4'
                  >
                    <div className='flex items-center justify-start px-4'>
                      <ModeToggle />
                    </div>
                    <Link href='/servers' onClick={() => setIsOpen(false)}>
                      <Button
                        size='lg'
                        className='group relative w-full overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 text-white transition-all duration-300 hover:shadow-[0_0_2rem_-0.5rem_theme(colors.orange.500)]'
                      >
                        <span className='relative z-10'>Connect</span>
                        <div className='absolute inset-0 -z-0 translate-y-[100%] bg-gradient-to-r from-orange-600 to-red-600 transition-transform duration-300 group-hover:translate-y-0' />
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
