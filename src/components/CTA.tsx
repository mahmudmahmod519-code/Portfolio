import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { MagneticButton } from './ui/magnetic-button';
import { ConfettiButton } from './ui/confetti-button';

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

  const handleContact = () => {
    window.location.href = 'mailto:mahmoudmustafamahmoud87@gmail.com?subject=Portfolio Inquiry&body=Hello, I would like to discuss a potential project...';
  };

  const handleDownloadCV = () => {
    window.open('/mahmoud_mossad_AI%20Automation%20&%20Backend%20Engineer_resume.pdf', '_blank');
  };

  return (
    <section className="cta-section relative overflow-hidden" ref={ctaRef}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E90FF]/10 to-[#FF69B4]/10" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div 
          className="cta-container text-center"
          initial="hidden"
          animate={ctaControls}
          variants={fadeInUp}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <div className="cta-bg-circles absolute inset-0 -z-10 overflow-hidden">
            <div className="cta-circle-1 absolute top-[-10%] left-[-10%] w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] bg-[#1E90FF]/20 rounded-full blur-[120px]" />
            <div className="cta-circle-2 absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] bg-[#FF69B4]/20 rounded-full blur-[120px]" />
          </div>
          
          <div className="cta-content relative">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ready to build something amazing together?
            </motion.h2>
            
            <motion.p
              className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I'm currently available for freelance projects and full-time opportunities. Let's discuss how I can help your team.
            </motion.p>
            
            <motion.div 
              className="cta-buttons flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <ConfettiButton
                onClick={handleDownloadCV}
                className="w-full sm:w-auto px-6 py-3 text-base sm:text-lg font-semibold shadow-lg hover:shadow-[0_0_30px_rgba(30,144,255,0.3)]"
              >
                Download CV <span aria-hidden="true">→</span>
              </ConfettiButton>
              
              <MagneticButton
                onClick={handleContact}
                strength={20}
                className="w-full sm:w-auto px-6 py-3 text-base sm:text-lg font-semibold bg-white text-[#1a1a1a] border border-gray-200 shadow-lg hover:shadow-xl transition-all"
              >
                Contact Me
              </MagneticButton>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
