import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import WhyAfterpage from './components/WhyAfterpage';
import WaitlistCTA from './components/WaitlistCTA';
import Footer from './components/Footer';
import styles from './page.module.css';

export default function AfterpageLanding() {
  return (
    <main className={styles.main}>
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
