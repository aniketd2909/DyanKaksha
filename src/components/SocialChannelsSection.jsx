import React from 'react';
import { ExternalLink, Sparkles, BellRing } from 'lucide-react';
import YoutubeIcon from './YoutubeIcon';
import { InstagramIcon, WhatsappIcon, TelegramIcon } from './SocialIcons';
import { SOCIAL_CHANNELS, CHANNEL_INFO } from '../data/videosData';

export default function SocialChannelsSection() {
  const getIcon = (id) => {
    switch (id) {
      case 'youtube': return <YoutubeIcon size={28} color="#ffffff" />;
      case 'instagram': return <InstagramIcon size={28} color="#ffffff" />;
      case 'whatsapp': return <WhatsappIcon size={28} color="#ffffff" />;
      default: return <TelegramIcon size={28} color="#ffffff" />;
    }
  };

  return (
    <section className="social-section-wrapper">
      <div className="section-title-wrapper" style={{ textAlign: 'center', display: 'block', marginBottom: '2rem' }}>
        <div className="hero-pill" style={{ background: 'rgba(99, 102, 241, 0.15)', border: '1px solid rgba(99, 102, 241, 0.3)', color: 'var(--accent-primary)', margin: '0 auto 0.75rem auto', width: 'fit-content' }}>
          <BellRing size={14} />
          <span>CONNECT & FOLLOW WITH US</span>
        </div>
        <h2 className="section-title" style={{ fontSize: '2.2rem' }}>
          आम्ही चार माध्यमातून नेहमी तुमच्या सोबत!
        </h2>
        <p className="section-subtitle">
          Follow & Subscribe to <strong>{CHANNEL_INFO.handle}</strong> across all platforms for daily updates, notes, and lessons.
        </p>
      </div>

      <div className="social-grid">
        {SOCIAL_CHANNELS.map((channel) => (
          <a
            key={channel.id}
            href={channel.link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
            style={{ '--channel-color': channel.color }}
          >
            <div className="social-card-header">
              <div className="social-icon-badge" style={{ background: channel.color }}>
                {getIcon(channel.id)}
              </div>
              <span className="social-action-pill" style={{ borderColor: channel.color, color: channel.color }}>
                {channel.badge} <ExternalLink size={12} />
              </span>
            </div>

            <h3 className="social-card-title">{channel.name}</h3>
            <span className="social-card-handle">{channel.handle}</span>

            <p className="social-card-desc">{channel.desc}</p>
            <p className="social-card-desc-eng">{channel.descEng}</p>
          </a>
        ))}
      </div>

      {/* Community Participation Box */}
      <div className="participation-box">
        <h3 className="participation-title">
          <Sparkles size={20} color="#f59e0b" /> या ज्ञानयात्रेत सहभागी व्हा! (Join the Knowledge Journey)
        </h3>
        <ul className="participation-steps">
          <li>✅ <strong>YouTube Channel</strong> Subscribe करा</li>
          <li>✅ <strong>Instagram</strong> वर Follow करा</li>
          <li>✅ <strong>WhatsApp आणि Telegram Community</strong> मध्ये सहभागी व्हा</li>
          <li>✅ हा ज्ञानाचा प्रवास तुमच्या मित्रांपर्यंत आणि कुटुंबापर्यंतही नक्की पोहोचवा!</li>
        </ul>
      </div>
    </section>
  );
}
