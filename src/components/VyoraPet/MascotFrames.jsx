import React from 'react';

/**
 * 2D Frame Renderer for VYORA Mascot Pet
 * Preserves the cute white otter character:
 * - Soft rounded white/cream body & head
 * - Dark shiny eyes with highlights & cute whiskers
 * - Pink blush cheeks & happy open mouth
 * - Articulated paws & feet for frame-by-frame walking, sitting, waving & idling
 */
export default function MascotFrames({ frameName, width = 56, height = 56 }) {
  // Render frame SVG based on frameName
  switch (frameName) {
    // =========================================================================
    // IDLE FRAMES (Breathing & Blinking)
    // =========================================================================
    case 'idle-1':
      return (
        <svg viewBox="0 0 100 100" width={width} height={height}>
          <ellipse cx="50" cy="94" rx="22" ry="4" fill="rgba(0,0,0,0.25)" />
          {/* Body */}
          <path d="M 32 50 C 30 75 32 88 50 88 C 68 88 70 75 68 50 Z" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          {/* Head */}
          <circle cx="50" cy="42" r="28" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          {/* Ears */}
          <circle cx="26" cy="24" r="7" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          <circle cx="74" cy="24" r="7" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          {/* Blush */}
          <ellipse cx="34" cy="46" rx="6" ry="4" fill="#FFA5C5" opacity="0.75" />
          <ellipse cx="66" cy="46" rx="6" ry="4" fill="#FFA5C5" opacity="0.75" />
          {/* Eyes */}
          <circle cx="38" cy="40" r="4.5" fill="#120A18" />
          <circle cx="62" cy="40" r="4.5" fill="#120A18" />
          <circle cx="39.5" cy="38.5" r="1.8" fill="#FFF" />
          <circle cx="63.5" cy="38.5" r="1.8" fill="#FFF" />
          {/* Nose & Smile */}
          <ellipse cx="50" cy="45" rx="3.5" ry="2.5" fill="#120A18" />
          <path d="M 46 48 Q 50 53 54 48" fill="none" stroke="#120A18" strokeWidth="2" strokeLinecap="round" />
          {/* Paws */}
          <ellipse cx="36" cy="64" rx="6" ry="8" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
          <ellipse cx="64" cy="64" rx="6" ry="8" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
          {/* Feet */}
          <ellipse cx="38" cy="87" rx="8" ry="5" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
          <ellipse cx="62" cy="87" rx="8" ry="5" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
        </svg>
      );

    case 'idle-2':
      return (
        <svg viewBox="0 0 100 100" width={width} height={height}>
          <ellipse cx="50" cy="94" rx="22" ry="4" fill="rgba(0,0,0,0.25)" />
          {/* Body */}
          <path d="M 32 51 C 30 76 32 88 50 88 C 68 88 70 76 68 51 Z" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          {/* Head */}
          <circle cx="50" cy="43" r="28" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          {/* Ears */}
          <circle cx="26" cy="25" r="7" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          <circle cx="74" cy="25" r="7" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          {/* Blush */}
          <ellipse cx="34" cy="47" rx="6" ry="4" fill="#FFA5C5" opacity="0.8" />
          <ellipse cx="66" cy="47" rx="6" ry="4" fill="#FFA5C5" opacity="0.8" />
          {/* Blinking Eyes (Happy arcs) */}
          <path d="M 34 40 Q 38 36 42 40" fill="none" stroke="#120A18" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 58 40 Q 62 36 66 40" fill="none" stroke="#120A18" strokeWidth="2.5" strokeLinecap="round" />
          {/* Nose & Smile */}
          <ellipse cx="50" cy="46" rx="3.5" ry="2.5" fill="#120A18" />
          <path d="M 45 49 Q 50 54 55 49" fill="#E46BA8" stroke="#120A18" strokeWidth="1.8" strokeLinecap="round" />
          {/* Paws */}
          <ellipse cx="36" cy="65" rx="6" ry="8" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
          <ellipse cx="64" cy="65" rx="6" ry="8" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
          {/* Feet */}
          <ellipse cx="38" cy="87" rx="8" ry="5" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
          <ellipse cx="62" cy="87" rx="8" ry="5" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
        </svg>
      );

    // =========================================================================
    // WALKING STEP FRAMES (walk-1, walk-2, walk-3, walk-4)
    // =========================================================================
    case 'walk-1': // Left foot forward, right foot back, head tilted slight left
      return (
        <svg viewBox="0 0 100 100" width={width} height={height}>
          <ellipse cx="50" cy="94" rx="20" ry="4" fill="rgba(0,0,0,0.25)" />
          {/* Body */}
          <path d="M 33 49 C 30 74 32 87 50 87 C 68 87 70 74 67 49 Z" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          {/* Head */}
          <g transform="rotate(-3, 50, 42)">
            <circle cx="50" cy="41" r="28" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
            <circle cx="26" cy="23" r="7" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
            <circle cx="74" cy="23" r="7" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
            <ellipse cx="34" cy="45" rx="6" ry="4" fill="#FFA5C5" opacity="0.75" />
            <ellipse cx="66" cy="45" rx="6" ry="4" fill="#FFA5C5" opacity="0.75" />
            <circle cx="38" cy="39" r="4.5" fill="#120A18" />
            <circle cx="62" cy="39" r="4.5" fill="#120A18" />
            <circle cx="39.5" cy="37.5" r="1.8" fill="#FFF" />
            <circle cx="63.5" cy="37.5" r="1.8" fill="#FFF" />
            <ellipse cx="50" cy="44" rx="3.5" ry="2.5" fill="#120A18" />
            <path d="M 46 47 Q 50 52 54 47" fill="none" stroke="#120A18" strokeWidth="2" strokeLinecap="round" />
          </g>
          {/* Swinging Paws */}
          <ellipse cx="30" cy="62" rx="6" ry="8" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" transform="rotate(15, 30, 62)" />
          <ellipse cx="68" cy="66" rx="6" ry="8" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" transform="rotate(-15, 68, 66)" />
          {/* Feet Step: Left foot forward (down), Right foot lifted */}
          <ellipse cx="30" cy="88" rx="9" ry="5" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
          <ellipse cx="68" cy="83" rx="7" ry="5" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
        </svg>
      );

    case 'walk-2': // Passing mid-step (center high hop)
      return (
        <svg viewBox="0 0 100 100" width={width} height={height}>
          <ellipse cx="50" cy="95" rx="16" ry="3.5" fill="rgba(0,0,0,0.2)" />
          {/* Body lifted up */}
          <path d="M 32 46 C 30 71 32 84 50 84 C 68 84 70 71 68 46 Z" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          {/* Head */}
          <circle cx="50" cy="38" r="28" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          <circle cx="26" cy="20" r="7" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          <circle cx="74" cy="20" r="7" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          <ellipse cx="34" cy="42" rx="6" ry="4" fill="#FFA5C5" opacity="0.8" />
          <ellipse cx="66" cy="42" rx="6" ry="4" fill="#FFA5C5" opacity="0.8" />
          <circle cx="38" cy="36" r="4.5" fill="#120A18" />
          <circle cx="62" cy="36" r="4.5" fill="#120A18" />
          <circle cx="39.5" cy="34.5" r="1.8" fill="#FFF" />
          <circle cx="63.5" cy="34.5" r="1.8" fill="#FFF" />
          <ellipse cx="50" cy="41" rx="3.5" ry="2.5" fill="#120A18" />
          <path d="M 46 44 Q 50 49 54 44" fill="none" stroke="#120A18" strokeWidth="2" strokeLinecap="round" />
          {/* Neutral Paws */}
          <ellipse cx="34" cy="60" rx="6" ry="8" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
          <ellipse cx="66" cy="60" rx="6" ry="8" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
          {/* Feet: Mid-stride */}
          <ellipse cx="40" cy="85" rx="8" ry="5" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
          <ellipse cx="60" cy="85" rx="8" ry="5" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
        </svg>
      );

    case 'walk-3': // Right foot forward, left foot back, head tilted right
      return (
        <svg viewBox="0 0 100 100" width={width} height={height}>
          <ellipse cx="50" cy="94" rx="20" ry="4" fill="rgba(0,0,0,0.25)" />
          {/* Body */}
          <path d="M 33 49 C 30 74 32 87 50 87 C 68 87 70 74 67 49 Z" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          {/* Head */}
          <g transform="rotate(3, 50, 42)">
            <circle cx="50" cy="41" r="28" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
            <circle cx="26" cy="23" r="7" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
            <circle cx="74" cy="23" r="7" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
            <ellipse cx="34" cy="45" rx="6" ry="4" fill="#FFA5C5" opacity="0.75" />
            <ellipse cx="66" cy="45" rx="6" ry="4" fill="#FFA5C5" opacity="0.75" />
            <circle cx="38" cy="39" r="4.5" fill="#120A18" />
            <circle cx="62" cy="39" r="4.5" fill="#120A18" />
            <circle cx="39.5" cy="37.5" r="1.8" fill="#FFF" />
            <circle cx="63.5" cy="37.5" r="1.8" fill="#FFF" />
            <ellipse cx="50" cy="44" rx="3.5" ry="2.5" fill="#120A18" />
            <path d="M 46 47 Q 50 52 54 47" fill="none" stroke="#120A18" strokeWidth="2" strokeLinecap="round" />
          </g>
          {/* Swinging Paws */}
          <ellipse cx="32" cy="66" rx="6" ry="8" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" transform="rotate(-15, 32, 66)" />
          <ellipse cx="70" cy="62" rx="6" ry="8" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" transform="rotate(15, 70, 62)" />
          {/* Feet Step: Right foot forward (down), Left foot lifted */}
          <ellipse cx="32" cy="83" rx="7" ry="5" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
          <ellipse cx="70" cy="88" rx="9" ry="5" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
        </svg>
      );

    case 'walk-4': // Contact grounding step
      return (
        <svg viewBox="0 0 100 100" width={width} height={height}>
          <ellipse cx="50" cy="94" rx="22" ry="4.5" fill="rgba(0,0,0,0.3)" />
          {/* Body grounded */}
          <path d="M 32 51 C 30 76 32 88 50 88 C 68 88 70 76 68 51 Z" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          {/* Head */}
          <circle cx="50" cy="43" r="28" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          <circle cx="26" cy="25" r="7" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          <circle cx="74" cy="25" r="7" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          <ellipse cx="34" cy="47" rx="6" ry="4" fill="#FFA5C5" opacity="0.75" />
          <ellipse cx="66" cy="47" rx="6" ry="4" fill="#FFA5C5" opacity="0.75" />
          <circle cx="38" cy="41" r="4.5" fill="#120A18" />
          <circle cx="62" cy="41" r="4.5" fill="#120A18" />
          <circle cx="39.5" cy="39.5" r="1.8" fill="#FFF" />
          <circle cx="63.5" cy="39.5" r="1.8" fill="#FFF" />
          <ellipse cx="50" cy="46" rx="3.5" ry="2.5" fill="#120A18" />
          <path d="M 46 49 Q 50 54 54 49" fill="none" stroke="#120A18" strokeWidth="2" strokeLinecap="round" />
          {/* Paws */}
          <ellipse cx="36" cy="65" rx="6" ry="8" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
          <ellipse cx="64" cy="65" rx="6" ry="8" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
          {/* Feet both on ground */}
          <ellipse cx="36" cy="88" rx="8" ry="5" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
          <ellipse cx="64" cy="88" rx="8" ry="5" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
        </svg>
      );

    // =========================================================================
    // SITTING FRAMES (sit-1, sit-2)
    // =========================================================================
    case 'sit-1':
      return (
        <svg viewBox="0 0 100 100" width={width} height={height}>
          <ellipse cx="50" cy="94" rx="24" ry="5" fill="rgba(0,0,0,0.3)" />
          {/* Squat Body */}
          <path d="M 28 58 C 26 80 30 90 50 90 C 70 90 74 80 72 58 Z" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          {/* Head resting lower */}
          <circle cx="50" cy="46" r="27" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          <circle cx="27" cy="29" r="6.5" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          <circle cx="73" cy="29" r="6.5" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          <ellipse cx="34" cy="50" rx="6" ry="4" fill="#FFA5C5" opacity="0.8" />
          <ellipse cx="66" cy="50" rx="6" ry="4" fill="#FFA5C5" opacity="0.8" />
          <circle cx="38" cy="44" r="4.5" fill="#120A18" />
          <circle cx="62" cy="44" r="4.5" fill="#120A18" />
          <circle cx="39.5" cy="42.5" r="1.8" fill="#FFF" />
          <circle cx="63.5" cy="42.5" r="1.8" fill="#FFF" />
          <ellipse cx="50" cy="49" rx="3.5" ry="2.5" fill="#120A18" />
          <path d="M 46 52 Q 50 56 54 52" fill="none" stroke="#120A18" strokeWidth="2" strokeLinecap="round" />
          {/* Paws resting on lap */}
          <ellipse cx="42" cy="68" rx="6" ry="6" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
          <ellipse cx="58" cy="68" rx="6" ry="6" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
          {/* Side feet */}
          <ellipse cx="26" cy="88" rx="9" ry="5" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
          <ellipse cx="74" cy="88" rx="9" ry="5" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
        </svg>
      );

    case 'sit-2':
      return (
        <svg viewBox="0 0 100 100" width={width} height={height}>
          <ellipse cx="50" cy="94" rx="24" ry="5" fill="rgba(0,0,0,0.3)" />
          {/* Squat Body */}
          <path d="M 28 59 C 26 81 30 90 50 90 C 70 90 74 81 72 59 Z" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          {/* Head resting lower - happy closed eyes */}
          <circle cx="50" cy="47" r="27" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          <circle cx="27" cy="30" r="6.5" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          <circle cx="73" cy="30" r="6.5" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          <ellipse cx="34" cy="51" rx="6" ry="4" fill="#FFA5C5" opacity="0.85" />
          <ellipse cx="66" cy="51" rx="6" ry="4" fill="#FFA5C5" opacity="0.85" />
          {/* Happy Closed Eye Arcs */}
          <path d="M 34 45 Q 38 41 42 45" fill="none" stroke="#120A18" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 58 45 Q 62 41 66 45" fill="none" stroke="#120A18" strokeWidth="2.5" strokeLinecap="round" />
          <ellipse cx="50" cy="50" rx="3.5" ry="2.5" fill="#120A18" />
          <path d="M 45 53 Q 50 58 55 53" fill="#E46BA8" stroke="#120A18" strokeWidth="1.8" strokeLinecap="round" />
          {/* Paws */}
          <ellipse cx="42" cy="69" rx="6" ry="6" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
          <ellipse cx="58" cy="69" rx="6" ry="6" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
          {/* Feet */}
          <ellipse cx="26" cy="88" rx="9" ry="5" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
          <ellipse cx="74" cy="88" rx="9" ry="5" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
        </svg>
      );

    // =========================================================================
    // WAVING / HAPPY FRAMES (wave-1, wave-2, wave-3)
    // =========================================================================
    case 'wave-1': // Raised right paw
      return (
        <svg viewBox="0 0 100 100" width={width} height={height}>
          <ellipse cx="50" cy="94" rx="22" ry="4" fill="rgba(0,0,0,0.25)" />
          <path d="M 32 50 C 30 75 32 88 50 88 C 68 88 70 75 68 50 Z" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          <circle cx="50" cy="42" r="28" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          <circle cx="26" cy="24" r="7" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          <circle cx="74" cy="24" r="7" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          <ellipse cx="34" cy="46" rx="6" ry="4" fill="#FFA5C5" opacity="0.8" />
          <ellipse cx="66" cy="46" rx="6" ry="4" fill="#FFA5C5" opacity="0.8" />
          <circle cx="38" cy="40" r="4.5" fill="#120A18" />
          <circle cx="62" cy="40" r="4.5" fill="#120A18" />
          <circle cx="39.5" cy="38.5" r="1.8" fill="#FFF" />
          <circle cx="63.5" cy="38.5" r="1.8" fill="#FFF" />
          <ellipse cx="50" cy="45" rx="3.5" ry="2.5" fill="#120A18" />
          <path d="M 45 48 Q 50 53 55 48" fill="#E46BA8" stroke="#120A18" strokeWidth="1.8" strokeLinecap="round" />
          {/* Left Paw resting, Right Paw raised up */}
          <ellipse cx="34" cy="65" rx="6" ry="8" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
          <ellipse cx="72" cy="36" rx="7" ry="10" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.2" transform="rotate(25, 72, 36)" />
          {/* Peace / Waving sign paws */}
          <circle cx="72" cy="25" r="3" fill="#FFF5FA" stroke="#28152F" strokeWidth="1.5" />
          <circle cx="77" cy="27" r="3" fill="#FFF5FA" stroke="#28152F" strokeWidth="1.5" />
          <ellipse cx="38" cy="87" rx="8" ry="5" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
          <ellipse cx="62" cy="87" rx="8" ry="5" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
        </svg>
      );

    case 'wave-2': // Both paws raised peace sign pose (matches reference mascot!)
      return (
        <svg viewBox="0 0 100 100" width={width} height={height}>
          <ellipse cx="50" cy="94" rx="22" ry="4" fill="rgba(0,0,0,0.25)" />
          <path d="M 32 50 C 30 75 32 88 50 88 C 68 88 70 75 68 50 Z" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          <circle cx="50" cy="42" r="28" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          <circle cx="26" cy="24" r="7" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          <circle cx="74" cy="24" r="7" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          <ellipse cx="34" cy="46" rx="6" ry="4" fill="#FFA5C5" opacity="0.85" />
          <ellipse cx="66" cy="46" rx="6" ry="4" fill="#FFA5C5" opacity="0.85" />
          <circle cx="38" cy="40" r="4.5" fill="#120A18" />
          <circle cx="62" cy="40" r="4.5" fill="#120A18" />
          <circle cx="39.5" cy="38.5" r="1.8" fill="#FFF" />
          <circle cx="63.5" cy="38.5" r="1.8" fill="#FFF" />
          <ellipse cx="50" cy="45" rx="3.5" ry="2.5" fill="#120A18" />
          <path d="M 45 48 Q 50 54 55 48" fill="#E46BA8" stroke="#120A18" strokeWidth="1.8" strokeLinecap="round" />
          {/* BOTH PAWS RAISED PEACE SIGN */}
          <g transform="translate(-4, -6)">
            <ellipse cx="28" cy="36" rx="7" ry="10" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.2" transform="rotate(-25, 28, 36)" />
            <circle cx="28" cy="25" r="3" fill="#FFF5FA" stroke="#28152F" strokeWidth="1.5" />
            <circle cx="23" cy="27" r="3" fill="#FFF5FA" stroke="#28152F" strokeWidth="1.5" />
          </g>
          <g transform="translate(4, -6)">
            <ellipse cx="72" cy="36" rx="7" ry="10" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.2" transform="rotate(25, 72, 36)" />
            <circle cx="72" cy="25" r="3" fill="#FFF5FA" stroke="#28152F" strokeWidth="1.5" />
            <circle cx="77" cy="27" r="3" fill="#FFF5FA" stroke="#28152F" strokeWidth="1.5" />
          </g>
          <ellipse cx="38" cy="87" rx="8" ry="5" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
          <ellipse cx="62" cy="87" rx="8" ry="5" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
        </svg>
      );

    case 'wave-3': // Waving left paw
      return (
        <svg viewBox="0 0 100 100" width={width} height={height}>
          <ellipse cx="50" cy="94" rx="22" ry="4" fill="rgba(0,0,0,0.25)" />
          <path d="M 32 50 C 30 75 32 88 50 88 C 68 88 70 75 68 50 Z" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          <circle cx="50" cy="42" r="28" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          <circle cx="26" cy="24" r="7" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          <circle cx="74" cy="24" r="7" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          <ellipse cx="34" cy="46" rx="6" ry="4" fill="#FFA5C5" opacity="0.8" />
          <ellipse cx="66" cy="46" rx="6" ry="4" fill="#FFA5C5" opacity="0.8" />
          <circle cx="38" cy="40" r="4.5" fill="#120A18" />
          <circle cx="62" cy="40" r="4.5" fill="#120A18" />
          <circle cx="39.5" cy="38.5" r="1.8" fill="#FFF" />
          <circle cx="63.5" cy="38.5" r="1.8" fill="#FFF" />
          <ellipse cx="50" cy="45" rx="3.5" ry="2.5" fill="#120A18" />
          <path d="M 45 48 Q 50 53 55 48" fill="#E46BA8" stroke="#120A18" strokeWidth="1.8" strokeLinecap="round" />
          {/* Left Paw raised, Right Paw resting */}
          <ellipse cx="28" cy="36" rx="7" ry="10" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.2" transform="rotate(-25, 28, 36)" />
          <circle cx="28" cy="25" r="3" fill="#FFF5FA" stroke="#28152F" strokeWidth="1.5" />
          <circle cx="23" cy="27" r="3" fill="#FFF5FA" stroke="#28152F" strokeWidth="1.5" />
          <ellipse cx="66" cy="65" rx="6" ry="8" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
          <ellipse cx="38" cy="87" rx="8" ry="5" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
          <ellipse cx="62" cy="87" rx="8" ry="5" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
        </svg>
      );

    // =========================================================================
    // TURNING FRAMES (turn-1, turn-2)
    // =========================================================================
    case 'turn-1': // Side profile preparing to turn
      return (
        <svg viewBox="0 0 100 100" width={width} height={height}>
          <ellipse cx="50" cy="94" rx="18" ry="4" fill="rgba(0,0,0,0.25)" />
          <path d="M 36 50 C 34 75 36 88 52 88 C 64 88 66 75 64 50 Z" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          <circle cx="46" cy="42" r="27" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          <circle cx="24" cy="24" r="6.5" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          <ellipse cx="34" cy="47" rx="5" ry="4" fill="#FFA5C5" opacity="0.8" />
          <circle cx="34" cy="40" r="4.5" fill="#120A18" />
          <circle cx="35.5" cy="38.5" r="1.8" fill="#FFF" />
          <ellipse cx="44" cy="45" rx="3.5" ry="2.5" fill="#120A18" />
          <path d="M 40 48 Q 44 52 47 48" fill="none" stroke="#120A18" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="38" cy="65" rx="6" ry="8" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
          <ellipse cx="42" cy="87" rx="8" ry="5" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
          <ellipse cx="58" cy="87" rx="8" ry="5" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
        </svg>
      );

    case 'turn-2': // 3/4 turn step
      return (
        <svg viewBox="0 0 100 100" width={width} height={height}>
          <ellipse cx="50" cy="94" rx="20" ry="4" fill="rgba(0,0,0,0.25)" />
          <path d="M 34 50 C 32 75 34 88 50 88 C 66 88 68 75 66 50 Z" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          <circle cx="48" cy="42" r="28" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          <circle cx="25" cy="24" r="7" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          <circle cx="71" cy="24" r="7" fill="#FFF5FA" stroke="#28152F" strokeWidth="2.5" />
          <ellipse cx="33" cy="46" rx="6" ry="4" fill="#FFA5C5" opacity="0.8" />
          <circle cx="36" cy="40" r="4.5" fill="#120A18" />
          <circle cx="37.5" cy="38.5" r="1.8" fill="#FFF" />
          <circle cx="58" cy="40" r="4" fill="#120A18" />
          <ellipse cx="47" cy="45" rx="3.5" ry="2.5" fill="#120A18" />
          <path d="M 43 48 Q 47 53 51 48" fill="none" stroke="#120A18" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="36" cy="65" rx="6" ry="8" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
          <ellipse cx="62" cy="65" rx="6" ry="8" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
          <ellipse cx="38" cy="87" rx="8" ry="5" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
          <ellipse cx="62" cy="87" rx="8" ry="5" fill="#FFF5FA" stroke="#28152F" strokeWidth="2" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 100 100" width={width} height={height}>
          <circle cx="50" cy="50" r="40" fill="#FFF5FA" stroke="#28152F" strokeWidth="3" />
        </svg>
      );
  }
}
