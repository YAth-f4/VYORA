import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Film, Compass, User, Search, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenSearch }) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Discover', path: '/', icon: Sparkles },
    { label: 'Explore', path: '/explore', icon: Compass },
    { label: 'My Universe', path: '/universe', icon: User }
  ];

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? '#EDE2D2' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(116, 107, 99, 0.2)' : '1px solid transparent',
        transition: 'all 0.4s ease',
        backdropFilter: scrolled ? 'blur(8px)' : 'none'
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {/* Brand Logo */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            color: '#252322'
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              backgroundColor: '#C9572C',
              color: '#FAF6F0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '2px',
              transform: 'rotate(-2deg)',
              boxShadow: '0 2px 8px rgba(201, 87, 44, 0.3)'
            }}
          >
            <Film size={20} />
          </div>
          <div>
            <span
              className="font-editorial"
              style={{
                fontSize: '1.4rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                display: 'block',
                lineHeight: 1
              }}
            >
              CINEMATIC
            </span>
            <span
              style={{
                fontSize: '0.62rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#746B63',
                display: 'block',
                marginTop: '2px'
              }}
            >
              FILM DISCOVERY
            </span>
          </div>
        </Link>

        {/* Center Navigation Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px'
          }}
        >
          {navLinks.map(link => {
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
                  fontSize: '0.9rem',
                  fontWeight: isActive ? '700' : '500',
                  color: isActive ? '#C9572C' : '#252322',
                  padding: '6px 12px',
                  borderRadius: '2px',
                  position: 'relative',
                  transition: 'color 0.2s ease'
                }}
              >
                <Icon size={16} />
                <span>{link.label}</span>
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: '12px',
                      right: '12px',
                      height: '2px',
                      backgroundColor: '#C9572C',
                      borderRadius: '1px'
                    }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Quick Search */}
          <button
            onClick={onOpenSearch}
            aria-label="Search movies"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 14px',
              backgroundColor: '#FAF6F0',
              border: '1px solid rgba(116, 107, 99, 0.25)',
              borderRadius: '2px',
              cursor: 'pointer',
              fontSize: '0.85rem',
              color: '#746B63',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = '#C9572C')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(116, 107, 99, 0.25)')}
          >
            <Search size={15} color="#C9572C" />
            <span style={{ display: 'none', minWidth: '80px' }} className="search-text-desktop">
              Find film...
            </span>
          </button>

          {/* Profile Circle Button */}
          <button
            onClick={() => navigate('/universe')}
            title="My Film Universe Profile"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#632C32',
              color: '#FAF6F0',
              border: '2px solid #D7A84B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 10px rgba(99, 44, 50, 0.25)',
              transition: 'transform 0.2s ease'
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <span
              className="font-editorial"
              style={{ fontSize: '1rem', fontWeight: 'bold' }}
            >
              C
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
