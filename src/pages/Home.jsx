import React, { useState, useEffect } from 'react';
import MoodSelector from '../components/MoodSelector';
import VibeMixer from '../components/VibeMixer';
import MovieGrid from '../components/MovieGrid';
import VibeDrop from '../components/VibeDrop';
import SharedVibes from '../components/SharedVibes';
import SectionTitle from '../components/SectionTitle';
import { getMovies, getMoods, getSharedVibes } from '../services/api';
import { Sparkles, SlidersHorizontal, Users } from 'lucide-react';

export default function Home({ onSelectMovie }) {
  const [movies, setMovies] = useState([]);
  const [moods, setMoods] = useState([]);
  const [selectedMood, setSelectedMood] = useState(null);
  const [sharedVibeData, setSharedVibeData] = useState(null);
  const [showMixer, setShowMixer] = useState(false);

  useEffect(() => {
    async function loadData() {
      const allMovies = await getMovies();
      const allMoods = await getMoods();
      const shared = await getSharedVibes('aarav-sci-fi');
      setMovies(allMovies);
      setMoods(allMoods);
      setSharedVibeData(shared);
    }
    loadData();
  }, []);

  const handleSelectMood = (mood) => {
    if (selectedMood?.id === mood.id) {
      setSelectedMood(null);
    } else {
      setSelectedMood(mood);
      const el = document.getElementById('recommendations');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResetMood = () => {
    setSelectedMood(null);
  };

  const handleMixVibe = async (mixDimensions) => {
    const sorted = await getMovies({ sortBy: 'match' });
    setMovies(sorted);
    const el = document.getElementById('recommendations');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px 80px 24px' }}>
      {/* Top Banner Header */}
      <div style={{ marginBottom: '48px', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', backgroundColor: 'var(--bg-sand)', borderRadius: '2px', marginBottom: '12px' }}>
          <Sparkles size={16} color="var(--accent-burnt-orange)" />
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-burnt-orange)', fontWeight: 'bold' }}>
            🎬 REEL VIBE MOVIE DISCOVERY
          </span>
        </div>
        <h1 className="heading-editorial" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', color: 'var(--text-charcoal)', marginBottom: '8px' }}>
          WHAT'S YOUR VIBE TODAY?
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 24px auto' }}>
          Select an emotional state or fine-tune sensory dimensions to generate personalized film recommendations.
        </p>

        {/* Toggle Vibe Mixer button */}
        <button
          type="button"
          onClick={() => setShowMixer(!showMixer)}
          className="btn-cinematic-secondary"
          style={{ fontSize: '0.85rem', padding: '8px 18px' }}
        >
          <SlidersHorizontal size={15} />
          <span>{showMixer ? "HIDE VIBE MIXER" : "OPEN VIBE MIXER SLIDERS"}</span>
        </button>
      </div>

      {/* 1. Vibe Mixer (Optional) */}
      {showMixer && (
        <div className="animate-fade-in">
          <VibeMixer onMixVibe={handleMixVibe} />
        </div>
      )}

      {/* 2. Mood Selector */}
      <MoodSelector
        moods={moods}
        selectedMood={selectedMood}
        onSelectMood={handleSelectMood}
        onResetMood={handleResetMood}
      />

      {/* 3. Editorial Recommendation Matches */}
      <section id="recommendations" style={{ marginBottom: '60px' }}>
        <SectionTitle
          badgeText="YOUR VIBE MATCHES"
          title="RECOMMENDED FOR YOUR MOOD"
          subtitle="Editorial film cards complete with vector match percentages, atmosphere tags, and VYORA'S TAKE."
        />

        <MovieGrid
          movies={movies}
          selectedMood={selectedMood}
          onSelectMovie={onSelectMovie}
        />
      </section>

      {/* 4. Vibe Drop */}
      <VibeDrop movies={movies} onSelectMovie={onSelectMovie} />

      {/* 5. Vibe Exchange Preview */}
      <section style={{ marginTop: '60px' }}>
        <SectionTitle
          badgeText="VIBE EXCHANGE"
          title="RECOMMENDED FROM YOUR CIRCLE"
          subtitle="Discover films recommended through collaborative taste matching with people in your Vibe Circle."
        />

        <SharedVibes
          sharedData={sharedVibeData}
          movies={movies}
          onSelectMovie={onSelectMovie}
        />
      </section>
    </main>
  );
}
