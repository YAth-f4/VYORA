import React from 'react';
import { Dna, Sparkles, Sliders } from 'lucide-react';

export default function MovieDNA({ movie }) {
  if (!movie || !movie.dna) return null;

  const { metrics = [], atmosphere = [] } = movie.dna;

  return (
    <div
      style={{
        backgroundColor: '#FAF6F0',
        border: '1px solid rgba(116, 107, 99, 0.22)',
        borderRadius: '3px',
        padding: '28px',
        boxShadow: '0 6px 20px rgba(37, 35, 34, 0.05)'
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              backgroundColor: 'rgba(201, 87, 44, 0.1)',
              color: '#C9572C',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '2px'
            }}
          >
            <Dna size={18} />
          </div>
          <div>
            <h3
              className="font-editorial"
              style={{ fontSize: '1.3rem', letterSpacing: '0.04em', textTransform: 'uppercase', color: '#252322', margin: 0 }}
            >
              MOVIE DNA
            </h3>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#746B63' }}>
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
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 600, color: '#252322', marginBottom: '6px' }}>
              <span>{metric.label}</span>
              <span style={{ color: '#C9572C', fontFamily: 'var(--font-editorial)', fontWeight: 'bold' }}>
                {metric.value}%
              </span>
            </div>

            {/* Custom Bar Meter */}
            <div
              style={{
                width: '100%',
                height: '8px',
                backgroundColor: '#EDE2D2',
                borderRadius: '2px',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              <div
                style={{
                  width: `${metric.value}%`,
                  height: '100%',
                  background: 'linear-gradient(to right, #C9572C, #E9896A)',
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
            color: '#746B63',
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
                color: '#632C32',
                backgroundColor: 'rgba(99, 44, 50, 0.08)',
                border: '1px solid rgba(99, 44, 50, 0.18)',
                padding: '4px 10px',
                borderRadius: '2px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <Sparkles size={11} color="#C9572C" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
