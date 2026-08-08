import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Compass, User, Search, Sparkles, Sun, Moon, Users } from 'lucide-react';

export default function Navbar({ onOpenSearch, theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Main 3 Navigation Items in Center
  const mainNavLinks = [
    { label: 'Discover', path: '/movie-home', icon: Sparkles },
    { label: 'Vibe Library', path: '/library', icon: Compass },
    { label: 'My Universe', path: '/universe', icon: User }
  ];

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? 'var(--vyora-bg-secondary)' : 'rgba(18, 10, 24, 0.94)',
        borderBottom: scrolled ? '1px solid var(--vyora-border-strong)' : '1px solid rgba(168, 117, 255, 0.15)',
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(12px)',
        padding: '6px 24px'
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
          minHeight: '85px'
        }}
      >
        {/* ==================================================================
            1. LEFT: VYORA BRAND LOGO & MASCOT (Compact Scale)
           ================================================================== */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            color: 'var(--vyora-text)',
            flexShrink: 0
          }}
        >
          <img
            src="/vyora-mascot.png"
            alt="VYORA mascot"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '8px',
              objectFit: 'cover',
              border: '1.5px solid var(--vyora-accent)',
              boxShadow: '0 0 10px rgba(168, 117, 255, 0.25)',
              transition: 'transform 0.2s ease, boxShadow 0.2s ease',
              flexShrink: 0
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.06) translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 0 16px rgba(168, 117, 255, 0.45)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 0 10px rgba(168, 117, 255, 0.25)';
            }}
          />
          <div>
            <span
              className="font-display"
              style={{
                fontSize: '1.25rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                display: 'block',
                lineHeight: 1
              }}
            >
              VYORA <span className="vyora-mark">✦</span>
            </span>
            <span
              style={{
                fontSize: '0.58rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--vyora-accent)',
                display: 'block',
                marginTop: '2px',
                fontStyle: 'italic',
                fontWeight: 600
              }}
            >
              Find Your Vibe.
            </span>
          </div>
        </Link>

        {/* ==================================================================
            2. CENTER: MAIN NAVIGATION LINKS (Compact Footprint)
           ================================================================== */}
        <div
          className="desktop-nav-links"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px'
          }}
        >
          {mainNavLinks.map(link => {
            const isActive = location.pathname === link.path;
            const Icon = link.icon;
            return (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: isActive ? '700' : '500',
                  color: isActive ? 'var(--vyora-accent)' : 'var(--vyora-text-muted)',
                  padding: '4px 10px',
                  borderRadius: '3px',
                  position: 'relative',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={e => {
                  if (!isActive) e.currentTarget.style.color = 'var(--vyora-text)';
                }}
                onMouseLeave={e => {
                  if (!isActive) e.currentTarget.style.color = 'var(--vyora-text-muted)';
                }}
              >
                <Icon size={14} color={isActive ? 'var(--vyora-accent)' : 'var(--vyora-text-muted)'} />
                <span>{link.label}</span>
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-3px',
                      left: '8px',
                      right: '8px',
                      height: '2px',
                      backgroundColor: 'var(--vyora-accent)',
                      borderRadius: '1px',
                      boxShadow: 'var(--vyora-glow)'
                    }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* ==================================================================
            3. RIGHT AREA: COMPACT SEARCH BAR + THINNER VERTICAL CONTROL STACK
           ================================================================== */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px'
          }}
        >
          {/* SEARCH BAR (Compact Height & Width) */}
          <button
            type="button"
            onClick={onOpenSearch}
            aria-label="Search movies"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              backgroundColor: 'var(--vyora-surface)',
              border: '1px solid var(--vyora-border-strong)',
              borderRadius: '18px',
              cursor: 'pointer',
              fontSize: '0.8rem',
              color: 'var(--vyora-text-muted)',
              width: 'clamp(160px, 20vw, 260px)',
              height: '36px',
              transition: 'all 0.2s ease',
              boxShadow: 'var(--shadow-sm)'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--vyora-accent)';
              e.currentTarget.style.boxShadow = 'var(--vyora-glow)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--vyora-border-strong)';
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
            }}
          >
            <Search size={14} color="var(--vyora-accent)" />
            <span style={{ fontSize: '0.8rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              Search your next obsession...
            </span>
          </button>

          {/* ================================================================
              RIGHT-SIDE THINNER VERTICAL CONTROL STACK:
              A. [ USER PROFILE ]
              B. [ VIBE CIRCLE ]
              C. [ ☀ / ☾ THEME ]
             ================================================================ */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '3px',
              paddingLeft: '6px',
              borderLeft: '1px dashed var(--vyora-border-strong)'
            }}
          >
            {/* A. USER PROFILE (Top Compact Circular Button) */}
            <button
              type="button"
              onClick={() => navigate('/universe')}
              title="My Universe Profile"
              aria-label="My Universe Profile"
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: 'var(--vyora-surface)',
                color: 'var(--vyora-gold)',
                border: '1.5px solid var(--vyora-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 0 8px rgba(255, 203, 119, 0.25)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.boxShadow = '0 0 14px rgba(255, 203, 119, 0.45)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 0 8px rgba(255, 203, 119, 0.25)';
              }}
            >
              <span className="font-display" style={{ fontSize: '0.78rem', fontWeight: 'bold', color: 'var(--vyora-gold)' }}>
                V
              </span>
            </button>

            {/* B. VIBE CIRCLE (Middle Compact Circular Social Button) */}
            <button
              type="button"
              onClick={() => navigate('/circle')}
              title="Vibe Circle Taste Network"
              aria-label="Vibe Circle Taste Network"
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: location.pathname === '/circle' ? 'var(--vyora-accent)' : 'var(--vyora-surface)',
                color: location.pathname === '/circle' ? '#120A18' : 'var(--vyora-accent)',
                border: '1.5px solid var(--vyora-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: 'var(--vyora-glow)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.boxShadow = '0 0 14px rgba(168, 117, 255, 0.55)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'var(--vyora-glow)';
              }}
            >
              <Users size={13} />
            </button>

            {/* C. LIGHT / DARK THEME (Bottom Compact Circular Toggle Button) */}
            <button
              type="button"
              onClick={onToggleTheme}
              title={theme === 'day' ? 'Switch to Night Mode (Obsidian Plum)' : 'Switch to Day Mode (Warm Moon)'}
              aria-label="Toggle theme mode"
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: 'var(--vyora-surface)',
                border: '1.5px solid var(--vyora-border-strong)',
                color: 'var(--vyora-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.borderColor = 'var(--vyora-gold)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.borderColor = 'var(--vyora-border-strong)';
              }}
            >
              {theme === 'day' ? <Moon size={13} /> : <Sun size={13} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
