'use client';

import { motion } from 'motion/react';

import { CardBackground } from '@/components/core/layout/card-background';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const rules = [
  {
    value: 'fair-play',
    title: 'Fair Play',
    content: ['No cheats, hacks, or exploits - results in immediate ban']
  },
  {
    value: 'player-conduct',
    title: 'Player Conduct',
    content: [
      'No harassment, toxic behavior, or abuse',
      'No racism, hate speech, or griefing',
      'No impersonating staff or other players'
    ]
  },
  {
    value: 'team-rules',
    title: 'Team Rules',
    content: ['Respect the maximum team size', 'No allying with other teams']
  },
  {
    value: 'chat-rules',
    title: 'Chat Guidelines',
    content: [
      'No spam or server advertising',
      'English only in global chat',
      'Other languages allowed in direct messages'
    ]
  },
  {
    value: 'staff-authority',
    title: 'Staff Authority',
    content: [
      'Follow admin instructions or face consequences',
      'Rule violations result in warnings, kicks, or bans'
    ]
  }
];

export function RulesContent() {
  return (
    <div className='container mx-auto min-h-[calc(100vh-4rem)] px-4 py-8 sm:py-12 lg:py-16'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className='mx-auto max-w-4xl space-y-4 sm:space-y-6'
      >
        <h1 className='bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl'>
          Server Rules
        </h1>
        <p className='text-lg text-muted-foreground sm:text-xl'>
          Creating a Fair Gaming Environment for Everyone
        </p>
        <Separator className='my-4' />
      </motion.div>

      <div className='mx-auto mt-8 max-w-4xl space-y-6 sm:mt-12 sm:space-y-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Card className='relative overflow-hidden border-none bg-background/40 shadow-none backdrop-blur-xl supports-[backdrop-filter]:bg-background/40'>
            <CardBackground />
            <div className='relative p-6 sm:p-8'>
              <Accordion type='single' collapsible className='w-full space-y-4'>
                {rules.map((item, index) => (
                  <motion.div
                    key={item.value}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.15 + index * 0.05 }}
                  >
                    <AccordionItem value={item.value} className='border-none'>
                      <AccordionTrigger className='group rounded-lg bg-background/40 px-4 py-4 text-base font-semibold backdrop-blur-sm transition-all hover:bg-orange-500/10 hover:no-underline sm:text-lg'>
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent className='px-4 pb-4 pt-2 text-sm text-muted-foreground sm:text-base'>
                        <ul className='list-disc space-y-2 pl-4 sm:space-y-3 sm:pl-6'>
                          {item.content.map((text, i) => (
                            <li key={i}>{text}</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

export function RulesSkeleton() {
  return (
    <div className='container mx-auto min-h-[calc(100vh-4rem)] px-4 py-8 sm:py-12 lg:py-16'>
      <div className='mx-auto max-w-4xl space-y-4 sm:space-y-6'>
        <div className='h-10 w-48 animate-pulse rounded-lg bg-muted sm:h-12' />
        <div className='h-6 w-full max-w-sm animate-pulse rounded-lg bg-muted' />
        <Separator className='my-4' />
      </div>

      <div className='mx-auto mt-8 max-w-4xl space-y-6 sm:mt-12 sm:space-y-8'>
        <Card className='relative overflow-hidden border-none bg-background/40 shadow-none backdrop-blur supports-[backdrop-filter]:bg-background/40'>
          <CardBackground />
          <div className='relative space-y-4 p-6 sm:p-8'>
            {[1, 2, 3, 4, 5].map(index => (
              <div
                key={index}
                className='space-y-2 rounded-lg bg-background/40 p-4 backdrop-blur-sm'
              >
                <div className='h-7 w-32 animate-pulse rounded-lg bg-muted sm:h-8' />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
