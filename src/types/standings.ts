import { LocalizedName } from './common.js';

export interface StandingsResponse {
  wildCardIndicator: boolean;
  standings: StandingEntry[];
}

export interface StandingEntry {
  conferenceAbbrev: string;
  conferenceName: string;
  conferenceSequence: number;
  divisionAbbrev: string;
  divisionName: string;
  divisionSequence: number;
  teamName: LocalizedName;
  teamCommonName: LocalizedName;
  teamAbbrev: LocalizedName;
  teamLogo: string;
  clinchIndicator?: string;
  date: string;
  gamesPlayed: number;
  goalDifferential: number;
  goalDifferentialPctg: number;
  goalAgainst: number;
  goalFor: number;
  goalsForPctg: number;
  homeGamesPlayed: number;
  homeGoalDifferential: number;
  homeGoalsAgainst: number;
  homeGoalsFor: number;
  homeLosses: number;
  homeOtLosses: number;
  homePoints: number;
  homeRegulationPlusOtWins: number;
  homeRegulationWins: number;
  homeTies?: number;
  homeWins: number;
  l10GamesPlayed: number;
  l10GoalDifferential: number;
  l10GoalsAgainst: number;
  l10GoalsFor: number;
  l10Losses: number;
  l10OtLosses: number;
  l10Points: number;
  l10RegulationPlusOtWins: number;
  l10RegulationWins: number;
  l10Ties?: number;
  l10Wins: number;
  leagueHomeSequence: number;
  leagueL10Sequence: number;
  leagueRoadSequence: number;
  leagueSequence: number;
  losses: number;
  otLosses: number;
  placeName: LocalizedName;
  pointPctg: number;
  points: number;
  regulationPlusOtWinPctg: number;
  regulationPlusOtWins: number;
  regulationWinPctg: number;
  regulationWins: number;
  roadGamesPlayed: number;
  roadGoalDifferential: number;
  roadGoalsAgainst: number;
  roadGoalsFor: number;
  roadLosses: number;
  roadOtLosses: number;
  roadPoints: number;
  roadRegulationPlusOtWins: number;
  roadRegulationWins: number;
  roadTies?: number;
  roadWins: number;
  seasonId: number;
  streakCode: string;
  streakCount: number;
  ties?: number;
  waiversSequence: number;
  wildcardSequence: number;
  winPctg: number;
  wins: number;
}

export interface StandingsSeasonList {
  seasons: StandingsSeason[];
}

export interface StandingsSeason {
  id: number;
  conferencesInUse: boolean;
  divisionsInUse: boolean;
  pointForOTLossInUse: boolean;
  regulationWinsInUse: boolean;
  rowInUse: boolean;
  standingsEnd: string;
  standingsStart: string;
  tiesInUse: boolean;
  wildcardInUse: boolean;
}
