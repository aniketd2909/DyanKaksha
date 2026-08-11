import React from 'react';
import VideoCard from './VideoCard';
import { FilterX, Clock, Sparkles } from 'lucide-react';
import YoutubeIcon from './YoutubeIcon';
import { CHANNEL_INFO, GRADES } from '../data/videosData';

export default function VideoGrid({
  videos,
  onSelectVideo,
  watchedIds,
  selectedGrade,
  selectedSubject,
  sortBy,
  setSortBy,
  onResetFilters
}) {
  const currentGradeObj = GRADES.find(g => g.id === selectedGrade);
  const isComingSoonSection = currentGradeObj && currentGradeObj.isComingSoon && videos.length === 0;

  return (
    <section style={{ margin: '2rem 0' }}>
      <div className="section-title-wrapper">
        <div>
          <h2 className="section-title">
            {selectedGrade === 'all' ? 'All Channel Videos (सर्व व्हिडिओ)' : `${selectedGrade} Videos`}
            {selectedSubject !== 'all' ? ` (${selectedSubject})` : ''}
          </h2>
          <p className="section-subtitle">
            {videos.length > 0 
              ? `Showing ${videos.length} live lesson${videos.length === 1 ? '' : 's'} from @dnyankaksha360` 
              : `Status for ${selectedGrade === 'all' ? 'selected filter' : selectedGrade}`}
          </p>
        </div>

        {/* Sort selector */}
        {videos.length > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: '0.5rem 0.9rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-card)',
                color: 'var(--text-main)',
                fontSize: '0.85rem',
                fontWeight: 600,
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="newest">Newest Lessons</option>
              <option value="title">Title (A-Z)</option>
            </select>
          </div>
        )}
      </div>

      {videos.length > 0 ? (
        <div className="video-grid">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onSelectVideo={onSelectVideo}
              isWatched={watchedIds.includes(video.id)}
            />
          ))}
        </div>
      ) : isComingSoonSection ? (
        /* Coming Soon Placeholder Section Card */
        <div className="coming-soon-card-container" style={{
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-color)',
          padding: '3.5rem 2rem',
          textAlign: 'center',
          boxShadow: 'var(--shadow-md)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            width: '72px',
            height: '72px',
            borderRadius: '50%',
            background: 'rgba(245, 158, 11, 0.15)',
            color: '#f59e0b',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.25rem auto'
          }}>
            <Clock size={36} />
          </div>

          <span className="hero-pill" style={{ background: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(245, 158, 11, 0.3)', color: '#f59e0b', marginBottom: '0.8rem' }}>
            <Sparkles size={14} />
            <span>लवकरच येत आहे • COMING SOON</span>
          </span>

          <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.6rem' }}>
            {selectedGrade} चे व्हिडिऑस लवकरच अपलोड होत आहेत!
          </h3>

          <p style={{ maxWidth: '580px', margin: '0 auto 1.8rem auto', color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>
            ३८ वर्षांचा अनुभव असणारे <strong>श्री. नामदेव धनावडे (N D Sir)</strong> {selectedGrade} च्या संकल्पनांवर आधारित सविस्तर व्हिडिओ धडे तयार करत आहेत. नवीन व्हिडिओ अपलोड होताच नोटिफिकेशन मिळवण्यासाठी युट्यूब चॅनेल सबस्क्राईब करा!
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a 
              href={CHANNEL_INFO.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ background: 'linear-gradient(135deg, #ff0000 0%, #cc0000 100%)' }}
            >
              <YoutubeIcon size={20} color="#ffffff" />
              <span>Subscribe & Press Bell Icon</span>
            </a>

            <button 
              className="btn-secondary"
              onClick={onResetFilters}
              style={{ color: 'var(--text-main)', borderColor: 'var(--border-color)' }}
            >
              <FilterX size={16} />
              <span>View All Live Lessons</span>
            </button>
          </div>
        </div>
      ) : (
        /* Empty State */
        <div className="empty-state">
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>No lessons found</h3>
          <p style={{ maxWidth: '420px', margin: '0 auto 1.5rem auto' }}>
            We couldn't find any videos matching the selected filter.
          </p>
          <button 
            className="btn-primary" 
            onClick={onResetFilters}
            style={{ fontSize: '0.9rem', padding: '0.6rem 1.2rem' }}
          >
            <FilterX size={16} />
            <span>Reset All Filters</span>
          </button>
        </div>
      )}
    </section>
  );
}
