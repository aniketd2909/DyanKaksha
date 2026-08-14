import React from 'react';
import { Play, Clock, CheckCircle2, Zap } from 'lucide-react';

export default function VideoCard({ 
  video, 
  onSelectVideo, 
  isWatched 
}) {
  // Generate YouTube thumbnail URL
  const thumbnailUrl = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;

  return (
    <div className={`video-card ${video.isShort ? 'short-card' : ''}`}>
      <div className="thumbnail-wrapper" onClick={() => onSelectVideo(video)}>
        <img 
          src={thumbnailUrl} 
          alt={video.title} 
          className="thumbnail-img"
          loading="lazy"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentNode.style.background = 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 100%)';
          }}
        />

        <div className="play-overlay">
          <div className="play-btn-circle">
            <Play size={24} fill="#ffffff" style={{ marginLeft: '3px' }} />
          </div>
        </div>

        {video.isShort ? (
          <span className="duration-badge short-badge" style={{ background: 'linear-gradient(135deg, #ff0000 0%, #e11d48 100%)' }}>
            <Zap size={11} style={{ display: 'inline', marginRight: '2px', verticalAlign: 'middle' }} />
            Short ({video.duration})
          </span>
        ) : (
          <span className="duration-badge">
            <Clock size={12} style={{ display: 'inline', marginRight: '3px', verticalAlign: 'middle' }} />
            {video.duration}
          </span>
        )}

        {isWatched && (
          <span className="watched-badge">
            <CheckCircle2 size={13} />
            Watched
          </span>
        )}
      </div>

      <div className="card-body">
        <div className="card-meta-tags">
          <span className="grade-badge-tag">{video.grade}</span>
          <span className="subject-badge-tag">• {video.subject}</span>
          {video.isShort && (
            <span style={{ marginLeft: 'auto', background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444', padding: '2px 8px', borderRadius: '12px', fontSize: '0.72rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
              <Zap size={10} /> Short
            </span>
          )}
        </div>

        <h3 className="card-title" onClick={() => onSelectVideo(video)}>
          {video.title}
        </h3>

        <p className="card-description">
          {video.description}
        </p>

        <div className="card-footer">
          <span>{video.uploadedAt}</span>
        </div>
      </div>
    </div>
  );
}
