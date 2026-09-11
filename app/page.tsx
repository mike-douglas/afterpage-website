import Header from "./components/Header";
import Hero from "./components/Hero";
import PersonalizeShowcase from "./components/PersonalizeShowcase";
import FeatureSection from "./components/FeatureSection";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <PersonalizeShowcase />

        <FeatureSection
          id="organize"
          title="Organize your way"
          subtitle="Tags, categories, and contacts keep files easy to find."
          mediaLabel="Organize screen — tags and categories"
          media={{
            src: "/images/screenshots/en-US/organize/Organize-@1.0x.png",
            width: 1512,
            height: 982,
          }}
          bullets={[
            {
              title: "Make it yours",
              body: "Give any tag, category, or contact a name, a color, and an icon. Home, Pet, Taxes 2025, Yellowstone Road Trip. It ends up looking like your filing system, not a generic list.",
            },
            {
              title: "It remembers what you use",
              body: "The tags and categories you touch most show up first, so an active trip doesn't get buried behind a warranty you tagged once and forgot.",
            },
          ]}
        />

        <FeatureSection
          id="find"
          title="Find anything fast"
          subtitle="Search from anywhere in the app to get to what you need."
          body="Afterpage reads every page as it comes in, so search matches what's actually printed on a document, not just the title you gave it. Searching &ldquo;Alitalia&rdquo; finds the flight confirmation even if you never typed it into a tag."
          mediaLabel="Find screen — search results"
          media={{
            src: "/images/screenshots/en-US/search/Search@1.0x.png",
            width: 2046,
            height: 2095,
          }}
          reverse
          bullets={[
            {
              title: "Search anywhere",
              body: "Open a tag or category and search just inside it. Every list in the app can be searched right where you are.",
            },
            {
              title: "Ranked, not just filtered",
              body: "An exact match beats a partial one, and documents you've starred or opened recently move up.",
            },
          ]}
        />

        <FeatureSection
          id="capture"
          title="Get it in however's easiest"
          body="However a document reaches you, it takes one step to land in Afterpage, and it's read the moment it arrives."
          mediaLabel="Capture screen — scanning a document"
          bullets={[
            {
              title: "Scan",
              body: "The built-in scanner handles edge detection, perspective correction, and multi-page capture, then stitches everything into one PDF.",
            },
            {
              title: "Import",
              body: "Pull a PDF or image straight from Files, one at a time or a whole batch at once.",
            },
            {
              title: "Share it in",
              body: "Send a file from Mail, Safari, Photos, or anywhere else on iOS with a share sheet, without leaving the app you're in.",
            },
          ]}
        />

        <FeatureSection
          title="Just ask Siri"
          subtitle="Find documents by name, date, tag, or contact, out loud."
          body='"Find documents in Afterpage tagged Vet" or "…from Maple Grove Veterinary Clinic" surfaces a visual card with matching thumbnails and an Open in Afterpage button, right from Siri or a Shortcuts automation.'
          mediaLabel="Siri card — document results"
          reverse
        />

        <FeatureSection
          id="privacy"
          title="No accounts, ever"
          subtitle="Afterpage identifies you the same way Files or Photos does, through the iCloud account already on your device."
          mediaLabel="iCloud sync illustration"
          reverse
          invert
          bullets={[
            {
              title: "Nothing to sign up for",
              body: "There's no sign-in, no username, no password anywhere in the app.",
            },
            {
              title: "Your iCloud, not our servers",
              body: "Documents sync through your iCloud Drive, and tags and titles sync through a private CloudKit database tied to your account. Afterpage doesn't run a server that stores your documents.",
            },
          ]}
        />

        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
