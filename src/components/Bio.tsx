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
            <h2>My Journey in AI Automation & Backend</h2>
            <div className="bio-text">
              <p>
                I'm an AI Automation & Backend Engineer based in Ismailia, Egypt, 
                currently working at <strong>Tawiq</strong>, a tech startup 
                specializing in workflow automation and AI Agents for the Saudi and MENA markets.
              </p>
              <p>
                My journey started with a passion for clean code and reliable systems. 
                I built my foundation with Node.js/Express and Python, then expanded 
                into AI agent pipelines, n8n workflow orchestration, and LLM integrations 
                (OpenAI & Gemini).
              </p>
              <p>
                At Tawiq, I engineer automation workflows that handle 50+ rider complaints 
                daily via Telegram with 95% classification accuracy, set up automatic PDF 
                report delivery saving 90% of manual reporting time, and designed n8n 
                workflows that auto-scale with rider spikes at zero extra infrastructure cost.
              </p>
              <p>
                I believe in building production-ready, maintainable systems — from RESTful 
                APIs with JWT auth to multi-agent AI pipelines with Redis-backed memory.
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
                <span className="material-symbols-outlined">automation</span>
              </div>
              <span className="stat-label">n8n Workflows</span>
              <motion.span 
                className="stat-value"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
              >
                10+
              </motion.span>
              <span className="stat-description">Automation Workflows</span>
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
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <span className="stat-label">AI Agents</span>
              <motion.span 
                className="stat-value"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
              >
                3+
              </motion.span>
              <span className="stat-description">Multi-Agent Systems</span>
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
              <span className="stat-label">Complaints/Day</span>
              <motion.span 
                className="stat-value"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
              >
                50+
              </motion.span>
              <span className="stat-description">Via Telegram (n8n)</span>
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
              <span className="stat-label">Education</span>
              <motion.span 
                className="stat-value"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.6 }}
              >
                BSc CS
              </motion.span>
              <span className="stat-description">Suez Canal University</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Bio;