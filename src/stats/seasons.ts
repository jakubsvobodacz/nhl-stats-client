import { HttpClient } from '../http/http-client.js';
import { StatsApiResponse, Season } from '../types/stats-api.js';

export class SeasonsStatsEndpoints {
  constructor(private http: HttpClient) {}

  async get(): Promise<StatsApiResponse<Season>> {
    return this.http.get<StatsApiResponse<Season>>('/season');
  }

  async getComponentSeason(): Promise<unknown> {
    return this.http.get('/componentSeason');
  }
}
