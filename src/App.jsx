import "./App.css";
import { Contact, StarsCanvas } from "./components";
import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/skills/Skills";
import Works from "./components/Works";
import Testimonial from "../src/components/testimonial/Testimonial";

function App() {
  return (
    <div className="bg-black">
      <Navbar></Navbar>
      <Hero></Hero>

      <About></About>
      <Skills></Skills>
      <Experience></Experience>
      <Works></Works>
      <Testimonial></Testimonial>
      <div className="relative z-0">
        <Contact></Contact>
        <StarsCanvas />
      </div>
    </div>
  );
}

export default App;
