export interface SportConfig {
  id: number;
  name: string;
  emoji: string;
  label: string;
}

export const SPORTS_MAP: Record<number, SportConfig> = {
  0: { id: 0, name: "Football", emoji: "⚽", label: "Football" },
  1: { id: 1, name: "Basketball", emoji: "🏀", label: "Basketball" },
  2: { id: 2, name: "Tennis", emoji: "🎾", label: "Tennis" },
  3: { id: 3, name: "Padel", emoji: "🏸", label: "Padel" },
  4: { id: 4, name: "Volleyball", emoji: "🏐", label: "Volleyball" },
  5: { id: 5, name: "Other", emoji: "🏅", label: "Other" },
};

export const SPORTS_LIST = Object.values(SPORTS_MAP);

export const getSportName = (type: number) => SPORTS_MAP[type]?.name ?? "Sport";
