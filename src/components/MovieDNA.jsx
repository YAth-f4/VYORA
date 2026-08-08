import React from 'react';
import { Dna, Sparkles } from 'lucide-react';

export default function MovieDNA({ movie }) {
  if (!movie || !movie.dna) return null;

  const { metrics = [], atmosphere = [] } = movie.dna;

  return (
    <div
      style={{
        backgroundColor: 'var(--vyora-surface)',
        border: '1px solid var(--vyora-border-strong)',
        borderRadius: '4px',
        padding: '28px',
        boxShadow: 'var(--shadow-sm)'
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '34px',
              height: '34px',
              backgroundColor: 'rgba(168, 117, 255, 0.15)',
              color: 'var(--vyora-accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '3px'
            }}
          >
            <Dna size={18} />
          </div>
          <div>
            <h3
              className="font-editorial"
              style={{ fontSize: '1.35rem', letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--vyora-text)', margin: 0 }}
            >
              MOVIE DNA
            </h3>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--vyora-text-muted)' }}>
              VECTOR ATTRIBUTE BREAKDOWN
            </span>
          </div>
        </div>

        <span className="stamp-badge-gold" style={{ fontSize: '0.65rem' }}>
          ALGORITHMIC PROFILE
        </span>
      </div>

      {/* Metric Progress Bars */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
        {metrics.map(metric => (
          <div key={metric.label}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 600, color: 'var(--vyora-text)', marginBottom: '6px' }}>
              <span>{metric.label}</span>
              <span style={{ color: 'var(--vyora-accent)', fontFamily: 'var(--font-display)', fontWeight: 'bold' }}>
                {metric.value}%
              </span>
            </div>

            {/* Custom Meter */}
            <div
              style={{
                width: '100%',
                height: '8px',
                backgroundColor: 'var(--vyora-bg-secondary)',
                borderRadius: '2px',
                overflow: 'hidden',
                position: 'relative',
                border: '1px solid var(--vyora-border)'
              }}
            >
              <div
                style={{
                  width: `${metric.value}%`,
                  height: '100%',
                  background: 'linear-gradient(to right, var(--vyora-accent), var(--vyora-accent-secondary))',
                  borderRadius: '2px',
                  transition: 'width 0.8s ease'
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Atmospheric Attributes Cloud */}
      <div>
        <span
          style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--vyora-text-muted)',
            display: 'block',
            marginBottom: '12px'
          }}
        >
          ATMOSPHERIC TONES & FEEL
        </span>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {atmosphere.map(tag => (
            <span
              key={tag}
              style={{
                fontSize: '0.78rem',
                fontWeight: 600,
                color: 'var(--vyora-accent-secondary)',
                backgroundColor: 'rgba(228, 107, 168, 0.1)',
                border: '1px solid rgba(228, 107, 168, 0.25)',
                padding: '4px 10px',
                borderRadius: '2px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <Sparkles size={11} color="var(--vyora-accent)" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
