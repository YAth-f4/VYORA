import React from 'react';
import { HelpCircle, CheckCircle2, Film, Compass, Sparkles } from 'lucide-react';

export default function RecommendationExplanation({ movie }) {
  if (!movie || !movie.recommendationReason) return null;

  const { similarityScore, vectorMatch, anchorMovies, reasons } = movie.recommendationReason;

  return (
    <div
      style={{
        backgroundColor: '#EDE2D2',
        border: '1px solid rgba(116, 107, 99, 0.28)',
        borderRadius: '3px',
        padding: '28px',
        position: 'relative'
      }}
    >
      {/* Stamp Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <HelpCircle size={18} color="#C9572C" />
          <h3
            className="font-editorial"
            style={{ fontSize: '1.25rem', letterSpacing: '0.04em', textTransform: 'uppercase', color: '#252322', margin: 0 }}
          >
            WHY WE THINK YOU'LL LIKE THIS
          </h3>
        </div>

        {/* Overall Match Badge */}
        <div
          style={{
            backgroundColor: '#C9572C',
            color: '#FFF',
            padding: '4px 10px',
            borderRadius: '2px',
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.05em'
          }}
        >
          {similarityScore}% MATCH
        </div>
      </div>

      {/* Primary Match Statement */}
      <p style={{ fontSize: '0.92rem', color: '#252322', fontStyle: 'italic', marginBottom: '20px', lineHeight: 1.5 }}>
        "{vectorMatch}"
      </p>

      {/* Key Reasons List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
        {reasons.map((reason, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <CheckCircle2 size={16} color="#C9572C" style={{ marginTop: '2px', flexShrink: 0 }} />
            <span style={{ fontSize: '0.85rem', color: '#746B63', lineHeight: 1.4 }}>
              {reason}
            </span>
          </div>
        ))}
      </div>

      {/* Anchor Movies ("Recommended because you liked...") */}
      {anchorMovies && anchorMovies.length > 0 && (
        <div
          style={{
            borderTop: '1px dashed rgba(116, 107, 99, 0.3)',
            paddingTop: '16px'
          }}
        >
          <span
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#632C32',
              display: 'block',
              marginBottom: '10px'
            }}
          >
            RECOMMENDED BECAUSE YOU LIKED
          </span>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {anchorMovies.map(anchor => (
              <span
                key={anchor}
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  backgroundColor: '#FAF6F0',
                  color: '#252322',
                  border: '1px solid rgba(116, 107, 99, 0.2)',
                  padding: '4px 10px',
                  borderRadius: '2px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Film size={12} color="#D7A84B" />
                {anchor}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
