import React from 'react';
import { GraduationCap, BookOpen, Award, Compass, Sparkles, Clock } from 'lucide-react';
import { GRADES } from '../data/videosData';

export default function GradeSelector({ selectedGrade, setSelectedGrade, getGradeCount }) {
  const getIcon = (iconName, isSelected) => {
    const props = { size: 18, color: isSelected ? '#ffffff' : 'var(--accent-primary)' };
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap {...props} />;
      case 'Award': return <Award {...props} />;
      case 'Compass': return <Compass {...props} color={isSelected ? '#ffffff' : '#f59e0b'} />;
      default: return <BookOpen {...props} />;
    }
  };

  return (
    <div className="grade-selector-container">
      {GRADES.map((grade) => {
        const isSelected = selectedGrade === grade.id;
        const count = getGradeCount(grade.id);
        const isComingSoon = grade.isComingSoon;

        return (
          <button
            key={grade.id}
            className={`grade-pill-btn ${isSelected ? 'active' : ''}`}
            onClick={() => setSelectedGrade(grade.id)}
            style={{
              borderColor: grade.id === 'Career Guidance' && !isSelected ? '#f59e0b' : undefined,
              opacity: isComingSoon && !isSelected ? 0.85 : 1
            }}
          >
            {getIcon(grade.icon, isSelected)}
            <span>{grade.label}</span>
            
            {count > 0 ? (
              <span className="grade-count-tag">{count}</span>
            ) : isComingSoon ? (
              <span className="coming-soon-badge-pill" style={{
                fontSize: '0.7rem',
                padding: '1px 6px',
                borderRadius: 'var(--radius-full)',
                background: isSelected ? 'rgba(255,255,255,0.25)' : 'rgba(245, 158, 11, 0.15)',
                color: isSelected ? '#ffffff' : '#f59e0b',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '2px'
              }}>
                <Clock size={10} /> Soon
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
