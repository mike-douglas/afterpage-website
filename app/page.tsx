import Header from "./components/Header";
import Hero from "./components/Hero";
import PersonalizeShowcase from "./components/PersonalizeShowcase";
import FeatureSection from "./components/FeatureSection";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import copy from "./content/copy.json";

export default function Home() {
  const { organize, find, capture, privacy } = copy.sections;

  return (
    <>
      <Header />
      <main>
        <Hero />

        <PersonalizeShowcase />

        <FeatureSection
          id="organize"
          {...organize}
          media={{
            src: "/images/screenshots/en-US/organize/Organize-@1.0x.webp",
            width: 1512,
            height: 982,
          }}
        />

        <FeatureSection
          id="find"
          {...find}
          media={{
            src: "/images/screenshots/en-US/search/Search@1.0x.webp",
            width: 2046,
            height: 2095,
          }}
          reverse
        />

        <FeatureSection
          id="capture"
          {...capture}
          media={{
            src: "/images/screenshots/en-US/import/Document-Scanner.webp",
            width: 735,
            height: 1500,
          }}
          mediaScale={0.5}
        />

        <FeatureSection id="privacy" {...privacy} invert />

        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
