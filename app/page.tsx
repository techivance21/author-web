
import Hero from "./components/Hero";
import Narrative from "./components/Narrative";
import Event from './components/Event';
import Social from "./components/Social";
import AuthorSection from "./components/AuthorSection";
import Illuminate from "./components/Illuminate";
import Unity from "./components/Unity";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Narrative />
      <Event />
      <Social />
      <AuthorSection />
      <Unity />
      <Illuminate />
      <Footer />
    </>
  );
}
