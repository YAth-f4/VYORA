import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import MovieCard from '../components/MovieCard';
import MovieDNA from '../components/MovieDNA';
import { getMovies } from '../services/api';
import { Search, LayoutGrid, List, Star, ArrowUpRight } from 'lucide-react';

export default function Explore({ onSelectMovie }) {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedSort, setSelectedSort] = useState('rating');
  const [minRating, setMinRating] = useState(7.0);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'

  useEffect(() => {
    async function loadMovies() {
      const data = await getMovies({ sortBy: selectedSort });
      setMovies(data);
    }
    loadMovies();
  }, [selectedSort]);

  const genres = ['All', 'Sci-Fi', 'Drama', 'Comedy', 'Mystery', 'Adventure', 'Action', 'Animation'];

  const filteredMovies = movies.filter(movie => {
    const matchesSearch =
      searchQuery === '' ||
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.director.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.genres.some(g => g.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesGenre = selectedGenre === 'All' || movie.genres.includes(selectedGenre);
    const matchesRating = movie.rating >= minRating;

    return matchesSearch && matchesGenre && matchesRating;
  });

  return (
    <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px 80px 24px' }}>
      <SectionTitle
        badgeText="FILM ARCHIVE VAULT"
        title="EXPLORE THE CATALOG"
        subtitle="Filter and search through curated films with full vector DNA analytics and critical scores."
      />

      {/* Control Bar: Search Input & Controls */}
      <div
        style={{
          padding: '24px',
          backgroundColor: 'var(--vyora-surface)',
          border: '1px solid var(--vyora-border-strong)',
          borderRadius: '4px',
          marginBottom: '36px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}
      >
        {/* Top Row: Search Input + View Mode Switch */}
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {/* Search Box */}
          <div
            style={{
              position: 'relative',
              flexGrow: 1,
              maxWidth: '540px'
            }}
          >
            <Search
              size={18}
              color="var(--vyora-accent)"
              style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }}
            />
            <input
              type="text"
              placeholder="Search by title, director, or genre..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 14px 12px 42px',
                backgroundColor: 'var(--vyora-bg-secondary)',
                border: '1px solid var(--vyora-border)',
                borderRadius: '3px',
                fontSize: '0.95rem',
                color: 'var(--vyora-text)',
                outline: 'none'
              }}
            />
          </div>

          {/* View Mode Toggle Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: 'var(--vyora-bg-secondary)', padding: '4px', borderRadius: '3px', border: '1px solid var(--vyora-border)' }}>
            <button
              onClick={() => setViewMode('grid')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                border: 'none',
                borderRadius: '2px',
                backgroundColor: viewMode === 'grid' ? 'var(--vyora-accent)' : 'transparent',
                color: viewMode === 'grid' ? '#120A18' : 'var(--vyora-text)',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.82rem'
              }}
            >
              <LayoutGrid size={15} />
              <span>POSTER WALL</span>
            </button>

            <button
              onClick={() => setViewMode('list')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                border: 'none',
                borderRadius: '2px',
                backgroundColor: viewMode === 'list' ? 'var(--vyora-accent)' : 'transparent',
                color: viewMode === 'list' ? '#120A18' : 'var(--vyora-text)',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.82rem'
              }}
            >
              <List size={15} />
              <span>LIST VAULT</span>
            </button>
          </div>
        </div>

        {/* Filter Controls Row */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', paddingTop: '16px', borderTop: '1px dashed var(--vyora-border)' }}>
          {/* Genre Filter Pills */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--vyora-text-muted)', fontWeight: 600 }}>
              GENRE:
            </span>
            {genres.map(g => (
              <button
                key={g}
                onClick={() => setSelectedGenre(g)}
                style={{
                  padding: '5px 12px',
                  borderRadius: '3px',
                  fontSize: '0.8rem',
                  fontWeight: selectedGenre === g ? 'bold' : '500',
                  border: selectedGenre === g ? '1px solid var(--vyora-accent)' : '1px solid var(--vyora-border)',
                  backgroundColor: selectedGenre === g ? 'var(--vyora-accent)' : 'var(--vyora-bg-secondary)',
                  color: selectedGenre === g ? '#120A18' : 'var(--vyora-text)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {g}
              </button>
            ))}
          </div>

          {/* Rating Slider Filter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--vyora-text-muted)' }}>
              MIN RATING: <strong style={{ color: 'var(--vyora-accent)' }}>{minRating}</strong>
            </span>
            <input
              type="range"
              min="6.0"
              max="9.0"
              step="0.1"
              value={minRating}
              onChange={e => setMinRating(parseFloat(e.target.value))}
              style={{ accentColor: 'var(--vyora-accent)', cursor: 'pointer' }}
            />
          </div>
        </div>
      </div>

      {/* Grid or List Display */}
      {viewMode === 'grid' ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '24px'
          }}
        >
          {filteredMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} onSelectMovie={onSelectMovie} />
          ))}
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {filteredMovies.map(movie => (
            <div
              key={movie.id}
              onClick={() => onSelectMovie(movie)}
              style={{
                display: 'flex',
                gap: '20px',
                padding: '16px',
                backgroundColor: 'var(--vyora-surface)',
                border: '1px solid var(--vyora-border)',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'border-color 0.2s ease'
              }}
            >
              <img
                src={movie.poster}
                alt={movie.title}
                style={{ width: '70px', height: '100px', objectFit: 'cover', borderRadius: '3px' }}
              />
              <div style={{ flexGrow: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h3 className="font-editorial" style={{ fontSize: '1.4rem', color: 'var(--vyora-text)', margin: '0 0 4px 0' }}>
                    {movie.title} ({movie.year})
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--vyora-gold)' }}>
                    <Star size={14} fill="var(--vyora-gold)" />
                    <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{movie.rating}</span>
                  </div>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--vyora-accent)', margin: '0 0 8px 0' }}>
                  {movie.director} • {movie.runtime} • {movie.genres.join(', ')}
                </p>
                <p style={{ fontSize: '0.88rem', color: 'var(--vyora-text-muted)', margin: 0, lineHeight: 1.4 }}>
                  {movie.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
