import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
// import Skills from './components/Skills';
import Skills from './components/SkilsAndExperience';
import Projects from './components/Projects';
import Contact from './components/Contact';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-16 space-y-32 ">
        <section id="home"><Hero /></section>
        <section id="about" className="scroll-mt-24"><About /></section>
        <section id="skills" className="scroll-mt-24"><Skills /></section>
        <section id="projects" className="scroll-mt-24"><Projects /></section>
        <section id="contact" className="scroll-mt-24"><Contact /></section>
      </main>
      <Footer/>
    </>
  );
}

export default App;
