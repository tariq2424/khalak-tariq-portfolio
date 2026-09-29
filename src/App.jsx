import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import DesignShowcase from "./components/DesignShowcase";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-canvas">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] bg-ink text-white text-sm px-4 py-2 rounded-lg"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        {/* <DesignShowcase /> */}
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
