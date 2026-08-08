import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import MovieCard from './MovieCard';
import { SlidersHorizontal, Sparkles } from 'lucide-react';

export default function MovieGrid({ movies, selectedMood, onSelectMovie }) {
  const [activeGenreFilter, setActiveGenreFilter] = useState('All');

  const genres = ['All', 'Sci-Fi', 'Drama', 'Comedy', 'Mystery', 'Adventure', 'Action'];

  // Filter movies based on active genre tab & selected mood
  const filteredMovies = movies.filter(movie => {
    const matchesGenre = activeGenreFilter === 'All' || movie.genres.includes(activeGenreFilter);
    const matchesMood = !selectedMood || movie.moods.includes(selectedMood.id);
    return matchesGenre && matchesMood;
  });

  return (
    <section
      id="movie-discovery"
      style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '40px 24px 80px 24px'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          mdDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '32px'
        }}
      >
        <SectionTitle
          number="02"
          badgeText="CURATED SELECTION"
          title="DISCOVER SOMETHING"
          subtitle={
            selectedMood
              ? `Showing recommendations tailored for "${selectedMood.title}"`
              : "Hand-picked cinematic masterworks decoded with vector attribute maps."
          }
        />

        {/* Genre Filter Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            marginTop: '8px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginRight: '8px', color: '#746B63', fontSize: '0.8rem', fontWeight: 600 }}>
            <SlidersHorizontal size={14} />
            <span>GENRE:</span>
          </div>

          {genres.map(genre => {
            const isActive = activeGenreFilter === genre;
            return (
              <button
                key={genre}
                onClick={() => setActiveGenreFilter(genre)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '2px',
                  border: isActive ? '1px solid #C9572C' : '1px solid rgba(116, 107, 99, 0.2)',
                  backgroundColor: isActive ? '#C9572C' : '#EDE2D2',
                  color: isActive ? '#FFF' : '#252322',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {genre}
              </button>
            );
          })}
        </div>
      </div>

      {/* Movie Grid */}
      {filteredMovies.length > 0 ? (
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
        <div
          style={{
            padding: '60px 24px',
            textAlign: 'center',
            backgroundColor: '#EDE2D2',
            border: '1px dashed rgba(116, 107, 99, 0.3)',
            borderRadius: '3px'
          }}
        >
          <Sparkles size={32} color="#C9572C" style={{ marginBottom: '12px' }} />
          <h3 className="font-editorial" style={{ fontSize: '1.4rem', color: '#252322', marginBottom: '8px' }}>
            No movies match this filter combination.
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#746B63' }}>
            Try selecting a different genre or clearing your active mood filter.
          </p>
        </div>
      )}
    </section>
  );
}
