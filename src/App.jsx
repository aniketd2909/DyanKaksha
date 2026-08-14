import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FounderSection from './components/FounderSection';
import AudienceCategorySection from './components/AudienceCategorySection';
import SocialChannelsSection from './components/SocialChannelsSection';
import GradeSelector from './components/GradeSelector';
import SubjectFilter from './components/SubjectFilter';
import VideoGrid from './components/VideoGrid';
import VideoModal from './components/VideoModal';
import Footer from './components/Footer';
import { VIDEOS_DATA } from './data/videosData';

export default function App() {
  // Theme state
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('dk360_theme') || 'dark';
  });

  // Filter states
  const [selectedGrade, setSelectedGrade] = useState('all');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [contentType, setContentType] = useState('all'); // 'all' | 'video' | 'short'
  const [sortBy, setSortBy] = useState('newest');

  // Helper to change grade and automatically reset subject to 'all'
  const handleGradeChange = (gradeId) => {
    setSelectedGrade(gradeId);
    setSelectedSubject('all');
  };

  // User persistence states
  const [watchedIds, setWatchedIds] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('dk360_watched') || '[]');
    } catch {
      return [];
    }
  });

  const [userNotes, setUserNotes] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('dk360_notes') || '{}');
    } catch {
      return {};
    }
  });

  // Active Video Modal
  const [activeModalVideo, setActiveModalVideo] = useState(null);

  // Apply Theme attribute to HTML root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('dk360_theme', theme);
  }, [theme]);

  // Persist Watched
  useEffect(() => {
    localStorage.setItem('dk360_watched', JSON.stringify(watchedIds));
  }, [watchedIds]);

  // Persist Notes
  useEffect(() => {
    localStorage.setItem('dk360_notes', JSON.stringify(userNotes));
  }, [userNotes]);

  // Toggle Dark/Light Theme
  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Toggle Watched
  const handleToggleWatched = (videoId) => {
    setWatchedIds(prev => 
      prev.includes(videoId) 
        ? prev.filter(id => id !== videoId)
        : [...prev, videoId]
    );
  };

  // Save Note for Video
  const handleSaveNote = (videoId, noteContent) => {
    setUserNotes(prev => ({
      ...prev,
      [videoId]: noteContent
    }));
  };

  // Reset Filters
  const handleResetFilters = () => {
    setSelectedGrade('all');
    setSelectedSubject('all');
    setContentType('all');
  };

  // Grade counter helper
  const getGradeCount = (gradeId) => {
    if (gradeId === 'all') return VIDEOS_DATA.length;
    return VIDEOS_DATA.filter(v => v.grade === gradeId || v.secondaryGrade === gradeId).length;
  };

  // Featured spotlight video
  const featuredVideo = useMemo(() => {
    return VIDEOS_DATA.find(v => v.isFeatured) || VIDEOS_DATA[0];
  }, []);

  // Filtered & Sorted Videos List
  const filteredVideos = useMemo(() => {
    return VIDEOS_DATA.filter(video => {
      // Grade filter
      if (selectedGrade !== 'all' && video.grade !== selectedGrade && video.secondaryGrade !== selectedGrade) {
        return false;
      }

      // Subject filter
      if (selectedSubject !== 'all' && video.subject !== selectedSubject) {
        return false;
      }

      // Content Format filter (all, video, short)
      if (contentType === 'video' && video.isShort) {
        return false;
      }
      if (contentType === 'short' && !video.isShort) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  }, [selectedGrade, selectedSubject, contentType, sortBy]);

  return (
    <div>
      {/* Top Header Navbar */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        watchedCount={watchedIds.length}
      />

      <main className="app-container">
        {/* Centered Hero Banner */}
        <Hero 
          onPlayFeatured={(video) => setActiveModalVideo(video)}
          featuredVideo={featuredVideo}
        />

        {/* Target Audience Categories */}
        <AudienceCategorySection 
          onSelectCategory={handleGradeChange} 
        />

        {/* Grade Selector Tabs (Class 1 to 10 + Competitive Exams + Parents/Teachers) */}
        <GradeSelector
          selectedGrade={selectedGrade}
          setSelectedGrade={handleGradeChange}
          getGradeCount={getGradeCount}
        />

        {/* Dynamic Class-Specific Subject & Format Filters */}
        <SubjectFilter
          selectedGrade={selectedGrade}
          selectedSubject={selectedSubject}
          setSelectedSubject={setSelectedSubject}
          contentType={contentType}
          setContentType={setContentType}
        />

        {/* Video Grid List */}
        <VideoGrid
          videos={filteredVideos}
          onSelectVideo={(video) => setActiveModalVideo(video)}
          watchedIds={watchedIds}
          selectedGrade={selectedGrade}
          selectedSubject={selectedSubject}
          sortBy={sortBy}
          setSortBy={setSortBy}
          onResetFilters={handleResetFilters}
        />

        {/* Founder Namdev Sir (N D) Spotlight Card */}
        <FounderSection />

        {/* 4 Social Platforms Section */}
        <SocialChannelsSection />
      </main>

      {/* Footer */}
      <Footer 
        onSelectGrade={handleGradeChange}
      />

      {/* Popup Video Player Modal */}
      {activeModalVideo && (
        <VideoModal
          video={activeModalVideo}
          onClose={() => setActiveModalVideo(null)}
          isWatched={watchedIds.includes(activeModalVideo.id)}
          onToggleWatched={handleToggleWatched}
          savedNotes={userNotes[activeModalVideo.id]}
          onSaveNote={handleSaveNote}
        />
      )}
    </div>
  );
}
