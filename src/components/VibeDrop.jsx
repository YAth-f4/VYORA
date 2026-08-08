import React, { useState } from 'react';
import { Dices, Sparkles, Star, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function VibeDrop({ movies = [], onSelectMovie }) {
  const [isDropping, setIsDropping] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [droppedMovie, setDroppedMovie] = useState(null);

  const handleDropMyVibe = () => {
    if (!movies || movies.length === 0) return;
    setIsDropping(true);
    setDroppedMovie(null);

    let count = 0;
    const maxCycles = 18;
    const interval = setInterval(() => {
      setCurrentIndex(Math.floor(Math.random() * movies.length));
      count++;

      if (count >= maxCycles) {
        clearInterval(interval);
        const finalPick = movies[Math.floor(Math.random() * movies.length)];
        setDroppedMovie(finalPick);
        setIsDropping(false);

        // Confetti effect
        try {
          confetti({
            particleCount: 40,
            spread: 60,
            origin: { y: 0.7 },
            colors: ['#C9572C', '#632C32', '#D7A84B']
          });
        } catch (err) {
          // Fallback if confetti fails
        }
      }
    }, 120);
  };

  const previewMovie = movies[currentIndex] || movies[0];

  return (
    <section
      id="vibe-drop"
      style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '60px 24px',
        borderTop: '1px dashed var(--border-medium)',
        borderBottom: '1px dashed var(--border-medium)',
        marginBottom: '60px'
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '32px',
          alignItems: 'center'
        }}
      >
        {/* Left Side: Info */}
        <div style={{ gridColumn: 'span 6' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 10px', backgroundColor: 'var(--bg-sand)', borderRadius: '2px', marginBottom: '16px' }}>
            <Dices size={16} color="var(--accent-burnt-orange)" />
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-burnt-orange)', fontWeight: 'bold' }}>
              SERENDIPITY DISCOVERY
            </span>
          </div>

          <h2 className="font-personality" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--vyora-text)', marginBottom: '16px', letterSpacing: '0.04em' }}>
            VIBE DROP ✦
          </h2>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '28px', maxWidth: '480px' }}>
            Break away from algorithmic echo chambers. Let VYORA drop an unexpected, high-resonance film pick into your queue.
          </p>

          <button
            type="button"
            onClick={handleDropMyVibe}
            disabled={isDropping}
            className="btn-cinematic-primary"
            style={{
              padding: '16px 32px',
              fontSize: '1rem',
              opacity: isDropping ? 0.7 : 1
            }}
          >
            <Sparkles size={20} className={isDropping ? "animate-spin" : ""} />
            <span>{isDropping ? "SHUFFLING VECTOR ARCHIVES..." : "DROP MY VIBE"}</span>
          </button>
        </div>

        {/* Right Side: Interactive Shuffling Box */}
        <div style={{ gridColumn: 'span 6' }}>
          <div
            style={{
              padding: '24px',
              backgroundColor: 'var(--bg-card)',
              border: '2px solid var(--accent-burnt-orange)',
              borderRadius: '4px',
              boxShadow: 'var(--shadow-lg)',
              minHeight: '260px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {droppedMovie ? (
              <div className="animate-fade-in" style={{ width: '100%' }}>
                <span className="stamp-badge-gold" style={{ marginBottom: '12px', display: 'inline-block' }}>
                  YOUR VIBE DROP REVEAL
                </span>

                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center', margin: '16px 0', flexWrap: 'wrap' }}>
                  <img
                    src={droppedMovie.poster}
                    alt={droppedMovie.title}
                    style={{ width: '90px', height: '130px', objectFit: 'cover', borderRadius: '3px', border: '2px solid var(--bg-ivory)', boxShadow: 'var(--shadow-md)' }}
                  />
                  <div style={{ textAlign: 'left', maxWidth: '280px' }}>
                    <h3 className="font-editorial" style={{ fontSize: '1.6rem', color: 'var(--text-charcoal)', marginBottom: '4px' }}>
                      {droppedMovie.title} ({droppedMovie.year})
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--accent-deep-wine)', fontWeight: 600, marginBottom: '8px' }}>
                      {droppedMovie.director} • <Star size={14} fill="var(--highlight-gold)" color="var(--highlight-gold)" inline /> {droppedMovie.rating}
                    </p>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.4, margin: 0 }}>
                      "{droppedMovie.tagline || droppedMovie.description.slice(0, 80) + '...'}"
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectMovie && onSelectMovie(droppedMovie)}
                  className="btn-cinematic-secondary"
                  style={{ marginTop: '12px', padding: '10px 20px', fontSize: '0.85rem' }}
                >
                  <span>EXPLORE THIS VIBE</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            ) : isDropping ? (
              <div>
                <div
                  style={{
                    width: '70px',
                    height: '100px',
                    margin: '0 auto 12px auto',
                    borderRadius: '2px',
                    overflow: 'hidden',
                    border: '2px solid var(--accent-burnt-orange)'
                  }}
                >
                  <img
                    src={previewMovie?.poster}
                    alt={previewMovie?.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <h4 className="font-editorial" style={{ fontSize: '1.3rem', color: 'var(--accent-burnt-orange)' }}>
                  {previewMovie?.title}
                </h4>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Calculating surprise vector...</span>
              </div>
            ) : (
              <div>
                <Dices size={48} color="var(--accent-burnt-orange)" style={{ marginBottom: '16px', opacity: 0.8 }} />
                <h3 className="font-editorial" style={{ fontSize: '1.4rem', color: 'var(--text-charcoal)', marginBottom: '8px' }}>
                  READY FOR A VIBE DROP?
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', maxWidth: '320px', margin: '0 auto' }}>
                  Click the button to spin our algorithmic film vault and receive one curated surprise recommendation.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
