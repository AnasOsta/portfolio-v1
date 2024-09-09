import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Email from "./components/Email";
import Footer from "./components/Footer";
import Achieve from "./components/Achieve";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto mt-24 px-12 py-4">
        <Hero />
        <Achieve />
        <About />
        <Projects />
        <Email />
        <Footer />
      </div>
    </div>
  );
}
