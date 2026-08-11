import React from 'react';
import { Sparkles, Play } from 'lucide-react';
import YoutubeIcon from './YoutubeIcon';
import { CHANNEL_INFO } from '../data/videosData';

export default function Hero({ onPlayFeatured, featuredVideo }) {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        <div className="hero-pill">
          <Sparkles size={14} color="#facc15" />
          <span>अधिकृत शैक्षणिक व्यासपीठ • {CHANNEL_INFO.name} ({CHANNEL_INFO.marathiName})</span>
        </div>

        <h1 className="hero-title">
          इयत्ता <span>१ ली ते १० वी</span> व स्पर्धा परीक्षा मार्गदर्शन
        </h1>

        <div className="marathi-motto-tag">
          "{CHANNEL_INFO.tagline}"
        </div>

        <p className="hero-subtitle">
          {CHANNEL_INFO.subMotto} <br />
          ३८ वर्षांचा अध्यापन अनुभव असणारे <strong>श्री. नामदेव धनावडे (N D Sir)</strong> यांच्या मार्गदर्शनाखाली गुणवत्तेचा नवा अध्याय.
        </p>

        <div className="hero-cta-group">
          <a 
            href={CHANNEL_INFO.youtubeUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary"
            style={{ background: 'linear-gradient(135deg, #ff0000 0%, #cc0000 100%)' }}
          >
            <YoutubeIcon size={20} color="#ffffff" />
            <span>YouTube Channel Subscribe</span>
          </a>

          {featuredVideo && (
            <button 
              className="btn-secondary" 
              onClick={() => onPlayFeatured(featuredVideo)}
            >
              <Play size={18} fill="#ffffff" />
              <span>Watch Featured Video</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
