import React from 'react';
import LandingHero from '../components/LandingHero';

export default function LandingPage({ onSignIn }) {
  return (
    <main>
      <LandingHero onSignIn={onSignIn} />
    </main>
  );
}
