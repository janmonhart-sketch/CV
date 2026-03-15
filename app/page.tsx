import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import WhyMe from "./components/WhyMe";
import Stats from "./components/Stats";
import Timeline from "./components/Timeline";
import SkillsBento from "./components/SkillsBento";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import PageIntro from "./components/PageIntro";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <PageIntro />
      <Navigation />
      <main>
        <Hero />
        <TrustBar />
        <WhyMe />
        <Stats />
        <Timeline />
        <SkillsBento />
        <Footer />
      </main>
    </>
  );
}
