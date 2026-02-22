import { LocalizedName, TeamRef } from './common.js';

export interface PlayerLanding {
  playerId: number;
  isActive: boolean;
  currentTeamId?: number;
  currentTeamAbbrev?: string;
  fullTeamName?: LocalizedName;
  firstName: LocalizedName;
  lastName: LocalizedName;
  teamLogo?: string;
  sweaterNumber?: number;
  position: string;
  headshot: string;
  heroImage?: string;
  heightInInches?: number;
  weightInPounds?: number;
  heightInCentimeters?: number;
  weightInKilograms?: number;
  birthDate: string;
  birthCity?: LocalizedName;
  birthStateProvince?: LocalizedName;
  birthCountry: string;
  shootsCatches: string;
  draftDetails?: DraftDetails;
  playerSlug: string;
  inTop100AllTime?: number;
  inHHOF?: number;
  featuredStats?: FeaturedStats;
  careerTotals?: CareerTotals;
  shopLink?: string;
  twitterLink?: string;
  watchLink?: string;
  last5Games?: GameLogEntry[];
  seasonTotals?: SeasonTotal[];
  awards?: Award[];
  currentTeamRoster?: RosterEntry[];
}

export interface DraftDetails {
  year: number;
  teamAbbrev: string;
  round: number;
  pickInRound: number;
  overallPick: number;
}

export interface FeaturedStats {
  season: number;
  regularSeason?: StatsSummary;
  playoffs?: StatsSummary;
}

export interface StatsSummary {
  subSeason: Record<string, number | string>;
  career: Record<string, number | string>;
}

export interface CareerTotals {
  regularSeason?: Record<string, number>;
  playoffs?: Record<string, number>;
}

export interface GameLogEntry {
  gameId: number;
  teamAbbrev: string;
  homeRoadFlag: string;
  gameDate: string;
  goals?: number;
  assists?: number;
  points?: number;
  plusMinus?: number;
  powerPlayGoals?: number;
  shots?: number;
  shifts?: number;
  shorthandedGoals?: number;
  gameWinningGoals?: number;
  otGoals?: number;
  pim?: number;
  toi?: string;
  // Goalie fields
  gamesStarted?: number;
  decision?: string;
  shotsAgainst?: number;
  goalsAgainst?: number;
  savePctg?: number;
  shutouts?: number;
}

export interface SeasonTotal {
  season: number;
  gameTypeId: number;
  leagueAbbrev: string;
  teamName: LocalizedName;
  sequence?: number;
  gamesPlayed: number;
  [key: string]: unknown;
}

export interface Award {
  trophy: LocalizedName;
  seasons: AwardSeason[];
}

export interface AwardSeason {
  seasonId: number;
  gamesPlayed: number;
  [key: string]: unknown;
}

export interface RosterEntry {
  playerId: number;
  lastName: LocalizedName;
  firstName: LocalizedName;
  playerSlug: string;
}

export interface PlayerGameLog {
  seasonId: number;
  gameTypeId: number;
  playerStatsSeasons?: number[];
  gameLog: GameLogEntry[];
}

export interface PlayerSpotlight {
  playerId: number;
  name: LocalizedName;
  firstName: LocalizedName;
  lastName: LocalizedName;
  sweaterNumber: number;
  position: string;
  headshot: string;
  teamTriCode: string;
  teamLogo: string;
  teamId: number;
  [key: string]: unknown;
}
