import React from 'react';
import { Award, Users, UserCheck, Sparkles } from 'lucide-react';
import { TARGET_AUDIENCE } from '../data/videosData';

export default function AudienceCategorySection({ onSelectCategory }) {
  const getIcon = (iconName, color) => {
    const props = { size: 32, color };
    switch (iconName) {
      case 'Award': return <Award {...props} />;
      case 'Users': return <Users {...props} />;
      case 'UserCheck': return <UserCheck {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section className="audience-section-wrapper">
      <div className="section-title-wrapper" style={{ textAlign: 'center', display: 'block', marginBottom: '2rem' }}>
        <h2 className="section-title" style={{ fontSize: '2rem' }}>
          सर्व घटकांसाठी मार्गदर्शक व्यासपीठ
        </h2>
        <p className="section-subtitle">
          Designed for Competitive Exam Candidates, Parents, Teachers & Curious Learners.
        </p>
      </div>

      <div className="audience-grid">
        {TARGET_AUDIENCE.map((item) => (
          <div 
            key={item.id} 
            className="audience-card"
            onClick={() => {
              if (item.id === 'competitive') onSelectCategory('Competitive Exams');
              else if (item.id === 'parents' || item.id === 'teachers') onSelectCategory('Parents & Teachers');
              else onSelectCategory('all');
            }}
          >
            <div className="audience-icon-circle" style={{ background: `${item.color}18`, borderColor: `${item.color}40` }}>
              {getIcon(item.icon, item.color)}
            </div>

            <h3 className="audience-title">{item.marathiTitle}</h3>
            <span className="audience-title-eng">{item.englishTitle}</span>
            <p className="audience-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
