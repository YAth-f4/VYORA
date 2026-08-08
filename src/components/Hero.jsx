import React from 'react';
import { Sparkles, Dices, ArrowRight, Star, Film, Flame } from 'lucide-react';

export default function Hero({ onDiscoverClick, onSurpriseClick }) {
  return (
    <header
      style={{
        position: 'relative',
        padding: '60px 24px 100px 24px',
        maxWidth: '1280px',
        margin: '0 auto',
        overflow: 'hidden'
      }}
    >
      {/* Decorative Background Elements */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          right: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(215, 168, 75, 0.15) 0%, rgba(246, 240, 230, 0) 70%)',
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '-50px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201, 87, 44, 0.08) 0%, rgba(246, 240, 230, 0) 70%)',
          pointerEvents: 'none'
        }}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '32px',
          alignItems: 'center'
        }}
      >
        {/* Left Editorial Content (Cols 1-7) */}
        <div style={{ gridColumn: 'span 7' }} className="hero-content">
          {/* Issue stamp */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '24px',
              padding: '6px 14px',
              backgroundColor: '#EDE2D2',
              border: '1px solid rgba(116, 107, 99, 0.25)',
              borderRadius: '2px'
            }}
          >
            <span
              className="stamp-badge"
              style={{ padding: '2px 6px', fontSize: '0.65rem' }}
            >
              ISSUE NO. 04
            </span>
            <span
              style={{
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#746B63',
                fontWeight: 600
              }}
            >
              INTELLIGENT RECOMMENDATION ENGINE
            </span>
          </div>

          {/* Dramatic Typography Headline */}
          <h1
            className="heading-editorial"
            style={{
              fontSize: 'clamp(2.8rem, 6vw, 5.2rem)',
              lineHeight: 0.98,
              letterSpacing: '-0.03em',
              color: '#252322',
              marginBottom: '24px',
              textTransform: 'uppercase'
            }}
          >
            YOUR NEXT<br />
            <span
              style={{
                color: '#C9572C',
                fontStyle: 'italic',
                fontWeight: 400
              }}
            >
              MOVIE
            </span><br />
            IS WAITING.
          </h1>

          {/* Supporting Text */}
          <p
            style={{
              fontSize: '1.2rem',
              color: '#746B63',
              maxWidth: '520px',
              lineHeight: 1.6,
              marginBottom: '36px'
            }}
          >
            Tell us what you're in the mood for.<br />We'll find something worth watching.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              flexWrap: 'wrap'
            }}
          >
            <button
              onClick={onDiscoverClick}
              className="btn-cinematic-primary"
            >
              <Sparkles size={18} />
              <span>DISCOVER SOMETHING</span>
            </button>

            <button
              onClick={onSurpriseClick}
              className="btn-cinematic-secondary"
            >
              <Dices size={18} color="#C9572C" />
              <span>Surprise Me</span>
            </button>
          </div>

          {/* Micro Editorial Metadata */}
          <div
            style={{
              marginTop: '48px',
              display: 'flex',
              alignItems: 'center',
              gap: '32px',
              paddingTop: '24px',
              borderTop: '1px dashed rgba(116, 107, 99, 0.25)'
            }}
          >
            <div>
              <span style={{ display: 'block', fontSize: '1.4rem', fontWeight: 'bold', color: '#632C32', fontFamily: 'var(--font-editorial)' }}>
                12,000+
              </span>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#746B63' }}>
                Curated Films
              </span>
            </div>
            <div style={{ width: '1px', height: '28px', backgroundColor: 'rgba(116, 107, 99, 0.25)' }} />
            <div>
              <span style={{ display: 'block', fontSize: '1.4rem', fontWeight: 'bold', color: '#C9572C', fontFamily: 'var(--font-editorial)' }}>
                98.4%
              </span>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#746B63' }}>
                Vector Match Accuracy
              </span>
            </div>
            <div style={{ width: '1px', height: '28px', backgroundColor: 'rgba(116, 107, 99, 0.25)' }} />
            <div>
              <span style={{ display: 'block', fontSize: '1.4rem', fontWeight: 'bold', color: '#D7A84B', fontFamily: 'var(--font-editorial)' }}>
                8 Moods
              </span>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#746B63' }}>
                Interactive Engine
              </span>
            </div>
          </div>
        </div>

        {/* Right Editorial Visual Composition (Cols 8-12) */}
        <div style={{ gridColumn: 'span 5', position: 'relative' }} className="hero-visual">
          <div
            style={{
              position: 'relative',
              width: '100%',
              minHeight: '440px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {/* Main Featured Poster Card */}
            <div
              style={{
                position: 'relative',
                width: '280px',
                height: '400px',
                borderRadius: '4px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(37, 35, 34, 0.2)',
                transform: 'rotate(-3deg) translateY(-10px)',
                border: '4px solid #FAF6F0',
                transition: 'transform 0.5s var(--ease-cinematic)'
              }}
              className="animate-float"
            >
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
                alt="Interstellar Hero Movie Poster"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(37, 35, 34, 0.85) 0%, transparent 60%)',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  color: '#FAF6F0'
                }}
              >
                <span className="stamp-badge-gold" style={{ alignSelf: 'flex-start', marginBottom: '8px' }}>
                  FEATURED PICK
                </span>
                <h3 className="font-editorial" style={{ fontSize: '1.4rem', color: '#FAF6F0' }}>
                  INTERSTELLAR
                </h3>
                <p style={{ fontSize: '0.8rem', color: '#D7A84B', margin: 0 }}>
                  CHRISTOPHER NOLAN • 2014
                </p>
              </div>
            </div>

            {/* Overlapping Secondary Poster Fragment */}
            <div
              style={{
                position: 'absolute',
                top: '40px',
                right: '0',
                width: '180px',
                height: '240px',
                borderRadius: '3px',
                overflow: 'hidden',
                boxShadow: '0 15px 30px rgba(37, 35, 34, 0.15)',
                transform: 'rotate(6deg)',
                border: '3px solid #FAF6F0',
                opacity: 0.95
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600"
                alt="Arrival Movie Poster Fragment"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Ticket Stub Overlay */}
            <div
              className="ticket-stub"
              style={{
                position: 'absolute',
                bottom: '10px',
                left: '-20px',
                padding: '12px 20px',
                boxShadow: '0 10px 25px rgba(37, 35, 34, 0.12)',
                transform: 'rotate(-2deg)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Star size={16} fill="#D7A84B" color="#D7A84B" />
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#252322' }}>
                    CRITICS' SELECTION
                  </span>
                  <span style={{ display: 'block', fontSize: '0.7rem', color: '#746B63' }}>
                    Score: 9.4 / 10 Vector Rating
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative Film Strip Accent */}
            <div
              style={{
                position: 'absolute',
                top: '-15px',
                left: '20px',
                display: 'flex',
                gap: '6px'
              }}
            >
              {[1, 2, 3, 4].map(i => (
                <div
                  key={i}
                  style={{
                    width: '12px',
                    height: '8px',
                    backgroundColor: '#632C32',
                    borderRadius: '1px',
                    opacity: 0.6
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
