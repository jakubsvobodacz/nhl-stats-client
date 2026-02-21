import { LocalizedName } from './common.js';

export interface LeadersResponse {
  categories: LeaderCategory[];
}

export interface LeaderCategory {
  categoryKey: string;
  displayTitle: string;
  leaders: Leader[];
}

export interface Leader {
  id: number;
  firstName: LocalizedName;
  lastName: LocalizedName;
  sweaterNumber: number;
  teamAbbrev: string;
  teamName?: LocalizedName;
  teamLogo: string;
  headshot: string;
  position: string;
  value: number | string;
}
