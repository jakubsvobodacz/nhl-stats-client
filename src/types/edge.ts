export interface EdgeSeasonParams {
  season?: string;
  gameType?: number;
  position?: string;
  team?: string;
  limit?: number;
  start?: number;
}

export interface EdgeTeamStat {
  teamId: number;
  teamFullName: string;
  teamAbbrev: string;
  gamesPlayed: number;
  [key: string]: unknown;
}

export interface EdgeSkaterStat {
  playerId: number;
  firstName: string;
  lastName: string;
  teamAbbrev: string;
  position: string;
  gamesPlayed: number;
  [key: string]: unknown;
}

export interface EdgeGoalieStat {
  playerId: number;
  firstName: string;
  lastName: string;
  teamAbbrev: string;
  gamesPlayed: number;
  [key: string]: unknown;
}

export interface EdgeResponse<T> {
  data: T[];
  total: number;
}
