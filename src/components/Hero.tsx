import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Image from '../../public/IMG-20251030-WA0009.jpg';
import { Aurora } from './ui/aurora';
import { GradientText } from './ui/gradient-text';

const Hero = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const heroControls = useAnimation();

  useEffect(() => {
    if (isHeroInView) heroControls.start("visible");
  }, [isHeroInView, heroControls]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const floatAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  const pulseGlow = {
    initial: { opacity: 0.4, scale: 1 },
    animate: {
      opacity: [0.4, 0.8, 0.4],
      scale: [1, 1.1, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
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

  const downloadCV = () => {
    window.open('/mahmoud_mossad_AI%20Automation%20&%20Backend%20Engineer_resume.pdf', '_blank');
  };

  return (
    <section className="hero-section relative overflow-hidden" ref={heroRef}>
      {/* Premium dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] to-[#1e293b]" />
      
      {/* Aurora lights */}
      <Aurora from="#1E90FF" via="#8B5CF6" speed={20} blur={100} intensity={0.35} />
      
      {/* Decorative floating orbs */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#1E90FF]/20 blur-[140px]"
        animate={floatAnimation}
        style={{ animationDelay: '0s' }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full bg-[#FF69B4]/20 blur-[140px]"
        animate={floatAnimation}
        style={{ animationDelay: '-2s' }}
      />
      <motion.div
        className="absolute top-[40%] left-[20%] w-[400px] h-[400px] rounded-full bg-[#8B5CF6]/15 blur-[120px]"
        animate={floatAnimation}
        style={{ animationDelay: '-4s' }}
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="hero-grid flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            className="hero-text text-center lg:text-left lg:max-w-[600px] order-2 lg:order-1"
            initial="hidden"
            animate={heroControls}
            variants={fadeInUp}
          >
            <motion.div
              className="badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-[#1E90FF] text-xs sm:text-sm font-bold border border-white/20 backdrop-blur-sm mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="w-2 h-2 rounded-full bg-[#1E90FF] animate-pulse" />
              AI Automation & Backend Engineer
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <GradientText text="AI Automation & " from="#1E90FF" via="#FF69B4" duration={5} />
              <span className="text-white">Backend Engineer</span>
            </motion.h1>

            <motion.p
              className="text-gray-300 text-base sm:text-lg md:text-xl max-w-none lg:max-w-lg mb-10 leading-relaxed mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Hello, I'm <span className="highlight font-semibold text-white">Mahmoud Mossad</span>, AI Automation & Backend Engineer based in Ismailia, Egypt. I build APIs and automation workflows with Node.js/Express, n8n, and AI agent pipelines using OpenAI & Gemini.
            </motion.p>

            <motion.div
              className="hero-buttons flex flex-wrap justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.button
                className="btn-primary w-full sm:w-auto px-8 py-4 rounded-full bg-[#1E90FF] text-white font-bold text-lg shadow-[0_0_30px_rgba(30,144,255,0.4)] transition-all hover:bg-[#1E90FF]/90 hover:shadow-[0_0_40px_rgba(30,144,255,0.6)]"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                variants={pulseGlow}
                initial="initial"
                animate="pulseGlow"
                onClick={downloadCV}
              >
                Download CV <span aria-hidden="true">→</span>
              </motion.button>

              <motion.button
                className="btn btn-light px-8 py-4 rounded-full bg-white/10 text-white font-bold text-lg border border-white/20 backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/40 hover:shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                variants={pulseGlow}
                initial="initial"
                animate="pulseGlow"
                onClick={handleContact}
              >
                Get in Touch
              </motion.button>

              <motion.button
                className="btn-light px-8 py-4 rounded-full bg-white/10 text-white font-bold text-lg border border-white/20 backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/40 hover:shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                variants={pulseGlow}
                initial="initial"
                animate="pulseGlow"
                onClick={openGitHub}
              >
                GitHub
              </motion.button>
              <motion.button
                className="btn-light px-8 py-4 rounded-full bg-white/10 text-white font-bold text-lg border border-white/20 backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/40 hover:shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                variants={pulseGlow}
                initial="initial"
                animate="pulseGlow"
                onClick={openLinkedIn}
              >
                LinkedIn
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            className="hero-image-container relative order-1 lg:order-2 w-full lg:w-[450px] shrink-0"
            initial="hidden"
            animate={heroControls}
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="hero-image mx-auto lg:mx-0 relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#1E90FF] to-[#FF69B4] rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div
                className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
              >
                <div className="image-bg absolute inset-0"
                  style={{
                    backgroundImage: `url(${Image})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
                ></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
