'use client';

import { motion } from 'motion/react';

import { CardBackground } from '@/components/core/layout/card-background';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const servers = [
  {
    id: '30884567',
    iframeUrl:
      'https://cdn.battlemetrics.com/b/horizontal500x80px/30884567.html?foreground=%23EEEEEE&background=%23222222&lines=%23333333&linkColor=%231185ec&chartColor=%23FF0700'
  }
];

// Add the BattleMetrics resize script to the page
const BATTLEMETRICS_SCRIPT = `
  window.addEventListener('message', function(e) {
    if (e.data.uid && e.data.type === 'sizeUpdate') {
      var i = document.querySelector('iframe[name="'+e.data.uid+'"]');
      if (i) {
        i.style.width = e.data.payload.width;
        i.style.height = e.data.payload.height;
      }
    }
  });
`;

export function ServersContent() {
  return (
    <>
      <script
        type='application/javascript'
        dangerouslySetInnerHTML={{ __html: BATTLEMETRICS_SCRIPT }}
      />
      <div className='container mx-auto min-h-[calc(100vh-4rem)] px-4 py-8 sm:py-12 lg:py-16'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className='mx-auto max-w-[520px] space-y-4 sm:space-y-6'
        >
          <h1 className='bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl'>
            Our Servers
          </h1>
          <p className='text-lg text-muted-foreground sm:text-xl'>
            Join one of our high-performance servers and start your adventure
          </p>
          <Separator className='my-4' />
        </motion.div>

        <div className='mx-auto mt-8 max-w-[520px] space-y-6 sm:mt-12 sm:space-y-8'>
          {servers.map((server, index) => (
            <motion.div
              key={server.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
            >
              <Card className='group relative overflow-hidden border-none bg-background/40 p-2.5 shadow-none backdrop-blur-xl transition-all duration-300 hover:bg-background/60 supports-[backdrop-filter]:bg-background/40'>
                <CardBackground />
                <div className='relative'>
                  <div className='relative w-full overflow-hidden rounded-lg bg-background/40 backdrop-blur-sm'>
                    <iframe
                      src={server.iframeUrl}
                      name={`bm_${server.id}`}
                      frameBorder='0'
                      style={{ border: 0, width: '500px', height: '80px' }}
                      title='Server Statistics'
                    />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export function ServersSkeleton() {
  return (
    <div className='container mx-auto min-h-[calc(100vh-4rem)] px-4 py-8 sm:py-12 lg:py-16'>
      <div className='mx-auto max-w-[520px] space-y-4 sm:space-y-6'>
        <div className='h-10 w-48 animate-pulse rounded-lg bg-muted sm:h-12' />
        <div className='h-6 w-96 animate-pulse rounded-lg bg-muted' />
        <Separator className='my-4' />
      </div>

      <div className='mx-auto mt-8 max-w-[520px] space-y-6 sm:mt-12 sm:space-y-8'>
        <Card className='relative overflow-hidden border-none bg-background/40 p-2.5 shadow-none backdrop-blur supports-[backdrop-filter]:bg-background/40'>
          <CardBackground />
          <div className='relative'>
            <div className='aspect-[500/80] w-[500px] animate-pulse rounded-lg bg-muted' />
          </div>
        </Card>
      </div>
    </div>
  );
}
