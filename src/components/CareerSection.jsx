import React from 'react';
import { 
  Atom, 
  TrendingUp, 
  Palette, 
  Cpu, 
  Compass, 
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { CAREER_ROADMAPS } from '../data/videosData';

export default function CareerSection({ onSelectGrade }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Atom': return <Atom size={24} />;
      case 'TrendingUp': return <TrendingUp size={24} />;
      case 'Palette': return <Palette size={24} />;
      default: return <Cpu size={24} />;
    }
  };

  return (
    <section className="career-section-container">
      <div className="section-title-wrapper" style={{ marginBottom: '0.5rem' }}>
        <div>
          <div className="hero-pill" style={{ background: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(245, 158, 11, 0.3)', color: '#f59e0b', marginBottom: '0.5rem' }}>
            <Compass size={14} />
            <span>Career Pathways & Guidance Hub</span>
          </div>
          <h2 className="section-title" style={{ fontSize: '2rem' }}>
            Plan Your Journey After Class 10th
          </h2>
          <p className="section-subtitle">
            Explore streams, subject combinations, competitive scholarship exams, and high-demand future careers.
          </p>
        </div>

        <button 
          className="btn-primary" 
          onClick={() => onSelectGrade('Career Guidance')}
          style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)' }}
        >
          <span>Explore All Guidance Videos</span>
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="career-grid">
        {CAREER_ROADMAPS.map((stream) => (
          <div key={stream.id} className="career-card">
            <div 
              className="career-icon-box" 
              style={{ background: stream.color }}
            >
              {getIcon(stream.icon)}
            </div>

            <h3 className="career-card-title">{stream.title}</h3>
            <p className="career-card-summary">{stream.summary}</p>

            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem', marginTop: 'auto' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                Key Future Roles:
              </div>
              <ul className="career-list">
                {stream.careers.map((career, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={13} color={stream.color} />
                    <span>{career}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
