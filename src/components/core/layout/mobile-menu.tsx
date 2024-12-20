'use client';

import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ui/mode-toggle';

interface MobileMenuProps {
  items: Array<{ label: string; href: string }>;
}

export function MobileMenu({ items }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Prevent scroll when menu is open
  if (typeof window !== 'undefined') {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }

  return (
    <div className='relative md:hidden'>
      {/* Toggle Button */}
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className='fixed inset-x-0 top-0 z-50 mt-16 border-t border-border/40'
          >
            <div className='relative min-h-[calc(100vh-4rem)] bg-background/95 backdrop-blur-xl'>
              {/* Menu Header */}
              <div className='flex items-center justify-between border-b border-border/40 px-6 py-4'>
                <span className='text-lg font-semibold'>Menu</span>
                <Button
                  variant='ghost'
                  size='icon'
                  onClick={() => setIsOpen(false)}
                  className='rounded-lg hover:bg-orange-500/10'
                >
                  <X className='h-5 w-5 text-orange-500' />
                </Button>
              </div>

              {/* Menu Items */}
              <div className='flex flex-col gap-2 p-6'>
                {items.map(item => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                      pathname === item.href
                        ? 'bg-orange-500/10 text-foreground'
                        : 'text-muted-foreground hover:bg-orange-500/10 hover:text-foreground'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Menu Footer */}
              <div className='absolute bottom-0 left-0 right-0 border-t border-border/40 p-6'>
                <div className='flex flex-col gap-6'>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-muted-foreground'>
                      Switch theme
                    </span>
                    <ModeToggle />
                  </div>

                  <Link
                    href='/servers'
                    onClick={() => setIsOpen(false)}
                    className='flex h-12 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-red-500 font-medium text-white transition-all duration-300 hover:from-orange-600 hover:to-red-600'
                  >
                    Connect to Server
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
