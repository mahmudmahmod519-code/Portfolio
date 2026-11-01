import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const Skills = () => {
  const skillsRef = useRef(null);
  const isSkillsInView = useInView(skillsRef, { once: true });
  const skillsControls = useAnimation();

  useEffect(() => {
    if (isSkillsInView) skillsControls.start("visible");
  }, [isSkillsInView, skillsControls]);

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const skillCategories = [
    {
      title: 'Backend & APIs',
      icon: '🖥️',
      color: '#1E90FF',
      description: 'Node.js, Express, Nest.js, FastAPI, REST, JWT, OAuth',
      skills: [
        'Node.js', 'Express.js', 'Fullstack Nest.js', 'FastAPI',
        'TypeScript', 'Python', 'RESTful API Design', 'OAuth 2.0',
        'JWT', 'Authentication & Authorization'
      ],
    },
    {
      title: 'Automation & AI',
      icon: '🤖',
      color: '#8B5CF6',
      description: 'n8n, LLM Integration, Multi-Agent Systems, Prompt Engineering',
      skills: [
        'n8n', 'Workflow Orchestration', 'LLM Integration (OpenAI/Gemini)',
        'Multi-Agent Systems', 'Prompt Engineering', 'Webhooks',
        'AI Agent Pipelines', 'Claude (AI)', 'OpenCode', 'Antigravity'
      ],
    },
    {
      title: 'Databases & Caching',
      icon: '🗄️',
      color: '#06B6D4',
      description: 'PostgreSQL, MySQL, MongoDB, Redis, SQL Design',
      skills: [
        'PostgreSQL', 'MySQL', 'MongoDB',
        'Redis (Session, Chat Memory)', 'SQL Database Design'
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: '⚙️',
      color: '#10B981',
      description: 'Git, GitHub, Postman, Linux, Docker',
      skills: ['Git', 'GitHub', 'Postman', 'Linux', 'Docker (Basics)'],
    },
    {
      title: 'Web Scraping & Data',
      icon: '🕷️',
      color: '#F59E0B',
      description: 'Selenium, BeautifulSoup, Structured Extraction',
      skills: ['Selenium', 'BeautifulSoup', 'Structured Data Extraction'],
    },
    {
      title: 'Frontend Development',
      icon: '💻',
      color: '#6366F1',
      description: 'Next.js, React, TypeScript, HTML/CSS',
      skills: ['Next.js (Self-Taught)', 'React', 'TypeScript', 'HTML/CSS'],
    },
    {
      title: 'CS Fundamentals & Architecture',
      icon: '📚',
      color: '#EF4444',
      description: 'System Design, System Architecture, Database Design',
      skills: [
        'Data Structures', 'Algorithms', 'OOP', 'Design Patterns',
        'System Design', 'System Architecture', 'Database Design'
      ],
    },
  ];

  return (
    <section className="skills-section relative overflow-hidden" ref={skillsRef} id="skills">
      {/* Background decorations */}
      <div className="absolute top-[-8%] left-[-8%] w-[500px] h-[500px] bg-[#1E90FF]/20 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="absolute bottom-[-8%] right-[-8%] w-[600px] h-[600px] bg-[#FF69B4]/20 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />

      <div className="container mx-auto px-4 py-24 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isSkillsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E90FF]/10 text-[#1E90FF] text-sm font-bold border border-[#1E90FF]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#1E90FF]" />
            <span>Technical Stack</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1a1a1a] mb-6 tracking-tight leading-tight">
            Skills &amp; Expertise
          </h2>
          <p className="text-gray-500 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            I build scalable backends, intelligent AI agents, and modern web applications using these technologies.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate={skillsControls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.2 }
            }
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={itemVariant.hidden}
                animate={itemVariant.visible}
                transition={{ delay: index * 0.06 }}
                className={`group relative rounded-3xl p-6 sm:p-8 border border-gray-100 bg-white shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden`}
              >
                {/* Top accent border */}
                <div className={`absolute top-0 left-0 right-0 h-1 w-full bg-gradient-to-r from-${category.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="flex items-center gap-3 mb-6 z-10 relative">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br from-${category.color} to-opacity-20 shadow-lg border border-${category.color}/30 group-hover:scale-110 transition-transform duration-300`}>
                    <span>{category.icon}</span>
                  </div>
                  <div className="z-10 relative">
                    <h3 className="text-xl font-bold text-[#1a1a1a] mb-1 tracking-tight">{category.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{category.description}</p>
                  </div>
                </div>

                <div className="flex-1 z-10 relative">
                  <div className="skill-tags flex flex-wrap gap-2 mb-6">
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05, backgroundColor: category.color + '15', color: category.color }}
                        className="px-3 py-2 rounded-full bg-gray-50 text-gray-600 text-xs sm:text-sm font-medium border border-gray-100 transition-all duration-200 whitespace-nowrap"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Decorative bottom corner */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full bg-gray-50/50 -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
