import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Explore from './pages/Explore';
import MovieDetails from './pages/MovieDetails';
import MyUniverse from './pages/MyUniverse';
import MovieDetailsModal from './components/MovieDetailsModal';
import { searchMovies, MOVIES } from './services/api';
import { Search, X, Star } from 'lucide-react';

export default function App() {
  const [activeModalMovie, setActiveModalMovie] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Handle live search in search modal
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
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#F6F0E6' }}>
        {/* Navigation Bar */}
        <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

        {/* Quick Search Overlay Modal */}
        {isSearchOpen && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 3000,
              backgroundColor: 'rgba(37, 35, 34, 0.75)',
              backdropFilter: 'blur(4px)',
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
                backgroundColor: '#FAF6F0',
                border: '1px solid rgba(116, 107, 99, 0.3)',
                borderRadius: '4px',
                padding: '24px',
                boxShadow: '0 20px 50px rgba(37, 35, 34, 0.25)'
              }}
              className="animate-fade-in"
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexGrow: 1 }}>
                  <Search size={20} color="#C9572C" />
                  <input
                    type="text"
                    placeholder="Search movie title, director, or genre..."
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
                      color: '#252322'
                    }}
                  />
                </div>
                <button
                  onClick={() => setIsSearchOpen(false)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#746B63' }}
                >
                  <X size={20} />
                </button>
              </div>

              <div style={{ borderTop: '1px solid rgba(116, 107, 99, 0.2)', paddingTop: '16px' }}>
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
                          backgroundColor: '#EDE2D2',
                          borderRadius: '2px',
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
                          <span style={{ fontSize: '1rem', fontWeight: 'bold', color: '#252322', display: 'block' }}>
                            {movie.title} ({movie.year})
                          </span>
                          <span style={{ fontSize: '0.78rem', color: '#746B63' }}>
                            {movie.director} • {movie.genres.join(', ')}
                          </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#D7A84B' }}>
                          <Star size={14} fill="#D7A84B" />
                          <span style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>{movie.rating}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : searchQuery ? (
                  <p style={{ fontSize: '0.9rem', color: '#746B63', margin: 0, textAlign: 'center', padding: '20px' }}>
                    No films found matching "{searchQuery}".
                  </p>
                ) : (
                  <p style={{ fontSize: '0.85rem', color: '#746B63', margin: 0, textAlign: 'center', padding: '12px' }}>
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
            <Route path="/" element={<Home onSelectMovie={handleSelectMovie} />} />
            <Route path="/explore" element={<Explore onSelectMovie={handleSelectMovie} />} />
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

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}
