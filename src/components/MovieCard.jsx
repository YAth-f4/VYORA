import React, { useState } from 'react';
import { Star, Eye, Sparkles, ArrowUpRight } from 'lucide-react';

export default function MovieCard({ movie, onSelectMovie }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelectMovie(movie)}
      style={{
        position: 'relative',
        backgroundColor: '#FAF6F0',
        border: '1px solid rgba(116, 107, 99, 0.22)',
        borderRadius: '3px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.4s cubic-bezier(0.25, 1, 0.3, 1)',
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 16px 36px rgba(37, 35, 34, 0.12)' : '0 4px 14px rgba(37, 35, 34, 0.04)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      {/* Top Poster Image Container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: '140%', // 1:1.4 aspect ratio for cinematic poster
          overflow: 'hidden',
          backgroundColor: '#EDE2D2'
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
            transform: isHovered ? 'scale(1.08)' : 'scale(1)'
          }}
        />

        {/* Gradient Overlay on Hover */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: isHovered
              ? 'linear-gradient(to top, rgba(37, 35, 34, 0.95) 0%, rgba(37, 35, 34, 0.4) 60%, transparent 100%)'
              : 'linear-gradient(to top, rgba(37, 35, 34, 0.6) 0%, transparent 50%)',
            transition: 'opacity 0.4s ease',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            color: '#FAF6F0'
          }}
        >
          {/* Top Badges */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span
              style={{
                backgroundColor: '#632C32',
                color: '#FAF6F0',
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '3px 8px',
                borderRadius: '2px'
              }}
            >
              {movie.year}
            </span>

            {/* Rating Tag */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                backgroundColor: 'rgba(37, 35, 34, 0.8)',
                backdropFilter: 'blur(4px)',
                padding: '3px 8px',
                borderRadius: '2px',
                border: '1px solid rgba(215, 168, 75, 0.4)'
              }}
            >
              <Star size={13} fill="#D7A84B" color="#D7A84B" />
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#D7A84B' }}>
                {movie.rating}
              </span>
            </div>
          </div>

          {/* Quick Explore Action on Hover */}
          <div
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTop: '1px solid rgba(250, 246, 240, 0.2)',
              paddingTop: '12px'
            }}
          >
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#D7A84B' }}>
              DECODE DNA & DNA REASON
            </span>
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: '#C9572C',
                color: '#FFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ArrowUpRight size={16} />
            </div>
          </div>
        </div>
      </div>

      {/* Card Info Section */}
      <div
        style={{
          padding: '18px 16px',
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
            {movie.genres.map(g => (
              <span
                key={g}
                style={{
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: '#C9572C',
                  backgroundColor: 'rgba(201, 87, 44, 0.08)',
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
            className="font-editorial"
            style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              color: '#252322',
              lineHeight: 1.25,
              marginBottom: '6px'
            }}
          >
            {movie.title}
          </h3>

          {/* Director & Runtime */}
          <p style={{ fontSize: '0.8rem', color: '#746B63', margin: 0 }}>
            {movie.director} • {movie.runtime}
          </p>
        </div>

        {/* Tagline / Brief Excerpt on Hover */}
        {movie.tagline && (
          <p
            style={{
              fontSize: '0.78rem',
              fontStyle: 'italic',
              color: '#632C32',
              marginTop: '10px',
              borderTop: '1px dashed rgba(116, 107, 99, 0.2)',
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
