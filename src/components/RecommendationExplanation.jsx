import React from 'react';
import { Sparkles, CheckCircle2, Tag, ShieldCheck } from 'lucide-react';

export default function RecommendationExplanation({ movie }) {
  if (!movie) return null;

  const matchScore = movie.vibeMatchScore || movie.recommendationReason?.similarityScore || 88;
  const reasoning = movie.recommendationReason;
  const vyorasTake = movie.vyorasTake || "VYORA decoded your taste vectors and selected this film for its distinctive atmospheric resonance and pacing.";

  const reasonsList = reasoning?.reasons || [
    "High match with your selected mood filter",
    "Similar narrative structure to films in your history",
    "Strong thematic overlap in vector space",
    "Popular among cinephiles in your Vibe Circle"
  ];

  return (
    <div
      style={{
        padding: '28px',
        backgroundColor: 'var(--vyora-surface)',
        border: '1px solid var(--vyora-border-strong)',
        borderRadius: '4px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: 'var(--shadow-sm)'
      }}
    >
      <div>
        {/* Header with Match Indicator */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={18} color="var(--vyora-accent)" />
            <h3 className="font-display" style={{ fontSize: '1.4rem', color: 'var(--vyora-text)', textTransform: 'uppercase', margin: 0 }}>
              ✦ VYORA'S TAKE
            </h3>
          </div>

          {/* Match Score Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              backgroundColor: 'rgba(168, 117, 255, 0.12)',
              border: '1px solid var(--vyora-accent)',
              borderRadius: '3px'
            }}
          >
            <ShieldCheck size={16} color="var(--vyora-accent)" />
            <span className="font-display" style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--vyora-accent)' }}>
              {matchScore}% VIBE MATCH ✦
            </span>
          </div>
        </div>

        {/* Editorial Take */}
        <div style={{ padding: '16px', backgroundColor: 'var(--vyora-bg-secondary)', borderLeft: '3px solid var(--vyora-accent)', borderRadius: '3px', marginBottom: '20px' }}>
          <p style={{ fontSize: '0.95rem', color: 'var(--vyora-text)', fontStyle: 'italic', margin: 0, lineHeight: 1.5 }}>
            "{vyorasTake}"
          </p>
        </div>

        {/* Why This Found You Section */}
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--vyora-text-muted)', marginBottom: '12px', fontWeight: 'bold' }}>
            WHY THIS FOUND YOU
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {reasonsList.map((reason, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: 'var(--vyora-text)', lineHeight: 1.4 }}>
                <CheckCircle2 size={16} color="var(--vyora-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Preference Vector Tags */}
      <div style={{ paddingTop: '16px', borderTop: '1px dashed var(--vyora-border)', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
        <Tag size={14} color="var(--vyora-text-muted)" />
        <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--vyora-text-muted)' }}>
          PREFERENCE VECTORS:
        </span>
        {movie.genres?.map(g => (
          <span key={g} className="stamp-badge" style={{ fontSize: '0.68rem', padding: '2px 6px' }}>
            {g}
          </span>
        ))}
      </div>
    </div>
  );
}
