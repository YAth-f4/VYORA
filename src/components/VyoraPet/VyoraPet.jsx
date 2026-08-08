import React, { useState, useEffect, useRef } from 'react';
import MascotFrames from './MascotFrames';
import PandaFrames from './PandaFrames';
import './VyoraPet.css';

/**
 * PetSpeechBubble Component
 * Positioned directly above the head of the clicked pet
 * Features rounded cloud styling, pointer tail, warm text, & fade animation
 */
function PetSpeechBubble({ text, direction, onClose }) {
  if (!text) return null;

  return (
    <div
      className="vyora-pet-speech-bubble animate-fade-in"
      style={{
        transform: `translateX(-50%) ${direction === -1 ? 'scaleX(-1)' : 'scaleX(1)'}`
      }}
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      <span>{text}</span>
      <div className="vyora-pet-bubble-arrow" />
    </div>
  );
}

export default function VyoraPet() {
  // =========================================================================
  // PET 1 (Original White Mascot) State
  // =========================================================================
  const [pet1Frame, setPet1Frame] = useState('idle-1');
  const [pet1State, setPet1State] = useState('IDLE');
  const [pet1X, setPet1X] = useState(160);
  const [pet1Dir, setPet1Dir] = useState(1);
  const [pet1Clicked, setPet1Clicked] = useState(false);

  // =========================================================================
  // PET 2 (VYORA Panda Mascot) State
  // =========================================================================
  const [pet2Frame, setPet2Frame] = useState('idle-1');
  const [pet2State, setPet2State] = useState('IDLE');
  const [pet2X, setPet2X] = useState(480);
  const [pet2Dir, setPet2Dir] = useState(-1);
  const [pet2Clicked, setPet2Clicked] = useState(false);

  // =========================================================================
  // Unified Speech Bubble State (Only 1 active speech bubble at a time)
  // =========================================================================
  const [activePet, setActivePet] = useState(null); // 'MASCOT' | 'PANDA' | null
  const [speechText, setSpeechText] = useState('');

  const containerRef = useRef(null);
  const timerRef = useRef(null);

  // Pet 1 Messages (White Mascot)
  const pet1Phrases = [
    "Found your vibe yet? ✨",
    "Movies taste better when they're your vibe.",
    "Keep exploring. 👀",
    "Your next obsession is somewhere here.",
    "VYORA knows a little something. 🤫"
  ];

  // Pet 2 Messages (Panda Mascot)
  const pet2Phrases = [
    "I approve this vibe. 🐼",
    "That one looks interesting...",
    "Need a comfort movie?",
    "Your vibe is looking suspiciously good.",
    "One more movie. Trust me."
  ];

  // =========================================================================
  // 1. PET 1 ENGINE (White Mascot Step & State Machine)
  // =========================================================================
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      setPet1Frame('idle-1');
      return;
    }

    const walkFrames = ['walk-1', 'walk-2', 'walk-3', 'walk-4'];
    let wIdx = 0;
    const idleFrames = ['idle-1', 'idle-1', 'idle-1', 'idle-2'];
    let iIdx = 0;
    const waveFrames = ['wave-1', 'wave-2', 'wave-3', 'wave-2'];
    let wvIdx = 0;

    const interval = setInterval(() => {
      if (pet1State === 'WALKING') {
        wIdx = (wIdx + 1) % walkFrames.length;
        setPet1Frame(walkFrames[wIdx]);

        setPet1X(prevX => {
          const containerWidth = containerRef.current ? containerRef.current.clientWidth : 800;
          const minX = 20;
          const maxX = Math.min(pet2X - 70, containerWidth - 140);
          
          let nextX = prevX + (pet1Dir * 3.5);
          if (nextX >= maxX) { setPet1Dir(-1); setPet1State('TURNING'); return maxX - 2; }
          if (nextX <= minX) { setPet1Dir(1); setPet1State('TURNING'); return minX + 2; }
          return nextX;
        });

      } else if (pet1State === 'IDLE') {
        iIdx = (iIdx + 1) % idleFrames.length;
        setPet1Frame(idleFrames[iIdx]);
      } else if (pet1State === 'SITTING') {
        setPet1Frame('sit-2');
      } else if (pet1State === 'WAVING') {
        wvIdx = (wvIdx + 1) % waveFrames.length;
        setPet1Frame(waveFrames[wvIdx]);
      } else if (pet1State === 'TURNING') {
        setPet1Frame('turn-1');
      }
    }, 150);

    return () => clearInterval(interval);
  }, [pet1State, pet1Dir, pet2X]);

  // Pet 1 Behavior Controller
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    let isMounted = true;
    const runCycle = () => {
      if (!isMounted) return;
      const r = Math.random();
      if (r < 0.45) {
        setPet1State('WALKING');
        setTimeout(() => { if (isMounted) setPet1State(Math.random() > 0.4 ? 'IDLE' : 'SITTING'); }, 3000);
      } else if (r < 0.75) {
        setPet1State('IDLE');
      } else if (r < 0.90) {
        setPet1State('WAVING');
      } else {
        setPet1State('TURNING');
        setTimeout(() => { if (isMounted) { setPet1Dir(d => -d); setPet1State('WALKING'); } }, 400);
      }
    };

    const interval = setInterval(runCycle, Math.floor(Math.random() * 4000) + 5000);
    return () => { isMounted = false; clearInterval(interval); };
  }, []);

  // =========================================================================
  // 2. PET 2 ENGINE (Panda Mascot Step & State Machine)
  // =========================================================================
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      setPet2Frame('idle-1');
      return;
    }

    const walkFrames = ['walk-1', 'walk-2', 'walk-3', 'walk-4'];
    let wIdx = 0;
    const idleFrames = ['idle-1', 'idle-1', 'idle-1', 'idle-2'];
    let iIdx = 0;
    const waveFrames = ['wave-1', 'wave-2', 'wave-3', 'wave-2'];
    let wvIdx = 0;

    const interval = setInterval(() => {
      if (pet2State === 'WALKING') {
        wIdx = (wIdx + 1) % walkFrames.length;
        setPet2Frame(walkFrames[wIdx]);

        setPet2X(prevX => {
          const containerWidth = containerRef.current ? containerRef.current.clientWidth : 800;
          const minX = Math.max(pet1X + 70, 100);
          const maxX = containerWidth - 70;
          
          let nextX = prevX + (pet2Dir * 3.5);
          if (nextX >= maxX) { setPet2Dir(-1); setPet2State('TURNING'); return maxX - 2; }
          if (nextX <= minX) { setPet2Dir(1); setPet2State('TURNING'); return minX + 2; }
          return nextX;
        });

      } else if (pet2State === 'IDLE') {
        iIdx = (iIdx + 1) % idleFrames.length;
        setPet2Frame(idleFrames[iIdx]);
      } else if (pet2State === 'SITTING') {
        setPet2Frame('sit-2');
      } else if (pet2State === 'WAVING') {
        wvIdx = (wvIdx + 1) % waveFrames.length;
        setPet2Frame(waveFrames[wvIdx]);
      } else if (pet2State === 'TURNING') {
        setPet2Frame('turn-1');
      }
    }, 150);

    return () => clearInterval(interval);
  }, [pet2State, pet2Dir, pet1X]);

  // Pet 2 Behavior Controller
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    let isMounted = true;
    const runCycle = () => {
      if (!isMounted) return;
      const r = Math.random();
      if (r < 0.45) {
        setPet2State('WALKING');
        setTimeout(() => { if (isMounted) setPet2State(Math.random() > 0.4 ? 'IDLE' : 'SITTING'); }, 3200);
      } else if (r < 0.75) {
        setPet2State('IDLE');
      } else if (r < 0.90) {
        setPet2State('WAVING');
      } else {
        setPet2State('TURNING');
        setTimeout(() => { if (isMounted) { setPet2Dir(d => -d); setPet2State('WALKING'); } }, 400);
      }
    };

    const interval = setInterval(runCycle, Math.floor(Math.random() * 4000) + 5500);
    return () => { isMounted = false; clearInterval(interval); };
  }, []);

  // =========================================================================
  // 3. INTERACTIVE CLICK HANDLERS & SPEECH BUBBLE MANAGER
  // =========================================================================

  // Click Pet 1 (Original White Mascot)
  const handlePet1Click = (e) => {
    e.stopPropagation();
    setPet1Clicked(true);
    setPet1State('WAVING');

    // Pick random message from Pet 1 list
    const randomMsg = pet1Phrases[Math.floor(Math.random() * pet1Phrases.length)];
    triggerSpeechBubble('MASCOT', randomMsg);

    setTimeout(() => setPet1Clicked(false), 600);
  };

  // Click Pet 2 (Panda Mascot)
  const handlePet2Click = (e) => {
    e.stopPropagation();
    setPet2Clicked(true);
    setPet2State('WAVING');

    // Pick random message from Pet 2 list
    const randomMsg = pet2Phrases[Math.floor(Math.random() * pet2Phrases.length)];
    triggerSpeechBubble('PANDA', randomMsg);

    setTimeout(() => setPet2Clicked(false), 600);
  };

  // Trigger Speech Bubble with Auto-dismiss
  const triggerSpeechBubble = (petType, msg) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setActivePet(petType);
    setSpeechText(msg);

    timerRef.current = setTimeout(() => {
      setActivePet(null);
      setSpeechText('');
    }, 3800);
  };

  return (
    <div className="vyora-pet-floor" ref={containerRef}>
      {/* Ground Track Accents */}
      <div className="vyora-pet-ground-track">
        <span>✦</span>
        <span>✨</span>
        <span>✦</span>
        <span>✨</span>
        <span>✦</span>
      </div>

      {/* ===================================================================
          PET 1: Original White Mascot
         =================================================================== */}
      <div
        className={`vyora-pet-character ${pet1Clicked ? 'pet-clicked' : ''}`}
        style={{
          transform: `translateX(${pet1X}px) ${pet1Dir === -1 ? 'scaleX(-1)' : 'scaleX(1)'}`
        }}
        onClick={handlePet1Click}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handlePet1Click(e); }}
        role="button"
        tabIndex={0}
        aria-label="Talk to VYORA mascot"
        title="VYORA Mascot — Click to talk!"
      >
        {/* Speech Bubble for Pet 1 */}
        {activePet === 'MASCOT' && (
          <PetSpeechBubble
            text={speechText}
            direction={pet1Dir}
            onClose={() => setActivePet(null)}
          />
        )}

        <div className="vyora-pet-frame-wrap">
          <MascotFrames frameName={pet1Frame} width={54} height={54} />
        </div>
        <div className="vyora-pet-contact-shadow" />
      </div>

      {/* ===================================================================
          PET 2: VYORA Panda Mascot
         =================================================================== */}
      <div
        className={`vyora-pet-character ${pet2Clicked ? 'pet-clicked' : ''}`}
        style={{
          transform: `translateX(${pet2X}px) ${pet2Dir === -1 ? 'scaleX(-1)' : 'scaleX(1)'}`
        }}
        onClick={handlePet2Click}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handlePet2Click(e); }}
        role="button"
        tabIndex={0}
        aria-label="Talk to VYORA panda"
        title="VYORA Panda Mascot — Click to talk!"
      >
        {/* Speech Bubble for Pet 2 */}
        {activePet === 'PANDA' && (
          <PetSpeechBubble
            text={speechText}
            direction={pet2Dir}
            onClose={() => setActivePet(null)}
          />
        )}

        <div className="vyora-pet-frame-wrap">
          <PandaFrames frameName={pet2Frame} width={54} height={54} />
        </div>
        <div className="vyora-pet-contact-shadow" />
      </div>
    </div>
  );
}
