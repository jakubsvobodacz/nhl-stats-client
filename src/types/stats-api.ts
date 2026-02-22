export interface StatsApiResponse<T> {
  data: T[];
  total: number;
}

export interface StatsQueryParams {
  cayenneExp?: string;
  factCayenneExp?: string;
  sort?: string | SortField[];
  dir?: 'ASC' | 'DESC';
  start?: number;
  limit?: number;
  isAggregate?: boolean;
  isGame?: boolean;
}

export interface SortField {
  property: string;
  direction: 'ASC' | 'DESC';
}

export enum SkaterReportType {
  Summary = 'summary',
  Bios = 'bios',
  FaceoffPercentages = 'faceoffpercentages',
  FaceoffWinsLosses = 'faceoffwinslosses',
  GoalsForAgainst = 'goalsforagainst',
  RealTime = 'realtime',
  Penalties = 'penalties',
  PenaltyKill = 'penaltykill',
  PenaltyShots = 'penaltyshots',
  PowerPlay = 'powerplay',
  PuckPossessions = 'puckpossessions',
  SatCounts = 'summaryshooting',
  SatPercentages = 'percentages',
  ScoringShotType = 'scoringRates',
  ShootOut = 'shootout',
  ShotType = 'shottype',
  TimeOnIce = 'timeonice',
}

export enum GoalieReportType {
  Summary = 'summary',
  Advanced = 'advanced',
  Bios = 'bios',
  DaysRest = 'daysrest',
  PenaltyShots = 'penaltyshots',
  SavesByStrength = 'savesByStrength',
  ShootOut = 'shootout',
  StartedVsRelieved = 'startedVsRelieved',
}

export enum TeamReportType {
  Summary = 'summary',
  Penalties = 'penalties',
  PenaltyKill = 'penaltykill',
  PenaltyKillTime = 'penaltykilltime',
  PowerPlay = 'powerplay',
  PowerPlayTime = 'powerplaytime',
  GoalsByGameSituation = 'summaryshooting',
  FaceoffPercentages = 'faceoffpercentages',
  DaysRest = 'daysrest',
  OutshootOutshot = 'outshootoutshot',
  RealTime = 'realtime',
  ShootOut = 'shootout',
  Scoring = 'scoring',
  ShotType = 'shottype',
}

export interface StatsSkater {
  playerId: number;
  skaterFullName: string;
  positionCode: string;
  teamAbbrevs: string;
  gamesPlayed: number;
  goals: number;
  assists: number;
  points: number;
  plusMinus: number;
  penaltyMinutes: number;
  pointsPerGame: number;
  [key: string]: unknown;
}

export interface StatsGoalie {
  playerId: number;
  goalieFullName: string;
  teamAbbrevs: string;
  gamesPlayed: number;
  wins: number;
  losses: number;
  otLosses: number;
  goalsAgainstAverage: number;
  savePct: number;
  shutouts: number;
  [key: string]: unknown;
}

export interface StatsTeam {
  teamId: number;
  teamFullName: string;
  triCode: string;
  gamesPlayed: number;
  wins: number;
  losses: number;
  otLosses: number;
  points: number;
  pointPct: number;
  [key: string]: unknown;
}

export interface Franchise {
  id: number;
  firstSeasonId: number;
  fullName: string;
  lastSeasonId?: number;
  teamAbbrev: string;
  teamCommonName: string;
  teamPlaceName: string;
  [key: string]: unknown;
}

export interface StatsGame {
  gameId: number;
  gameDate: string;
  gameType: number;
  season: number;
  homeTeamId: number;
  awayTeamId: number;
  [key: string]: unknown;
}

export interface ShiftChart {
  id: number;
  detailCode: number;
  duration: string;
  endTime: string;
  eventDescription?: string;
  eventDetails?: string;
  eventNumber: number;
  firstName: string;
  gameId: number;
  hexValue?: string;
  lastName: string;
  period: number;
  playerId: number;
  shiftNumber: number;
  startTime: string;
  teamAbbrev: string;
  teamId: number;
  teamName: string;
  typeCode: number;
  [key: string]: unknown;
}

export interface StatsConfig {
  [key: string]: unknown;
}

export interface Country {
  id: string;
  countryName: string;
  countryCode: string;
  nationality: string;
  [key: string]: unknown;
}

export interface GlossaryEntry {
  [key: string]: unknown;
}

export interface Season {
  id: number;
  allStarGameInUse: boolean;
  conferencesInUse: boolean;
  divisionsInUse: boolean;
  endDate: string;
  entryDraftInUse: boolean;
  formattedSeasonId: string;
  minimumPlayoffMinutesForGoalieStatsLeaders: number;
  minimumRegularGamesForGoalieStatsLeaders: number;
  nhlStanleyCapOwner: string;
  numberOfGames: number;
  olympicsParticipation: boolean;
  pointForOTLossInUse: boolean;
  preseasonStartdate: string;
  regularSeasonEndDate: string;
  regulationWinsInUse: boolean;
  rowInUse: boolean;
  seasonOrdinal: number;
  startDate: string;
  supplementalDraftInUse: boolean;
  tiesInUse: boolean;
  totalPlayoffGames: number;
  totalRegularSeasonGames: number;
  wildcardInUse: boolean;
  [key: string]: unknown;
}

export interface Milestone {
  [key: string]: unknown;
}
