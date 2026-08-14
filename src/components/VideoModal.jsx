import React, { useState, useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  FileText, 
  Check, 
  Sparkles, 
  Clock, 
  ExternalLink,
  Zap
} from 'lucide-react';
import YoutubeIcon from './YoutubeIcon';

export default function VideoModal({ 
  video, 
  onClose, 
  isWatched, 
  onToggleWatched,
  savedNotes,
  onSaveNote
}) {
  const [noteText, setNoteText] = useState(savedNotes || '');
  const [isNoteSaved, setIsNoteSaved] = useState(false);

  useEffect(() => {
    setNoteText(savedNotes || '');
  }, [savedNotes, video]);

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!video) return null;

  const handleSaveNotes = () => {
    onSaveNote(video.id, noteText);
    setIsNoteSaved(true);
    setTimeout(() => setIsNoteSaved(false), 2000);
  };

  const embedUrl = `https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span className="grade-badge-tag">{video.grade}</span>
            <span className="subject-badge-tag">{video.subject}</span>
            {video.isShort && (
              <span style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444', padding: '2px 8px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                <Zap size={12} /> YouTube Short
              </span>
            )}
          </div>

          <button className="modal-close-btn" onClick={onClose} title="Close modal (Esc)">
            <X size={20} />
          </button>
        </div>

        {/* YouTube Responsive Iframe Player */}
        <div className="iframe-container">
          <iframe
            src={embedUrl}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Content Details */}
        <div className="modal-content-body">
          <div className="modal-title-row">
            <h2 style={{ fontSize: '1.4rem', lineHeight: 1.3 }}>{video.title}</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <span>
                {video.isShort ? <Zap size={14} color="#ef4444" style={{ display: 'inline', verticalAlign: 'middle', marginRight: '2px' }} /> : <Clock size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '2px' }} />}
                {video.duration}
              </span>
              <span>{video.uploadedAt}</span>
            </div>
          </div>

          {/* Action Bar */}
          <div className="modal-actions-bar">
            {/* Watched toggle */}
            <button
              className="nav-action-btn"
              onClick={() => onToggleWatched(video.id)}
              style={{
                background: isWatched ? 'rgba(16, 185, 129, 0.15)' : undefined,
                borderColor: isWatched ? '#10b981' : undefined,
                color: isWatched ? '#10b981' : undefined
              }}
            >
              <CheckCircle2 size={18} color={isWatched ? '#10b981' : 'currentColor'} />
              <span>{isWatched ? 'Completed' : 'Mark as Watched'}</span>
            </button>

            {/* Direct YouTube link */}
            <a
              href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-action-btn"
              style={{ marginLeft: 'auto' }}
            >
              <ExternalLink size={16} />
              <span>Watch on YouTube</span>
            </a>
          </div>

          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            {video.description}
          </p>

          {/* Key Takeaways */}
          {video.keyTakeaways && video.keyTakeaways.length > 0 && (
            <div className="takeaways-box">
              <h4 className="takeaways-title">
                <Sparkles size={16} /> Key Concepts Covered in This Lesson
              </h4>
              <ul className="takeaways-list">
                {video.keyTakeaways.map((item, index) => (
                  <li key={index} style={{ marginBottom: '4px' }}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Personal Student Notepad */}
          <div className="notes-section">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <FileText size={16} color="var(--accent-primary)" /> Personal Lesson Notes
              </h4>
              <button 
                onClick={handleSaveNotes} 
                className="btn-primary"
                style={{ fontSize: '0.8rem', padding: '0.4rem 0.9rem', borderRadius: 'var(--radius-sm)' }}
              >
                {isNoteSaved ? <Check size={14} /> : null}
                <span>{isNoteSaved ? 'Saved!' : 'Save Notes'}</span>
              </button>
            </div>
            <textarea
              className="notes-textarea"
              placeholder="Write down important formulas, definitions, or questions to ask your teacher..."
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
