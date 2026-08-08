import React, { useState } from 'react';
import { UserPlus, Check, Clock, Sparkles, Film, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function UserProfileCard({ user, onCircleAction }) {
  const [status, setStatus] = useState(
    user.isCircleMember ? 'IN YOUR CIRCLE' : user.isPending ? 'REQUEST SENT' : 'ADD TO CIRCLE'
  );

  const handleAction = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (status === 'ADD TO CIRCLE') {
      setStatus('REQUEST SENT');
      if (onCircleAction) onCircleAction(user.id, 'request');
    } else if (status === 'REQUEST SENT') {
      setStatus('ADD TO CIRCLE');
      if (onCircleAction) onCircleAction(user.id, 'cancel');
    } else if (status === 'IN YOUR CIRCLE') {
      if (window.confirm(`Remove ${user.name} from your Vibe Circle?`)) {
        setStatus('ADD TO CIRCLE');
        if (onCircleAction) onCircleAction(user.id, 'remove');
      }
    }
  };

  return (
    <div
      style={{
        padding: '24px',
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-medium)',
        borderRadius: '4px',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'transform 0.2s ease, border-color 0.2s ease'
      }}
    >
      <div>
        {/* Top Avatar & Name Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
          <img
            src={user.avatar}
            alt={user.name}
            style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--accent-burnt-orange)' }}
          />
          <div style={{ flexGrow: 1 }}>
            <h4 className="font-editorial" style={{ fontSize: '1.25rem', color: 'var(--text-charcoal)', margin: 0, lineHeight: 1.2 }}>
              {user.name}
            </h4>
            <span style={{ fontSize: '0.78rem', color: 'var(--accent-deep-wine)', fontWeight: 600 }}>
              {user.role}
            </span>
          </div>

          {/* Vibe Match Badge */}
          <div
            style={{
              padding: '4px 10px',
              backgroundColor: 'rgba(201, 87, 44, 0.1)',
              border: '1px solid var(--accent-burnt-orange)',
              borderRadius: '2px',
              textAlign: 'center'
            }}
          >
            <span className="font-editorial" style={{ fontSize: '1rem', fontWeight: 'bold', color: 'var(--accent-burnt-orange)', display: 'block', lineHeight: 1 }}>
              {user.vibeMatch}%
            </span>
            <span style={{ fontSize: '0.62rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
              VIBE MATCH
            </span>
          </div>
        </div>

        {/* Bio */}
        {user.bio && (
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.4, marginBottom: '16px' }}>
            "{user.bio}"
          </p>
        )}

        {/* Shared Genres & Movies Count */}
        <div style={{ padding: '12px', backgroundColor: 'var(--bg-sand)', borderRadius: '3px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
            <span>Top Shared Genres:</span>
            <span style={{ fontWeight: 'bold', color: 'var(--text-charcoal)' }}>{user.sharedMoviesCount} movies in common</span>
          </div>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {user.topGenres.map(g => (
              <span key={g} className="stamp-badge-wine" style={{ fontSize: '0.68rem', padding: '2px 6px' }}>
                {g}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer Buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <button
          type="button"
          onClick={handleAction}
          className={status === 'IN YOUR CIRCLE' ? 'btn-cinematic-secondary' : 'btn-cinematic-primary'}
          style={{ flexGrow: 1, padding: '10px 14px', fontSize: '0.8rem' }}
        >
          {status === 'IN YOUR CIRCLE' ? (
            <>
              <Check size={14} />
              <span>IN YOUR CIRCLE</span>
            </>
          ) : status === 'REQUEST SENT' ? (
            <>
              <Clock size={14} />
              <span>REQUEST SENT</span>
            </>
          ) : (
            <>
              <UserPlus size={14} />
              <span>ADD TO CIRCLE</span>
            </>
          )}
        </button>

        <Link
          to={`/user/${user.id}`}
          className="btn-cinematic-ghost"
          style={{ padding: '8px', fontSize: '0.8rem' }}
          title="View Public Vibe Profile"
        >
          <ArrowUpRight size={18} />
        </Link>
      </div>
    </div>
  );
}
