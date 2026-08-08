import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import UserProfileCard from '../components/UserProfileCard';
import SharedVibes from '../components/SharedVibes';
import { getVibeCircle, searchVibeUsers, getSharedVibes, MOVIES } from '../services/api';
import { Users, Search, UserCheck, Clock, Sparkles } from 'lucide-react';

export default function VibeCirclePage({ onSelectMovie }) {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUserForCompare, setSelectedUserForCompare] = useState('aarav-sci-fi');
  const [sharedData, setSharedData] = useState(null);

  useEffect(() => {
    async function load() {
      const data = await getVibeCircle();
      setUsers(data);
      const shared = await getSharedVibes(selectedUserForCompare);
      setSharedData(shared);
    }
    load();
  }, [selectedUserForCompare]);

  const handleSearch = async (e) => {
    const q = e.target.value;
    setSearchQuery(q);
    const results = await searchVibeUsers(q);
    setUsers(results);
  };

  const handleCircleAction = (userId, action) => {
    setUsers(prev => prev.map(u => {
      if (u.id === userId) {
        if (action === 'request') return { ...u, isPending: true };
        if (action === 'cancel') return { ...u, isPending: false };
        if (action === 'remove') return { ...u, isCircleMember: false };
      }
      return u;
    }));
  };

  const circleMembers = users.filter(u => u.isCircleMember);
  const matchingPeople = users.filter(u => !u.isCircleMember && !u.isPending);
  const pendingRequests = users.filter(u => u.isPending);

  return (
    <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px 80px 24px' }}>
      <SectionTitle
        badgeText="TASTE NETWORK"
        title="VIBE CIRCLE"
        subtitle="Connect with people who share your movie taste. Compare vectors, trade recommendations, and expand your universe."
      />

      {/* Search Bar */}
      <div
        style={{
          padding: '20px 24px',
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-medium)',
          borderRadius: '4px',
          marginBottom: '40px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}
      >
        <Search size={20} color="var(--accent-burnt-orange)" />
        <input
          type="text"
          placeholder="Search movie lovers by name, role, or genre taste..."
          value={searchQuery}
          onChange={handleSearch}
          style={{
            width: '100%',
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
            fontSize: '1rem',
            color: 'var(--text-charcoal)',
            fontFamily: 'var(--font-sans)'
          }}
        />
      </div>

      {/* Section 1: YOUR CIRCLE */}
      <section style={{ marginBottom: '48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
          <UserCheck size={20} color="var(--accent-burnt-orange)" />
          <h3 className="font-editorial" style={{ fontSize: '1.6rem', color: 'var(--text-charcoal)', margin: 0 }}>
            YOUR CIRCLE ({circleMembers.length})
          </h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
          {circleMembers.map(user => (
            <div key={user.id} onClick={() => setSelectedUserForCompare(user.id)} style={{ cursor: 'pointer' }}>
              <UserProfileCard user={user} onCircleAction={handleCircleAction} />
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Shared Vibes Comparison Panel */}
      {sharedData && (
        <section style={{ marginBottom: '48px' }}>
          <SharedVibes sharedData={sharedData} movies={MOVIES} onSelectMovie={onSelectMovie} />
        </section>
      )}

      {/* Section 3: PEOPLE WHO MATCH YOUR VIBE */}
      <section style={{ marginBottom: '48px' }}>
        <div style={{ marginBottom: '20px' }}>
          <h3 className="font-editorial" style={{ fontSize: '1.6rem', color: 'var(--text-charcoal)', marginBottom: '4px' }}>
            PEOPLE WHO MATCH YOUR VIBE
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
            Find people whose movie taste overlaps with yours.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
          {matchingPeople.map(user => (
            <UserProfileCard key={user.id} user={user} onCircleAction={handleCircleAction} />
          ))}
        </div>
      </section>

      {/* Section 4: PENDING REQUESTS */}
      {pendingRequests.length > 0 && (
        <section>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <Clock size={20} color="var(--highlight-gold)" />
            <h3 className="font-editorial" style={{ fontSize: '1.6rem', color: 'var(--text-charcoal)', margin: 0 }}>
              PENDING REQUESTS ({pendingRequests.length})
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
            {pendingRequests.map(user => (
              <UserProfileCard key={user.id} user={user} onCircleAction={handleCircleAction} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
