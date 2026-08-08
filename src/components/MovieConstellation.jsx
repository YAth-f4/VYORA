import React, { useState } from 'react';
import { Orbit } from 'lucide-react';

export default function MovieConstellation({ currentMovie, constellationData = [], onSelectConnectedMovie }) {
  const [hoveredNode, setHoveredNode] = useState(null);

  if (!currentMovie) return null;

  const centerNode = {
    title: currentMovie.title,
    id: currentMovie.id,
    poster: currentMovie.poster,
    year: currentMovie.year
  };

  const nodes = constellationData.map((item, idx) => {
    const angle = (idx / constellationData.length) * 2 * Math.PI - Math.PI / 2;
    const distance = 220 - (item.similarity - 0.75) * 400;
    const x = Math.cos(angle) * Math.max(110, Math.min(220, distance));
    const y = Math.sin(angle) * Math.max(110, Math.min(220, distance));

    return {
      ...item,
      x,
      y,
      angle
    };
  });

  return (
    <div
      style={{
        backgroundColor: 'var(--vyora-surface)',
        border: '1px solid var(--vyora-border-strong)',
        borderRadius: '4px',
        padding: '32px 24px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-md)'
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
            <Orbit size={20} />
          </div>
          <div>
            <h3
              className="font-editorial"
              style={{ fontSize: '1.35rem', letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--vyora-text)', margin: 0 }}
            >
              MOVIE CONSTELLATION
            </h3>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--vyora-text-muted)' }}>
              VECTOR SIMILARITY MAP
            </span>
          </div>
        </div>

        <span className="stamp-badge" style={{ fontSize: '0.65rem' }}>
          INTERACTIVE NODES
        </span>
      </div>

      {/* Interactive Constellation Graph Area */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '420px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--vyora-bg-secondary)',
          border: '1px solid var(--vyora-border)',
          borderRadius: '4px'
        }}
      >
        {/* Concentric Orbit Rings */}
        <svg
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none'
          }}
        >
          <circle cx="50%" cy="50%" r="90" fill="none" stroke="var(--vyora-border)" strokeDasharray="4 4" />
          <circle cx="50%" cy="50%" r="150" fill="none" stroke="var(--vyora-border)" strokeDasharray="4 4" />
          <circle cx="50%" cy="50%" r="200" fill="none" stroke="var(--vyora-border)" strokeDasharray="2 2" opacity="0.6" />

          {/* Connection Lines from Center to Surrounding Nodes */}
          {nodes.map(node => {
            const isHighlighted = hoveredNode?.id === node.id;
            return (
              <line
                key={node.id}
                x1="50%"
                y1="50%"
                x2={`calc(50% + ${node.x}px)`}
                y2={`calc(50% + ${node.y}px)`}
                stroke={isHighlighted ? 'var(--vyora-accent)' : 'var(--vyora-border)'}
                strokeWidth={isHighlighted ? '2.5' : '1.5'}
                strokeDasharray={isHighlighted ? 'none' : '3 3'}
                style={{ transition: 'all 0.3s ease' }}
              />
            );
          })}
        </svg>

        {/* Center Active Movie Node */}
        <div
          style={{
            position: 'absolute',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'default'
          }}
        >
          <div
            style={{
              width: '84px',
              height: '84px',
              borderRadius: '50%',
              padding: '3px',
              background: 'linear-gradient(135deg, var(--vyora-accent) 0%, var(--vyora-gold) 100%)',
              boxShadow: 'var(--vyora-glow)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid var(--vyora-bg)'
              }}
            >
              <img
                src={centerNode.poster}
                alt={centerNode.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

          <div
            style={{
              marginTop: '8px',
              backgroundColor: 'var(--vyora-surface)',
              border: '1px solid var(--vyora-border-strong)',
              color: 'var(--vyora-text)',
              padding: '4px 10px',
              borderRadius: '3px',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textAlign: 'center',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <span style={{ color: 'var(--vyora-gold)' }}>★ </span>
            {centerNode.title.toUpperCase()}
          </div>
        </div>

        {/* Surrounding Connected Movie Nodes */}
        {nodes.map(node => {
          const isHovered = hoveredNode?.id === node.id;
          return (
            <div
              key={node.id}
              onMouseEnter={() => setHoveredNode(node)}
              onMouseLeave={() => setHoveredNode(null)}
              onClick={() => onSelectConnectedMovie(node.id)}
              style={{
                position: 'absolute',
                left: `calc(50% + ${node.x}px)`,
                top: `calc(50% + ${node.y}px)`,
                transform: `translate(-50%, -50%) scale(${isHovered ? 1.15 : 1})`,
                zIndex: isHovered ? 20 : 5,
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.25, 1, 0.3, 1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              {/* Node Dot / Bubble */}
              <div
                style={{
                  width: isHovered ? '48px' : '36px',
                  height: isHovered ? '48px' : '36px',
                  borderRadius: '50%',
                  backgroundColor: isHovered ? 'var(--vyora-accent)' : 'var(--vyora-surface)',
                  color: isHovered ? '#120A18' : 'var(--vyora-text)',
                  border: isHovered ? '2px solid var(--vyora-gold)' : '2px solid var(--vyora-border-strong)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: isHovered ? 'var(--vyora-glow)' : 'var(--shadow-sm)',
                  fontSize: '0.75rem',
                  fontWeight: 'bold'
                }}
              >
                {Math.round(node.similarity * 100)}%
              </div>

              {/* Title Tag */}
              <div
                style={{
                  marginTop: '6px',
                  backgroundColor: isHovered ? 'var(--vyora-accent)' : 'var(--vyora-surface)',
                  color: isHovered ? '#120A18' : 'var(--vyora-text)',
                  padding: '3px 8px',
                  borderRadius: '2px',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.2s ease',
                  border: '1px solid var(--vyora-border)'
                }}
              >
                {node.title}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Helper Text */}
      <p style={{ fontSize: '0.8rem', color: 'var(--vyora-text-muted)', marginTop: '12px', textAlign: 'center', margin: '12px 0 0 0' }}>
        Hover over nodes to inspect similarity vectors. Click any node to navigate and recalibrate the constellation.
      </p>
    </div>
  );
}
