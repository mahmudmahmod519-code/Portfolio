import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { ScrollReveal } from './ui/scroll-reveal';

interface TimelineItem {
  id: string;
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

  const itemVariant = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const experiences: TimelineItem[] = [
    {
      id: 'tawiq',
      date: "April 2026 — Present",
      location: "Port Said, Egypt",
      title: "Automation Engineer",
      company: "Tawiq (Tech Startup)",
      description: "Tech startup specializing in workflow automation and AI Agents using LLMs, serving the Saudi and MENA markets.",
      isActive: true,
      highlights: [
        'Auto PDF report delivery via Telegram & Gmail — saved 90% manual reporting time',
        'n8n workflow handling 50+ rider complaints daily via Telegram — 95% classification accuracy',
        'Automatic language detection supporting 4+ languages',
        'n8n workflows auto-scale with rider spikes — $0 extra infrastructure cost'
      ]
    },
    {
      id: 'whatsapp-ai',
      date: "June — July 2026",
      location: "Ismailia, Egypt",
      title: "WhatsApp AI Agent",
      company: "Self-Initiated Project",
      description: "Conversational customer support agent with Redis-backed long-term memory.",
      isActive: false,
      highlights: [
        '98% session retention with Redis Chat Memory',
        'Deployed using OpenRouter (Gemma)',
        'Conditional routing for first-time vs returning customers'
      ]
    },
    {
      id: 'autoflow',
      date: "March 2026",
      location: "Ismailia, Egypt",
      title: "AutoFlow – Order Intake",
      company: "Self-Initiated Project",
      description: "n8n workflow capturing orders from WhatsApp/Telegram.",
      isActive: false,
      highlights: [
        'Processing 20+ orders per day with 90% accuracy',
        'Webhook-triggered order validation',
        'Gemini AI for Arabic text extraction (90%+ accuracy)'
      ]
    },
    {
      id: 'iti-internship',
      date: "August — September 2025",
      location: "Ismailia, Egypt",
      title: "Gen AI Intern",
      company: "Information Technology Institute (ITI)",
      description: "120+ hours of training in Prompt Engineering, Python for AI, and data cleaning.",
      isActive: false,
      highlights: [
        'Collaborated with 5-member team to build AI chatbot',
        'Integrated AI APIs with backend workflows',
        'Python for AI and data cleaning'
      ]
    },
    {
      id: 'suez-university',
      date: "November 2023 — Present",
      location: "Ismailia, Egypt",
      title: "BSc, Computers and Information",
      company: "Suez Canal University",
      description: "Bachelor of Science in Computers and Information.",
      isActive: false,
      highlights: [
        'Grade: 3.1',
        'Focus: Backend development, data structures, algorithms',
        'Database design fundamentals'
      ]
    }
  ];

  return (
    <section className="experience-section relative overflow-hidden" ref={experienceRef}>
      {/* Background decorations */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#1E90FF]/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#FF69B4]/10 rounded-full blur-[140px]" />

      <div className="container mx-auto px-4 py-24 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isExperienceInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E90FF]/10 text-[#1E90FF] text-sm font-bold border border-[#1E90FF]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#1E90FF]" />
            <span>Journey</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1a1a1a] mb-6 tracking-tight leading-tight">
            Experience &amp; Education
          </h2>
          <p className="text-gray-500 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            My professional journey — from AI automation at Tawiq to my BSc at Suez Canal University.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-[#1E90FF] via-transparent to-[#1E90FF] hidden sm:block" />
          
          <motion.div 
            initial="hidden"
            animate={experienceControls}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2, delayChildren: 0.1 }
              }
            }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={itemVariant.hidden}
                animate={itemVariant.visible}
                transition={{ delay: index * 0.1 }}
                className={`relative mb-12 sm:mb-16 group flex flex-col sm:flex-row items-start ${index % 2 === 0 ? 'flex-row-reverse' : ''} gap-6`}
              >
                {/* Timeline marker */}
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 ${exp.isActive ? 'bg-[#1E90FF] border-white shadow-[0_0_0_8px_rgba(30,144,255,0.3)]' : 'bg-white border-gray-200'} relative`}>
                    <span className="text-lg font-bold">{index + 1}</span>
                    {exp.isActive && (
                      <div className="absolute -right-1 -bottom-1 w-3 h-3 rounded-full bg-[#10B981] border-2 border-white animate-pulse" />
                    )}
                  </div>
                  <div className={`absolute -top-12 left-1/2 -translate-x-1/2 w-px h-20 bg-gray-200 group-hover:bg-[#1E90FF] transition-all duration-300 ${index === 0 ? 'hidden' : ''}`} />
                </div>

                {/* Content card */}
                <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 p-6 sm:p-8 relative overflow-hidden group-hover:border-[#1E90FF]/50">
                  {/* Accent top */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-${exp.isActive ? '#10B981' : '#1E90FF'} to-transparent`} />
                  
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                    <div className="flex-shrink-0 sm:flex-shrink-0">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium mb-2">
                        <span className="text-[10px]">{exp.date}</span>
                        {exp.location && (
                          <span className="text-[10px] opacity-70">• {exp.location}</span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-[#1a1a1a] mb-1">{exp.title}</h3>
                      <p className="text-[#1E90FF] font-medium text-sm">{exp.company}</p>
                    </div>
                    {exp.isActive && (
                      <div className="ml-auto">
                        <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-bold border border-green-100">
                          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          <span>Current</span>
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {exp.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1E90FF] mt-1.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700 leading-relaxed">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
