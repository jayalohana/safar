"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { DEFAULT_BACKGROUND, SPOTIFY_URL, defaultPlaylist, routes, type Route, type Track } from "@/lib/safar-data";

type YouTubePlayer = {
  playVideo: () => void;
  pauseVideo: () => void;
  cueVideoById: (args: { videoId: string; startSeconds?: number }) => void;
  loadVideoById: (args: { videoId: string; startSeconds?: number }) => void;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  getCurrentTime: () => number;
  getDuration: () => number;
  destroy: () => void;
};

type YouTubeEvent = { data: number; target: YouTubePlayer };

declare global {
  interface Window {
    YT?: { Player: new (element: HTMLElement, options: Record<string, unknown>) => YouTubePlayer };
    onYouTubeIframeAPIReady?: () => void;
  }
}

let youtubeApiPromise: Promise<void> | null = null;

function loadYouTubeApi() {
  if (window.YT?.Player) return Promise.resolve();
  if (youtubeApiPromise) return youtubeApiPromise;
  youtubeApiPromise = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('script[src="https://www.youtube.com/iframe_api"]');
    window.onYouTubeIframeAPIReady = resolve;
    if (existing) return;
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    script.onerror = () => reject(new Error("YouTube player API failed to load"));
    document.head.appendChild(script);
  });
  return youtubeApiPromise;
}

type IconName = "spotify" | "external" | "play" | "pause" | "next" | "previous" | "rewind" | "forward" | "road" | "pin" | "music";

function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    spotify: <><circle cx="12" cy="12" r="10" fill="currentColor" stroke="none"/><path d="M6.8 9.1c3.5-1 7.7-.7 10.5.8M7.4 12.1c3-.8 6.8-.5 9.3.8M8 14.9c2.6-.6 5.5-.4 7.8.7" stroke="#17140e"/></>,
    external: <><path d="M14 5h5v5M19 5l-8 8"/><path d="M17 13v5H6V7h5"/></>,
    play: <path d="m9 7 8 5-8 5z" fill="currentColor" stroke="none"/>,
    pause: <><path d="M9 7v10M15 7v10" strokeWidth="2.4"/></>,
    next: <><path d="m8 7 7 5-7 5z" fill="currentColor" stroke="none"/><path d="M17 7v10" strokeWidth="2"/></>,
    previous: <><path d="m16 7-7 5 7 5z" fill="currentColor" stroke="none"/><path d="M7 7v10" strokeWidth="2"/></>,
    rewind: <><path d="M8 7 4 11l4 4"/><path d="M5 11h8a5 5 0 1 1-4.5 7.2"/><text x="11.8" y="15.2" fontSize="7" fill="currentColor" stroke="none">10</text></>,
    forward: <><path d="m16 7 4 4-4 4"/><path d="M19 11h-8a5 5 0 1 0 4.5 7.2"/><text x="5.4" y="15.2" fontSize="7" fill="currentColor" stroke="none">10</text></>,
    road: <><path d="m9 20 2-16M15 20 13 4M12 7v2M12 12v2M12 17v2"/></>,
    pin: <><path d="M18 10c0 4-6 10-6 10S6 14 6 10a6 6 0 1 1 12 0Z"/><circle cx="12" cy="10" r="2"/></>,
    music: <><path d="M9 18V6l9-2v12"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="15.5" cy="16" r="2.5"/></>,
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

function formatTime(value: number, includeHours = false) {
  if (!Number.isFinite(value) || value < 0) return "00:00";
  const seconds = Math.floor(value % 60);
  const minutesTotal = Math.floor(value / 60);
  if (includeHours || minutesTotal >= 60) {
    const hours = Math.floor(minutesTotal / 60);
    return `${String(hours).padStart(2, "0")}:${String(minutesTotal % 60).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }
  return `${String(minutesTotal).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function BackgroundScene({ route }: { route: Route | null }) {
  const [visibleSrc, setVisibleSrc] = useState(DEFAULT_BACKGROUND);
  const [incomingSrc, setIncomingSrc] = useState<string | null>(null);

  useEffect(() => {
    const requested = route?.background || DEFAULT_BACKGROUND;
    if (requested === visibleSrc) return;
    let cancelled = false;
    const image = new Image();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const transitionMs = reducedMotion ? 40 : 1300;
    let timer = 0;
    const commit = (src: string) => {
      setIncomingSrc(src);
      timer = window.setTimeout(() => {
        if (cancelled) return;
        setVisibleSrc(src);
        setIncomingSrc(null);
      }, transitionMs);
    };
    image.onload = () => {
      if (cancelled) return;
      commit(requested);
    };
    image.onerror = () => {
      if (cancelled) return;
      // The route palette still crossfades while the supplied reference remains behind it.
      commit(DEFAULT_BACKGROUND);
    };
    image.src = requested;
    return () => { cancelled = true; window.clearTimeout(timer); };
  }, [route, visibleSrc]);

  return (
    <div className={`scene scene--${route?.tone || "default"}`} aria-hidden="true">
      <div className="scene__image" style={{ backgroundImage: `url(${visibleSrc})` }} />
      {incomingSrc && <div className="scene__image scene__image--incoming" style={{ backgroundImage: `url(${incomingSrc})` }} />}
      <div className="scene__route-tone" />
      <div className="scene__road-glint" />
      <div className="scene__scrim" />
    </div>
  );
}

function BrandLockup() {
  return (
    <div className="brand" aria-label="Safar">
      {/* <div className="brand__seal" aria-hidden="true"><span>س</span><i /></div> */}
      {/* <span className="brand__latin">SAFAR</span> */}
      <span className="brand__urdu" lang="ur" dir="rtl">سفر</span>
    </div>
  );
}

function RouteSelector({ activeRoute, onSelect }: { activeRoute: Route | null; onSelect: (route: Route) => void }) {
  return (
    <nav className="routes" aria-label="Road trip routes">
      <div className="routes__title">Routes</div>
      <div className="routes__rule" aria-hidden="true"><span /></div>
      <ul>
        {routes.map((route) => {
          const active = route.id === activeRoute?.id;
          return <li key={route.id}><button type="button" aria-pressed={active} className={active ? "is-active" : ""} onClick={() => onSelect(route)}><span className="routes__dot" aria-hidden="true" />{route.label}</button></li>;
        })}
      </ul>
    </nav>
  );
}

function JourneyProgress({ route, elapsed, travelled, remaining, songsCompleted }: { route: Route; elapsed: number; travelled: number; remaining: number; songsCompleted: number }) {
  const values: Array<{ icon?: IconName; value: string; label: string }> = [
    { value: formatTime(elapsed, true), label: "Elapsed" },
    { icon: "road", value: `${travelled} km`, label: "Travelled" },
    { icon: "pin", value: `${remaining} km`, label: "Left" },
    { icon: "music", value: String(songsCompleted), label: "Songs played" },
  ];
  return (
    <section className="journey" aria-label={`Journey progress for ${route.label}`}>
      <h2>{route.label}</h2>
      <div className="journey__stats">
        {values.map((item) => <div className="journey__stat" key={item.label}>{item.icon ? <Icon name={item.icon} size={21} /> : <span className="journey__clock" aria-hidden="true" />}<strong>{item.value}</strong><span>{item.label}</span></div>)}
      </div>
    </section>
  );
}

type PlayerProps = {
  track: Track;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  error: string | null;
  onToggle: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onSeekBy: (seconds: number) => void;
  onSeekTo: (seconds: number) => void;
  youtubeHostRef: React.RefObject<HTMLDivElement | null>;
};

function MusicPlayer({ track, isPlaying, currentTime, duration, error, onToggle, onPrevious, onNext, onSeekBy, onSeekTo, youtubeHostRef }: PlayerProps) {
  const safeDuration = duration || track.duration;
  return (
    <section className="player" aria-label="Music player">
      <div className="player__main">
        <div className="artwork artwork--youtube" aria-label={`YouTube player for ${track.title}`}>
          <div ref={youtubeHostRef} className="youtube-player" />
        </div>
        <div className="track-copy">
          <span className="now-playing">{error ? "Media required" : "Now playing"}</span>
          <h3>{track.title}</h3>
          <p role={error ? "alert" : undefined} aria-live={error ? "polite" : undefined}>{error || track.artist}</p>
        </div>
        <div className="controls">
          <button className="seek-control" onClick={() => onSeekBy(-10)} aria-label="Seek backward 10 seconds"><Icon name="rewind" /></button>
          <button onClick={onPrevious} aria-label="Previous track"><Icon name="previous" size={27} /></button>
          <button className="play-control" onClick={onToggle} aria-label={isPlaying ? "Pause" : "Play"}><Icon name={isPlaying ? "pause" : "play"} size={30} /></button>
          <button onClick={onNext} aria-label="Next track"><Icon name="next" size={27} /></button>
          <button className="seek-control" onClick={() => onSeekBy(10)} aria-label="Seek forward 10 seconds"><Icon name="forward" /></button>
        </div>. 
      </div>
      <div className="timeline">
        <time>{formatTime(currentTime)}</time>
        <input aria-label="Track progress" type="range" min="0" max={Math.max(safeDuration, 1)} step="0.1" value={Math.min(currentTime, safeDuration)} onChange={(event) => onSeekTo(Number(event.target.value))} style={{ "--progress": `${Math.min((currentTime / Math.max(safeDuration, 1)) * 100, 100)}%` } as React.CSSProperties} />
        <time>{formatTime(safeDuration)}</time>
      </div>
    </section>
  );
}

export function SafarExperience() {
  const youtubeHostRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YouTubePlayer | null>(null);
  const playerReadyRef = useRef(false);
  const currentTrackRef = useRef<Track>(defaultPlaylist.tracks[0]);
  const endedHandlerRef = useRef<() => void>(() => undefined);
  const shouldResumeRef = useRef(false);
  const restoreTimeRef = useRef(0);
  const stateRef = useRef({ routeId: null as string | null, trackIndex: 0, currentTime: 0, completedDuration: 0, songsCompleted: 0 });
  const [activeRoute, setActiveRoute] = useState<Route | null>(null);
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [songsCompleted, setSongsCompleted] = useState(0);
  const [completedDuration, setCompletedDuration] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const playlist = activeRoute?.tracks || defaultPlaylist.tracks;
  const currentTrack = playlist[trackIndex] || playlist[0];
  currentTrackRef.current = currentTrack;
  const totalPlaylistDuration = useMemo(() => playlist.reduce((sum, track) => sum + track.duration, 0), [playlist]);
  const listenedDuration = completedDuration + currentTime;
  const progress = activeRoute ? Math.min(Math.max(listenedDuration / totalPlaylistDuration, 0), 1) : 0;
  const travelled = activeRoute ? Math.round(activeRoute.distanceKm * progress) : 0;
  const remaining = activeRoute ? Math.max(activeRoute.distanceKm - travelled, 0) : 0;

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("safar-state") || "null") as { routeId?: string | null; trackIndex?: number; currentTime?: number; completedDuration?: number; songsCompleted?: number } | null;
      if (!saved) return;
      const savedRoute = routes.find((route) => route.id === saved.routeId) || null;
      const targetPlaylist = savedRoute?.tracks || defaultPlaylist.tracks;
      const savedIndex = Math.min(Math.max(saved.trackIndex || 0, 0), targetPlaylist.length - 1);
      restoreTimeRef.current = Math.max(saved.currentTime || 0, 0);
      setActiveRoute(savedRoute);
      setTrackIndex(savedIndex);
      setCompletedDuration(Math.max(Number(saved.completedDuration) || 0, 0));
      setSongsCompleted(Math.max(Math.floor(Number(saved.songsCompleted) || 0), 0));
    } catch { /* Corrupt local state should never block the player. */ }
  }, []);

  useEffect(() => {
    stateRef.current = { routeId: activeRoute?.id || null, trackIndex, currentTime, completedDuration, songsCompleted };
  }, [activeRoute, trackIndex, currentTime, completedDuration, songsCompleted]);

  useEffect(() => {
    const persist = () => localStorage.setItem("safar-state", JSON.stringify(stateRef.current));
    const timer = window.setInterval(persist, 5000);
    window.addEventListener("beforeunload", persist);
    return () => { window.clearInterval(timer); window.removeEventListener("beforeunload", persist); persist(); };
  }, []);

  useEffect(() => {
    let cancelled = false;
    loadYouTubeApi().then(() => {
      if (cancelled || !youtubeHostRef.current || !window.YT) return;
      playerRef.current = new window.YT.Player(youtubeHostRef.current, {
        width: 200,
        height: 200,
        videoId: currentTrackRef.current.youtubeId,
        host: "https://www.youtube-nocookie.com",
        playerVars: { controls: 0, playsinline: 1, rel: 0, origin: window.location.origin },
        events: {
          onReady: (event: YouTubeEvent) => {
            playerReadyRef.current = true;
            const startSeconds = restoreTimeRef.current;
            restoreTimeRef.current = 0;
            event.target.cueVideoById({ videoId: currentTrackRef.current.youtubeId, startSeconds });
            setDuration(event.target.getDuration() || currentTrackRef.current.duration);
          },
          onStateChange: (event: YouTubeEvent) => {
            if (event.data === 1) { setIsPlaying(true); setError(null); }
            if (event.data === 2) setIsPlaying(false);
            if (event.data === 0) endedHandlerRef.current();
          },
          onError: () => { setIsPlaying(false); setError("This YouTube track is unavailable. Try the next one."); },
          onAutoplayBlocked: () => { setIsPlaying(false); setError("Press play to continue this journey."); },
        },
      });
    }).catch(() => setError("YouTube could not load. Check your connection and try again."));
    return () => {
      cancelled = true;
      playerReadyRef.current = false;
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!playerReadyRef.current || !playerRef.current) return;
    const startSeconds = restoreTimeRef.current;
    restoreTimeRef.current = 0;
    setCurrentTime(startSeconds);
    setDuration(currentTrack.duration);
    setError(null);
    if (shouldResumeRef.current) playerRef.current.loadVideoById({ videoId: currentTrack.youtubeId, startSeconds });
    else playerRef.current.cueVideoById({ videoId: currentTrack.youtubeId, startSeconds });
  }, [currentTrack.id, currentTrack.youtubeId, currentTrack.duration]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      const player = playerRef.current;
      if (!playerReadyRef.current || !player) return;
      const nextTime = player.getCurrentTime();
      const nextDuration = player.getDuration();
      if (Number.isFinite(nextTime)) setCurrentTime(nextTime);
      if (Number.isFinite(nextDuration) && nextDuration > 0) setDuration(nextDuration);
    }, 250);
    return () => window.clearInterval(timer);
  }, []);

  const goToTrack = useCallback((nextIndex: number, resume = isPlaying) => {
    shouldResumeRef.current = resume;
    setTrackIndex((nextIndex + playlist.length) % playlist.length);
  }, [isPlaying, playlist.length]);

  const handleNext = useCallback(() => goToTrack(trackIndex + 1), [goToTrack, trackIndex]);

  const handlePrevious = useCallback(() => {
    const player = playerRef.current;
    if (player && player.getCurrentTime() > 3) {
      player.seekTo(0, true);
      setCurrentTime(0);
      return;
    }
    goToTrack(trackIndex - 1);
  }, [goToTrack, trackIndex]);

  const handleEnded = useCallback(() => {
    setSongsCompleted((count) => count + 1);
    setCompletedDuration((value) => value + (duration || currentTrack.duration));
    shouldResumeRef.current = true;
    setTrackIndex((index) => (index + 1) % playlist.length);
  }, [currentTrack.duration, duration, playlist.length]);

  endedHandlerRef.current = handleEnded;

  const togglePlayback = () => {
    const player = playerRef.current;
    if (!playerReadyRef.current || !player) {
      setError("YouTube is still loading. Try again in a moment.");
      return;
    }
    if (!isPlaying) {
      shouldResumeRef.current = true;
      player.playVideo();
    } else {
      shouldResumeRef.current = false;
      player.pauseVideo();
    }
  };

  const selectRoute = (route: Route) => {
    const resume = isPlaying;
    playerRef.current?.pauseVideo();
    shouldResumeRef.current = resume;
    restoreTimeRef.current = 0;
    setIsPlaying(false);
    setActiveRoute(route);
    setTrackIndex(0);
    setCurrentTime(0);
    setSongsCompleted(0);
    setCompletedDuration(0);
    setError(null);
  };

  const seekBy = (seconds: number) => {
    const player = playerRef.current;
    if (!playerReadyRef.current || !player) return;
    const end = player.getDuration() || currentTrack.duration;
    const nextTime = Math.min(Math.max(player.getCurrentTime() + seconds, 0), end);
    player.seekTo(nextTime, true);
    setCurrentTime(nextTime);
  };

  const seekTo = (seconds: number) => {
    const player = playerRef.current;
    if (!playerReadyRef.current || !player) return;
    player.seekTo(seconds, true);
    setCurrentTime(seconds);
  };

  return (
    <main className="safar-shell">
      <BackgroundScene route={activeRoute} />
      <header className="header">
        <BrandLockup />
        <a className="spotify-link" href={activeRoute?.spotifyUrl || SPOTIFY_URL} target="_blank" rel="noopener noreferrer"><Icon name="spotify" size={28} /><span>Listen on Spotify</span><Icon name="external" size={17} /></a>
      </header>
      <RouteSelector activeRoute={activeRoute} onSelect={selectRoute} />
      <section className="center-stage">
        <div className="hero-identity">
          <h1 lang="ur" dir="rtl">سفر</h1>
          <div className="hero-identity__rule" aria-hidden="true"><span /></div>
          <p>Music for the road between places.</p>
        </div>
        <div className="journey-reserve">
          {activeRoute && <JourneyProgress route={activeRoute} elapsed={listenedDuration} travelled={travelled} remaining={remaining} songsCompleted={songsCompleted} />}
        </div>
      </section>
      <MusicPlayer track={currentTrack} isPlaying={isPlaying} currentTime={currentTime} duration={duration} error={error} onToggle={togglePlayback} onPrevious={handlePrevious} onNext={handleNext} onSeekBy={seekBy} onSeekTo={seekTo} youtubeHostRef={youtubeHostRef} />
      <p className="footer-note">Crafted for the roads. Made for the journey.</p>
    </main>
  );
}
//daily