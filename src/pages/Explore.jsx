import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import MovieCard from '../components/MovieCard';
import MovieDNA from '../components/MovieDNA';
import { getMovies } from '../services/api';
import { Search, LayoutGrid, List, SlidersHorizontal, Star, ArrowUpRight } from 'lucide-react';

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
        number="02"
        badgeText="FILM ARCHIVE VAULT"
        title="EXPLORE THE CATALOG"
        subtitle="Filter and search through curated films with full vector DNA analytics and critical scores."
      />

      {/* Control Bar: Search Input & Controls */}
      <div
        style={{
          padding: '24px',
          backgroundColor: '#EDE2D2',
          border: '1px solid rgba(116, 107, 99, 0.25)',
          borderRadius: '3px',
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
              color="#C9572C"
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
                backgroundColor: '#FAF6F0',
                border: '1px solid rgba(116, 107, 99, 0.3)',
                borderRadius: '2px',
                fontSize: '0.95rem',
                color: '#252322',
                outline: 'none'
              }}
            />
          </div>

          {/* View Mode Toggle Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#FAF6F0', padding: '4px', borderRadius: '2px', border: '1px solid rgba(116, 107, 99, 0.2)' }}>
            <button
              onClick={() => setViewMode('grid')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                border: 'none',
                borderRadius: '2px',
                backgroundColor: viewMode === 'grid' ? '#C9572C' : 'transparent',
                color: viewMode === 'grid' ? '#FFF' : '#252322',
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
                backgroundColor: viewMode === 'list' ? '#C9572C' : 'transparent',
                color: viewMode === 'list' ? '#FFF' : '#252322',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.82rem'
              }}
            >
              <List size={15} />
              <span>MAGAZINE LIST</span>
            </button>
          </div>
        </div>

        {/* Bottom Row: Genre Filter & Rating Slider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap', paddingTop: '16px', borderTop: '1px dashed rgba(116, 107, 99, 0.25)' }}>
          {/* Genre Pills */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#746B63', marginRight: '6px' }}>GENRE:</span>
            {genres.map(g => (
              <button
                key={g}
                onClick={() => setSelectedGenre(g)}
                style={{
                  padding: '5px 12px',
                  borderRadius: '2px',
                  border: selectedGenre === g ? '1px solid #C9572C' : '1px solid rgba(116, 107, 99, 0.2)',
                  backgroundColor: selectedGenre === g ? '#C9572C' : '#FAF6F0',
                  color: selectedGenre === g ? '#FFF' : '#252322',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {g}
              </button>
            ))}
          </div>

          {/* Rating Slider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginLeft: 'auto' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#746B63' }}>
              MIN RATING: <strong style={{ color: '#C9572C' }}>{minRating}</strong>
            </span>
            <input
              type="range"
              min="7.0"
              max="9.0"
              step="0.1"
              value={minRating}
              onChange={e => setMinRating(parseFloat(e.target.value))}
              style={{ accentColor: '#C9572C', cursor: 'pointer' }}
            />
          </div>
        </div>
      </div>

      {/* Results Count Header */}
      <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '0.9rem', color: '#746B63', fontWeight: 600 }}>
          SHOWING {filteredMovies.length} FILMS MATCHING CRITERIA
        </span>
      </div>

      {/* Render View Modes */}
      {viewMode === 'grid' ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '28px'
          }}
        >
          {filteredMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} onSelectMovie={onSelectMovie} />
          ))}
        </div>
      ) : (
        /* Editorial Magazine List View */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {filteredMovies.map(movie => (
            <div
              key={movie.id}
              onClick={() => onSelectMovie(movie)}
              style={{
                backgroundColor: '#FAF6F0',
                border: '1px solid rgba(116, 107, 99, 0.22)',
                borderRadius: '3px',
                padding: '24px',
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: '24px',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#C9572C')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(116, 107, 99, 0.22)')}
            >
              {/* Poster Thumbnail */}
              <div style={{ gridColumn: 'span 2' }}>
                <img
                  src={movie.poster}
                  alt={movie.title}
                  style={{
                    width: '100%',
                    height: '140px',
                    objectFit: 'cover',
                    borderRadius: '2px',
                    border: '1px solid rgba(116, 107, 99, 0.2)'
                  }}
                />
              </div>

              {/* Title & Info */}
              <div style={{ gridColumn: 'span 6' }}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
                  <span className="stamp-badge-gold" style={{ fontSize: '0.65rem' }}>{movie.year}</span>
                  {movie.genres.map(g => (
                    <span key={g} className="stamp-badge" style={{ fontSize: '0.65rem' }}>{g}</span>
                  ))}
                </div>

                <h3 className="font-editorial" style={{ fontSize: '1.5rem', color: '#252322', marginBottom: '4px' }}>
                  {movie.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#632C32', fontWeight: 600, marginBottom: '8px' }}>
                  Directed by {movie.director} • {movie.runtime}
                </p>
                <p style={{ fontSize: '0.85rem', color: '#746B63', margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {movie.description}
                </p>
              </div>

              {/* Rating & Action */}
              <div style={{ gridColumn: 'span 4', textAlign: 'right' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: '#EDE2D2', padding: '6px 12px', borderRadius: '2px', marginBottom: '12px' }}>
                  <Star size={16} fill="#D7A84B" color="#D7A84B" />
                  <span style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#252322', fontFamily: 'var(--font-editorial)' }}>
                    {movie.rating}
                  </span>
                </div>

                <div>
                  <button className="btn-cinematic-ghost">
                    <span>DECODE MOVIE DNA</span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
