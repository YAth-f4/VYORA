import React from 'react';
import { Tv, PlayCircle, ExternalLink } from 'lucide-react';

export default function WatchPlatforms({ platforms = [] }) {
  if (!platforms || platforms.length === 0) return null;

  return (
    <div
      style={{
        padding: '24px',
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-medium)',
        borderRadius: '4px'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
        <Tv size={18} color="var(--accent-burnt-orange)" />
        <h4 className="font-editorial" style={{ fontSize: '1.1rem', color: 'var(--text-charcoal)', textTransform: 'uppercase', margin: 0 }}>
          WHERE CAN I WATCH IT?
        </h4>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '12px'
        }}
      >
        {platforms.map((platform, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 14px',
              backgroundColor: 'var(--bg-sand)',
              border: '1px solid var(--border-light)',
              borderRadius: '3px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <PlayCircle size={18} color="var(--accent-burnt-orange)" />
              <div>
                <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--text-charcoal)', display: 'block' }}>
                  {platform.name}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {platform.type} • {platform.quality}
                </span>
              </div>
            </div>
            <ExternalLink size={14} color="var(--text-muted)" />
          </div>
        ))}
      </div>
    </div>
  );
}
