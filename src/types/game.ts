import { LocalizedName, PlayerRef } from './common.js';

export interface Boxscore {
  id: number;
  season: number;
  gameType: number;
  gameDate: string;
  venue: LocalizedName;
  startTimeUTC: string;
  easternUTCOffset: string;
  venueUTCOffset: string;
  gameState: string;
  gameScheduleState: string;
  periodDescriptor: {
    number: number;
    periodType: string;
    maxRegulationPeriods: number;
  };
  awayTeam: BoxscoreTeam;
  homeTeam: BoxscoreTeam;
  clock?: GameClock;
  playerByGameStats: PlayerByGameStats;
  boxscore: BoxscoreDetails;
  gameVideo?: GameVideo;
}

export interface BoxscoreTeam {
  id: number;
  name: LocalizedName;
  abbrev: string;
  score: number;
  sog: number;
  faceoffWinningPctg?: number;
  powerPlay?: string;
  pim?: number;
  hits?: number;
  blocks?: number;
  logo: string;
}

export interface GameClock {
  timeRemaining: string;
  secondsRemaining: number;
  running: boolean;
  inIntermission: boolean;
}

export interface PlayerByGameStats {
  awayTeam: TeamGameStats;
  homeTeam: TeamGameStats;
}

export interface TeamGameStats {
  forwards: PlayerGameStat[];
  defense: PlayerGameStat[];
  goalies: GoalieGameStat[];
}

export interface PlayerGameStat {
  playerId: number;
  name: LocalizedName;
  sweaterNumber: number;
  position: string;
  goals: number;
  assists: number;
  points: number;
  plusMinus: number;
  pim: number;
  hits: number;
  blockedShots: number;
  powerPlayGoals: number;
  powerPlayPoints: number;
  shorthandedGoals: number;
  shorthpiandedPoints: number;
  shots: number;
  faceoffs: string;
  faceoffWinningPctg: number;
  toi: string;
  powerPlayToi: string;
  shorthandedToi: string;
}

export interface GoalieGameStat {
  playerId: number;
  name: LocalizedName;
  sweaterNumber: number;
  position: string;
  evenStrengthShotsAgainst: string;
  powerPlayShotsAgainst: string;
  shorthandedShotsAgainst: string;
  saveShotsAgainst: string;
  savePctg?: number;
  evenStrengthGoalsAgainst: number;
  powerPlayGoalsAgainst: number;
  shorthandedGoalsAgainst: number;
  pim: number;
  goalsAgainst: number;
  toi: string;
}

export interface BoxscoreDetails {
  linescore: Linescore;
  shotsByPeriod: ShotsByPeriod[];
  gameReports?: GameReports;
}

export interface Linescore {
  byPeriod: PeriodScore[];
  totals: { away: number; home: number };
}

export interface PeriodScore {
  period: number;
  periodDescriptor: { number: number; periodType: string };
  away: number;
  home: number;
}

export interface ShotsByPeriod {
  period: number;
  periodDescriptor: { number: number; periodType: string };
  away: number;
  home: number;
}

export interface GameReports {
  gameSummary?: string;
  eventSummary?: string;
  playByPlay?: string;
  faceoffSummary?: string;
  faceoffComparison?: string;
  rosters?: string;
  shotSummary?: string;
  shiftChart?: string;
  toiAway?: string;
  toiHome?: string;
}

export interface GameVideo {
  threeMinRecap?: number;
  threeMinRecapFr?: number;
  condensedGame?: number;
  condensedGameFr?: number;
}

export interface PlayByPlay {
  id: number;
  season: number;
  gameType: number;
  gameDate: string;
  venue: LocalizedName;
  startTimeUTC: string;
  gameState: string;
  gameScheduleState: string;
  awayTeam: { id: number; abbrev: string; logo: string; score?: number };
  homeTeam: { id: number; abbrev: string; logo: string; score?: number };
  clock?: GameClock;
  periodDescriptor?: { number: number; periodType: string; maxRegulationPeriods: number };
  plays: Play[];
  rosterSpots: RosterSpot[];
}

export interface Play {
  eventId: number;
  periodDescriptor: { number: number; periodType: string };
  timeInPeriod: string;
  timeRemaining: string;
  situationCode?: string;
  homeTeamDefendingSide?: string;
  typeCode: number;
  typeDescKey: string;
  sortOrder: number;
  details?: Record<string, unknown>;
}

export interface RosterSpot {
  teamId: number;
  playerId: number;
  firstName: LocalizedName;
  lastName: LocalizedName;
  sweaterNumber: number;
  positionCode: string;
  headshot: string;
}

export interface GameLanding {
  id: number;
  season: number;
  gameType: number;
  gameDate: string;
  venue: LocalizedName;
  startTimeUTC: string;
  gameState: string;
  gameScheduleState: string;
  awayTeam: GameLandingTeam;
  homeTeam: GameLandingTeam;
  summary?: GameSummary;
  matchup?: Record<string, unknown>;
}

export interface GameLandingTeam {
  id: number;
  name: LocalizedName;
  abbrev: string;
  score?: number;
  sog?: number;
  logo: string;
}

export interface GameSummary {
  scoring: ScoringPeriod[];
  shootout?: ShootoutAttempt[];
  threeStars?: ThreeStar[];
  penalties: PenaltyPeriod[];
  gameInfo?: Record<string, unknown>;
  linescore?: Linescore;
  shotsByPeriod?: ShotsByPeriod[];
}

export interface ScoringPeriod {
  periodDescriptor: { number: number; periodType: string };
  goals: ScoringGoal[];
}

export interface ScoringGoal {
  situationCode: string;
  strength: string;
  playerId: number;
  firstName: LocalizedName;
  lastName: LocalizedName;
  name?: LocalizedName;
  teamAbbrev: LocalizedName;
  headshot: string;
  highlightClip?: number;
  highlightClipFr?: number;
  goalsToDate: number;
  awayScore: number;
  homeScore: number;
  leadingTeamAbbrev?: LocalizedName;
  timeInPeriod: string;
  shotType?: string;
  goalModifier?: string;
  assists: ScoringAssist[];
}

export interface ScoringAssist {
  playerId: number;
  firstName: LocalizedName;
  lastName: LocalizedName;
  name?: LocalizedName;
  assistsToDate: number;
}

export interface ShootoutAttempt {
  sequence: number;
  playerId: number;
  teamAbbrev: string;
  firstName: LocalizedName;
  lastName: LocalizedName;
  shotType?: string;
  result: string;
  headshot: string;
  gameWinner: boolean;
}

export interface ThreeStar {
  star: number;
  playerId: number;
  teamAbbrev: string;
  headshot: string;
  name: LocalizedName;
  firstName: LocalizedName;
  lastName: LocalizedName;
  sweaterNo: number;
  position: string;
  goals?: number;
  assists?: number;
  points?: number;
  savePctg?: number;
  goalsAgainst?: number;
}

export interface PenaltyPeriod {
  periodDescriptor: { number: number; periodType: string };
  penalties: PenaltyEvent[];
}

export interface PenaltyEvent {
  timeInPeriod: string;
  type: string;
  duration: number;
  committedByPlayer?: string;
  teamAbbrev: LocalizedName;
  drawnBy?: string;
  descKey: string;
}

export interface ScoresResponse {
  currentDate: string;
  prevDate: string;
  nextDate: string;
  gamesByDate: GamesByDate[];
  focusedDate?: string;
  focusedDateCount?: number;
}

export interface GamesByDate {
  date: string;
  games: ScoreGame[];
}

export interface ScoreGame {
  id: number;
  season: number;
  gameType: number;
  venue: LocalizedName;
  neutralSite: boolean;
  startTimeUTC: string;
  easternUTCOffset: string;
  venueUTCOffset: string;
  venueTimezone: string;
  gameState: string;
  gameScheduleState: string;
  awayTeam: ScoreTeam;
  homeTeam: ScoreTeam;
  periodDescriptor?: { number: number; periodType: string; maxRegulationPeriods: number };
  gameOutcome?: { lastPeriodType: string };
  clock?: GameClock;
  gameCenterLink: string;
  [key: string]: unknown;
}

export interface ScoreTeam {
  id: number;
  abbrev: string;
  logo: string;
  darkLogo?: string;
  score?: number;
}

export interface GameStory {
  id: number;
  season: number;
  gameType: number;
  gameDate: string;
  venue: LocalizedName;
  gameState: string;
  awayTeam: GameLandingTeam;
  homeTeam: GameLandingTeam;
  summary?: GameSummary;
  [key: string]: unknown;
}

export interface GameRightRail {
  gameId: number;
  teamGameStats?: TeamGameStatsComparison[];
  seasonSeriesWins?: Record<string, unknown>;
  shotsByPeriod?: ShotsByPeriod[];
  [key: string]: unknown;
}

export interface TeamGameStatsComparison {
  category: string;
  awayValue: string | number;
  homeValue: string | number;
}
