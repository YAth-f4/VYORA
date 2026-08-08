import React, { useState } from 'react';
import { Compass, Sparkles, Orbit } from 'lucide-react';

export default function MovieConstellation({ currentMovie, constellationData = [], onSelectConnectedMovie }) {
  const [hoveredNode, setHoveredNode] = useState(null);

  if (!currentMovie) return null;

  // Orbit layout calculations for surrounding nodes
  // Distance from center is inversely proportional to similarity (higher similarity = closer to center)
  const centerNode = {
    title: currentMovie.title,
    id: currentMovie.id,
    poster: currentMovie.poster,
    year: currentMovie.year
  };

  const nodes = constellationData.map((item, idx) => {
    const angle = (idx / constellationData.length) * 2 * Math.PI - Math.PI / 2;
    // Distance between 120px and 220px from center based on similarity (0.7 to 0.95)
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
        backgroundColor: '#EDE2D2',
        border: '1px solid rgba(116, 107, 99, 0.28)',
        borderRadius: '3px',
        padding: '32px 24px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              backgroundColor: '#632C32',
              color: '#FAF6F0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '2px'
            }}
          >
            <Orbit size={18} />
          </div>
          <div>
            <h3
              className="font-editorial"
              style={{ fontSize: '1.3rem', letterSpacing: '0.04em', textTransform: 'uppercase', color: '#252322', margin: 0 }}
            >
              MOVIE CONSTELLATION
            </h3>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#746B63' }}>
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
          backgroundColor: '#FAF6F0',
          border: '1px solid rgba(116, 107, 99, 0.2)',
          borderRadius: '3px'
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
          {/* Radial grid circles */}
          <circle cx="50%" cy="50%" r="90" fill="none" stroke="rgba(116, 107, 99, 0.12)" strokeDasharray="4 4" />
          <circle cx="50%" cy="50%" r="150" fill="none" stroke="rgba(116, 107, 99, 0.12)" strokeDasharray="4 4" />
          <circle cx="50%" cy="50%" r="200" fill="none" stroke="rgba(116, 107, 99, 0.08)" strokeDasharray="2 2" />

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
                stroke={isHighlighted ? '#C9572C' : 'rgba(116, 107, 99, 0.3)'}
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
              background: 'linear-gradient(135deg, #C9572C 0%, #D7A84B 100%)',
              boxShadow: '0 0 24px rgba(201, 87, 44, 0.35)',
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
                border: '2px solid #FAF6F0'
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
              backgroundColor: '#252322',
              color: '#FAF6F0',
              padding: '4px 10px',
              borderRadius: '2px',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textAlign: 'center',
              boxShadow: '0 4px 12px rgba(37, 35, 34, 0.2)'
            }}
          >
            <span style={{ color: '#D7A84B' }}>★ </span>
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
                  backgroundColor: isHovered ? '#C9572C' : '#632C32',
                  color: '#FAF6F0',
                  border: isHovered ? '2px solid #D7A84B' : '2px solid #FAF6F0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: isHovered ? '0 6px 16px rgba(201, 87, 44, 0.4)' : '0 3px 8px rgba(37, 35, 34, 0.15)',
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
                  backgroundColor: isHovered ? '#C9572C' : 'rgba(37, 35, 34, 0.85)',
                  color: '#FAF6F0',
                  padding: '3px 8px',
                  borderRadius: '2px',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  boxShadow: '0 2px 6px rgba(37, 35, 34, 0.15)',
                  transition: 'all 0.2s ease'
                }}
              >
                {node.title}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Helper Text */}
      <p style={{ fontSize: '0.8rem', color: '#746B63', marginTop: '12px', textAlign: 'center', margin: '12px 0 0 0' }}>
        Hover over nodes to inspect similarity vectors. Click any node to navigate and recalibrate the constellation.
      </p>
    </div>
  );
}
