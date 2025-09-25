import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Hush from "./components/Hush";
import Descriptions from "./components/Descriptions";
import Cultural from "./components/Cultural";
import Event from './components/Event';
import Book from "./components/Book";
import Illuminate from "./components/Illuminate";
import Box from "./components/Box";
import Unity from "./components/Unity";
import Notes from "./components/Notes";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Hush />
      <Descriptions />
      <Cultural />
      <Event />
      <Book />
      <Illuminate />
      <Box />
      <Unity />
      <Notes />
      <Footer />
    </>
  );
}
