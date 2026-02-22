import { LocalizedName, PlayerRef } from './common.js';

export interface TeamRoster {
  forwards: RosterPlayer[];
  defensemen: RosterPlayer[];
  goalies: RosterPlayer[];
}

export interface RosterPlayer {
  id: number;
  headshot: string;
  firstName: LocalizedName;
  lastName: LocalizedName;
  sweaterNumber: number;
  positionCode: string;
  shootsCatches: string;
  heightInInches: number;
  weightInPounds: number;
  heightInCentimeters: number;
  weightInKilograms: number;
  birthDate: string;
  birthCity: LocalizedName;
  birthCountry: string;
  birthStateProvince?: LocalizedName;
}

export interface TeamSeasonStats {
  season: number;
  gameType: number;
  teamId: number;
  teamFullName: string;
  skaters: TeamSkaterStat[];
  goalies: TeamGoalieStat[];
}

export interface TeamSkaterStat {
  playerId: number;
  headshot: string;
  firstName: LocalizedName;
  lastName: LocalizedName;
  positionCode: string;
  gamesPlayed: number;
  goals: number;
  assists: number;
  points: number;
  plusMinus: number;
  pim: number;
  gameWinningGoals: number;
  otGoals: number;
  shots: number;
  shootingPctg: number;
  powerPlayGoals: number;
  powerPlayPoints: number;
  shorthandedGoals: number;
  shorthandedPoints: number;
  avgToi: string;
  faceoffWinPctg: number;
  [key: string]: unknown;
}

export interface TeamGoalieStat {
  playerId: number;
  headshot: string;
  firstName: LocalizedName;
  lastName: LocalizedName;
  gamesPlayed: number;
  gamesStarted: number;
  wins: number;
  losses: number;
  otLosses: number;
  goalsAgainstAvg: number;
  savePctg: number;
  shutouts: number;
  [key: string]: unknown;
}

export interface TeamScheduleResponse {
  previousMonth: string;
  currentMonth: string;
  nextMonth: string;
  calendarUrl: string;
  clubTimezone: string;
  clubUTCOffset: string;
  games: TeamScheduleGame[];
}

export interface TeamScheduleGame {
  id: number;
  season: number;
  gameType: number;
  gameDate: string;
  venue: LocalizedName;
  neutralSite: boolean;
  startTimeUTC: string;
  gameState: string;
  gameScheduleState: string;
  awayTeam: TeamScheduleTeamEntry;
  homeTeam: TeamScheduleTeamEntry;
  periodDescriptor?: { number: number; periodType: string };
  gameOutcome?: { lastPeriodType: string };
  winningGoalie?: { playerId: number };
  winningGoalScorer?: { playerId: number };
  tvBroadcasts?: { id: number; market: string; countryCode: string; network: string }[];
  gameCenterLink: string;
  ticketsLink?: string;
}

export interface TeamScheduleTeamEntry {
  id: number;
  abbrev: string;
  logo: string;
  darkLogo?: string;
  score?: number;
  placeName?: LocalizedName;
  placeNameWithPreposition?: LocalizedName;
}

export interface ProspectStats {
  [key: string]: unknown;
}

export interface TeamScoreboard {
  focusedDate: string;
  focusedDateCount: number;
  clubTimeZone: string;
  clubUTCOffset: string;
  clubScheduleLink: string;
  gamesByDate: GamesByDateEntry[];
}

export interface GamesByDateEntry {
  date: string;
  games: ScoreboardGame[];
}

export interface ScoreboardGame {
  id: number;
  season: number;
  gameType: number;
  gameDate: string;
  startTimeUTC: string;
  gameState: string;
  gameScheduleState: string;
  awayTeam: { id: number; abbrev: string; logo: string; score?: number };
  homeTeam: { id: number; abbrev: string; logo: string; score?: number };
  clock?: { timeRemaining: string; secondsRemaining: number; running: boolean; inIntermission: boolean };
  [key: string]: unknown;
}
