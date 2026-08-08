import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import MoodSelector from '../components/MoodSelector';
import MovieGrid from '../components/MovieGrid';
import MovieRoulette from '../components/MovieRoulette';
import MovieConstellation from '../components/MovieConstellation';
import SectionTitle from '../components/SectionTitle';
import { getMovies, getMoods } from '../services/api';

export default function Home({ onSelectMovie }) {
  const [movies, setMovies] = useState([]);
  const [moods, setMoods] = useState([]);
  const [selectedMood, setSelectedMood] = useState(null);

  useEffect(() => {
    async function loadData() {
      const allMovies = await getMovies();
      const allMoods = await getMoods();
      setMovies(allMovies);
      setMoods(allMoods);
    }
    loadData();
  }, []);

  const handleSelectMood = (mood) => {
    if (selectedMood?.id === mood.id) {
      setSelectedMood(null);
    } else {
      setSelectedMood(mood);
      // Smooth scroll to movie discovery section
      const el = document.getElementById('movie-discovery');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResetMood = () => {
    setSelectedMood(null);
  };

  const scrollToMoods = () => {
    const el = document.getElementById('mood-discovery');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToRoulette = () => {
    const el = document.getElementById('roulette');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Featured spotlight movie for constellation demo
  const spotlightMovie = movies.find(m => m.id === 'interstellar-2014') || movies[0];

  return (
    <main>
      {/* 1. Hero */}
      <Hero
        onDiscoverClick={scrollToMoods}
        onSurpriseClick={scrollToRoulette}
      />

      {/* 2. Mood Discovery */}
      <MoodSelector
        moods={moods}
        selectedMood={selectedMood}
        onSelectMood={handleSelectMood}
        onResetMood={handleResetMood}
      />

      {/* 3. Movie Discovery Section */}
      <MovieGrid
        movies={movies}
        selectedMood={selectedMood}
        onSelectMovie={onSelectMovie}
      />

      {/* 4. Movie Roulette */}
      <MovieRoulette
        movies={movies}
        onSelectMovie={onSelectMovie}
      />

      {/* 5. Interactive Constellation Spotlight Section */}
      {spotlightMovie && (
        <section
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '60px 24px 80px 24px'
          }}
        >
          <SectionTitle
            number="03"
            badgeText="VECTOR MAP FEATURE"
            title="EXPLORE THE CONSTELLATION"
            subtitle="Discover movies grouped by atmospheric similarity, directorial resonance, and genre overlap."
          />

          <MovieConstellation
            currentMovie={spotlightMovie}
            constellationData={spotlightMovie.constellation}
            onSelectConnectedMovie={(id) => {
              const target = movies.find(m => m.id === id);
              if (target) onSelectMovie(target);
            }}
          />
        </section>
      )}
    </main>
  );
}
