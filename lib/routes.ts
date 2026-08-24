export type RouteTone = "amber" | "pine" | "indigo" | "slate" | "copper" | "sand" | "rose";

export type RouteDefinition = {
  id: string;
  origin: string;
  destination: string;
  label: string;
  distanceKm: number;
  background: string;
  tone: RouteTone;
  playlistId: string;
};

export const routeDefinitions: RouteDefinition[] = [
  { id: "lahore-islamabad", origin: "Lahore", destination: "Islamabad", label: "Lahore → Islamabad", distanceKm: 375, background: "/assets/routes/lahore-islamabad.webp", tone: "amber", playlistId: "lahore-islamabad" },
  { id: "lahore-murree", origin: "Lahore", destination: "Murree", label: "Lahore → Murree", distanceKm: 448, background: "/assets/routes/lahore-murree.webp", tone: "pine", playlistId: "lahore-murree" },
  { id: "islamabad-naran", origin: "Islamabad", destination: "Naran", label: "Islamabad → Naran", distanceKm: 280, background: "/assets/routes/islamabad-naran.webp", tone: "indigo", playlistId: "islamabad-naran" },
  { id: "islamabad-kaghan", origin: "Islamabad", destination: "Kaghan", label: "Islamabad → Kaghan", distanceKm: 263, background: "/assets/routes/islamabad-kaghan.webp", tone: "slate", playlistId: "islamabad-kaghan" },
  { id: "hyderabad-karachi", origin: "Hyderabad", destination: "Karachi", label: "Hyderabad → Karachi", distanceKm: 164, background: "/assets/routes/hyderabad-karachi.webp", tone: "copper", playlistId: "hyderabad-karachi" },
  { id: "karachi-hyderabad", origin: "Karachi", destination: "Hyderabad", label: "Karachi → Hyderabad", distanceKm: 164, background: "/assets/routes/karachi-hyderabad.webp", tone: "sand", playlistId: "karachi-hyderabad" },
  { id: "lahore-multan", origin: "Lahore", destination: "Multan", label: "Lahore → Multan", distanceKm: 338, background: "/assets/routes/lahore-multan.webp", tone: "rose", playlistId: "lahore-multan" },
];
