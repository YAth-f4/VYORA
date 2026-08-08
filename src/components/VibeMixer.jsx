import React, { useState } from 'react';
import { SlidersHorizontal, Sparkles, RefreshCw } from 'lucide-react';

export default function VibeMixer({ onMixVibe }) {
  const [dimensions, setDimensions] = useState({
    mindBending: 75,
    emotional: 60,
    action: 40,
    comedy: 50,
    dark: 30,
    romantic: 20,
    adventure: 70
  });

  const dimensionConfigs = [
    { key: 'mindBending', label: 'Mind-Bending', color: '#C9572C' },
    { key: 'emotional', label: 'Emotional', color: '#632C32' },
    { key: 'action', label: 'Action', color: '#E9896A' },
    { key: 'comedy', label: 'Comedy', color: '#D7A84B' },
    { key: 'dark', label: 'Dark', color: '#632C32' },
    { key: 'romantic', label: 'Romantic', color: '#E9896A' },
    { key: 'adventure', label: 'Adventure', color: '#C9572C' }
  ];

  const handleSliderChange = (key, value) => {
    setDimensions(prev => ({ ...prev, [key]: Number(value) }));
  };

  const handleReset = () => {
    setDimensions({
      mindBending: 50,
      emotional: 50,
      action: 50,
      comedy: 50,
      dark: 50,
      romantic: 50,
      adventure: 50
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onMixVibe) {
      onMixVibe(dimensions);
    }
  };

  return (
    <div
      style={{
        padding: '32px',
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-medium)',
        borderRadius: '4px',
        boxShadow: 'var(--shadow-md)',
        marginBottom: '40px'
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <SlidersHorizontal size={18} color="var(--accent-burnt-orange)" />
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-burnt-orange)', fontWeight: 'bold' }}>
              OPTIONAL TASTE TUNER
            </span>
          </div>
          <h3 className="font-editorial" style={{ fontSize: '1.6rem', color: 'var(--text-charcoal)', margin: 0 }}>
            VIBE MIXER
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: '4px 0 0 0' }}>
            Fine-tune sensory and thematic sliders to formulate your exact recommendation query.
          </p>
        </div>

        <button
          type="button"
          onClick={handleReset}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 12px',
            backgroundColor: 'transparent',
            border: '1px solid var(--border-medium)',
            borderRadius: '2px',
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            cursor: 'pointer'
          }}
        >
          <RefreshCw size={14} />
          <span>Reset Sliders</span>
        </button>
      </div>

      {/* Sliders Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          marginBottom: '28px'
        }}
      >
        {dimensionConfigs.map(dim => {
          const val = dimensions[dim.key];
          return (
            <div
              key={dim.key}
              style={{
                padding: '14px 18px',
                backgroundColor: 'var(--bg-sand)',
                border: '1px solid var(--border-light)',
                borderRadius: '3px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-charcoal)' }}>
                  {dim.label}
                </span>
                <span className="font-editorial" style={{ fontSize: '1rem', fontWeight: 'bold', color: 'var(--accent-burnt-orange)' }}>
                  {val}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={val}
                onChange={e => handleSliderChange(dim.key, e.target.value)}
                style={{
                  width: '100%',
                  accentColor: dim.color,
                  cursor: 'pointer'
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Submit Button */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button
          type="button"
          onClick={handleSubmit}
          className="btn-cinematic-primary"
          style={{ width: '100%', maxWidth: '320px' }}
        >
          <Sparkles size={18} />
          <span>BUILD MY VIBE</span>
        </button>
      </div>
    </div>
  );
}
