import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import '../../css/portfolio.css';

const Skills = () => {
  const skillsRef = useRef(null);
  const isSkillsInView = useInView(skillsRef, { once: true });
  const skillsControls = useAnimation();

  useEffect(() => {
    if (isSkillsInView) skillsControls.start("visible");
  }, [isSkillsInView, skillsControls]);

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

  // تقنيات Backend Development
  const backendSkills = [
    'Nest.js', 
    'Node.js', 
    'TypeScript', 
    'Express.js',
    'PostgreSQL',
    'MongoDB',
    'REST APIs',
    'JWT Auth',
    'Docker',
    'TypeORM'
  ];

  // قواعد البيانات وأدوات
  const databaseSkills = [
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'Prisma',
    'TypeORM',
    'Mongoose'
  ];

  // DevOps وأدوات التطوير
  const devOpsSkills = [
    'Docker',
    'Git',
    'GitHub',
    'Postman',
    'Swagger',
    'Jest',
    'CI/CD',
    'AWS Basics'
  ];

  // المهارات الناعمة
  const softSkills = [
    'Problem Solving',
    'Clean Code',
    'API Design',
    'System Architecture',
    'Code Review',
    'Technical Documentation',
    'Team Collaboration'
  ];

  // المهارات التي أتعلمها حالياً
  const learningSkills = [
    'Microservices',
    'Message Queues',
    'GraphQL',
    'Unit Testing',
    'Performance Optimization'
  ];

  return (
    <section className="skills-section" ref={skillsRef} id="skills">
      <div className="container">
        <motion.div 
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isSkillsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technical Stack & Skills</h2>
          <p className="section-subtitle">Backend development technologies I use to build robust and scalable systems</p>
        </motion.div>
        
        <motion.div 
          className="skills-grid"
          initial="hidden"
          animate={skillsControls}
          variants={staggerContainer}
        >
          {/* Backend Development */}
          <motion.div 
            className="skill-category"
            variants={staggerItem}
            whileHover={{ y: -5 }}
          >
            <div className="skill-header">
              <div className="skill-icon">
                <span className="material-symbols-outlined">terminal</span>
              </div>
              <h3>Backend Development</h3>
              <p className="skill-description">Core technologies for building scalable APIs</p>
            </div>
            <div className="skill-tags">
              {backendSkills.map((skill) => (
                <motion.span 
                  key={skill}
                  className="skill-tag"
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          {/* Databases & ORMs */}
          <motion.div 
            className="skill-category"
            variants={staggerItem}
            whileHover={{ y: -5 }}
          >
            <div className="skill-header">
              <div className="skill-icon">
                <span className="material-symbols-outlined">database</span>
              </div>
              <h3>Databases & ORMs</h3>
              <p className="skill-description">Data persistence and management solutions</p>
            </div>
            <div className="skill-tags">
              {databaseSkills.map((skill) => (
                <motion.span 
                  key={skill}
                  className="skill-tag"
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          {/* DevOps & Tools */}
          <motion.div 
            className="skill-category"
            variants={staggerItem}
            whileHover={{ y: -5 }}
          >
            <div className="skill-header">
              <div className="skill-icon">
                <span className="material-symbols-outlined">settings</span>
              </div>
              <h3>DevOps & Tools</h3>
              <p className="skill-description">Development workflow and deployment</p>
            </div>
            <div className="skill-tags">
              {devOpsSkills.map((skill) => (
                <motion.span 
                  key={skill}
                  className="skill-tag"
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          {/* Development Skills */}
          <motion.div 
            className="skill-category"
            variants={staggerItem}
            whileHover={{ y: -5 }}
          >
            <div className="skill-header">
              <div className="skill-icon">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <h3>Development Skills</h3>
              <p className="skill-description">Essential technical practices</p>
            </div>
            <div className="skill-tags">
              {softSkills.map((skill) => (
                <motion.span 
                  key={skill}
                  className="skill-tag"
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Currently Learning */}
          <motion.div 
            className="skill-category"
            variants={staggerItem}
            whileHover={{ y: -5 }}
          >
            <div className="skill-header">
              <div className="skill-icon">
                <span className="material-symbols-outlined">school</span>
              </div>
              <h3>Currently Learning</h3>
              <p className="skill-description">Expanding backend knowledge</p>
            </div>
            <div className="skill-tags">
              {learningSkills.map((skill) => (
                <motion.span 
                  key={skill}
                  className="skill-tag learning"
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Separator */}
        <motion.div 
          className="section-separator"
          initial={{ opacity: 0, width: 0 }}
          animate={isSkillsInView ? { opacity: 1, width: "100px" } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        />
      </div>
    </section>
  );
};

export default Skills;