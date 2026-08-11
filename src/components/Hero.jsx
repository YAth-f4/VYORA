import React, { useState } from 'react';
import { Sparkles, Dices, ArrowRight, Star } from 'lucide-react';
import { getRandomMovie } from '../services/api';

export default function Hero({
  onDiscoverClick,
  onSurpriseClick,
}) {
  const [loadingDiscover, setLoadingDiscover] =
    useState(false);

  const handleDiscover = async () => {
    try {
      setLoadingDiscover(true);

      const movie = await getRandomMovie();

      if (movie && onDiscoverClick) {
        onDiscoverClick(movie);
      }
    } catch (error) {
      console.error(
        'Discover movie failed:',
        error
      );

      alert(
        'Unable to discover a movie. Please make sure the backend is running.'
      );
    } finally {
      setLoadingDiscover(false);
    }
  };

  return (
    <header
      style={{
        position: 'relative',
        padding: '60px 24px 100px 24px',
        maxWidth: '1280px',
        margin: '0 auto',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Glows */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          right: '5%',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(231, 196, 106, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '-50px',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(168, 117, 255, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(12, 1fr)',
          gap: '32px',
          alignItems: 'center',
        }}
      >
        {/* LEFT */}
        <div
          style={{
            gridColumn: 'span 7',
          }}
          className="hero-content"
        >
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '24px',
              padding: '6px 14px',
              backgroundColor:
                'var(--vyora-bg-secondary)',
              border:
                '1px solid var(--vyora-border-strong)',
              borderRadius: '3px',
            }}
          >
            <span
              className="stamp-badge"
              style={{
                padding: '2px 8px',
                fontSize: '0.65rem',
              }}
            >
              MULTIVERSE V1
            </span>

            <span
              style={{
                fontSize: '0.8rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color:
                  'var(--vyora-text-muted)',
                fontWeight: 600,
              }}
            >
              INTELLIGENT RECOMMENDATION ENGINE
            </span>
          </div>

          {/* Heading */}
          <h1
            className="heading-editorial"
            style={{
              fontSize:
                'clamp(2.8rem, 6vw, 5.2rem)',
              lineHeight: 0.98,
              letterSpacing: '-0.02em',
              color: 'var(--vyora-text)',
              marginBottom: '24px',
              textTransform: 'uppercase',
            }}
          >
            YOUR NEXT
            <br />

            <span
              style={{
                color: 'var(--vyora-accent)',
                fontStyle: 'italic',
                fontWeight: 400,
              }}
            >
              MOVIE
            </span>

            <br />

            IS WAITING.
          </h1>

          {/* Description */}
          <p
            style={{
              fontSize: '1.2rem',
              color:
                'var(--vyora-text-muted)',
              maxWidth: '520px',
              lineHeight: 1.6,
              marginBottom: '36px',
            }}
          >
            Tell us what you're in the mood
            for.
            <br />
            We'll find something worth
            watching.
          </p>

          {/* BUTTONS */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              flexWrap: 'wrap',
            }}
          >
            {/* DISCOVER */}
            <button
              type="button"
              onClick={handleDiscover}
              disabled={loadingDiscover}
              className="btn-cinematic-primary"
              style={{
                opacity: loadingDiscover
                  ? 0.7
                  : 1,
                cursor: loadingDiscover
                  ? 'wait'
                  : 'pointer',
              }}
            >
              <Sparkles
                size={18}
                className={
                  loadingDiscover
                    ? 'animate-spin'
                    : ''
                }
              />

              <span>
                {loadingDiscover
                  ? 'DISCOVERING...'
                  : 'DISCOVER SOMETHING'}
              </span>
            </button>

            {/* VIBE DROP */}
            <button
              type="button"
              onClick={onSurpriseClick}
              className="btn-cinematic-secondary"
            >
              <Dices
                size={18}
                color="var(--vyora-accent)"
              />

              <span>Vibe Drop</span>
            </button>
          </div>

          {/* Metadata */}
          <div
            style={{
              marginTop: '48px',
              display: 'flex',
              alignItems: 'center',
              gap: '32px',
              paddingTop: '24px',
              borderTop:
                '1px dashed var(--vyora-border-strong)',
            }}
          >
            <div>
              <span
                style={{
                  display: 'block',
                  fontSize: '1.4rem',
                  fontWeight: 'bold',
                  color:
                    'var(--vyora-accent-secondary)',
                  fontFamily:
                    'var(--font-display)',
                }}
              >
                12,000+
              </span>

              <span
                style={{
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color:
                    'var(--vyora-text-muted)',
                }}
              >
                Curated Films
              </span>
            </div>

            <div
              style={{
                width: '1px',
                height: '28px',
                backgroundColor:
                  'var(--vyora-border-strong)',
              }}
            />

            <div>
              <span
                style={{
                  display: 'block',
                  fontSize: '1.4rem',
                  fontWeight: 'bold',
                  color:
                    'var(--vyora-accent)',
                  fontFamily:
                    'var(--font-display)',
                }}
              >
                98.4%
              </span>

              <span
                style={{
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color:
                    'var(--vyora-text-muted)',
                }}
              >
                Vector Match Accuracy
              </span>
            </div>

            <div
              style={{
                width: '1px',
                height: '28px',
                backgroundColor:
                  'var(--vyora-border-strong)',
              }}
            />

            <div>
              <span
                style={{
                  display: 'block',
                  fontSize: '1.4rem',
                  fontWeight: 'bold',
                  color:
                    'var(--vyora-gold)',
                  fontFamily:
                    'var(--font-display)',
                }}
              >
                8 Moods
              </span>

              <span
                style={{
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color:
                    'var(--vyora-text-muted)',
                }}
              >
                Interactive Engine
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div
          style={{
            gridColumn: 'span 5',
            position: 'relative',
          }}
          className="hero-visual"
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              minHeight: '440px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Main Poster */}
            <div
              style={{
                position: 'relative',
                width: '280px',
                height: '400px',
                borderRadius: '4px',
                overflow: 'hidden',
                boxShadow:
                  'var(--shadow-lg)',
                transform:
                  'rotate(-3deg) translateY(-10px)',
                border:
                  '3px solid var(--vyora-border-strong)',
              }}
              className="animate-float"
            >
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
                alt="Featured Movie"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to top, rgba(18, 10, 24, 0.9) 0%, transparent 60%)',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  color:
                    'var(--vyora-text)',
                }}
              >
                <span
                  className="stamp-badge-gold"
                  style={{
                    alignSelf:
                      'flex-start',
                    marginBottom: '8px',
                  }}
                >
                  FEATURED PICK
                </span>

                <h3
                  className="font-editorial"
                  style={{
                    fontSize: '1.4rem',
                    color:
                      'var(--vyora-text)',
                  }}
                >
                  INTERSTELLAR
                </h3>

                <p
                  style={{
                    fontSize: '0.8rem',
                    color:
                      'var(--vyora-gold)',
                    margin: 0,
                  }}
                >
                  CHRISTOPHER NOLAN • 2014
                </p>
              </div>
            </div>

            {/* Secondary Poster */}
            <div
              style={{
                position: 'absolute',
                top: '40px',
                right: '0',
                width: '180px',
                height: '240px',
                borderRadius: '3px',
                overflow: 'hidden',
                boxShadow:
                  'var(--shadow-md)',
                transform: 'rotate(6deg)',
                border:
                  '2px solid var(--vyora-border-strong)',
                opacity: 0.95,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600"
                alt="Movie Fragment"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>

            {/* Ticket */}
            <div
              className="ticket-stub"
              style={{
                position: 'absolute',
                bottom: '10px',
                left: '-20px',
                padding: '12px 20px',
                backgroundColor:
                  'var(--vyora-surface)',
                border:
                  '1px solid var(--vyora-border-strong)',
                boxShadow:
                  'var(--shadow-md)',
                transform: 'rotate(-2deg)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <Star
                  size={16}
                  fill="var(--vyora-gold)"
                  color="var(--vyora-gold)"
                />

                <div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 'bold',
                      textTransform:
                        'uppercase',
                      letterSpacing:
                        '0.1em',
                      color:
                        'var(--vyora-text)',
                    }}
                  >
                    CRITICS' SELECTION
                  </span>

                  <span
                    style={{
                      display: 'block',
                      fontSize: '0.7rem',
                      color:
                        'var(--vyora-text-muted)',
                    }}
                  >
                    Score: 9.4 / 10 Vector
                    Rating
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}