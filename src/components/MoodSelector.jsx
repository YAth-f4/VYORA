import React from 'react';
import SectionTitle from './SectionTitle';
import MoodCard from './MoodCard';
import { Sparkles, X } from 'lucide-react';

export default function MoodSelector({ moods, selectedMood, onSelectMood, onResetMood }) {
  return (
    <section
      id="mood-discovery"
      style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '60px 24px 80px 24px'
      }}
    >
      <SectionTitle
        number="01"
        badgeText="CURATED MOOD ENGINE"
        title="WHAT ARE YOU IN THE MOOD FOR?"
        subtitle="Select an emotional or sensory state to calibrate the recommendation algorithms."
      />

      {/* Selected Mood State Message Banner */}
      {selectedMood && (
        <div
          className="animate-fade-in"
          style={{
            marginBottom: '32px',
            padding: '16px 24px',
            backgroundColor: '#FAF6F0',
            border: `2px solid ${selectedMood.accent}`,
            borderRadius: '3px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            boxShadow: '0 4px 16px rgba(37, 35, 34, 0.06)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: selectedMood.accent,
                boxShadow: `0 0 10px ${selectedMood.accent}`
              }}
              className="animate-glow"
            />
            <span style={{ fontSize: '1.05rem', color: '#252322' }}>
              Your current mood: <strong style={{ color: selectedMood.accent, fontFamily: 'var(--font-editorial)' }}>{selectedMood.title}</strong>
            </span>
          </div>

          <button
            onClick={onResetMood}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              backgroundColor: 'transparent',
              border: '1px solid #746B63',
              borderRadius: '2px',
              fontSize: '0.8rem',
              color: '#252322',
              cursor: 'pointer',
              fontWeight: 600
            }}
          >
            <X size={14} />
            <span>RESET FILTERS</span>
          </button>
        </div>
      )}

      {/* Mood Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '20px'
        }}
      >
        {moods.map(mood => (
          <MoodCard
            key={mood.id}
            mood={mood}
            isSelected={selectedMood?.id === mood.id}
            isAnySelected={!!selectedMood}
            onSelect={onSelectMood}
          />
        ))}
      </div>
    </section>
  );
}
