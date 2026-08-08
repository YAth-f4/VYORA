import React from 'react';
import { Orbit, Calendar, ArrowRight, TrendingUp } from 'lucide-react';

export default function VibeEvolution({ evolutionData = [] }) {
  if (!evolutionData || evolutionData.length === 0) return null;

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
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <TrendingUp size={18} color="var(--accent-burnt-orange)" />
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-burnt-orange)', fontWeight: 'bold' }}>
              CONTINUOUS TASTE LEARNING
            </span>
          </div>
          <h3 className="font-editorial" style={{ fontSize: '1.6rem', color: 'var(--text-charcoal)', margin: 0 }}>
            YOUR VIBE EVOLUTION
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: '4px 0 0 0' }}>
            Track how your movie taste vectors shift across time based on your watch history and ratings.
          </p>
        </div>

        <div className="stamp-badge-gold">
          BEHAVIORAL ADAPTATION ACTIVE
        </div>
      </div>

      {/* Timeline Steps */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${evolutionData.length}, 1fr)`,
          gap: '16px',
          position: 'relative'
        }}
      >
        {evolutionData.map((item, idx) => (
          <div
            key={idx}
            style={{
              padding: '20px',
              backgroundColor: 'var(--bg-sand)',
              border: '1px solid var(--border-medium)',
              borderTop: `4px solid ${item.color || 'var(--accent-burnt-orange)'}`,
              borderRadius: '3px',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>
                {item.month}
              </span>
              <Calendar size={14} color="var(--text-muted)" />
            </div>

            <h4 className="font-editorial" style={{ fontSize: '1.25rem', color: 'var(--text-charcoal)', marginBottom: '4px' }}>
              {item.vibe}
            </h4>

            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: item.color || 'var(--accent-burnt-orange)' }}>
              Primary Vector: {item.genre}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
