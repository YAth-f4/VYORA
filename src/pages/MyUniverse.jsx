import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import MovieCard from '../components/MovieCard';
import { getUserUniverse, MOVIES } from '../services/api';
import { Film, User, Star, Clock, Bookmark, Sparkles, Orbit } from 'lucide-react';

export default function MyUniverse({ onSelectMovie }) {
  const [universeData, setUniverseData] = useState(null);

  useEffect(() => {
    async function load() {
      const data = await getUserUniverse();
      setUniverseData(data);
    }
    load();
  }, []);

  if (!universeData) return null;

  const { stats, topGenres } = universeData;

  // Resolve movie objects for recently watched & watchlist
  const recentlyWatchedMovies = MOVIES.filter(m => universeData.recentlyWatched.includes(m.id));
  const watchlistMovies = MOVIES.filter(m => universeData.watchlist.includes(m.id));

  return (
    <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px 80px 24px' }}>
      <SectionTitle
        number="03"
        badgeText="PERSONAL COSMOS"
        title="MY MOVIE UNIVERSE"
        subtitle="Your unique film journey mapped through watched history, genre affinity vectors, and tailored watchlist."
      />

      {/* User Stats Banner */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
          marginBottom: '40px'
        }}
      >
        <div style={{ backgroundColor: '#EDE2D2', border: '1px solid rgba(116, 107, 99, 0.25)', borderRadius: '3px', padding: '24px' }}>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#746B63', display: 'block', marginBottom: '8px' }}>
            FILMS WATCHED
          </span>
          <div style={{ fontSize: '2.4rem', fontFamily: 'var(--font-editorial)', fontWeight: 'bold', color: '#C9572C' }}>
            {stats.totalWatched}
          </div>
          <span style={{ fontSize: '0.78rem', color: '#746B63' }}>Logged in your universe</span>
        </div>

        <div style={{ backgroundColor: '#EDE2D2', border: '1px solid rgba(116, 107, 99, 0.25)', borderRadius: '3px', padding: '24px' }}>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#746B63', display: 'block', marginBottom: '8px' }}>
            HOURS EXPLORED
          </span>
          <div style={{ fontSize: '2.4rem', fontFamily: 'var(--font-editorial)', fontWeight: 'bold', color: '#632C32' }}>
            {stats.hoursExplored}h
          </div>
          <span style={{ fontSize: '0.78rem', color: '#746B63' }}>Total runtime spent</span>
        </div>

        <div style={{ backgroundColor: '#EDE2D2', border: '1px solid rgba(116, 107, 99, 0.25)', borderRadius: '3px', padding: '24px' }}>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#746B63', display: 'block', marginBottom: '8px' }}>
            AVERAGE RATING
          </span>
          <div style={{ fontSize: '2.4rem', fontFamily: 'var(--font-editorial)', fontWeight: 'bold', color: '#D7A84B' }}>
            ★ {stats.averageRating}
          </div>
          <span style={{ fontSize: '0.78rem', color: '#746B63' }}>High critical benchmark</span>
        </div>

        <div style={{ backgroundColor: '#EDE2D2', border: '1px solid rgba(116, 107, 99, 0.25)', borderRadius: '3px', padding: '24px' }}>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#746B63', display: 'block', marginBottom: '8px' }}>
            TOP GENRE VECTOR
          </span>
          <div style={{ fontSize: '1.4rem', fontFamily: 'var(--font-editorial)', fontWeight: 'bold', color: '#252322', marginTop: '4px' }}>
            {stats.favoriteGenre}
          </div>
          <span style={{ fontSize: '0.78rem', color: '#746B63' }}>34% Affinity match</span>
        </div>
      </div>

      {/* Genre Affinity Breakdown */}
      <div style={{ backgroundColor: '#FAF6F0', border: '1px solid rgba(116, 107, 99, 0.22)', borderRadius: '3px', padding: '32px', marginBottom: '48px' }}>
        <h3 className="font-editorial" style={{ fontSize: '1.4rem', color: '#252322', marginBottom: '20px' }}>
          GENRE AFFINITY BREAKDOWN
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {topGenres.map(g => (
            <div key={g.genre}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', fontWeight: 600, color: '#252322', marginBottom: '6px' }}>
                <span>{g.genre} ({g.count} films)</span>
                <span style={{ color: '#C9572C', fontFamily: 'var(--font-editorial)', fontWeight: 'bold' }}>
                  {g.percentage}%
                </span>
              </div>
              <div style={{ width: '100%', height: '10px', backgroundColor: '#EDE2D2', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ width: `${g.percentage}%`, height: '100%', backgroundColor: '#C9572C', borderRadius: '2px' }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Watchlist Section */}
      <div style={{ marginBottom: '48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
          <Bookmark size={20} color="#C9572C" />
          <h3 className="font-editorial" style={{ fontSize: '1.6rem', color: '#252322', margin: 0 }}>
            MY WATCHLIST ({watchlistMovies.length})
          </h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '24px' }}>
          {watchlistMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} onSelectMovie={onSelectMovie} />
          ))}
        </div>
      </div>

      {/* Recently Watched Section */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
          <Film size={20} color="#632C32" />
          <h3 className="font-editorial" style={{ fontSize: '1.6rem', color: '#252322', margin: 0 }}>
            RECENTLY DECODED & WATCHED ({recentlyWatchedMovies.length})
          </h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '24px' }}>
          {recentlyWatchedMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} onSelectMovie={onSelectMovie} />
          ))}
        </div>
      </div>
    </main>
  );
}
