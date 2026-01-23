import Hero from './afterpage/components/Hero';
import Problem from './afterpage/components/Problem';
import Solution from './afterpage/components/Solution';
import HowItWorks from './afterpage/components/HowItWorks';
import Features from './afterpage/components/Features';
import Pricing from './afterpage/components/Pricing';
import FAQ from './afterpage/components/FAQ';
import FinalCTA from './afterpage/components/FinalCTA';
import Footer from './afterpage/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Features />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
