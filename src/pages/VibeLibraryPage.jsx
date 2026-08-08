import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import MovieGrid from '../components/MovieGrid';
import { getMovies, SUB_VIBES } from '../services/api';
import { Compass, Filter, Sparkles, Search } from 'lucide-react';

export default function VibeLibraryPage({ onSelectMovie }) {
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('Sci-Fi');
  const [selectedSubVibe, setSelectedSubVibe] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('rating');

  const mainGenres = ['Horror', 'Sci-Fi', 'Romance', 'Thriller', 'Comedy', 'Drama', 'Mystery', 'Action', 'Animation'];

  useEffect(() => {
    async function load() {
      const data = await getMovies({ genre: selectedGenre, subVibe: selectedSubVibe, search: searchQuery, sortBy });
      setMovies(data);
    }
    load();
  }, [selectedGenre, selectedSubVibe, searchQuery, sortBy]);

  const currentSubVibes = SUB_VIBES[selectedGenre] || [];

  return (
    <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px 80px 24px' }}>
      <SectionTitle
        badgeText="ARCHIVAL TAXONOMY"
        title="VIBE LIBRARY"
        subtitle="Deep exploration of films organized by major genres and nuanced sub-vibe micro-categories."
      />

      {/* Main Genre Tabs */}
      <div
        style={{
          display: 'flex',
          gap: '10px',
          overflowX: 'auto',
          paddingBottom: '16px',
          marginBottom: '24px'
        }}
      >
        {mainGenres.map(genre => {
          const isActive = selectedGenre === genre;
          return (
            <button
              key={genre}
              onClick={() => {
                setSelectedGenre(genre);
                setSelectedSubVibe('All');
              }}
              style={{
                padding: '10px 20px',
                backgroundColor: isActive ? 'var(--accent-burnt-orange)' : 'var(--bg-card)',
                color: isActive ? '#FFF' : 'var(--text-charcoal)',
                border: '1px solid var(--border-medium)',
                borderRadius: '3px',
                fontWeight: isActive ? 'bold' : '500',
                fontSize: '0.9rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease'
              }}
            >
              {genre.toUpperCase()}
            </button>
          );
        })}
      </div>

      {/* Sub-Vibe Micro Filters */}
      {currentSubVibes.length > 0 && (
        <div
          style={{
            padding: '16px 20px',
            backgroundColor: 'var(--bg-sand)',
            border: '1px solid var(--border-medium)',
            borderRadius: '4px',
            marginBottom: '32px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            flexWrap: 'wrap'
          }}
        >
          <span style={{ fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            SUB-VIBE:
          </span>

          <button
            onClick={() => setSelectedSubVibe('All')}
            style={{
              padding: '4px 12px',
              backgroundColor: selectedSubVibe === 'All' ? 'var(--accent-deep-wine)' : 'transparent',
              color: selectedSubVibe === 'All' ? '#FFF' : 'var(--text-charcoal)',
              border: '1px solid var(--border-medium)',
              borderRadius: '2px',
              fontSize: '0.8rem',
              cursor: 'pointer'
            }}
          >
            All {selectedGenre}
          </button>

          {currentSubVibes.map(sub => {
            const isActive = selectedSubVibe === sub;
            return (
              <button
                key={sub}
                onClick={() => setSelectedSubVibe(sub)}
                style={{
                  padding: '4px 12px',
                  backgroundColor: isActive ? 'var(--accent-deep-wine)' : 'var(--bg-card)',
                  color: isActive ? '#FFF' : 'var(--text-charcoal)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '2px',
                  fontSize: '0.8rem',
                  cursor: 'pointer'
                }}
              >
                {sub}
              </button>
            );
          })}
        </div>
      )}

      {/* Search & Sort Controls Bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '32px',
          flexWrap: 'wrap'
        }}
      >
        <div style={{ position: 'relative', flexGrow: 1, maxWidth: '440px' }}>
          <Search size={16} color="var(--accent-burnt-orange)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            placeholder={`Search within ${selectedGenre}...`}
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 12px 10px 36px',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-medium)',
              borderRadius: '2px',
              fontSize: '0.9rem',
              color: 'var(--text-charcoal)',
              outline: 'none'
            }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Sort by:</span>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            style={{
              padding: '8px 14px',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-medium)',
              borderRadius: '2px',
              fontSize: '0.85rem',
              color: 'var(--text-charcoal)'
            }}
          >
            <option value="rating">Highest Rating</option>
            <option value="match">Highest Vibe Match</option>
            <option value="year">Release Year</option>
            <option value="title">Title A-Z</option>
          </select>
        </div>
      </div>

      {/* Results Grid */}
      <MovieGrid
        movies={movies}
        onSelectMovie={onSelectMovie}
      />
    </main>
  );
}
