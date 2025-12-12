import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Tools from './Tools';
import Projects from './Projects';
import Home from './Home';
import About from './About';
import OneProjectPage from './OneProjectPage';

import { Route,Routes } from 'react-router-dom';

export default function App() {
  return (
  <>
  <Header />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tools" element={<Tools />} />
      <Route path="/about" element={<About />} />

      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<OneProjectPage />} />
    </Routes>
  
  <Footer />
  </>
  );
}

