import React from 'react';
import { Film, Heart, Sparkles, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#EDE2D2',
        borderTop: '1px solid rgba(116, 107, 99, 0.25)',
        padding: '60px 24px 40px 24px',
        marginTop: '80px'
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '32px'
        }}
      >
        {/* Brand Column */}
        <div style={{ gridColumn: 'span 5' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                backgroundColor: '#C9572C',
                color: '#FAF6F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '2px'
              }}
            >
              <Film size={18} />
            </div>
            <span
              className="font-editorial"
              style={{ fontSize: '1.4rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#252322' }}
            >
              CINEMATIC
            </span>
          </div>

          <p style={{ fontSize: '0.9rem', color: '#746B63', maxWidth: '380px', lineHeight: 1.6, marginBottom: '20px' }}>
            An interactive movie discovery engine crafted like a fine film magazine. Powered by vector attribute similarity and algorithmic recommendation logic.
          </p>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 12px', backgroundColor: '#FAF6F0', border: '1px solid rgba(116, 107, 99, 0.2)', borderRadius: '2px', fontSize: '0.75rem', color: '#632C32', fontWeight: 600 }}>
            <Server size={14} color="#C9572C" />
            <span>BACKEND STATUS: MOCK MODE (READY FOR FASTAPI)</span>
          </div>
        </div>

        {/* Links Column 1 */}
        <div style={{ gridColumn: 'span 3' }}>
          <h4
            className="font-editorial"
            style={{ fontSize: '1.1rem', color: '#252322', textTransform: 'uppercase', marginBottom: '16px' }}
          >
            DISCOVERY PATHS
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>
              <Link to="/" style={{ color: '#746B63', textDecoration: 'none', fontSize: '0.88rem' }}>
                Mood Discovery Engine
              </Link>
            </li>
            <li>
              <Link to="/explore" style={{ color: '#746B63', textDecoration: 'none', fontSize: '0.88rem' }}>
                Vector Search Vault
              </Link>
            </li>
            <li>
              <Link to="/universe" style={{ color: '#746B63', textDecoration: 'none', fontSize: '0.88rem' }}>
                My Film Universe
              </Link>
            </li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div style={{ gridColumn: 'span 4' }}>
          <h4
            className="font-editorial"
            style={{ fontSize: '1.1rem', color: '#252322', textTransform: 'uppercase', marginBottom: '16px' }}
          >
            EDITORIAL STATEMENT
          </h4>
          <p style={{ fontSize: '0.85rem', color: '#746B63', lineHeight: 1.6 }}>
            "Old cinema poster + modern editorial magazine + intelligent recommendation engine." Don't make users search for movies. Help them discover movies.
          </p>

          <div style={{ marginTop: '20px', fontSize: '0.78rem', color: '#746B63' }}>
            © {new Date().getFullYear()} CINEMATIC MAGAZINE • ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </footer>
  );
}
