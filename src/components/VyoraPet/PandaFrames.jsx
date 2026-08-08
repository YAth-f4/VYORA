import React from 'react';

/**
 * 2D Frame Renderer for VYORA Panda Mascot Pet (Pet 2)
 * Features extra cute, glossy, sparkling anime panda eyes:
 * - Soft rounded white/cream body & head
 * - Signature black panda ears, eye patches & black limbs
 * - Adorable large sparkling eyes with dual catchlights
 * - Rosy pink blush cheeks & cute smiling mouth
 */
export default function PandaFrames({ frameName, width = 56, height = 56 }) {
  // Helper snippet for Panda's extra cute sparkling eyes
  const CutePandaEyes = ({ leftX = 36, rightX = 64, cy = 41 }) => (
    <>
      {/* Outer Eye Base */}
      <circle cx={leftX} cy={cy} r="4.2" fill="#FFF" />
      <circle cx={rightX} cy={cy} r="4.2" fill="#FFF" />
      {/* Shiny Iris */}
      <circle cx={leftX + 0.3} cy={cy + 0.3} r="2.8" fill="#120A18" />
      <circle cx={rightX - 0.3} cy={cy + 0.3} r="2.8" fill="#120A18" />
      {/* Primary Top Sparkle Catchlight */}
      <circle cx={leftX - 0.8} cy={cy - 1.2} r="1.5" fill="#FFF" />
      <circle cx={rightX - 1.4} cy={cy - 1.2} r="1.5" fill="#FFF" />
      {/* Secondary Bottom Sparkle Catchlight */}
      <circle cx={leftX + 1.2} cy={cy + 1.2} r="0.8" fill="#FFF" />
      <circle cx={rightX + 0.6} cy={cy + 1.2} r="0.8" fill="#FFF" />
    </>
  );

  switch (frameName) {
    // =========================================================================
    // IDLE FRAMES (Breathing & Blinking)
    // =========================================================================
    case 'idle-1':
      return (
        <svg viewBox="0 0 100 100" width={width} height={height}>
          <ellipse cx="50" cy="94" rx="22" ry="4" fill="rgba(0,0,0,0.25)" />
          {/* White Body */}
          <path d="M 32 50 C 30 75 32 88 50 88 C 68 88 70 75 68 50 Z" fill="#FFF8FC" stroke="#120A18" strokeWidth="2.5" />
          {/* Black Chest Band */}
          <path d="M 32 54 Q 50 62 68 54 C 68 64 64 72 50 72 C 36 72 32 64 32 54 Z" fill="#120A18" />
          {/* White Head */}
          <circle cx="50" cy="42" r="28" fill="#FFF8FC" stroke="#120A18" strokeWidth="2.5" />
          {/* Black Panda Ears */}
          <circle cx="25" cy="22" r="8.5" fill="#120A18" />
          <circle cx="75" cy="22" r="8.5" fill="#120A18" />
          {/* Black Eye Patches */}
          <ellipse cx="36" cy="42" rx="8" ry="9.5" fill="#120A18" transform="rotate(-15, 36, 42)" />
          <ellipse cx="64" cy="42" rx="8" ry="9.5" fill="#120A18" transform="rotate(15, 64, 42)" />
          {/* Extra Cute Sparkling Eyes */}
          <CutePandaEyes leftX={36} rightX={64} cy={41} />
          {/* Blush */}
          <ellipse cx="27" cy="48" rx="5.5" ry="3.8" fill="#FFA5C5" opacity="0.85" />
          <ellipse cx="73" cy="48" rx="5.5" ry="3.8" fill="#FFA5C5" opacity="0.85" />
          {/* Cute Nose & Smile */}
          <ellipse cx="50" cy="46" rx="3.5" ry="2.2" fill="#120A18" />
          <path d="M 46 49 Q 50 54 54 49" fill="none" stroke="#120A18" strokeWidth="2" strokeLinecap="round" />
          {/* Black Paws */}
          <ellipse cx="34" cy="62" rx="6.5" ry="8" fill="#120A18" />
          <ellipse cx="66" cy="62" rx="6.5" ry="8" fill="#120A18" />
          {/* Black Feet */}
          <ellipse cx="38" cy="87" rx="8" ry="5" fill="#120A18" />
          <ellipse cx="62" cy="87" rx="8" ry="5" fill="#120A18" />
        </svg>
      );

    case 'idle-2':
      return (
        <svg viewBox="0 0 100 100" width={width} height={height}>
          <ellipse cx="50" cy="94" rx="22" ry="4" fill="rgba(0,0,0,0.25)" />
          <path d="M 32 51 C 30 76 32 88 50 88 C 68 88 70 76 68 51 Z" fill="#FFF8FC" stroke="#120A18" strokeWidth="2.5" />
          <path d="M 32 55 Q 50 63 68 55 C 68 65 64 73 50 73 C 36 73 32 65 32 55 Z" fill="#120A18" />
          <circle cx="50" cy="43" r="28" fill="#FFF8FC" stroke="#120A18" strokeWidth="2.5" />
          <circle cx="25" cy="23" r="8.5" fill="#120A18" />
          <circle cx="75" cy="23" r="8.5" fill="#120A18" />
          <ellipse cx="36" cy="43" rx="8" ry="9.5" fill="#120A18" transform="rotate(-15, 36, 43)" />
          <ellipse cx="64" cy="43" rx="8" ry="9.5" fill="#120A18" transform="rotate(15, 64, 43)" />
          {/* Happy Blinking Eye Arcs */}
          <path d="M 32 42 Q 36 37 40 42" fill="none" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 60 42 Q 64 37 68 42" fill="none" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" />
          <ellipse cx="27" cy="49" rx="5.5" ry="3.8" fill="#FFA5C5" opacity="0.9" />
          <ellipse cx="73" cy="49" rx="5.5" ry="3.8" fill="#FFA5C5" opacity="0.9" />
          <ellipse cx="50" cy="47" rx="3.5" ry="2.2" fill="#120A18" />
          <path d="M 45 50 Q 50 55 55 50" fill="#E46BA8" stroke="#120A18" strokeWidth="1.8" strokeLinecap="round" />
          <ellipse cx="34" cy="63" rx="6.5" ry="8" fill="#120A18" />
          <ellipse cx="66" cy="63" rx="6.5" ry="8" fill="#120A18" />
          <ellipse cx="38" cy="87" rx="8" ry="5" fill="#120A18" />
          <ellipse cx="62" cy="87" rx="8" ry="5" fill="#120A18" />
        </svg>
      );

    // =========================================================================
    // WALKING STEP FRAMES (walk-1 to walk-4)
    // =========================================================================
    case 'walk-1':
      return (
        <svg viewBox="0 0 100 100" width={width} height={height}>
          <ellipse cx="50" cy="94" rx="20" ry="4" fill="rgba(0,0,0,0.25)" />
          <path d="M 33 49 C 30 74 32 87 50 87 C 68 87 70 74 67 49 Z" fill="#FFF8FC" stroke="#120A18" strokeWidth="2.5" />
          <g transform="rotate(-3, 50, 42)">
            <circle cx="50" cy="41" r="28" fill="#FFF8FC" stroke="#120A18" strokeWidth="2.5" />
            <circle cx="25" cy="21" r="8.5" fill="#120A18" />
            <circle cx="75" cy="21" r="8.5" fill="#120A18" />
            <ellipse cx="36" cy="41" rx="8" ry="9.5" fill="#120A18" transform="rotate(-15, 36, 41)" />
            <ellipse cx="64" cy="41" rx="8" ry="9.5" fill="#120A18" transform="rotate(15, 64, 41)" />
            <CutePandaEyes leftX={36} rightX={64} cy={40} />
            <ellipse cx="50" cy="45" rx="3.5" ry="2.2" fill="#120A18" />
            <path d="M 46 48 Q 50 53 54 48" fill="none" stroke="#120A18" strokeWidth="2" strokeLinecap="round" />
          </g>
          <ellipse cx="30" cy="62" rx="6.5" ry="8" fill="#120A18" transform="rotate(15, 30, 62)" />
          <ellipse cx="68" cy="66" rx="6.5" ry="8" fill="#120A18" transform="rotate(-15, 68, 66)" />
          <ellipse cx="30" cy="88" rx="9" ry="5" fill="#120A18" />
          <ellipse cx="68" cy="83" rx="7" ry="5" fill="#120A18" />
        </svg>
      );

    case 'walk-2':
      return (
        <svg viewBox="0 0 100 100" width={width} height={height}>
          <ellipse cx="50" cy="95" rx="16" ry="3.5" fill="rgba(0,0,0,0.2)" />
          <path d="M 32 46 C 30 71 32 84 50 84 C 68 84 70 71 68 46 Z" fill="#FFF8FC" stroke="#120A18" strokeWidth="2.5" />
          <circle cx="50" cy="38" r="28" fill="#FFF8FC" stroke="#120A18" strokeWidth="2.5" />
          <circle cx="25" cy="18" r="8.5" fill="#120A18" />
          <circle cx="75" cy="18" r="8.5" fill="#120A18" />
          <ellipse cx="36" cy="38" rx="8" ry="9.5" fill="#120A18" transform="rotate(-15, 36, 38)" />
          <ellipse cx="64" cy="38" rx="8" ry="9.5" fill="#120A18" transform="rotate(15, 64, 38)" />
          <CutePandaEyes leftX={36} rightX={64} cy={37} />
          <ellipse cx="50" cy="42" rx="3.5" ry="2.2" fill="#120A18" />
          <path d="M 46 45 Q 50 50 54 45" fill="none" stroke="#120A18" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="34" cy="60" rx="6.5" ry="8" fill="#120A18" />
          <ellipse cx="66" cy="60" rx="6.5" ry="8" fill="#120A18" />
          <ellipse cx="40" cy="85" rx="8" ry="5" fill="#120A18" />
          <ellipse cx="60" cy="85" rx="8" ry="5" fill="#120A18" />
        </svg>
      );

    case 'walk-3':
      return (
        <svg viewBox="0 0 100 100" width={width} height={height}>
          <ellipse cx="50" cy="94" rx="20" ry="4" fill="rgba(0,0,0,0.25)" />
          <path d="M 33 49 C 30 74 32 87 50 87 C 68 87 70 74 67 49 Z" fill="#FFF8FC" stroke="#120A18" strokeWidth="2.5" />
          <g transform="rotate(3, 50, 42)">
            <circle cx="50" cy="41" r="28" fill="#FFF8FC" stroke="#120A18" strokeWidth="2.5" />
            <circle cx="25" cy="21" r="8.5" fill="#120A18" />
            <circle cx="75" cy="21" r="8.5" fill="#120A18" />
            <ellipse cx="36" cy="41" rx="8" ry="9.5" fill="#120A18" transform="rotate(-15, 36, 41)" />
            <ellipse cx="64" cy="41" rx="8" ry="9.5" fill="#120A18" transform="rotate(15, 64, 41)" />
            <CutePandaEyes leftX={36} rightX={64} cy={40} />
            <ellipse cx="50" cy="45" rx="3.5" ry="2.2" fill="#120A18" />
            <path d="M 46 48 Q 50 53 54 48" fill="none" stroke="#120A18" strokeWidth="2" strokeLinecap="round" />
          </g>
          <ellipse cx="32" cy="66" rx="6.5" ry="8" fill="#120A18" transform="rotate(-15, 32, 66)" />
          <ellipse cx="70" cy="62" rx="6.5" ry="8" fill="#120A18" transform="rotate(15, 70, 62)" />
          <ellipse cx="32" cy="83" rx="7" ry="5" fill="#120A18" />
          <ellipse cx="70" cy="88" rx="9" ry="5" fill="#120A18" />
        </svg>
      );

    case 'walk-4':
      return (
        <svg viewBox="0 0 100 100" width={width} height={height}>
          <ellipse cx="50" cy="94" rx="22" ry="4.5" fill="rgba(0,0,0,0.3)" />
          <path d="M 32 51 C 30 76 32 88 50 88 C 68 88 70 76 68 51 Z" fill="#FFF8FC" stroke="#120A18" strokeWidth="2.5" />
          <circle cx="50" cy="43" r="28" fill="#FFF8FC" stroke="#120A18" strokeWidth="2.5" />
          <circle cx="25" cy="23" r="8.5" fill="#120A18" />
          <circle cx="75" cy="23" r="8.5" fill="#120A18" />
          <ellipse cx="36" cy="43" rx="8" ry="9.5" fill="#120A18" transform="rotate(-15, 36, 43)" />
          <ellipse cx="64" cy="43" rx="8" ry="9.5" fill="#120A18" transform="rotate(15, 64, 43)" />
          <CutePandaEyes leftX={36} rightX={64} cy={42} />
          <ellipse cx="50" cy="47" rx="3.5" ry="2.2" fill="#120A18" />
          <path d="M 46 50 Q 50 55 54 50" fill="none" stroke="#120A18" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="36" cy="65" rx="6.5" ry="8" fill="#120A18" />
          <ellipse cx="64" cy="65" rx="6.5" ry="8" fill="#120A18" />
          <ellipse cx="36" cy="88" rx="8" ry="5" fill="#120A18" />
          <ellipse cx="64" cy="88" rx="8" ry="5" fill="#120A18" />
        </svg>
      );

    // =========================================================================
    // SITTING FRAMES (sit-1, sit-2)
    // =========================================================================
    case 'sit-1':
      return (
        <svg viewBox="0 0 100 100" width={width} height={height}>
          <ellipse cx="50" cy="94" rx="24" ry="5" fill="rgba(0,0,0,0.3)" />
          <path d="M 28 58 C 26 80 30 90 50 90 C 70 90 74 80 72 58 Z" fill="#FFF8FC" stroke="#120A18" strokeWidth="2.5" />
          <circle cx="50" cy="46" r="27" fill="#FFF8FC" stroke="#120A18" strokeWidth="2.5" />
          <circle cx="26" cy="27" r="8" fill="#120A18" />
          <circle cx="74" cy="27" r="8" fill="#120A18" />
          <ellipse cx="36" cy="46" rx="8" ry="9.5" fill="#120A18" transform="rotate(-15, 36, 46)" />
          <ellipse cx="64" cy="46" rx="8" ry="9.5" fill="#120A18" transform="rotate(15, 64, 46)" />
          <CutePandaEyes leftX={36} rightX={64} cy={45} />
          <ellipse cx="50" cy="50" rx="3.5" ry="2.2" fill="#120A18" />
          <path d="M 46 53 Q 50 57 54 53" fill="none" stroke="#120A18" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="42" cy="68" rx="6.5" ry="6" fill="#120A18" />
          <ellipse cx="58" cy="68" rx="6.5" ry="6" fill="#120A18" />
          <ellipse cx="26" cy="88" rx="9" ry="5" fill="#120A18" />
          <ellipse cx="74" cy="88" rx="9" ry="5" fill="#120A18" />
        </svg>
      );

    case 'sit-2':
      return (
        <svg viewBox="0 0 100 100" width={width} height={height}>
          <ellipse cx="50" cy="94" rx="24" ry="5" fill="rgba(0,0,0,0.3)" />
          <path d="M 28 59 C 26 81 30 90 50 90 C 70 90 74 81 72 59 Z" fill="#FFF8FC" stroke="#120A18" strokeWidth="2.5" />
          <circle cx="50" cy="47" r="27" fill="#FFF8FC" stroke="#120A18" strokeWidth="2.5" />
          <circle cx="26" cy="28" r="8" fill="#120A18" />
          <circle cx="74" cy="28" r="8" fill="#120A18" />
          <ellipse cx="36" cy="47" rx="8" ry="9.5" fill="#120A18" transform="rotate(-15, 36, 47)" />
          <ellipse cx="64" cy="47" rx="8" ry="9.5" fill="#120A18" transform="rotate(15, 64, 47)" />
          <path d="M 32 46 Q 36 41 40 46" fill="none" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 60 46 Q 64 41 68 46" fill="none" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" />
          <ellipse cx="50" cy="51" rx="3.5" ry="2.2" fill="#120A18" />
          <path d="M 45 54 Q 50 59 55 54" fill="#E46BA8" stroke="#120A18" strokeWidth="1.8" strokeLinecap="round" />
          <ellipse cx="42" cy="69" rx="6.5" ry="6" fill="#120A18" />
          <ellipse cx="58" cy="69" rx="6.5" ry="6" fill="#120A18" />
          <ellipse cx="26" cy="88" rx="9" ry="5" fill="#120A18" />
          <ellipse cx="74" cy="88" rx="9" ry="5" fill="#120A18" />
        </svg>
      );

    // =========================================================================
    // WAVING / HAPPY FRAMES (wave-1 to wave-3)
    // =========================================================================
    case 'wave-1':
      return (
        <svg viewBox="0 0 100 100" width={width} height={height}>
          <ellipse cx="50" cy="94" rx="22" ry="4" fill="rgba(0,0,0,0.25)" />
          <path d="M 32 50 C 30 75 32 88 50 88 C 68 88 70 75 68 50 Z" fill="#FFF8FC" stroke="#120A18" strokeWidth="2.5" />
          <circle cx="50" cy="42" r="28" fill="#FFF8FC" stroke="#120A18" strokeWidth="2.5" />
          <circle cx="25" cy="22" r="8.5" fill="#120A18" />
          <circle cx="75" cy="22" r="8.5" fill="#120A18" />
          <ellipse cx="36" cy="42" rx="8" ry="9.5" fill="#120A18" transform="rotate(-15, 36, 42)" />
          <ellipse cx="64" cy="42" rx="8" ry="9.5" fill="#120A18" transform="rotate(15, 64, 42)" />
          <CutePandaEyes leftX={36} rightX={64} cy={41} />
          <ellipse cx="50" cy="46" rx="3.5" ry="2.2" fill="#120A18" />
          <path d="M 45 49 Q 50 54 55 49" fill="#E46BA8" stroke="#120A18" strokeWidth="1.8" strokeLinecap="round" />
          <ellipse cx="34" cy="65" rx="6.5" ry="8" fill="#120A18" />
          <ellipse cx="72" cy="36" rx="7.5" ry="10" fill="#120A18" transform="rotate(25, 72, 36)" />
          <ellipse cx="38" cy="87" rx="8" ry="5" fill="#120A18" />
          <ellipse cx="62" cy="87" rx="8" ry="5" fill="#120A18" />
        </svg>
      );

    case 'wave-2':
      return (
        <svg viewBox="0 0 100 100" width={width} height={height}>
          <ellipse cx="50" cy="94" rx="22" ry="4" fill="rgba(0,0,0,0.25)" />
          <path d="M 32 50 C 30 75 32 88 50 88 C 68 88 70 75 68 50 Z" fill="#FFF8FC" stroke="#120A18" strokeWidth="2.5" />
          <circle cx="50" cy="42" r="28" fill="#FFF8FC" stroke="#120A18" strokeWidth="2.5" />
          <circle cx="25" cy="22" r="8.5" fill="#120A18" />
          <circle cx="75" cy="22" r="8.5" fill="#120A18" />
          <ellipse cx="36" cy="42" rx="8" ry="9.5" fill="#120A18" transform="rotate(-15, 36, 42)" />
          <ellipse cx="64" cy="42" rx="8" ry="9.5" fill="#120A18" transform="rotate(15, 64, 42)" />
          <CutePandaEyes leftX={36} rightX={64} cy={41} />
          <ellipse cx="50" cy="46" rx="3.5" ry="2.2" fill="#120A18" />
          <path d="M 45 49 Q 50 55 55 49" fill="#E46BA8" stroke="#120A18" strokeWidth="1.8" strokeLinecap="round" />
          <ellipse cx="28" cy="36" rx="7.5" ry="10" fill="#120A18" transform="rotate(-25, 28, 36)" />
          <ellipse cx="72" cy="36" rx="7.5" ry="10" fill="#120A18" transform="rotate(25, 72, 36)" />
          <ellipse cx="38" cy="87" rx="8" ry="5" fill="#120A18" />
          <ellipse cx="62" cy="87" rx="8" ry="5" fill="#120A18" />
        </svg>
      );

    case 'wave-3':
      return (
        <svg viewBox="0 0 100 100" width={width} height={height}>
          <ellipse cx="50" cy="94" rx="22" ry="4" fill="rgba(0,0,0,0.25)" />
          <path d="M 32 50 C 30 75 32 88 50 88 C 68 88 70 75 68 50 Z" fill="#FFF8FC" stroke="#120A18" strokeWidth="2.5" />
          <circle cx="50" cy="42" r="28" fill="#FFF8FC" stroke="#120A18" strokeWidth="2.5" />
          <circle cx="25" cy="22" r="8.5" fill="#120A18" />
          <circle cx="75" cy="22" r="8.5" fill="#120A18" />
          <ellipse cx="36" cy="42" rx="8" ry="9.5" fill="#120A18" transform="rotate(-15, 36, 42)" />
          <ellipse cx="64" cy="42" rx="8" ry="9.5" fill="#120A18" transform="rotate(15, 64, 42)" />
          <CutePandaEyes leftX={36} rightX={64} cy={41} />
          <ellipse cx="50" cy="46" rx="3.5" ry="2.2" fill="#120A18" />
          <path d="M 45 49 Q 50 54 55 49" fill="#E46BA8" stroke="#120A18" strokeWidth="1.8" strokeLinecap="round" />
          <ellipse cx="28" cy="36" rx="7.5" ry="10" fill="#120A18" transform="rotate(-25, 28, 36)" />
          <ellipse cx="66" cy="65" rx="6.5" ry="8" fill="#120A18" />
          <ellipse cx="38" cy="87" rx="8" ry="5" fill="#120A18" />
          <ellipse cx="62" cy="87" rx="8" ry="5" fill="#120A18" />
        </svg>
      );

    // =========================================================================
    // TURNING FRAMES (turn-1, turn-2)
    // =========================================================================
    case 'turn-1':
      return (
        <svg viewBox="0 0 100 100" width={width} height={height}>
          <ellipse cx="50" cy="94" rx="18" ry="4" fill="rgba(0,0,0,0.25)" />
          <path d="M 36 50 C 34 75 36 88 52 88 C 64 88 66 75 64 50 Z" fill="#FFF8FC" stroke="#120A18" strokeWidth="2.5" />
          <circle cx="46" cy="42" r="27" fill="#FFF8FC" stroke="#120A18" strokeWidth="2.5" />
          <circle cx="23" cy="22" r="8" fill="#120A18" />
          <ellipse cx="34" cy="42" rx="7" ry="8.5" fill="#120A18" />
          {/* Profile Eye */}
          <circle cx="34" cy="41" r="4.2" fill="#FFF" />
          <circle cx="34.3" cy="41.3" r="2.8" fill="#120A18" />
          <circle cx="33.5" cy="39.8" r="1.5" fill="#FFF" />
          <ellipse cx="44" cy="46" rx="3.5" ry="2.2" fill="#120A18" />
          <path d="M 40 49 Q 44 53 47 49" fill="none" stroke="#120A18" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="38" cy="65" rx="6.5" ry="8" fill="#120A18" />
          <ellipse cx="42" cy="87" rx="8" ry="5" fill="#120A18" />
          <ellipse cx="58" cy="87" rx="8" ry="5" fill="#120A18" />
        </svg>
      );

    case 'turn-2':
      return (
        <svg viewBox="0 0 100 100" width={width} height={height}>
          <ellipse cx="50" cy="94" rx="20" ry="4" fill="rgba(0,0,0,0.25)" />
          <path d="M 34 50 C 32 75 34 88 50 88 C 66 88 68 75 66 50 Z" fill="#FFF8FC" stroke="#120A18" strokeWidth="2.5" />
          <circle cx="48" cy="42" r="28" fill="#FFF8FC" stroke="#120A18" strokeWidth="2.5" />
          <circle cx="24" cy="22" r="8.5" fill="#120A18" />
          <circle cx="72" cy="22" r="8.5" fill="#120A18" />
          <ellipse cx="35" cy="42" rx="7.5" ry="9" fill="#120A18" transform="rotate(-15, 35, 42)" />
          <CutePandaEyes leftX={36} rightX={60} cy={41} />
          <ellipse cx="47" cy="46" rx="3.5" ry="2.2" fill="#120A18" />
          <path d="M 43 49 Q 47 54 51 49" fill="none" stroke="#120A18" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="36" cy="65" rx="6.5" ry="8" fill="#120A18" />
          <ellipse cx="62" cy="65" rx="6.5" ry="8" fill="#120A18" />
          <ellipse cx="38" cy="87" rx="8" ry="5" fill="#120A18" />
          <ellipse cx="62" cy="87" rx="8" ry="5" fill="#120A18" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 100 100" width={width} height={height}>
          <circle cx="50" cy="50" r="40" fill="#FFF8FC" stroke="#120A18" strokeWidth="3" />
        </svg>
      );
  }
}
