import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const Bio = () => {
  const bioRef = useRef(null);
  const isBioInView = useInView(bioRef, { once: true });
  const bioControls = useAnimation();

  useEffect(() => {
    if (isBioInView) bioControls.start("visible");
  }, [isBioInView, bioControls]);

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  const cardHover = {
    hover: { 
      y: -10,
      boxShadow: "0 20px 40px rgba(76, 201, 240, 0.1)",
      borderColor: "rgba(76, 201, 240, 0.3)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="bio-section" ref={bioRef} id="about">
      <div className="container">
        <motion.div 
          className="bio-grid"
          initial="hidden"
          animate={bioControls}
          variants={staggerContainer}
        >
          <motion.div className="bio-column" variants={staggerItem}>
            <h2>My Journey in Backend Development</h2>
            <div className="bio-text">
              <p>
                As a Computer Science student passionate about backend development, 
                I started my journey by exploring the fundamentals of programming and 
                system architecture. What began with simple scripts has evolved into 
                building robust, scalable APIs and database systems.
              </p>
              <p>
                My technical philosophy centers around clean architecture, efficient 
                algorithms, and maintainable code. I believe in building systems that 
                are not just functional but also scalable, secure, and well-documented. 
                Each project is an opportunity to solve real problems through elegant 
                technical solutions.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open-source projects, 
                reading about system design patterns, or experimenting with new backend 
                technologies to expand my technical toolkit.
              </p>
              <p>
                Currently, I'm focused on mastering Nest.js and microservices architecture 
                while working on projects that challenge my problem-solving abilities and 
                push me to become a better backend developer.
              </p>
            </div>
          </motion.div>
          
          <motion.div className="stats-column" variants={staggerContainer}>
            <motion.div 
              className="stat-card"
              variants={cardHover}
              whileHover="hover"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="stat-icon">
                <span className="material-symbols-outlined">api</span>
              </div>
              <span className="stat-label">APIs Built</span>
              <motion.span 
                className="stat-value"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
              >
                15+
              </motion.span>
              <span className="stat-description">REST & Database APIs</span>
            </motion.div>
            
            <motion.div 
              className="stat-card"
              variants={cardHover}
              whileHover="hover"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="stat-icon">
                <span className="material-symbols-outlined">database</span>
              </div>
              <span className="stat-label">Projects Completed</span>
              <motion.span 
                className="stat-value"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
              >
                8+
              </motion.span>
              <span className="stat-description">Backend & Full-Stack</span>
            </motion.div>
            
            <motion.div 
              className="stat-card"
              variants={cardHover}
              whileHover="hover"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="stat-icon">
                <span className="material-symbols-outlined">code</span>
              </div>
              <span className="stat-label">GitHub Contributions</span>
              <motion.span 
                className="stat-value"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
              >
                500+
              </motion.span>
              <span className="stat-description">Active Development</span>
            </motion.div>

            <motion.div 
              className="stat-card"
              variants={cardHover}
              whileHover="hover"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <div className="stat-icon">
                <span className="material-symbols-outlined">school</span>
              </div>
              <span className="stat-label">Academic Focus</span>
              <motion.span 
                className="stat-value"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.6 }}
              >
                CS Student
              </motion.span>
              <span className="stat-description">Backend Specialization</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Bio;