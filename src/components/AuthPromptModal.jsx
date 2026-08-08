import React from 'react';
import { X, Sparkles, User, ShieldCheck } from 'lucide-react';

export default function AuthPromptModal({ isOpen, onClose, title = "Want VYORA to remember your vibe?", message = "Sign in to personalize your experience, save watchlist items, and connect with your Vibe Circle." }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 3000,
        backgroundColor: 'rgba(24, 13, 26, 0.75)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
      }}
      onClick={onClose}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '480px',
          backgroundColor: 'var(--bg-card)',
          border: '2px solid var(--accent-burnt-orange)',
          borderRadius: '4px',
          padding: '32px',
          boxShadow: 'var(--shadow-lg)',
          position: 'relative'
        }}
        className="animate-fade-in"
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-muted)'
          }}
        >
          <X size={20} />
        </button>

        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              backgroundColor: 'rgba(201, 87, 44, 0.1)',
              color: 'var(--accent-burnt-orange)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px auto'
            }}
          >
            <Sparkles size={24} />
          </div>

          <h3 className="heading-editorial" style={{ fontSize: '1.6rem', color: 'var(--text-charcoal)', marginBottom: '12px' }}>
            {title}
          </h3>

          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '24px' }}>
            {message}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button
              onClick={() => {
                alert("Sign In simulated. Guest session active.");
                onClose();
              }}
              className="btn-cinematic-primary"
              style={{ width: '100%' }}
            >
              <User size={18} />
              <span>SIGN IN / CREATE PROFILE</span>
            </button>

            <button
              onClick={onClose}
              className="btn-cinematic-secondary"
              style={{ width: '100%', border: 'none', fontSize: '0.85rem' }}
            >
              <span>Continue Exploring as Guest</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
