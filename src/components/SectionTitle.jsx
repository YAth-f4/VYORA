import React from 'react';

export default function SectionTitle({ title, subtitle, badgeText, align = 'left' }) {
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
        <h2
          className="heading-editorial"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            letterSpacing: '-0.01em',
            color: 'var(--vyora-text)',
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
            color: 'var(--vyora-text-muted)',
            maxWidth: '650px',
            margin: align === 'center' ? '10px auto 0 auto' : '10px 0 0 0'
          }}
        >
          {subtitle}
        </p>
      )}

      {/* Decorative Accent Bar */}
      <div
        style={{
          width: '60px',
          height: '2px',
          backgroundColor: 'var(--vyora-accent)',
          marginTop: '16px',
          margin: align === 'center' ? '16px auto 0 auto' : '16px 0 0 0',
          boxShadow: '0 0 10px var(--vyora-accent)'
        }}
      />
    </div>
  );
}
