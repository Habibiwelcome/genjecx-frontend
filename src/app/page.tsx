import HeroSection       from '@/components/home/HeroSection';
import TechStrip         from '@/components/home/TechStrip';
import CredibilityStrip  from '@/components/home/Credibility';
import WhatWeDo          from '@/components/home/WhatWeDo';
import StatsSection      from '@/components/home/StatsSection';
import Reviews           from '@/components/home/Reviews';
import PhilosophyBlock   from '@/components/home/PhilosophyBlock';
import CTASection        from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <div style={{ width: '100%' }}>
      <HeroSection />
      <TechStrip />
      <CredibilityStrip />
      <WhatWeDo />
      <StatsSection />
      <Reviews />
      <PhilosophyBlock />
      <CTASection />
    </div>
  );
}
