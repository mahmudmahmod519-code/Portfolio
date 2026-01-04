import Hero from './components/Hero';
import Bio from './components/Bio';
import Skills from './components/Skills';
import Experience from './components/Experience';
import CTA from './components/CTA';
import '../css/aboutme.css';

const Home = () => {

  return (
    <div className='portfolio light'>
      <main className="main-content">
        <Hero />
        <Bio />
        <Skills />
        <Experience />
        <CTA />
      </main>
    </div>
  );
};

export default Home;