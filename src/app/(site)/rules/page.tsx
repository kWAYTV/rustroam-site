import { Metadata } from 'next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'Server Rules | RustRoam',
  description: 'Server rules and guidelines for RustRoam gaming community'
};

export default function RulesPage() {
  return (
    <div className='container mx-auto space-y-12 py-12'>
      <div className='space-y-6'>
        <h1 className='text-4xl font-bold tracking-tight'>Server Rules</h1>
        <p className='text-xl text-muted-foreground'>
          Creating a Fair Gaming Environment for Everyone
        </p>
        <Separator className='my-4' />
      </div>

      <div className='grid gap-8'>
        <Card className='border-2'>
          <CardHeader className='pb-4'>
            <CardTitle className='text-2xl'>Essential Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type='single' collapsible className='w-full space-y-4'>
              <AccordionItem value='fair-play' className='border-none'>
                <AccordionTrigger className='rounded-lg px-4 py-4 text-lg font-semibold hover:bg-accent hover:no-underline'>
                  Fair Play
                </AccordionTrigger>
                <AccordionContent className='px-4 pb-4 pt-2 text-muted-foreground'>
                  <ul className='list-disc space-y-3 pl-6'>
                    <li>
                      No cheats, hacks, or exploits - results in immediate ban
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='player-conduct' className='border-none'>
                <AccordionTrigger className='rounded-lg px-4 py-4 text-lg font-semibold hover:bg-accent hover:no-underline'>
                  Player Conduct
                </AccordionTrigger>
                <AccordionContent className='px-4 pb-4 pt-2 text-muted-foreground'>
                  <ul className='list-disc space-y-3 pl-6'>
                    <li>No harassment, toxic behavior, or abuse</li>
                    <li>No racism, hate speech, or griefing</li>
                    <li>No impersonating staff or other players</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='team-rules' className='border-none'>
                <AccordionTrigger className='rounded-lg px-4 py-4 text-lg font-semibold hover:bg-accent hover:no-underline'>
                  Team Rules
                </AccordionTrigger>
                <AccordionContent className='px-4 pb-4 pt-2 text-muted-foreground'>
                  <ul className='list-disc space-y-3 pl-6'>
                    <li>Respect the maximum team size</li>
                    <li>No allying with other teams</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='chat-rules' className='border-none'>
                <AccordionTrigger className='rounded-lg px-4 py-4 text-lg font-semibold hover:bg-accent hover:no-underline'>
                  Chat Guidelines
                </AccordionTrigger>
                <AccordionContent className='px-4 pb-4 pt-2 text-muted-foreground'>
                  <ul className='list-disc space-y-3 pl-6'>
                    <li>No spam or server advertising</li>
                    <li>English only in global chat</li>
                    <li>Other languages allowed in direct messages</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='staff-authority' className='border-none'>
                <AccordionTrigger className='rounded-lg px-4 py-4 text-lg font-semibold hover:bg-accent hover:no-underline'>
                  Staff Authority
                </AccordionTrigger>
                <AccordionContent className='px-4 pb-4 pt-2 text-muted-foreground'>
                  <ul className='list-disc space-y-3 pl-6'>
                    <li>Follow admin instructions or face consequences</li>
                    <li>Rule violations result in warnings, kicks, or bans</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card className='border-2'>
          <CardHeader className='pb-4'>
            <CardTitle className='text-2xl'>Need Help?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-lg text-muted-foreground'>
              If you have questions about the rules or need to report a
              violation, contact our staff through Discord or in-game commands.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
