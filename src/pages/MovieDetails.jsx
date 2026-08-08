import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getMovieById, MOVIES } from '../services/api';
import MovieDNA from '../components/MovieDNA';
import RecommendationExplanation from '../components/RecommendationExplanation';
import MovieConstellation from '../components/MovieConstellation';
import { Star, Bookmark, CheckCircle, ArrowLeft, Share2, Film } from 'lucide-react';

export default function MovieDetails({ onSelectMovie }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await getMovieById(id || 'interstellar-2014');
        setMovie(data);
      } catch (err) {
        setMovie(MOVIES[0]);
      }
    }
    load();
  }, [id]);

  if (!movie) return null;

  return (
    <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px 80px 24px' }}>
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="btn-cinematic-ghost"
        style={{ marginBottom: '24px' }}
      >
        <ArrowLeft size={16} />
        <span>BACK TO DISCOVERY</span>
      </button>

      {/* Hero Banner Header */}
      <div
        style={{
          backgroundColor: '#EDE2D2',
          border: '1px solid rgba(116, 107, 99, 0.28)',
          borderRadius: '3px',
          padding: '36px',
          marginBottom: '36px',
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '32px',
          alignItems: 'center'
        }}
      >
        <div style={{ gridColumn: 'span 4' }}>
          <img
            src={movie.poster}
            alt={movie.title}
            style={{
              width: '100%',
              borderRadius: '3px',
              border: '4px solid #FAF6F0',
              boxShadow: '0 12px 28px rgba(37, 35, 34, 0.18)'
            }}
          />
        </div>

        <div style={{ gridColumn: 'span 8' }}>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
            <span className="stamp-badge-gold">{movie.year}</span>
            {movie.genres.map(g => (
              <span key={g} className="stamp-badge">{g}</span>
            ))}
          </div>

          <h1 className="heading-editorial" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', color: '#252322', marginBottom: '8px' }}>
            {movie.title}
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#632C32', fontWeight: 600, marginBottom: '16px' }}>
            Directed by {movie.director} • {movie.runtime} • Rating: <Star size={16} fill="#D7A84B" color="#D7A84B" style={{ display: 'inline' }} /> {movie.rating} / 10
          </p>

          {movie.tagline && (
            <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#C9572C', fontFamily: 'var(--font-editorial)', marginBottom: '16px' }}>
              "{movie.tagline}"
            </p>
          )}

          <p style={{ fontSize: '1rem', color: '#746B63', lineHeight: 1.6, marginBottom: '24px' }}>
            {movie.description}
          </p>

          <div style={{ display: 'flex', gap: '16px' }}>
            <button className="btn-cinematic-primary">
              <Bookmark size={18} />
              <span>SAVE TO MY UNIVERSE</span>
            </button>
          </div>
        </div>
      </div>

      {/* Grid: DNA + Recommendation Logic */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '28px', marginBottom: '40px' }}>
        <div style={{ gridColumn: 'span 6' }}>
          <MovieDNA movie={movie} />
        </div>

        <div style={{ gridColumn: 'span 6' }}>
          <RecommendationExplanation movie={movie} />
        </div>
      </div>

      {/* Interactive Constellation */}
      <MovieConstellation
        currentMovie={movie}
        constellationData={movie.constellation}
        onSelectConnectedMovie={(connId) => {
          navigate(`/movie/${connId}`);
        }}
      />
    </main>
  );
}
