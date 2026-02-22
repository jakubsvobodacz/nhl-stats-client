import { LocalizedName, TeamRef } from './common.js';

export interface ScheduleResponse {
  nextStartDate: string;
  previousStartDate: string;
  gameWeek: GameWeek[];
  oddsPartners: OddsPartner[];
  preSeasonStartDate: string;
  regularSeasonStartDate: string;
  regularSeasonEndDate: string;
  playoffEndDate: string;
  numberOfGames: number;
}

export interface GameWeek {
  date: string;
  dayAbbrev: string;
  numberOfGames: number;
  games: ScheduleGame[];
}

export interface ScheduleGame {
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
  tvBroadcasts: TvBroadcast[];
  awayTeam: ScheduleTeam;
  homeTeam: ScheduleTeam;
  periodDescriptor?: PeriodDescriptor;
  gameOutcome?: GameOutcome;
  winningGoalie?: PlayerInfo;
  winningGoalScorer?: PlayerInfo;
  threeMinRecap?: string;
  threeMinRecapFr?: string;
  gameCenterLink: string;
  ticketsLink?: string;
  ticketsLinkFr?: string;
}

export interface ScheduleTeam {
  id: number;
  placeName?: LocalizedName;
  abbrev: string;
  logo: string;
  darkLogo: string;
  awaySplitSquad?: boolean;
  homeSplitSquad?: boolean;
  score?: number;
  radioLink?: string;
  odds?: OddsEntry[];
}

export interface TvBroadcast {
  id: number;
  market: string;
  countryCode: string;
  network: string;
  sequenceNumber: number;
}

export interface PeriodDescriptor {
  number: number;
  periodType: string;
  maxRegulationPeriods?: number;
}

export interface GameOutcome {
  lastPeriodType: string;
}

export interface PlayerInfo {
  playerId: number;
  firstInitial: LocalizedName;
  lastName: LocalizedName;
}

export interface OddsPartner {
  partnerId: number;
  country: string;
  name: string;
  imageUrl: string;
  siteUrl?: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
}

export interface OddsEntry {
  providerId: number;
  value: string;
}

export interface ScheduleCalendar {
  nextStartDate: string;
  previousStartDate: string;
  clubTimeZone?: string;
  clubUTCOffset?: string;
}
