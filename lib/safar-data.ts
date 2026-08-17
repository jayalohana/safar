export type Track = {
  id: string;
  title: string;
  artist: string;
  duration: number;
  youtubeId: string;
};

export type Route = {
  id: string;
  origin: string;
  destination: string;
  label: string;
  distanceKm: number;
  background: string;
  backgrounds?: { day?: string; dusk?: string; night?: string };
  spotifyUrl?: string;
  tone: "amber" | "pine" | "indigo" | "slate" | "copper" | "sand" | "rose";
  tracks: Track[];
};

export const DEFAULT_BACKGROUND = "/assets/safar-main-background.png";
export const SPOTIFY_URL = process.env.NEXT_PUBLIC_SAFAR_SPOTIFY_URL || "https://open.spotify.com/";

const songbook = [
  ["Mera Bichraa Yaar", "Strings", 248, "DZIUT1n0abw"],
  ["Aankhon Ke Saagar", "Shafqat Amanat Ali", 341, "xaA85R0CveM"],
  ["Paar Chanaa De", "Shilpa Rao & Noori", 386, "TrPvQvbp3Cg"],
  ["Tera Woh Pyar", "Momina Mustehsan & Asim Azhar", 431, "8367ETnagHo"],
  ["Tu Jhoom", "Naseebo Lal & Abida Parveen", 397, "7D4vNcK6D38"],
  ["Pasoori", "Ali Sethi & Shae Gill", 284, "5Eqb_-j3FDA"],
  ["Jaan-e-Bahaaraan", "Ali Zafar", 384, "BTf68TSLGH4"],
] as const;

function buildPlaylist(prefix: string, length: number, offset = 0): Track[] {
  return Array.from({ length }, (_, index) => {
    const song = songbook[(index + offset) % songbook.length];
    const sequence = index + 1;
    return {
      id: `${prefix}-${sequence}`,
      title: song[0],
      artist: song[1],
      duration: song[2],
      youtubeId: song[3],
    };
  });
}

export const defaultPlaylist = {
  id: "safar",
  title: "Safar",
  route: null,
  tracks: buildPlaylist("safar", 64),
};

export const routes: Route[] = [
  { id: "lahore-islamabad", origin: "Lahore", destination: "Islamabad", label: "Lahore → Islamabad", distanceKm: 375, background: "/assets/routes/lahore-islamabad.webp", tone: "amber", tracks: buildPlaylist("lahore-islamabad", 32, 0) },
  { id: "lahore-murree", origin: "Lahore", destination: "Murree", label: "Lahore → Murree", distanceKm: 448, background: "/assets/routes/lahore-murree.webp", tone: "pine", tracks: buildPlaylist("lahore-murree", 34, 3) },
  { id: "islamabad-naran", origin: "Islamabad", destination: "Naran", label: "Islamabad → Naran", distanceKm: 280, background: "/assets/routes/islamabad-naran.webp", tone: "indigo", tracks: buildPlaylist("islamabad-naran", 28, 5) },
  { id: "islamabad-kaghan", origin: "Islamabad", destination: "Kaghan", label: "Islamabad → Kaghan", distanceKm: 263, background: "/assets/routes/islamabad-kaghan.webp", tone: "slate", tracks: buildPlaylist("islamabad-kaghan", 28, 7) },
  { id: "hyderabad-karachi", origin: "Hyderabad", destination: "Karachi", label: "Hyderabad → Karachi", distanceKm: 164, background: "/assets/routes/hyderabad-karachi.webp", tone: "copper", tracks: buildPlaylist("hyderabad-karachi", 22, 9) },
  { id: "karachi-hyderabad", origin: "Karachi", destination: "Hyderabad", label: "Karachi → Hyderabad", distanceKm: 164, background: "/assets/routes/karachi-hyderabad.webp", tone: "sand", tracks: buildPlaylist("karachi-hyderabad", 22, 11) },
  { id: "lahore-multan", origin: "Lahore", destination: "Multan", label: "Lahore → Multan", distanceKm: 338, background: "/assets/routes/lahore-multan.webp", tone: "rose", tracks: buildPlaylist("lahore-multan", 30, 13) },
];
