import { HttpClient } from '../http/http-client.js';
import { StatsApiResponse, StatsQueryParams, StatsTeam, Franchise } from '../types/stats-api.js';

export class TeamsStatsEndpoints {
  constructor(private http: HttpClient) {}

  private buildParams(query?: StatsQueryParams): Record<string, string | number | boolean | undefined> | undefined {
    if (!query) return undefined;
    const params: Record<string, string | number | boolean | undefined> = {};
    if (query.cayenneExp) params.cayenneExp = query.cayenneExp;
    if (query.factCayenneExp) params.factCayenneExp = query.factCayenneExp;
    if (query.sort) {
      params.sort = Array.isArray(query.sort)
        ? JSON.stringify(query.sort)
        : query.sort;
    }
    if (query.dir) params.dir = query.dir;
    if (query.start !== undefined) params.start = query.start;
    if (query.limit !== undefined) params.limit = query.limit;
    if (query.isAggregate !== undefined) params.isAggregate = query.isAggregate;
    if (query.isGame !== undefined) params.isGame = query.isGame;
    return Object.keys(params).length > 0 ? params : undefined;
  }

  async getByReport(reportType: string, query?: StatsQueryParams): Promise<StatsApiResponse<StatsTeam>> {
    return this.http.get<StatsApiResponse<StatsTeam>>(`/team/${reportType}`, {
      params: this.buildParams(query),
    });
  }

  async getFranchises(query?: StatsQueryParams): Promise<StatsApiResponse<Franchise>> {
    return this.http.get<StatsApiResponse<Franchise>>('/franchise', {
      params: this.buildParams(query),
    });
  }

  async getAll(): Promise<StatsApiResponse<StatsTeam>> {
    return this.http.get<StatsApiResponse<StatsTeam>>('/team');
  }

  async getById(teamId: number): Promise<StatsApiResponse<StatsTeam>> {
    return this.http.get<StatsApiResponse<StatsTeam>>('/team', {
      params: { cayenneExp: `teamId=${teamId}` },
    });
  }
}
