import { HttpClient } from '../http/http-client.js';
import { StatsApiResponse, StatsQueryParams } from '../types/stats-api.js';

export class DraftStatsEndpoints {
  constructor(private http: HttpClient) {}

  async get(query?: StatsQueryParams): Promise<StatsApiResponse<Record<string, unknown>>> {
    const params: Record<string, string | number | boolean | undefined> = {};
    if (query?.cayenneExp) params.cayenneExp = query.cayenneExp;
    if (query?.sort) {
      params.sort = Array.isArray(query.sort)
        ? JSON.stringify(query.sort)
        : query.sort;
    }
    if (query?.dir) params.dir = query.dir;
    if (query?.start !== undefined) params.start = query.start;
    if (query?.limit !== undefined) params.limit = query.limit;
    return this.http.get<StatsApiResponse<Record<string, unknown>>>('/draft', {
      params: Object.keys(params).length > 0 ? params : undefined,
    });
  }
}
