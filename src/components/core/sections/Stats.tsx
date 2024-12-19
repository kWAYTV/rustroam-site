const stats = [
  { value: '99.9%', label: 'Uptime' },
  { value: '∞', label: 'Active Admins' },
  { value: '1', label: 'Global Servers' },
  { value: '24/7', label: 'Support' }
];

export function Stats() {
  return (
    <div className='container mx-auto px-4 py-16 md:py-24'>
      <div className='grid grid-cols-2 gap-8 text-center md:grid-cols-4'>
        {stats.map((stat, index) => (
          <div
            key={index}
            className='space-y-2 rounded-lg p-4 transition-colors hover:bg-zinc-900/50'
          >
            <h4 className='text-3xl font-bold text-orange-500 md:text-4xl'>
              {stat.value}
            </h4>
            <p className='text-zinc-400'>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
