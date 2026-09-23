import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>

      <footer>
        © 2026 Om Shinde. All rights reserved.
      </footer>
    </>
  );
}

export default App;
