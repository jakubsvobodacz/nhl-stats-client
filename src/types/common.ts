export interface LocalizedName {
  default: string;
  fr?: string;
  es?: string;
  cs?: string;
  fi?: string;
  sk?: string;
  de?: string;
  sv?: string;
}

export enum GameType {
  Preseason = 1,
  RegularSeason = 2,
  Playoffs = 3,
  AllStar = 4,
}

export type SeasonId = string;

export interface TeamRef {
  id: number;
  name: LocalizedName;
  abbrev: string;
  logo: string;
}

export interface PlayerRef {
  id: number;
  firstName: LocalizedName;
  lastName: LocalizedName;
  sweaterNumber?: number;
  positionCode?: string;
  headshot?: string;
}

export interface PaginationParams {
  start?: number;
  limit?: number;
}

export interface SortParams {
  sort?: string;
  dir?: 'ASC' | 'DESC';
}
