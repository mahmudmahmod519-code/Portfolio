import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const CTA = () => {
  const ctaRef = useRef(null);
  const isCtaInView = useInView(ctaRef, { once: true });
  const ctaControls = useAnimation();

  useEffect(() => {
    if (isCtaInView) ctaControls.start("visible");
  }, [isCtaInView, ctaControls]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="cta-section" ref={ctaRef}>
      <div className="container">
        <motion.div 
          className="cta-container"
          initial="hidden"
          animate={ctaControls}
          variants={fadeInUp}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <div className="cta-bg-circles">
            <div className="cta-circle-1"></div>
            <div className="cta-circle-2"></div>
          </div>
          
          <div className="cta-content">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ready to build something amazing together?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I'm currently available for freelance projects and full-time opportunities. Let's discuss how I can help your team.
            </motion.p>
            
            <motion.div 
              className="cta-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.button 
                className="btn-light"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
              <motion.a 
                href="#"
                className="btn-link"
                whileHover={{ x: 5 }}
              >
                View Resume <span aria-hidden="true">→</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;