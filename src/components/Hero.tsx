import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Image from '../../public/IMG-20251030-WA0009.jpg';

const Hero = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const heroControls = useAnimation();

  useEffect(() => {
    if (isHeroInView) heroControls.start("visible");
  }, [isHeroInView, heroControls]);

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  const rotateImage = {
    hidden: { rotate: 2 },
    visible: { 
      rotate: 0,
      transition: { 
        duration: 0.5, 
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  const pulseAnimation = {
    initial: { scale: 1 },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop" as const
      }
    }
  };

  const handleContact = () => {
    window.location.href = 'mailto:mahmoudmustafamahmoud87@gmail.com?subject=Portfolio Inquiry&body=Hello, I would like to discuss a potential project...';
  };

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/mahmoudmossadmohamed/', '_blank');
  };

  const openGitHub = () => {
    window.open('https://github.com/mahmudmahmod519-code', '_blank');
  };

  return (
    <section className="hero-section" ref={heroRef}>
      <div className="container">
        <div className="hero-grid">
          <motion.div 
            className="hero-text"
            initial="hidden"
            animate={heroControls}
            variants={fadeInLeft}
          >
            <motion.div 
              className="badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              Backend Developer
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Backend Developer in training 
              Nest.js
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Hello, I'm <span className="highlight">Mahmoud</span>, Software Engineering Student | Interested in Backend Development using Nest.js
              I'm a student learning and applying modern Backend development concepts. I build educational projects to learn and develop my Nest.js skills.
            </motion.p>
            
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                variants={pulseAnimation}
                initial="initial"
                animate="pulse"
                onClick={handleContact}
              >
                Get in Touch
              </motion.button>

              <motion.button
                className="btn btn-light"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                variants={pulseAnimation}
                initial="initial"
                animate="pulse"
                onClick={openGitHub}
              >
                Githup
              </motion.button>
              <motion.button
                className="btn-light"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                variants={pulseAnimation}
                initial="initial"
                animate="pulse"
                onClick={openLinkedIn}
              >
                LinkedIn
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-image-container"
            initial="hidden"
            animate={heroControls}
            variants={fadeInRight}
          >
            <motion.div 
              className="hero-image"
              variants={rotateImage}
              whileHover={{ rotate: 0 }}
              transition={{ duration: .001 }}
            >
              <div className="image-overlay"></div>
              <div 
                className="image-bg"
                style={{ 
                  backgroundImage: `url(${Image})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
              ></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;