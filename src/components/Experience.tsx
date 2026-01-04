import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface TimelineItem {
  id: number;
  date: string;
  location?: string;
  title: string;
  company: string;
  description: string;
  isActive?: boolean;
}

const Experience = () => {
  const experienceRef = useRef(null);
  const isExperienceInView = useInView(experienceRef, { once: true });
  const experienceControls = useAnimation();

  useEffect(() => {
    if (isExperienceInView) experienceControls.start("visible");
  }, [isExperienceInView, experienceControls]);

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const timelineItem = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  const timelineDot = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.4, 
        ease: [0.34, 1.56, 0.64, 1] as const
      }
    }
  };

  const timelineLine = {
    hidden: { height: 0 },
    visible: { 
      height: "100%",
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  const experiences: TimelineItem[] = [
    {
      id: 1,
      date: "2023 — Present",
      location: "ismailia",
      title: "Junior Backend enginner",
      company: "study from home",
      description: "Developed and maintained 3+ full-stack projects using Nest.js as the backend framework. Implemented REST APIs with authentication and database integration. Optimized API response times through efficient database queries and caching strategies.",
      isActive: true
    }
  ];

  return (
    <section className="experience-section" ref={experienceRef}>
      <div className="container">
        <motion.div 
          className="experience-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isExperienceInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Experience</h2>
        </motion.div>
        
        <motion.div 
          className="timeline"
          initial="hidden"
          animate={experienceControls}
          variants={staggerContainer}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              className="timeline-item"
              variants={timelineItem}
            >
              <div className="timeline-left">
                <div className="timeline-date">
                  <span className="date-text">{exp.date}</span>
                  {exp.location && (
                    <span className="location-text">{exp.location}</span>
                  )}
                </div>
              </div>
              
              <div className="timeline-center">
                <div className="timeline-dot-container">
                  {index < experiences.length - 1 && (
                    <motion.div 
                      className="timeline-line"
                      variants={timelineLine}
                    />
                  )}
                  <motion.div 
                    className={`timeline-dot ${exp.isActive ? 'active' : ''}`}
                    variants={timelineDot}
                  />
                </div>
              </div>
              
              <div className="timeline-right">
                <motion.div 
                  className="experience-card"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div className="experience-card-header">
                    <h3>{exp.title}</h3>
                    <span className="company">{exp.company}</span>
                  </div>
                  <p>{exp.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;