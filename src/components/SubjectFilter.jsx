import React from 'react';
import { Video, Zap, Layers } from 'lucide-react';
import { GRADE_SUBJECTS_MAP } from '../data/videosData';

export default function SubjectFilter({ 
  selectedGrade, 
  selectedSubject, 
  setSelectedSubject,
  contentType = 'all',
  setContentType
}) {
  const subjectsList = GRADE_SUBJECTS_MAP[selectedGrade] || GRADE_SUBJECTS_MAP['all'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', margin: '1rem 0' }}>
      {/* Subject Filter Row */}
      <div className="subject-filter-container">
        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
          Filter Subject:
        </span>
        {subjectsList.map((subject) => {
          const isSelected = selectedSubject === subject.id;

          return (
            <button
              key={subject.id}
              className={`subject-chip ${isSelected ? 'active' : ''}`}
              onClick={() => setSelectedSubject(subject.id)}
              style={{
                borderColor: isSelected && subject.color ? subject.color : undefined,
                color: isSelected && subject.color ? subject.color : undefined
              }}
            >
              {subject.label}
            </button>
          );
        })}
      </div>

      {/* Content Format Filter Row */}
      {setContentType && (
        <div className="subject-filter-container" style={{ paddingTop: 0, marginTop: '-0.2rem' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
            Format:
          </span>
          <button
            className={`subject-chip ${contentType === 'all' ? 'active' : ''}`}
            onClick={() => setContentType('all')}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}
          >
            <Layers size={13} />
            All Content (सर्व प्रकार)
          </button>
          <button
            className={`subject-chip ${contentType === 'video' ? 'active' : ''}`}
            onClick={() => setContentType('video')}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}
          >
            <Video size={13} color={contentType === 'video' ? '#6366f1' : 'currentColor'} />
            Full Lessons (दीर्घ व्हिडिओ)
          </button>
          <button
            className={`subject-chip ${contentType === 'short' ? 'active' : ''}`}
            onClick={() => setContentType('short')}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', borderColor: contentType === 'short' ? '#ef4444' : undefined, color: contentType === 'short' ? '#ef4444' : undefined }}
          >
            <Zap size={13} color={contentType === 'short' ? '#ef4444' : 'currentColor'} />
            YouTube Shorts (शॉर्ट्स)
          </button>
        </div>
      )}
    </div>
  );
}
