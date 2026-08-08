import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Dices, Sparkles, ArrowRight, RefreshCw, Star, Film } from 'lucide-react';

export default function MovieRoulette({ movies, onSelectMovie }) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [pickedMovie, setPickedMovie] = useState(null);

  const titles = movies.map(m => m.title);

  const handleSurpriseMe = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setPickedMovie(null);

    let counter = 0;
    const totalSpins = 25; // Number of fast cycles
    const speed = 70; // Speed in ms

    const interval = setInterval(() => {
      setCurrentTitleIndex(prev => (prev + 1) % titles.length);
      counter++;

      if (counter >= totalSpins) {
        clearInterval(interval);
        // Select random movie from full collection
        const randomIndex = Math.floor(Math.random() * movies.length);
        const finalSelection = movies[randomIndex];
        
        setPickedMovie(finalSelection);
        setIsSpinning(false);

        // Fire celebratory confetti burst
        try {
          confetti({
            particleCount: 70,
            spread: 60,
            origin: { y: 0.7 },
            colors: ['#C9572C', '#632C32', '#D7A84B', '#E9896A']
          });
        } catch (e) {
          // Fallback if canvas context fails
        }
      }
    }, speed);
  };

  return (
    <section
      id="roulette"
      style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '60px 24px'
      }}
    >
      <div
        className="ticket-stub"
        style={{
          padding: '48px 36px',
          backgroundColor: '#EDE2D2',
          border: '1px solid rgba(116, 107, 99, 0.3)',
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '32px',
          alignItems: 'center'
        }}
      >
        {/* Left Column: Call to Action */}
        <div style={{ gridColumn: 'span 6' }} className="roulette-cta">
          <span className="stamp-badge" style={{ marginBottom: '16px' }}>
            CINEMATIC ROULETTE
          </span>

          <h2
            className="heading-editorial"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              textTransform: 'uppercase',
              marginBottom: '12px',
              color: '#252322'
            }}
          >
            CAN'T DECIDE?
          </h2>

          <p
            style={{
              fontSize: '1.1rem',
              color: '#746B63',
              marginBottom: '28px',
              maxWidth: '440px'
            }}
          >
            Let fate pick tonight's movie. Our algorithmic roulette curates a high-vector match based on critical consensus and artistic merit.
          </p>

          <button
            onClick={handleSurpriseMe}
            disabled={isSpinning}
            className="btn-cinematic-primary"
            style={{
              opacity: isSpinning ? 0.8 : 1,
              cursor: isSpinning ? 'wait' : 'pointer'
            }}
          >
            {isSpinning ? (
              <>
                <RefreshCw size={18} className="animate-spin" />
                <span>SCANNING VECTOR VAULT...</span>
              </>
            ) : (
              <>
                <Dices size={20} />
                <span>🎲 SURPRISE ME</span>
              </>
            )}
          </button>
        </div>

        {/* Right Column: Dynamic Cycling Reel / Picked Movie Display */}
        <div style={{ gridColumn: 'span 6' }} className="roulette-display">
          <div
            style={{
              padding: '32px',
              backgroundColor: '#FAF6F0',
              border: '1px solid rgba(116, 107, 99, 0.25)',
              borderRadius: '3px',
              textAlign: 'center',
              minHeight: '280px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(37, 35, 34, 0.06)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {isSpinning ? (
              /* Slot Machine Animation Stage */
              <div style={{ width: '100%' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: '#C9572C',
                    fontWeight: 700,
                    display: 'block',
                    marginBottom: '16px'
                  }}
                >
                  CALIBRATING RECOMMENDATION...
                </span>

                <div
                  style={{
                    fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                    fontFamily: 'var(--font-editorial)',
                    fontWeight: 'bold',
                    color: '#252322',
                    minHeight: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {titles[currentTitleIndex]}
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '16px' }}>
                  {[1, 2, 3, 4, 5].map(i => (
                    <div
                      key={i}
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: i === (currentTitleIndex % 5) + 1 ? '#C9572C' : 'rgba(116, 107, 99, 0.2)',
                        transition: 'all 0.1s ease'
                      }}
                    />
                  ))}
                </div>
              </div>
            ) : pickedMovie ? (
              /* Dramatic Reveal of Tonight's Pick */
              <div className="animate-fade-in" style={{ width: '100%', textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span className="stamp-badge-gold">
                    TONIGHT'S PICK
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#D7A84B' }}>
                    <Star size={14} fill="#D7A84B" />
                    <span style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>{pickedMovie.rating}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <img
                    src={pickedMovie.poster}
                    alt={pickedMovie.title}
                    style={{
                      width: '90px',
                      height: '130px',
                      objectFit: 'cover',
                      borderRadius: '2px',
                      boxShadow: '0 6px 16px rgba(37, 35, 34, 0.15)',
                      border: '2px solid #FAF6F0'
                    }}
                  />
                  <div>
                    <h3 className="font-editorial" style={{ fontSize: '1.6rem', color: '#252322', marginBottom: '4px' }}>
                      {pickedMovie.title}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: '#632C32', fontWeight: 600, marginBottom: '8px' }}>
                      {pickedMovie.director} ({pickedMovie.year}) • {pickedMovie.runtime}
                    </p>
                    <p style={{ fontSize: '0.85rem', color: '#746B63', margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {pickedMovie.description}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onSelectMovie(pickedMovie)}
                  className="btn-cinematic-ghost"
                  style={{ marginTop: '16px' }}
                >
                  <span>EXPLORE MOVIE DNA & CONSTELLATION</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            ) : (
              /* Idle Initial State */
              <div>
                <Film size={36} color="#C9572C" style={{ marginBottom: '12px', opacity: 0.8 }} />
                <h3 className="font-editorial" style={{ fontSize: '1.4rem', color: '#252322', marginBottom: '6px' }}>
                  Ready to test fate?
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#746B63', margin: 0, maxWidth: '300px' }}>
                  Click "Surprise Me" above to spin the film reel.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
