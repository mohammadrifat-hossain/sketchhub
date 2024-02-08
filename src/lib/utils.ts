import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const COLORS = [
  "#DC2626", "#D97706", "#059669", "#7C3AED", "#DB2777", "#A22222", "#06B6D4", "#1E40AF", "#0652DD"
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function connectionIdToColor(connectionId: number): string {
  return COLORS[connectionId % COLORS.length];
}