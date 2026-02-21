import { HttpClient } from '../http/http-client.js';
import { StandingsResponse, StandingsSeasonList } from '../types/standings.js';

export class StandingsEndpoints {
  constructor(private http: HttpClient) {}

  async get(date?: string): Promise<StandingsResponse> {
    const path = date ? `/standings/${date}` : '/standings/now';
    return this.http.get<StandingsResponse>(path);
  }

  async getSeasonList(): Promise<StandingsSeasonList> {
    return this.http.get<StandingsSeasonList>('/standings-season');
  }
}
