import { Github, ServerIcon, Twitter } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

const socialLinks = [
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    icon: Twitter
  },
  {
    name: 'GitHub',
    href: 'https://github.com',
    icon: Github
  }
];

const footerLinks = [
  {
    title: 'Product',
    links: [
      { name: 'Features', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'Store', href: '/store' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Rules', href: '/rules' },
      { name: 'Blog', href: '#' },
      { name: 'Support', href: '#' }
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '#' },
      { name: 'Terms', href: '#' },
      { name: 'Privacy', href: '#' }
    ]
  }
];

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn('mt-auto border-t border-border/40', className)}>
      <div className='container mx-auto px-4 py-12 md:py-16'>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-5'>
          {/* Logo + Social */}
          <div className='lg:col-span-2'>
            <Link href='/' className='flex items-center space-x-2'>
              <div className='rounded-lg bg-orange-500/10 p-1.5'>
                <ServerIcon className='h-5 w-5 text-orange-600 dark:text-orange-500' />
              </div>
              <span className='bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text font-bold text-transparent dark:from-orange-500 dark:to-red-500'>
                RustRoam
              </span>
            </Link>
            <p className='mt-4 text-sm text-muted-foreground'>
              Experience the ultimate Rust gaming environment with
              high-performance servers and an active community.
            </p>
            <div className='mt-6 flex items-center space-x-3'>
              {socialLinks.map(social => (
                <Button
                  key={social.name}
                  variant='ghost'
                  size='icon'
                  className='h-9 w-9 rounded-lg'
                  asChild
                >
                  <Link href={social.href}>
                    <social.icon className='h-4 w-4' />
                    <span className='sr-only'>{social.name}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map(group => (
            <div key={group.title}>
              <h3 className='text-sm font-semibold'>{group.title}</h3>
              <ul className='mt-4 space-y-3'>
                {group.links.map(link => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className='text-sm text-muted-foreground transition-colors hover:text-foreground'
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className='my-8 bg-border/40' />

        <div className='flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left'>
          <p className='text-sm text-muted-foreground'>
            © {new Date().getFullYear()} RustRoam. All rights reserved.
          </p>
          <div className='flex items-center space-x-4 text-sm text-muted-foreground'>
            <Link href='#' className='hover:text-foreground'>
              Terms
            </Link>
            <span>·</span>
            <Link href='#' className='hover:text-foreground'>
              Privacy
            </Link>
            <span>·</span>
            <Link href='#' className='hover:text-foreground'>
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
