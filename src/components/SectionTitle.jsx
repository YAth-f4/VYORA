import React from 'react';

export default function SectionTitle({ number, title, subtitle, badgeText, align = 'left' }) {
  return (
    <div
      style={{
        marginBottom: '40px',
        textAlign: align,
        position: 'relative'
      }}
    >
      {badgeText && (
        <div style={{ marginBottom: '12px' }}>
          <span className="stamp-badge">{badgeText}</span>
        </div>
      )}

      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: align === 'center' ? 'center' : 'flex-start',
          gap: '16px',
          flexWrap: 'wrap'
        }}
      >
        {number && (
          <span
            className="font-italiana"
            style={{
              fontSize: '2.5rem',
              color: '#C9572C',
              opacity: 0.85,
              lineHeight: 1
            }}
          >
            {number}
          </span>
        )}
        <h2
          className="heading-editorial"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            letterSpacing: '-0.02em',
            color: '#252322',
            textTransform: 'uppercase'
          }}
        >
          {title}
        </h2>
      </div>

      {subtitle && (
        <p
          style={{
            marginTop: '10px',
            fontSize: '1.05rem',
            color: '#746B63',
            maxWidth: '650px',
            margin: align === 'center' ? '10px auto 0 auto' : '10px 0 0 0'
          }}
        >
          {subtitle}
        </p>
      )}

      {/* Decorative Warm Accent Bar */}
      <div
        style={{
          width: '60px',
          height: '2px',
          backgroundColor: '#C9572C',
          marginTop: '16px',
          margin: align === 'center' ? '16px auto 0 auto' : '16px 0 0 0'
        }}
      />
    </div>
  );
}
