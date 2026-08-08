import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_VIBE_USERS, MOVIES, getSharedVibes } from '../services/api';
import UserProfileCard from '../components/UserProfileCard';
import SharedVibes from '../components/SharedVibes';
import { ArrowLeft, ShieldCheck, Lock } from 'lucide-react';

export default function PublicProfilePage({ onSelectMovie }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [sharedData, setSharedData] = useState(null);

  useEffect(() => {
    async function load() {
      const found = MOCK_VIBE_USERS.find(u => u.id === id) || MOCK_VIBE_USERS[2];
      setUser(found);
      const shared = await getSharedVibes(found.id);
      setSharedData(shared);
    }
    load();
  }, [id]);

  if (!user) return null;

  return (
    <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px 80px 24px' }}>
      <button
        onClick={() => navigate(-1)}
        className="btn-cinematic-ghost"
        style={{ marginBottom: '24px' }}
      >
        <ArrowLeft size={16} />
        <span>BACK TO CIRCLE</span>
      </button>

      {/* Privacy Notice Banner */}
      <div
        style={{
          padding: '12px 18px',
          backgroundColor: 'var(--bg-sand)',
          border: '1px solid var(--border-medium)',
          borderRadius: '3px',
          marginBottom: '32px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '0.82rem',
          color: 'var(--text-muted)'
        }}
      >
        <ShieldCheck size={16} color="var(--accent-burnt-orange)" />
        <span>VYORA Social Privacy Active • Showing public taste profile & shared movie vectors only.</span>
      </div>

      {/* Main Header Banner */}
      <div
        style={{
          padding: '36px',
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-medium)',
          borderRadius: '4px',
          marginBottom: '40px',
          display: 'flex',
          gap: '24px',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}
      >
        <img
          src={user.avatar}
          alt={user.name}
          style={{ width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--accent-burnt-orange)' }}
        />

        <div style={{ flexGrow: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
            <h1 className="heading-editorial" style={{ fontSize: '2.4rem', color: 'var(--text-charcoal)', margin: 0 }}>
              {user.name}
            </h1>
            <span className="stamp-badge-wine">{user.role}</span>
          </div>

          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '16px', maxWidth: '540px' }}>
            "{user.bio}"
          </p>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {user.topGenres.map(g => (
              <span key={g} className="stamp-badge">
                {g}
              </span>
            ))}
          </div>
        </div>

        {/* Big Vibe Match Gauge */}
        <div style={{ padding: '16px 28px', backgroundColor: 'var(--bg-sand)', border: '2px solid var(--accent-burnt-orange)', borderRadius: '4px', textAlign: 'center' }}>
          <span className="font-editorial" style={{ fontSize: '2.4rem', fontWeight: 'bold', color: 'var(--accent-burnt-orange)', display: 'block', lineHeight: 1 }}>
            {user.vibeMatch}%
          </span>
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            VIBE MATCH
          </span>
          <span style={{ fontSize: '0.75rem', color: 'var(--accent-deep-wine)', display: 'block', marginTop: '4px', fontWeight: 'bold' }}>
            {user.sharedMoviesCount} movies in common
          </span>
        </div>
      </div>

      {/* Shared Vibes Section */}
      {sharedData && (
        <SharedVibes sharedData={sharedData} movies={MOVIES} onSelectMovie={onSelectMovie} />
      )}
    </main>
  );
}
