import React, { useState } from 'react';
import MovieDNA from './MovieDNA';
import RecommendationExplanation from './RecommendationExplanation';
import MovieConstellation from './MovieConstellation';
import { X, Star, Bookmark, CheckCircle, Share2, Film, Clock, User } from 'lucide-react';

export default function MovieDetailsModal({ movie, onClose, onSelectConnectedMovie }) {
  const [userRating, setUserRating] = useState(null);
  const [inWatchlist, setInWatchlist] = useState(false);
  const [watched, setWatched] = useState(false);

  if (!movie) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        backgroundColor: 'rgba(18, 10, 24, 0.85)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        overflowY: 'auto'
      }}
      className="animate-fade-in"
      onClick={onClose}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '960px',
          maxHeight: '90vh',
          backgroundColor: 'var(--vyora-bg)',
          border: '1px solid var(--vyora-border-strong)',
          borderRadius: '4px',
          overflowY: 'auto',
          boxShadow: 'var(--shadow-lg)',
          position: 'relative'
        }}
      >
        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            zIndex: 30,
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'var(--vyora-surface)',
            color: 'var(--vyora-text)',
            border: '1px solid var(--vyora-gold)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <X size={20} />
        </button>

        {/* Hero Backdrop Header */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '320px',
            backgroundColor: 'var(--vyora-bg-secondary)',
            overflow: 'hidden'
          }}
        >
          <img
            src={movie.backdrop || movie.poster}
            alt={movie.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.6
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, var(--vyora-bg) 0%, transparent 80%)'
            }}
          />

          {/* Poster & Header Info Overlay */}
          <div
            style={{
              position: 'absolute',
              bottom: '24px',
              left: '32px',
              right: '32px',
              display: 'flex',
              gap: '24px',
              alignItems: 'flex-end'
            }}
          >
            {/* Poster thumbnail */}
            <img
              src={movie.poster}
              alt={movie.title}
              style={{
                width: '130px',
                height: '190px',
                objectFit: 'cover',
                borderRadius: '4px',
                border: '3px solid var(--vyora-surface)',
                boxShadow: 'var(--shadow-md)',
                flexShrink: 0
              }}
            />

            <div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
                <span className="stamp-badge-gold">{movie.year}</span>
                {movie.genres.map(g => (
                  <span key={g} className="stamp-badge">{g}</span>
                ))}
              </div>

              <h1
                className="heading-editorial"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--vyora-text)', lineHeight: 1.05 }}
              >
                {movie.title}
              </h1>

              <p style={{ fontSize: '0.95rem', color: 'var(--vyora-accent-secondary)', fontWeight: 600, marginTop: '6px', margin: '6px 0 0 0' }}>
                Directed by {movie.director} • {movie.runtime} • Rating: <Star size={14} fill="var(--vyora-gold)" color="var(--vyora-gold)" style={{ display: 'inline' }} /> {movie.rating} / 10
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body Content */}
        <div style={{ padding: '32px' }}>
          {/* Tagline & Synopsis */}
          {movie.tagline && (
            <p
              style={{
                fontSize: '1.15rem',
                fontStyle: 'italic',
                color: 'var(--vyora-accent)',
                fontFamily: 'var(--font-display)',
                marginBottom: '16px'
              }}
            >
              "{movie.tagline}"
            </p>
          )}

          <p style={{ fontSize: '1rem', color: 'var(--vyora-text)', lineHeight: 1.6, marginBottom: '32px' }}>
            {movie.description}
          </p>

          {/* User Interaction Controls */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              marginBottom: '40px',
              padding: '16px',
              backgroundColor: 'var(--vyora-surface)',
              borderRadius: '4px',
              border: '1px solid var(--vyora-border)',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}
          >
            <button
              onClick={() => setInWatchlist(!inWatchlist)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                backgroundColor: inWatchlist ? 'var(--vyora-accent-secondary)' : 'var(--vyora-bg-secondary)',
                color: inWatchlist ? '#FFF' : 'var(--vyora-text)',
                border: '1px solid var(--vyora-border-strong)',
                borderRadius: '3px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              <Bookmark size={16} fill={inWatchlist ? '#FFF' : 'none'} />
              <span>{inWatchlist ? 'IN WATCHLIST' : 'ADD TO WATCHLIST'}</span>
            </button>

            <button
              onClick={() => setWatched(!watched)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                backgroundColor: watched ? 'var(--vyora-accent)' : 'var(--vyora-bg-secondary)',
                color: watched ? '#120A18' : 'var(--vyora-text)',
                border: '1px solid var(--vyora-border-strong)',
                borderRadius: '3px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              <CheckCircle size={16} />
              <span>{watched ? 'MARKED WATCHED' : 'MARK AS WATCHED'}</span>
            </button>

            {/* Quick Star Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginLeft: 'auto' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--vyora-text-muted)' }}>YOUR RATING:</span>
              {[1, 2, 3, 4, 5].map(star => (
                <button
                  key={star}
                  onClick={() => setUserRating(star)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '2px'
                  }}
                >
                  <Star
                    size={20}
                    fill={userRating && userRating >= star ? 'var(--vyora-gold)' : 'none'}
                    color="var(--vyora-gold)"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Deep Breakdown Grid (DNA + Why You'll Like This) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '28px', marginBottom: '32px' }}>
            <div style={{ gridColumn: 'span 6' }}>
              <MovieDNA movie={movie} />
            </div>

            <div style={{ gridColumn: 'span 6' }}>
              <RecommendationExplanation movie={movie} />
            </div>
          </div>

          {/* Movie Constellation Interactive Similarity Section */}
          <MovieConstellation
            currentMovie={movie}
            constellationData={movie.constellation}
            onSelectConnectedMovie={onSelectConnectedMovie}
          />
        </div>
      </div>
    </div>
  );
}
