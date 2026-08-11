import React from 'react';
import { Award, Quote, Sparkles, GraduationCap, CheckCircle2 } from 'lucide-react';
import { FOUNDER_INFO, CHANNEL_INFO } from '../data/videosData';

export default function FounderSection() {
  return (
    <section className="founder-section-wrapper">
      <div className="founder-card-inner">
        {/* Profile Avatar / Badge */}
        <div className="founder-avatar-col">
          <div className="founder-avatar-frame">
            <div className="founder-initials-avatar">
              <span>N D</span>
            </div>
            <div className="experience-badge-floating">
              <Award size={16} />
              <span>38+ Years Exp.</span>
            </div>
          </div>
        </div>

        {/* Info Column */}
        <div className="founder-info-col">
          <div className="hero-pill" style={{ background: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(245, 158, 11, 0.3)', color: '#f59e0b', marginBottom: '0.6rem' }}>
            <Sparkles size={14} />
            <span>३८ वर्षांच्या अध्यापन अनुभवाचा नव्या स्वरूपात प्रवास...</span>
          </div>

          <h2 className="founder-name-title">
            {FOUNDER_INFO.name} <span style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-muted)' }}>({FOUNDER_INFO.englishName})</span>
          </h2>

          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.2rem', lineHeight: 1.6 }}>
            ज्येष्ठ मार्गदर्शक व शिक्षणतज्ज्ञ श्री. नामदेव धनावडे (एन. डी. सर) यांच्या मार्गदर्शनाखाली <strong>ज्ञानकक्षा 360°</strong> च्या माध्यमातून इयत्ता १ ली ते १० वी मधील विद्यार्थ्यांची ज्ञानाची भक्कम पायाभरणी केली जाते.
          </p>

          {/* Inspirational Quote Callout */}
          <div className="founder-quote-box">
            <Quote size={24} className="quote-icon" />
            <p className="quote-text">
              "{FOUNDER_INFO.quote}"
            </p>
            <span className="quote-translation">
              ("{FOUNDER_INFO.quoteEnglish}")
            </span>
          </div>

          {/* Motto points */}
          <div className="motto-pills-row">
            <div className="motto-pill-item">
              <CheckCircle2 size={15} color="#10b981" />
              <span>ज्ञानाची सुरुवात</span>
            </div>
            <div className="motto-pill-item">
              <CheckCircle2 size={15} color="#6366f1" />
              <span>विचारांची दिशा</span>
            </div>
            <div className="motto-pill-item">
              <CheckCircle2 size={15} color="#f59e0b" />
              <span>आत्मविश्वासाची उभारणी</span>
            </div>
            <div className="motto-pill-item">
              <CheckCircle2 size={15} color="#ec4899" />
              <span>उज्ज्वल भविष्याची खुली वाट</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
