import Hero from '../Hero';

export default function HeroExample() {
  return (
    <Hero
      onDiscoverClick={() => console.log('Discover clicked')}
      onOrderClick={() => console.log('Order pizza clicked')}
    />
  );
}
