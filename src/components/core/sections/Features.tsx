import { Shield, Users, Zap } from 'lucide-react';

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
    <div className='bg-zinc-900/50 py-16 md:py-24'>
      <div className='container mx-auto px-4'>
        <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-12'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='flex flex-col items-center space-y-4 rounded-lg p-6 text-center transition-colors hover:bg-zinc-800/50'
            >
              <feature.icon className='h-12 w-12 text-orange-500' />
              <h3 className='text-xl font-semibold'>{feature.title}</h3>
              <p className='text-zinc-400'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
