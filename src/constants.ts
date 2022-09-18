import { theme } from "./theme";
import { Color } from "./types";

export const COLORS: Color[] = [
  { color: "#015216", contrast: "#fff" },
  { color: "#ffee00", contrast: theme.colors.primary },
  { color: "#ff5900", contrast: "#fff" },
  { color: "#d10000", contrast: "#fff" },
  { color: "#60007a", contrast: "#fff" },
  { color: "#160980", contrast: "#fff" },
  { color: "#00c4eb", contrast: theme.colors.primary },
  { color: "#00ff8c", contrast: theme.colors.primary },
  { color: "#ff00d0", contrast: theme.colors.primary },
  { color: "#4a2300", contrast: "#fff" },
  { color: theme.colors.primary, contrast: "#fff" },
  { color: "#a8a8a8", contrast: theme.colors.primary },
];

export const MAX_LENGTH_PASSWORD = 12;
export const MAX_LENGTH_NAME = 36;
