import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Stats from "./components/Stats";
import Timeline from "./components/Timeline";
import Cases from "./components/Cases";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import PageIntro from "./components/PageIntro";
import Navigation from "./components/Navigation";
import SideOutline from "./components/SideOutline";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <PageIntro />
      <Navigation />
      <SideOutline />
      <main>
        <Hero />
        <TrustBar />
        <Stats />
        <Skills />
        <Cases />
        <Timeline />
        <Footer />
      </main>
    </>
  );
}
