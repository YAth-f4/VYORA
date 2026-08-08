import React from 'react';
import { Users, Film, ArrowRight, Sparkles } from 'lucide-react';
import MovieCard from './MovieCard';

export default function SharedVibes({ sharedData, movies = [], onSelectMovie }) {
  if (!sharedData) return null;

  const { userName, vibeMatch, sharedCount, sharedGenres, bothLove, couldIntroduce } = sharedData;

  const bothLoveMovies = movies.filter(m => bothLove?.includes(m.id));
  const couldIntroduceMovies = movies.filter(m => couldIntroduce?.includes(m.id));

  return (
    <div
      style={{
        padding: '32px',
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-medium)',
        borderRadius: '4px',
        marginBottom: '40px'
      }}
    >
      {/* Header Banner */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <Users size={18} color="var(--accent-burnt-orange)" />
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-burnt-orange)', fontWeight: 'bold' }}>
              SHARED TASTE RESONANCE
            </span>
          </div>
          <h3 className="font-editorial" style={{ fontSize: '1.8rem', color: 'var(--text-charcoal)', margin: 0 }}>
            YOU + {userName.toUpperCase()}
          </h3>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ padding: '8px 16px', backgroundColor: 'var(--bg-sand)', border: '1px solid var(--border-medium)', borderRadius: '3px' }}>
            <span className="font-editorial" style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--accent-burnt-orange)', display: 'block', lineHeight: 1 }}>
              {vibeMatch}%
            </span>
            <span style={{ fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
              VIBE MATCH
            </span>
          </div>
          <div style={{ padding: '8px 16px', backgroundColor: 'var(--bg-sand)', border: '1px solid var(--border-medium)', borderRadius: '3px' }}>
            <span className="font-editorial" style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--accent-deep-wine)', display: 'block', lineHeight: 1 }}>
              {sharedCount}
            </span>
            <span style={{ fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
              SHARED MOVIES
            </span>
          </div>
        </div>
      </div>

      {/* Shared Genres */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '28px', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600 }}>
          Shared Genres:
        </span>
        {sharedGenres?.map(g => (
          <span key={g} className="stamp-badge-wine" style={{ padding: '3px 8px' }}>
            {g}
          </span>
        ))}
      </div>

      {/* Section 1: Movies You Both Love */}
      <div style={{ marginBottom: '36px' }}>
        <h4 className="font-editorial" style={{ fontSize: '1.25rem', color: 'var(--text-charcoal)', marginBottom: '16px' }}>
          MOVIES YOU BOTH LOVE
        </h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
          {bothLoveMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} onSelect={onSelectMovie} compact />
          ))}
        </div>
      </div>

      {/* Section 2: Vibe Exchange - Movies You Could Introduce */}
      <div style={{ paddingTop: '24px', borderTop: '1px dashed var(--border-medium)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div>
            <span className="stamp-badge-gold" style={{ marginBottom: '4px', display: 'inline-block' }}>
              VIBE EXCHANGE RECOMMENDATIONS
            </span>
            <h4 className="font-editorial" style={{ fontSize: '1.25rem', color: 'var(--text-charcoal)', margin: 0 }}>
              MOVIES YOU COULD INTRODUCE TO EACH OTHER
            </h4>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
          {couldIntroduceMovies.map(movie => (
            <div key={movie.id} style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '8px', right: '8px', zIndex: 10 }}>
                <span className="stamp-badge" style={{ backgroundColor: 'var(--bg-card)', fontSize: '0.65rem' }}>
                  DISCOVER THEIR VIBE
                </span>
              </div>
              <MovieCard movie={movie} onSelect={onSelectMovie} compact />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
