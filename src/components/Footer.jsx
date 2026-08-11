import React from 'react';
import { GraduationCap, Heart } from 'lucide-react';
import YoutubeIcon from './YoutubeIcon';
import { InstagramIcon, WhatsappIcon, TelegramIcon } from './SocialIcons';
import { CHANNEL_INFO } from '../data/videosData';

export default function Footer({ onSelectGrade }) {
  return (
    <footer className="footer-container">
      <div className="footer-inner">
        {/* Brand info */}
        <div className="footer-col-brand">
          <div className="brand-logo">
            <div className="logo-badge">
              <GraduationCap size={24} />
            </div>
            <span>DnyanKaksha <span style={{ color: '#f97316' }}>360°</span></span>
          </div>
          <p style={{ fontStyle: 'italic', color: '#f59e0b', fontWeight: 600, marginTop: '0.5rem' }}>
            "{CHANNEL_INFO.tagline}"
          </p>
          <p>{CHANNEL_INFO.subMotto}</p>
          <div style={{ marginTop: '1.25rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <a 
              href={CHANNEL_INFO.youtubeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: '0.8rem', padding: '0.45rem 0.85rem', background: '#ff0000' }}
            >
              <YoutubeIcon size={16} color="#ffffff" />
              <span>YouTube</span>
            </a>
            <a 
              href={CHANNEL_INFO.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: '0.8rem', padding: '0.45rem 0.85rem', background: '#e1306c' }}
            >
              <InstagramIcon size={16} color="#ffffff" />
              <span>Instagram</span>
            </a>
            <a 
              href={CHANNEL_INFO.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: '0.8rem', padding: '0.45rem 0.85rem', background: '#25d366' }}
            >
              <WhatsappIcon size={16} color="#ffffff" />
              <span>WhatsApp</span>
            </a>
            <a 
              href={CHANNEL_INFO.telegramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: '0.8rem', padding: '0.45rem 0.85rem', background: '#0088cc' }}
            >
              <TelegramIcon size={16} color="#ffffff" />
              <span>Telegram</span>
            </a>
          </div>
        </div>

        {/* Guidance links */}
        <div>
          <h4 className="footer-col-title">स्पर्धा परीक्षा व मार्गदर्शन</h4>
          <ul className="footer-links-list">
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); onSelectGrade('Competitive Exams'); }}>
                शिष्यवृत्ती परीक्षा (Scholarship Exam)
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); onSelectGrade('Competitive Exams'); }}>
                NTSE व ऑलिंपियाड तयारी
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); onSelectGrade('Parents & Teachers'); }}>
                पालक मार्गदर्शन टिप्स (Parenting)
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); onSelectGrade('Career Guidance'); }}>
                १० वी नंतर Stream Selection
              </a>
            </li>
          </ul>
        </div>

        {/* Channel info */}
        <div>
          <h4 className="footer-col-title">अधिकृत कम्युनिटी</h4>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            <strong>{CHANNEL_INFO.handle}</strong> ला YouTube, Instagram, WhatsApp आणि Telegram वर जॉईन करा आणि प्रत्येक नवीन व्हिडिओ व नोट्स मिळवा.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div>
          © {new Date().getFullYear()} DnyanKaksha 360° (ज्ञानकक्षा 360°). All rights reserved.
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          Crafted with <Heart size={14} color="#f43f5e" fill="#f43f5e" /> for Class 1–10 Students
        </div>
      </div>
    </footer>
  );
}
