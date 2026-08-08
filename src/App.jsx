import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import VibeLibraryPage from './pages/VibeLibraryPage';
import VibeCirclePage from './pages/VibeCirclePage';
import PublicProfilePage from './pages/PublicProfilePage';
import MovieDetails from './pages/MovieDetails';
import MyUniverse from './pages/MyUniverse';
import MovieDetailsModal from './components/MovieDetailsModal';
import AuthPromptModal from './components/AuthPromptModal';
import { MOVIES } from './services/api';
import { Search, X, Star } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('vyora_theme') || 'night';
  });

  const [activeModalMovie, setActiveModalMovie] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Apply theme to document attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('vyora_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'day' ? 'night' : 'day'));
  };

  // Live search in modal
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    const q = searchQuery.toLowerCase();
    const results = MOVIES.filter(m =>
      m.title.toLowerCase().includes(q) ||
      m.director.toLowerCase().includes(q) ||
      m.genres.some(g => g.toLowerCase().includes(q))
    );
    setSearchResults(results);
  }, [searchQuery]);

  const handleSelectMovie = (movie) => {
    setActiveModalMovie(movie);
    setIsSearchOpen(false);
  };

  const handleSelectConnectedMovie = (movieId) => {
    const connected = MOVIES.find(m => m.id === movieId);
    if (connected) {
      setActiveModalMovie(connected);
    }
  };

  return (
    <Router>
      <div
        className={theme === 'night' ? 'theme-night' : 'theme-day'}
        style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-main)', color: 'var(--text-charcoal)', transition: 'background-color 0.4s ease, color 0.4s ease' }}
      >
        {/* Navigation Bar */}
        <Navbar
          onOpenSearch={() => setIsSearchOpen(true)}
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        {/* Quick Search Overlay Modal */}
        {isSearchOpen && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 3000,
              backgroundColor: 'rgba(24, 13, 26, 0.75)',
              backdropFilter: 'blur(6px)',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              paddingTop: '80px'
            }}
            onClick={() => setIsSearchOpen(false)}
          >
            <div
              onClick={e => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '640px',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-medium)',
                borderRadius: '4px',
                padding: '24px',
                boxShadow: 'var(--shadow-lg)'
              }}
              className="animate-fade-in"
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexGrow: 1 }}>
                  <Search size={20} color="var(--accent-burnt-orange)" />
                  <input
                    type="text"
                    placeholder="Search your next obsession..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    autoFocus
                    style={{
                      width: '100%',
                      border: 'none',
                      outline: 'none',
                      backgroundColor: 'transparent',
                      fontSize: '1.1rem',
                      fontFamily: 'var(--font-sans)',
                      color: 'var(--text-charcoal)'
                    }}
                  />
                </div>
                <button
                  onClick={() => setIsSearchOpen(false)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
                >
                  <X size={20} />
                </button>
              </div>

              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '16px' }}>
                {searchResults.length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '360px', overflowY: 'auto' }}>
                    {searchResults.map(movie => (
                      <div
                        key={movie.id}
                        onClick={() => handleSelectMovie(movie)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '14px',
                          padding: '10px',
                          backgroundColor: 'var(--bg-sand)',
                          borderRadius: '3px',
                          cursor: 'pointer',
                          transition: 'background 0.2s ease'
                        }}
                      >
                        <img
                          src={movie.poster}
                          alt={movie.title}
                          style={{ width: '40px', height: '56px', objectFit: 'cover', borderRadius: '2px' }}
                        />
                        <div style={{ flexGrow: 1 }}>
                          <span style={{ fontSize: '1rem', fontWeight: 'bold', color: 'var(--text-charcoal)', display: 'block' }}>
                            {movie.title} ({movie.year})
                          </span>
                          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                            {movie.director} • {movie.genres?.join(', ')}
                          </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--highlight-gold)' }}>
                          <Star size={14} fill="var(--highlight-gold)" />
                          <span style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>{movie.rating}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : searchQuery ? (
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, textAlign: 'center', padding: '20px' }}>
                    No films found matching "{searchQuery}".
                  </p>
                ) : (
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, textAlign: 'center', padding: '12px' }}>
                    Type a query to search vector film archives.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Router Views */}
        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<LandingPage onSignIn={() => setIsAuthModalOpen(true)} />} />
            <Route path="/movie-home" element={<Home onSelectMovie={handleSelectMovie} />} />
            <Route path="/library" element={<VibeLibraryPage onSelectMovie={handleSelectMovie} />} />
            <Route path="/circle" element={<VibeCirclePage onSelectMovie={handleSelectMovie} />} />
            <Route path="/user/:id" element={<PublicProfilePage onSelectMovie={handleSelectMovie} />} />
            <Route path="/movie/:id" element={<MovieDetails onSelectMovie={handleSelectMovie} />} />
            <Route path="/universe" element={<MyUniverse onSelectMovie={handleSelectMovie} />} />
          </Routes>
        </div>

        {/* Global Movie Details Modal */}
        {activeModalMovie && (
          <MovieDetailsModal
            movie={activeModalMovie}
            onClose={() => setActiveModalMovie(null)}
            onSelectConnectedMovie={handleSelectConnectedMovie}
          />
        )}

        {/* Auth Prompt Modal */}
        <AuthPromptModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
        />

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}
