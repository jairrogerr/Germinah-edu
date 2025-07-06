
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhatIsSection from '@/components/WhatIsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ImpactSection from '@/components/ImpactSection';
import TargetAudienceSection from '@/components/TargetAudienceSection';
import GettingStartedSection from '@/components/GettingStartedSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WhatIsSection />
      <HowItWorksSection />
      <ImpactSection />
      <TargetAudienceSection />
      <GettingStartedSection />
      <Footer />
    </div>
  );
};

export default Index;
