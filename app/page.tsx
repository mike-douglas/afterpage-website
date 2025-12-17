import Navigation from './afterpage/components/Navigation';
import Hero from './afterpage/components/Hero';
import Features from './afterpage/components/Features';
import HowItWorks from './afterpage/components/HowItWorks';
import WhyAfterpage from './afterpage/components/WhyAfterpage';
import WaitlistCTA from './afterpage/components/WaitlistCTA';
import Footer from './afterpage/components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <WhyAfterpage />
      <WaitlistCTA />
      <Footer />
    </main>
  );
}
