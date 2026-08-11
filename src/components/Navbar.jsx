import React from 'react';
import { 
  GraduationCap, 
  Sun, 
  Moon, 
  CheckCircle2
} from 'lucide-react';
import YoutubeIcon from './YoutubeIcon';
import { InstagramIcon, WhatsappIcon, TelegramIcon } from './SocialIcons';
import { CHANNEL_INFO } from '../data/videosData';

export default function Navbar({ 
  theme, 
  toggleTheme, 
  watchedCount
}) {
  return (
    <header className="navbar-header">
      <div className="navbar-inner">
        {/* Logo */}
        <a href="#" className="brand-logo">
          <div className="logo-badge">
            <GraduationCap size={26} />
          </div>
          <div>
            <span>DnyanKaksha <span style={{ color: '#f97316' }}>360°</span></span>
            <span className="brand-tag">ज्ञानकक्षा 360°</span>
          </div>
        </a>

        {/* Action Buttons & Social Connect */}
        <div className="nav-actions">
          {/* Watched count */}
          {watchedCount > 0 && (
            <div className="nav-action-btn" title="Videos completed" style={{ cursor: 'default' }}>
              <CheckCircle2 size={16} color="#10b981" />
              <span>{watchedCount} Watched</span>
            </div>
          )}

          {/* 4 Social Platform quick icons */}
          <a href={CHANNEL_INFO.youtubeUrl} target="_blank" rel="noopener noreferrer" className="social-nav-btn" title="YouTube Channel">
            <YoutubeIcon size={18} color="#ff0000" />
          </a>
          <a href={CHANNEL_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="social-nav-btn" title="Instagram Page">
            <InstagramIcon size={18} color="#e1306c" />
          </a>
          <a href={CHANNEL_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="social-nav-btn" title="WhatsApp Community">
            <WhatsappIcon size={18} color="#25d366" />
          </a>
          <a href={CHANNEL_INFO.telegramUrl} target="_blank" rel="noopener noreferrer" className="social-nav-btn" title="Telegram Notes">
            <TelegramIcon size={18} color="#0088cc" />
          </a>

          {/* Theme Switcher */}
          <button 
            className="nav-action-btn" 
            onClick={toggleTheme}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? <Sun size={18} color="#f59e0b" /> : <Moon size={18} color="#6366f1" />}
          </button>
        </div>
      </div>
    </header>
  );
}
