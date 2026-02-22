import { HttpClient } from '../http/http-client.js';
import { StatsApiResponse, StatsQueryParams, StatsGame, ShiftChart } from '../types/stats-api.js';

export class GamesStatsEndpoints {
  constructor(private http: HttpClient) {}

  async get(query?: StatsQueryParams): Promise<StatsApiResponse<StatsGame>> {
    const params: Record<string, string | number | boolean | undefined> = {};
    if (query?.cayenneExp) params.cayenneExp = query.cayenneExp;
    if (query?.sort) {
      params.sort = Array.isArray(query.sort)
        ? JSON.stringify(query.sort)
        : query.sort;
    }
    if (query?.start !== undefined) params.start = query.start;
    if (query?.limit !== undefined) params.limit = query.limit;
    return this.http.get<StatsApiResponse<StatsGame>>('/game', {
      params: Object.keys(params).length > 0 ? params : undefined,
    });
  }

  async getMeta(): Promise<unknown> {
    return this.http.get('/game/meta');
  }

  async getShiftCharts(gameId: number): Promise<ShiftChart[]> {
    return this.http.get<ShiftChart[]>('/shiftcharts', {
      params: { cayenneExp: `gameId=${gameId}` },
    });
  }
}
