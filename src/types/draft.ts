import { LocalizedName } from './common.js';

export interface DraftRankingsResponse {
  draftYear: number;
  categoryKey: string;
  categories: DraftCategory[];
  rankings: DraftProspect[];
}

export interface DraftCategory {
  categoryKey: string;
  categoryName: string;
}

export interface DraftProspect {
  lastName: string;
  firstName: string;
  positionCode: string;
  shootsCatches?: string;
  heightInInches?: number;
  weightInPounds?: number;
  lastAmateurClub?: string;
  lastAmateurLeague?: string;
  birthDate: string;
  birthCity?: string;
  birthStateProvince?: string;
  birthCountry?: string;
  midtermRank?: number;
  finalRank?: number;
  [key: string]: unknown;
}

export interface DraftPicksResponse {
  draftYear: number;
  rounds: DraftRound[];
}

export interface DraftRound {
  roundNumber: number;
  picks: DraftPick[];
}

export interface DraftPick {
  round: number;
  pickInRound: number;
  overallPickNumber: number;
  year: number;
  teamAbbrev: string;
  teamLogo: string;
  firstName: string;
  lastName: string;
  positionCode: string;
  shootsCatches?: string;
  birthDate?: string;
  birthCity?: string;
  birthCountry?: string;
  heightInInches?: number;
  weightInPounds?: number;
  amateurClubName?: string;
  amateurLeague?: string;
  playerId?: number;
  [key: string]: unknown;
}
