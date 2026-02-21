import { LocalizedName } from './common.js';

export interface PlayoffSeriesCarousel {
  seasonId: number;
  currentRound: number;
  rounds: PlayoffRound[];
}

export interface PlayoffRound {
  roundNumber: number;
  roundCode: string;
  roundAbbrev: string;
  series: PlayoffSeries[];
}

export interface PlayoffSeries {
  seriesTitle: string;
  seriesAbbrev: string;
  seriesLetter: string;
  seriesUrl: string;
  topSeedTeam: PlayoffTeam;
  bottomSeedTeam: PlayoffTeam;
  winningTeamId?: number;
  losingTeamId?: number;
  neededToWin: number;
  topSeedWins: number;
  bottomSeedWins: number;
}

export interface PlayoffTeam {
  id: number;
  abbrev: string;
  name: LocalizedName;
  logo: string;
  darkLogo?: string;
  commonName?: LocalizedName;
  seed?: number;
  seriesWins?: number;
}

export interface PlayoffSeriesSchedule {
  seriesTitle: string;
  topSeedTeam: PlayoffTeam;
  bottomSeedTeam: PlayoffTeam;
  games: PlayoffGame[];
}

export interface PlayoffGame {
  id: number;
  season: number;
  gameType: number;
  gameDate: string;
  venue: LocalizedName;
  startTimeUTC: string;
  gameState: string;
  gameScheduleState: string;
  seriesGameNumber: number;
  awayTeam: PlayoffGameTeam;
  homeTeam: PlayoffGameTeam;
  periodDescriptor?: { number: number; periodType: string };
  gameOutcome?: { lastPeriodType: string };
  [key: string]: unknown;
}

export interface PlayoffGameTeam {
  id: number;
  abbrev: string;
  logo: string;
  score?: number;
}

export interface PlayoffBracket {
  seasonId: number;
  rounds: PlayoffBracketRound[];
}

export interface PlayoffBracketRound {
  roundNumber: number;
  roundCode: string;
  roundAbbrev: string;
  series: PlayoffBracketSeries[];
}

export interface PlayoffBracketSeries {
  seriesTitle: string;
  seriesLetter: string;
  matchup: {
    topSeed: PlayoffTeam;
    bottomSeed: PlayoffTeam;
  };
  winningTeamId?: number;
  topSeedWins: number;
  bottomSeedWins: number;
  [key: string]: unknown;
}
