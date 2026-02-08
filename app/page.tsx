import Hero from "./components/Hero";
import RobotFace from "./components/RobotFace";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Articles from "./components/Publications";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Articles />
      <Skills />
      <Contact />
    </main>
  );
}