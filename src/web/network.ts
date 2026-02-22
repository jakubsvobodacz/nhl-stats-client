import { HttpClient } from '../http/http-client.js';

export interface TvScheduleResponse {
  date: string;
  games: TvScheduleGame[];
}

export interface TvScheduleGame {
  id: number;
  startTimeUTC: string;
  awayTeam: { abbrev: string; logo: string };
  homeTeam: { abbrev: string; logo: string };
  tvBroadcasts: { network: string; market: string; countryCode: string }[];
  [key: string]: unknown;
}

export interface WhereToWatchResponse {
  [key: string]: unknown;
}

export class NetworkEndpoints {
  constructor(private http: HttpClient) {}

  async getTvSchedule(date?: string): Promise<TvScheduleResponse> {
    const path = date ? `/network/tv-schedule/${date}` : '/network/tv-schedule/now';
    return this.http.get<TvScheduleResponse>(path);
  }

  async getWhereToWatch(): Promise<WhereToWatchResponse> {
    return this.http.get<WhereToWatchResponse>('/where-to-watch');
  }

  async getPartnerGames(countryCode: string, date?: string): Promise<unknown> {
    const params: Record<string, string> = { country: countryCode };
    if (date) params.date = date;
    return this.http.get('/partner-game/now', { params });
  }
}
