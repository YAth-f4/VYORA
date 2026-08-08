import React from 'react';
import * as Icons from 'lucide-react';

export default function MoodCard({ mood, isSelected, isAnySelected, onSelect }) {
  const IconComponent = Icons[mood.icon] || Icons.Sparkles;

  return (
    <button
      onClick={() => onSelect(mood)}
      style={{
        position: 'relative',
        textAlign: 'left',
        padding: '24px',
        backgroundColor: isSelected ? '#FAF6F0' : '#EDE2D2',
        border: isSelected ? `2px solid ${mood.accent}` : '1px solid rgba(116, 107, 99, 0.2)',
        borderRadius: '3px',
        cursor: 'pointer',
        transition: 'all 0.35s cubic-bezier(0.25, 1, 0.3, 1)',
        transform: isSelected ? 'translateY(-6px) scale(1.02)' : 'translateY(0) scale(1)',
        opacity: isAnySelected && !isSelected ? 0.65 : 1,
        boxShadow: isSelected ? `0 12px 28px ${mood.accent}33` : '0 4px 12px rgba(37, 35, 34, 0.04)',
        outline: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '180px',
        overflow: 'hidden'
      }}
      className="mood-card"
    >
      {/* Background Accent Bar (visible on selected/hover) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          backgroundColor: mood.accent,
          transform: isSelected ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left',
          transition: 'transform 0.3s ease'
        }}
      />

      {/* Top Header: Icon & Tagline */}
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px'
          }}
        >
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '2px',
              backgroundColor: isSelected ? mood.accent : 'rgba(116, 107, 99, 0.1)',
              color: isSelected ? '#FAF6F0' : mood.accent,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease'
            }}
          >
            <IconComponent size={24} />
          </div>

          <span
            style={{
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: mood.accent,
              opacity: isSelected ? 1 : 0.75
            }}
          >
            {mood.tagline}
          </span>
        </div>

        {/* Title */}
        <h3
          className="font-editorial"
          style={{
            fontSize: '1.4rem',
            color: '#252322',
            marginBottom: '8px',
            lineHeight: 1.2
          }}
        >
          {mood.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: '0.85rem',
            color: '#746B63',
            lineHeight: 1.45,
            margin: 0
          }}
        >
          {mood.description}
        </p>
      </div>

      {/* Bottom Selection Indicator */}
      <div
        style={{
          marginTop: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '0.75rem',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: isSelected ? mood.accent : '#746B63'
        }}
      >
        <span>{isSelected ? '✓ SELECTED MOOD' : 'EXPLORE MOOD →'}</span>
      </div>
    </button>
  );
}
