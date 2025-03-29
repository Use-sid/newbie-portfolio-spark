
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  level: number;
}

const SkillsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);

  const frontendSkills: Skill[] = [
    { name: 'HTML & CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'TypeScript', level: 70 },
  ];

  const otherSkills: Skill[] = [
    { name: 'Node.js', level: 65 },
    { name: 'MongoDB', level: 60 },
    { name: 'Git & GitHub', level: 75 },
    { name: 'Responsive Design', level: 90 },
    { name: 'UI/UX Basics', level: 70 },
  ];

  const renderSkillBar = (skill: Skill) => (
    <div key={skill.name} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{skill.name}</span>
        <span className="text-teal-600">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress"
          style={{ 
            width: visible ? `${skill.level}%` : '0%',
            transition: 'width 1s ease-in-out'
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mx-auto">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-800">Frontend Development</h3>
            {frontendSkills.map(renderSkillBar)}
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-800">Other Skills</h3>
            {otherSkills.map(renderSkillBar)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
