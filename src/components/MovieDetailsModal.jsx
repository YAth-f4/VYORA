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
        backgroundColor: 'rgba(37, 35, 34, 0.75)',
        backdropFilter: 'blur(6px)',
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
          backgroundColor: '#F6F0E6',
          border: '1px solid rgba(116, 107, 99, 0.3)',
          borderRadius: '4px',
          overflowY: 'auto',
          boxShadow: '0 24px 60px rgba(37, 35, 34, 0.3)',
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
            backgroundColor: '#252322',
            color: '#FAF6F0',
            border: '1px solid #D7A84B',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(37, 35, 34, 0.3)'
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
            backgroundColor: '#252322',
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
              opacity: 0.65
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, #F6F0E6 0%, rgba(37, 35, 34, 0.4) 60%, transparent 100%)'
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
                borderRadius: '3px',
                border: '3px solid #FAF6F0',
                boxShadow: '0 12px 28px rgba(37, 35, 34, 0.25)',
                flexShrink: 0
              }}
            />

            <div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                <span className="stamp-badge-gold">{movie.year}</span>
                {movie.genres.map(g => (
                  <span key={g} className="stamp-badge">{g}</span>
                ))}
              </div>

              <h1
                className="heading-editorial"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#252322', lineHeight: 1.05 }}
              >
                {movie.title}
              </h1>

              <p style={{ fontSize: '0.95rem', color: '#632C32', fontWeight: 600, marginTop: '6px', margin: '6px 0 0 0' }}>
                Directed by {movie.director} • {movie.runtime} • Rating: <Star size={14} fill="#D7A84B" color="#D7A84B" style={{ display: 'inline' }} /> {movie.rating} / 10
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
                color: '#C9572C',
                fontFamily: 'var(--font-editorial)',
                marginBottom: '16px'
              }}
            >
              "{movie.tagline}"
            </p>
          )}

          <p style={{ fontSize: '1rem', color: '#252322', lineHeight: 1.6, marginBottom: '32px' }}>
            {movie.description}
          </p>

          {/* User Interaction Controls */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              marginBottom: '40px',
              padding: '16px',
              backgroundColor: '#EDE2D2',
              borderRadius: '3px',
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
                backgroundColor: inWatchlist ? '#632C32' : '#FAF6F0',
                color: inWatchlist ? '#FFF' : '#252322',
                border: '1px solid rgba(116, 107, 99, 0.3)',
                borderRadius: '2px',
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
                backgroundColor: watched ? '#C9572C' : '#FAF6F0',
                color: watched ? '#FFF' : '#252322',
                border: '1px solid rgba(116, 107, 99, 0.3)',
                borderRadius: '2px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              <CheckCircle size={16} />
              <span>{watched ? 'MARKED WATCHED' : 'MARK AS WATCHED'}</span>
            </button>

            {/* Quick Star Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginLeft: 'auto' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#746B63' }}>YOUR RATING:</span>
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
                    fill={userRating && userRating >= star ? '#D7A84B' : 'none'}
                    color="#D7A84B"
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
