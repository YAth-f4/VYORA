import React, { useState } from 'react';
import { Star, ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function MovieCard({ movie, onSelectMovie, compact = false }) {
  const [isHovered, setIsHovered] = useState(false);
  const matchScore = movie.vibeMatchScore || movie.recommendationReason?.similarityScore || 88;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelectMovie && onSelectMovie(movie)}
      style={{
        position: 'relative',
        backgroundColor: 'var(--vyora-surface)',
        border: '1px solid var(--vyora-border-strong)',
        borderRadius: '4px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.35s cubic-bezier(0.25, 1, 0.3, 1)',
        transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: isHovered ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      {/* Top Poster Image Container - Dominates Visual Hierarchy */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: compact ? '125%' : '145%',
          overflow: 'hidden',
          backgroundColor: 'var(--vyora-bg-secondary)'
        }}
      >
        <img
          src={movie.poster}
          alt={`${movie.title} Movie Poster`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.3, 1)',
            transform: isHovered ? 'scale(1.06)' : 'scale(1)'
          }}
        />

        {/* Gradient Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: isHovered
              ? 'linear-gradient(to top, rgba(18, 10, 24, 0.95) 0%, rgba(18, 10, 24, 0.4) 60%, transparent 100%)'
              : 'linear-gradient(to top, rgba(18, 10, 24, 0.7) 0%, transparent 50%)',
            transition: 'opacity 0.4s ease',
            padding: '12px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            color: 'var(--vyora-text)'
          }}
        >
          {/* Top Badges: Vibe Match % + Rating */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <span
              style={{
                backgroundColor: 'var(--vyora-accent)',
                color: '#120A18',
                fontSize: '0.68rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '3px 8px',
                borderRadius: '3px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                boxShadow: 'var(--vyora-glow)'
              }}
            >
              <ShieldCheck size={12} />
              {matchScore}% MATCH ✦
            </span>

            {/* Rating Tag */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                backgroundColor: 'rgba(18, 10, 24, 0.85)',
                backdropFilter: 'blur(4px)',
                padding: '3px 8px',
                borderRadius: '3px',
                border: '1px solid rgba(231, 196, 106, 0.4)'
              }}
            >
              <Star size={13} fill="var(--vyora-gold)" color="var(--vyora-gold)" />
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--vyora-gold)' }}>
                {movie.rating}
              </span>
            </div>
          </div>

          {/* Quick Explore Action on Hover */}
          <div
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'translateY(0)' : 'translateY(8px)',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTop: '1px solid rgba(246, 240, 230, 0.15)',
              paddingTop: '10px'
            }}
          >
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--vyora-gold)', fontWeight: 'bold' }}>
              ✦ VYORA'S TAKE & DNA
            </span>
            <div
              style={{
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                backgroundColor: 'var(--vyora-accent)',
                color: '#120A18',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ArrowUpRight size={15} />
            </div>
          </div>
        </div>
      </div>

      {/* Card Info Section */}
      <div
        style={{
          padding: '16px 14px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flexGrow: 1
        }}
      >
        <div>
          {/* Genre Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '6px',
              marginBottom: '8px'
            }}
          >
            {movie.genres?.map(g => (
              <span
                key={g}
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: 'var(--vyora-accent)',
                  backgroundColor: 'rgba(168, 117, 255, 0.1)',
                  padding: '2px 6px',
                  borderRadius: '2px'
                }}
              >
                {g}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3
            className="font-display"
            style={{
              fontSize: compact ? '1.1rem' : '1.3rem',
              fontWeight: 400,
              color: 'var(--vyora-text)',
              lineHeight: 1.15,
              marginBottom: '6px'
            }}
          >
            {movie.title} <span style={{ fontSize: '0.85em', color: 'var(--vyora-text-muted)' }}>({movie.year})</span>
          </h3>

          {/* Director & Runtime */}
          <p style={{ fontSize: '0.8rem', color: 'var(--vyora-text-muted)', margin: 0 }}>
            {movie.director} • {movie.runtime}
          </p>
        </div>

        {/* Tagline */}
        {!compact && movie.tagline && (
          <p
            style={{
              fontSize: '0.78rem',
              fontStyle: 'italic',
              color: 'var(--vyora-accent-secondary)',
              borderTop: '1px dashed var(--vyora-border)',
              paddingTop: '8px',
              margin: '10px 0 0 0'
            }}
          >
            "{movie.tagline}"
          </p>
        )}
      </div>
    </div>
  );
}
