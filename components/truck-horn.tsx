"use client";

import { useEffect, useRef, useState } from "react";

// Local horn recordings (public/assets/audio). Two takes so repeated presses alternate.
const HORN_SOUNDS = [
  "/assets/audio/audiopapkin-truck-signal-298077.mp3",
  "/assets/audio/freesound_community-truck-horn-96668.mp3",
];

function SteeringWheel() {
  return (
    <svg className="truck-horn__art" viewBox="0 0 124 124" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="truck-horn-wood" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8c5433" />
          <stop offset="0.38" stopColor="#6b3f2b" />
          <stop offset="0.72" stopColor="#7f4a32" />
          <stop offset="1" stopColor="#4e2c20" />
        </linearGradient>
        <linearGradient id="truck-horn-brass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f2c75f" />
          <stop offset="0.55" stopColor="#d9a83f" />
          <stop offset="1" stopColor="#9e6922" />
        </linearGradient>
        <radialGradient id="truck-horn-face" cx="0.38" cy="0.32" r="0.95">
          <stop offset="0" stopColor="#c0513a" />
          <stop offset="1" stopColor="#8f3526" />
        </radialGradient>
      </defs>
      <g transform="translate(12 12)">
        <circle cx="50" cy="50" r="49.2" fill="none" stroke="rgba(20, 10, 6, 0.5)" strokeWidth="0.8" />
        <circle cx="50" cy="50" r="48.6" fill="none" stroke="url(#truck-horn-brass)" strokeWidth="2.2" />
        <circle cx="50" cy="50" r="43" fill="none" stroke="url(#truck-horn-wood)" strokeWidth="10.5" />
        <circle cx="50" cy="50" r="37.6" fill="none" stroke="url(#truck-horn-brass)" strokeWidth="1" opacity="0.55" />
        <path d="M 11 31.8 A 43 43 0 0 1 89 31.8" fill="none" stroke="rgba(247, 237, 219, 0.14)" strokeWidth="3" strokeLinecap="round" />
        <g strokeLinecap="butt" fill="none" strokeWidth="10.5">
          <path d="M 12 70.2 A 43 43 0 0 1 8.3 60.4" stroke="#a8432f" />
          <path d="M 7.8 58.2 A 43 43 0 0 1 7 49.2" stroke="#3f6b50" />
          <path d="M 7 50.8 A 43 43 0 0 1 7.8 41.8" stroke="#3f6b50" />
          <path d="M 8.3 39.6 A 43 43 0 0 1 12 29.8" stroke="#a8432f" />
          <path d="M 47 7.1 A 43 43 0 0 1 53 7.1" stroke="#f7eddb" opacity="0.5" />
          <path d="M 53 92.9 A 43 43 0 0 1 47 92.9" stroke="#f7eddb" opacity="0.5" />
        </g>
        <g fill="#e3b45c" stroke="rgba(43, 23, 18, 0.55)" strokeWidth="0.5">
          <circle cx="80.4" cy="80.4" r="1.5" />
          <circle cx="19.6" cy="80.4" r="1.5" />
          <circle cx="19.6" cy="19.6" r="1.5" />
          <circle cx="80.4" cy="19.6" r="1.5" />
        </g>
        <g fill="none" strokeLinecap="round">
          <g stroke="url(#truck-horn-wood)" strokeWidth="6.5">
            <path d="M 36.3 52.9 L 13.3 57.8" />
            <path d="M 63.7 52.9 L 86.7 57.8" />
            <path d="M 50 64 L 50 87.5" />
          </g>
          <g stroke="#d9a83f" strokeWidth="1.1" opacity="0.38">
            <path d="M 36.3 52.9 L 13.3 57.8" />
            <path d="M 63.7 52.9 L 86.7 57.8" />
            <path d="M 50 64 L 50 87.5" />
          </g>
        </g>
        <g className="truck-horn__hub">
          <circle cx="50" cy="50" r="18" fill="#2b1712" />
          <circle cx="50" cy="50" r="16" fill="none" stroke="url(#truck-horn-brass)" strokeWidth="2.8" />
          <circle cx="50" cy="50" r="14.2" fill="url(#truck-horn-face)" />
          <circle cx="50" cy="50" r="11.6" fill="none" stroke="rgba(247, 237, 219, 0.42)" strokeWidth="0.9" />
          <g fill="none" stroke="#f7eddb" strokeWidth="2.2" strokeLinecap="round">
            <circle cx="50" cy="50" r="2.6" fill="#f7eddb" stroke="none" />
            <path d="M 45.74 47.02 A 5.2 5.2 0 0 0 45.74 52.98" />
            <path d="M 43.12 45.18 A 8.4 8.4 0 0 0 43.12 54.82" />
            <path d="M 54.26 47.02 A 5.2 5.2 0 0 1 54.26 52.98" />
            <path d="M 56.88 45.18 A 8.4 8.4 0 0 1 56.88 54.82" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export function TruckHorn() {
  const playersRef = useRef<HTMLAudioElement[]>([]);
  const previousIndexRef = useRef<number | null>(null);
  const pressTimerRef = useRef<number>(0);
  const [isPressed, setIsPressed] = useState(false);
  const [honkId, setHonkId] = useState(0);

  useEffect(() => {
    playersRef.current = HORN_SOUNDS.map((src) => {
      const audio = new Audio(src);
      audio.preload = "auto";
      audio.setAttribute("aria-hidden", "true");
      audio.className = "truck-horn__audio";
      document.body.appendChild(audio);
      return audio;
    });
    const players = playersRef.current;
    return () => {
      players.forEach((audio) => {
        audio.pause();
        audio.remove();
      });
      playersRef.current = [];
    };
  }, []);

  useEffect(() => () => window.clearTimeout(pressTimerRef.current), []);

  const playHorn = () => {
    let index = Math.floor(Math.random() * HORN_SOUNDS.length);
    const previous = previousIndexRef.current;
    if (previous !== null && HORN_SOUNDS.length > 1 && index === previous) {
      index = (index + 1) % HORN_SOUNDS.length;
    }
    previousIndexRef.current = index;

    // One horn at a time: stop whatever is sounding, then restart the chosen take.
    playersRef.current.forEach((audio, i) => {
      if (i === index) return;
      audio.pause();
      try { audio.currentTime = 0; } catch { /* not seekable yet */ }
    });
    const horn = playersRef.current[index];
    if (horn) {
      try { horn.currentTime = 0; } catch { /* not seekable yet */ }
      void horn.play().catch(() => { /* asset or autoplay unavailable; the press still animates */ });
    }

    setIsPressed(true);
    window.clearTimeout(pressTimerRef.current);
    pressTimerRef.current = window.setTimeout(() => setIsPressed(false), 170);
    setHonkId((id) => id + 1);
  };

  return (
    <div className="truck-horn">
      <button
        type="button"
        className={isPressed ? "truck-horn__wheel is-pressed" : "truck-horn__wheel"}
        aria-label="Sound the truck horn"
        onClick={playHorn}
      >
        <SteeringWheel />
        {honkId > 0 && (
          <svg key={honkId} className="truck-horn__waves" viewBox="0 0 124 124" aria-hidden="true" focusable="false">
            <g className="truck-horn__waves-side truck-horn__waves-side--left">
              <path d="M 8.8 52.6 A 54 54 0 0 0 8.8 71.4" />
              <path d="M 5.2 47.8 A 58.5 58.5 0 0 0 5.2 76.2" />
            </g>
            <g className="truck-horn__waves-side truck-horn__waves-side--right">
              <path d="M 115.2 52.6 A 54 54 0 0 1 115.2 71.4" />
              <path d="M 118.8 47.8 A 58.5 58.5 0 0 1 118.8 76.2" />
            </g>
          </svg>
        )}
      </button>
      <span className="truck-horn__label" lang="ur" dir="rtl">ہارن دبائیے</span>
    </div>
  );
}
