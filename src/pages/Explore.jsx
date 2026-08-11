import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import MovieCard from '../components/MovieCard';
import { getDiscoverMovies } from '../services/api';
import {
  Search,
  LayoutGrid,
  List,
  Star,
} from 'lucide-react';

export default function Explore({ onSelectMovie }) {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedSort, setSelectedSort] = useState('rating');
  const [minRating, setMinRating] = useState(7.0);
  const [viewMode, setViewMode] = useState('grid');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const genres = [
    'All',
    'Sci-Fi',
    'Drama',
    'Comedy',
    'Mystery',
    'Adventure',
    'Action',
    'Animation',
  ];

  useEffect(() => {
    async function loadMovies() {
      try {
        setLoading(true);
        setError('');

        const data = await getDiscoverMovies({
          genre: selectedGenre,
          search: searchQuery,
        });

        setMovies(data);
      } catch (err) {
        console.error('Failed to load movies:', err);
        setError('Unable to load movies. Please make sure the backend is running.');
        setMovies([]);
      } finally {
        setLoading(false);
      }
    }

    const timer = setTimeout(loadMovies, 250);

    return () => clearTimeout(timer);
  }, [selectedGenre, searchQuery]);

  const filteredMovies = movies
    .filter((movie) => movie.rating >= minRating)
    .sort((a, b) => {
      if (selectedSort === 'rating') {
        return b.rating - a.rating;
      }

      if (selectedSort === 'match') {
        return (
          (b.vibeMatchScore || 0) -
          (a.vibeMatchScore || 0)
        );
      }

      if (selectedSort === 'year') {
        return b.year - a.year;
      }

      if (selectedSort === 'title') {
        return a.title.localeCompare(b.title);
      }

      return 0;
    });

  return (
    <main
      style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '40px 24px 80px 24px',
      }}
    >
      <SectionTitle
        badgeText="FILM ARCHIVE VAULT"
        title="EXPLORE THE CATALOG"
        subtitle="Filter and search through curated films with full vector DNA analytics and critical scores."
      />

      {/* CONTROL BAR */}
      <div
        style={{
          padding: '24px',
          backgroundColor: 'var(--vyora-surface)',
          border: '1px solid var(--vyora-border-strong)',
          borderRadius: '4px',
          marginBottom: '36px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        {/* SEARCH + VIEW */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          {/* SEARCH */}
          <div
            style={{
              position: 'relative',
              flexGrow: 1,
              maxWidth: '540px',
            }}
          >
            <Search
              size={18}
              color="var(--vyora-accent)"
              style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
              }}
            />

            <input
              type="text"
              placeholder="Search by title, director, or genre..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 14px 12px 42px',
                backgroundColor: 'var(--vyora-bg-secondary)',
                border: '1px solid var(--vyora-border)',
                borderRadius: '3px',
                fontSize: '0.95rem',
                color: 'var(--vyora-text)',
                outline: 'none',
              }}
            />
          </div>

          {/* VIEW MODE */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'var(--vyora-bg-secondary)',
              padding: '4px',
              borderRadius: '3px',
              border: '1px solid var(--vyora-border)',
            }}
          >
            <button
              onClick={() => setViewMode('grid')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                border: 'none',
                borderRadius: '2px',
                backgroundColor:
                  viewMode === 'grid'
                    ? 'var(--vyora-accent)'
                    : 'transparent',
                color:
                  viewMode === 'grid'
                    ? '#120A18'
                    : 'var(--vyora-text)',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.82rem',
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
                backgroundColor:
                  viewMode === 'list'
                    ? 'var(--vyora-accent)'
                    : 'transparent',
                color:
                  viewMode === 'list'
                    ? '#120A18'
                    : 'var(--vyora-text)',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.82rem',
              }}
            >
              <List size={15} />
              <span>LIST VAULT</span>
            </button>
          </div>
        </div>

        {/* FILTER ROW */}
        <div
          style={{
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            paddingTop: '16px',
            borderTop:
              '1px dashed var(--vyora-border)',
          }}
        >
          {/* GENRES */}
          <div
            style={{
              display: 'flex',
              gap: '8px',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--vyora-text-muted)',
                fontWeight: 600,
              }}
            >
              GENRE:
            </span>

            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                style={{
                  padding: '5px 12px',
                  borderRadius: '3px',
                  fontSize: '0.8rem',
                  fontWeight:
                    selectedGenre === genre
                      ? 'bold'
                      : '500',
                  border:
                    selectedGenre === genre
                      ? '1px solid var(--vyora-accent)'
                      : '1px solid var(--vyora-border)',
                  backgroundColor:
                    selectedGenre === genre
                      ? 'var(--vyora-accent)'
                      : 'var(--vyora-bg-secondary)',
                  color:
                    selectedGenre === genre
                      ? '#120A18'
                      : 'var(--vyora-text)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {genre}
              </button>
            ))}
          </div>

          {/* RATING */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <span
              style={{
                fontSize: '0.8rem',
                color: 'var(--vyora-text-muted)',
              }}
            >
              MIN RATING:{' '}
              <strong
                style={{
                  color: 'var(--vyora-accent)',
                }}
              >
                {minRating.toFixed(1)}
              </strong>
            </span>

            <input
              type="range"
              min="6.0"
              max="9.0"
              step="0.1"
              value={minRating}
              onChange={(e) =>
                setMinRating(
                  parseFloat(e.target.value)
                )
              }
              style={{
                accentColor: 'var(--vyora-accent)',
                cursor: 'pointer',
              }}
            />
          </div>
        </div>
      </div>

      {/* SORT */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '24px',
        }}
      >
        <span
          style={{
            color: 'var(--vyora-text-muted)',
            fontSize: '0.8rem',
          }}
        >
          SORT:
        </span>

        {[
          ['rating', 'TOP RATED'],
          ['match', 'BEST MATCH'],
          ['year', 'NEWEST'],
          ['title', 'TITLE'],
        ].map(([value, label]) => (
          <button
            key={value}
            onClick={() => setSelectedSort(value)}
            style={{
              padding: '6px 10px',
              border: '1px solid var(--vyora-border)',
              background:
                selectedSort === value
                  ? 'var(--vyora-accent)'
                  : 'var(--vyora-bg-secondary)',
              color:
                selectedSort === value
                  ? '#120A18'
                  : 'var(--vyora-text)',
              cursor: 'pointer',
              fontSize: '0.72rem',
              fontWeight: 600,
              borderRadius: '3px',
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* RESULT COUNT */}
      <div
        style={{
          marginBottom: '20px',
          color: 'var(--vyora-text-muted)',
          fontSize: '0.85rem',
        }}
      >
        {loading
          ? 'LOADING MOVIES...'
          : `SHOWING ${filteredMovies.length} FILMS MATCHING CRITERIA`}
      </div>

      {/* ERROR */}
      {error && (
        <div
          style={{
            padding: '20px',
            marginBottom: '24px',
            border: '1px solid var(--vyora-accent)',
            backgroundColor: 'var(--vyora-surface)',
            color: 'var(--vyora-text)',
          }}
        >
          {error}
        </div>
      )}

      {/* LOADING */}
      {loading && !error && (
        <div
          style={{
            padding: '60px 20px',
            textAlign: 'center',
            color: 'var(--vyora-text-muted)',
          }}
        >
          Finding your films...
        </div>
      )}

      {/* NO RESULTS */}
      {!loading &&
        !error &&
        filteredMovies.length === 0 && (
          <div
            style={{
              padding: '60px 20px',
              textAlign: 'center',
              border: '1px dashed var(--vyora-border)',
              backgroundColor: 'var(--vyora-surface)',
            }}
          >
            <h3
              className="font-editorial"
              style={{
                color: 'var(--vyora-text)',
                marginBottom: '8px',
              }}
            >
              No films found
            </h3>

            <p
              style={{
                color: 'var(--vyora-text-muted)',
                margin: 0,
              }}
            >
              Try another search, genre, or lower the
              minimum rating.
            </p>
          </div>
        )}

      {/* GRID */}
      {!loading &&
        viewMode === 'grid' &&
        filteredMovies.length > 0 && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fill, minmax(240px, 1fr))',
              gap: '24px',
            }}
          >
            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onSelectMovie={onSelectMovie}
              />
            ))}
          </div>
        )}

      {/* LIST */}
      {!loading &&
        viewMode === 'list' &&
        filteredMovies.length > 0 && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            {filteredMovies.map((movie) => (
              <div
                key={movie.id}
                onClick={() =>
                  onSelectMovie(movie)
                }
                style={{
                  display: 'flex',
                  gap: '20px',
                  padding: '16px',
                  backgroundColor:
                    'var(--vyora-surface)',
                  border:
                    '1px solid var(--vyora-border)',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                <img
                  src={movie.poster}
                  alt={movie.title}
                  style={{
                    width: '70px',
                    height: '100px',
                    objectFit: 'cover',
                    borderRadius: '3px',
                  }}
                />

                <div style={{ flexGrow: 1 }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent:
                        'space-between',
                      alignItems: 'flex-start',
                    }}
                  >
                    <h3
                      className="font-editorial"
                      style={{
                        fontSize: '1.4rem',
                        color: 'var(--vyora-text)',
                        margin: '0 0 4px 0',
                      }}
                    >
                      {movie.title} ({movie.year})
                    </h3>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        color: 'var(--vyora-gold)',
                      }}
                    >
                      <Star
                        size={14}
                        fill="var(--vyora-gold)"
                      />

                      <span
                        style={{
                          fontSize: '0.9rem',
                          fontWeight: 'bold',
                        }}
                      >
                        {movie.rating}
                      </span>
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--vyora-accent)',
                      margin: '0 0 8px 0',
                    }}
                  >
                    {movie.director} • {movie.runtime} •{' '}
                    {movie.genres?.join(', ')}
                  </p>

                  <p
                    style={{
                      fontSize: '0.88rem',
                      color:
                        'var(--vyora-text-muted)',
                      margin: 0,
                      lineHeight: 1.4,
                    }}
                  >
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