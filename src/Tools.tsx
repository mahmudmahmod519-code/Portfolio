import { useState } from 'react';
import '../css/tools.css';

interface Skill {
  id: number;
  name: string;
  category: string;
  icon: string;
  company: string;
  description: string;
  tags: string[];
  level: number;
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // بيانات المهارات - هتكون من API
  const skillsData: Skill[] = [
    {
      id: 1,
      name: "Java Swing",
      category: "frontend",
      icon: "fab fa-java",
      company: "Information Technology Institute (ITI)",
      description: "تطوير واجهات سطح المكتب باستخدام Java Swing",
      tags: ["Desktop App", "GUI", "OOP"],
      level: 85
    },
    {
      id: 2,
      name: "Node.js",
      category: "backend",
      icon: "fab fa-node-js",
      company: "Information Technology Institute (ITI)",
      description: "تطوير تطبيقات سيرفر باستخدام Node.js و Express",
      tags: ["Backend", "API", "WebSocket"],
      level: 90
    },
    {
      id: 3,
      name: "React & TypeScript",
      category: "frontend",
      icon: "fab fa-react",
      company: "Suez Canal University",
      description: "تطوير واجهات مستخدم تفاعلية باستخدام React و TypeScript",
      tags: ["Frontend", "SPA", "Components"],
      level: 88
    },
    {
      id: 4,
      name: "Python & Machine Learning",
      category: "ai",
      icon: "fab fa-python",
      company: "AI Intern at ITI",
      description: "تحليل البيانات وتطوير نماذج الذكاء الاصطناعي",
      tags: ["AI", "Data Analysis", "NumPy", "Pandas"],
      level: 80
    },
    {
      id: 5,
      name: "Network Engineering",
      category: "network",
      icon: "fas fa-network-wired",
      company: "Jotun Middle East, India and Africa",
      description: "تصميم وإدارة شبكات الحاسوب وأمن الشبكات",
      tags: ["Networking", "Security", "Cisco", "Firewall"],
      level: 75
    },
    {
      id: 6,
      name: "Databases",
      category: "backend",
      icon: "fas fa-database",
      company: "Suez Canal University",
      description: "إدارة قواعد البيانات SQL و NoSQL",
      tags: ["MongoDB", "SQL", "Database Design"],
      level: 85
    }
  ];

  const categories = [
    { id: 'all', name: 'الكل' },
    { id: 'frontend', name: 'واجهات المستخدم' },
    { id: 'backend', name: 'الخلفية' },
    { id: 'ai', name: 'الذكاء الاصطناعي' },
    { id: 'network', name: 'الشبكات' },
    { id: 'tools', name: 'الأدوات' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section className="skills-section" id="skills">
      <div className="section-header">
        <h2>المهارات والتقنيات</h2>
        <p>مجموعة المهارات والخبرات التي اكتسبتها خلال رحلتي المهنية</p>
      </div>

      <div className="categories-filter">
        {categories.map(cat => (
          <button
            key={cat.id}
            className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {filteredSkills.map(skill => (
          <div key={skill.id} className="skill-card">
            <div className="skill-header">
              <div className="skill-icon">
                <i className={skill.icon}></i>
              </div>
              <div className="skill-title">
                <h3>{skill.name}</h3>
                <span>{skill.category === 'frontend' ? 'واجهة' : 
                      skill.category === 'backend' ? 'خلفية' : 
                      skill.category === 'ai' ? 'ذكاء اصطناعي' : 
                      skill.category === 'network' ? 'شبكات' : 'أدوات'}</span>
              </div>
            </div>

            <div className="skill-details">
              <div className="company-info">
                <div className="company-logo">
                  <i className="fas fa-building"></i>
                </div>
                <div className="company-name">{skill.company}</div>
              </div>
              
              <p className="skill-description">{skill.description}</p>
              
              <div className="skill-tags">
                {skill.tags.map((tag, index) => (
                  <span key={index} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>

            <div className="experience-level">
              <div className="level-bar">
                <div 
                  className="level-fill" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="level-text">{skill.level}%</span>
            </div>
          </div>
        ))}
      </div>

      <div className="skills-stats">
        <div className="stat-card">
          <div className="stat-number">{skillsData.length}+</div>
          <div className="stat-label">مهارة متقنة</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">3+</div>
          <div className="stat-label">مجالات خبرة</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">1+</div>
          <div className="stat-label">سنوات خبرة</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">20+</div>
          <div className="stat-label">مشروع منفذ</div>
        </div>
      </div>
    </section>
  );
}