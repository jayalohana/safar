import { resolveTracks, type Track } from "@/lib/tracks";
import { routeDefinitions, type RouteDefinition, type RouteTone } from "@/lib/routes";
import { routePlaylists, safarPlaylist } from "@/lib/playlists";

export type { Track };
export type { RouteDefinition, RouteTone };

export const DEFAULT_BACKGROUND = "/assets/safar-main-background.png";
export const SPOTIFY_URL = process.env.NEXT_PUBLIC_SAFAR_SPOTIFY_URL || "https://open.spotify.com/";

export type Route = Omit<RouteDefinition, "playlistId"> & { tracks: Track[]; spotifyUrl?: string };

export const defaultPlaylist = {
  id: "safar",
  title: "Safar",
  route: null,
  tracks: resolveTracks(safarPlaylist),
};

export const routes: Route[] = routeDefinitions.map(({ playlistId, ...definition }) => ({
  ...definition,
  tracks: resolveTracks(routePlaylists[playlistId] ?? []),
}));
