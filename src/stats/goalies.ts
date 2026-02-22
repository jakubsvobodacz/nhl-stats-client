import { HttpClient } from '../http/http-client.js';
import { StatsApiResponse, StatsQueryParams, StatsGoalie, Milestone } from '../types/stats-api.js';

export class GoaliesStatsEndpoints {
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

  async getByReport(reportType: string, query?: StatsQueryParams): Promise<StatsApiResponse<StatsGoalie>> {
    return this.http.get<StatsApiResponse<StatsGoalie>>(`/goalie/${reportType}`, {
      params: this.buildParams(query),
    });
  }

  async getLeaders(reportType: string, query?: StatsQueryParams): Promise<StatsApiResponse<StatsGoalie>> {
    return this.http.get<StatsApiResponse<StatsGoalie>>(`/leaders/goalies/${reportType}`, {
      params: this.buildParams(query),
    });
  }

  async getMilestones(query?: StatsQueryParams): Promise<StatsApiResponse<Milestone>> {
    return this.http.get<StatsApiResponse<Milestone>>('/milestones/goalies', {
      params: this.buildParams(query),
    });
  }
}
