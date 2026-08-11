import React from 'react';
import { GRADE_SUBJECTS_MAP } from '../data/videosData';

export default function SubjectFilter({ selectedGrade, selectedSubject, setSelectedSubject }) {
  const subjectsList = GRADE_SUBJECTS_MAP[selectedGrade] || GRADE_SUBJECTS_MAP['all'];

  return (
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
  );
}
