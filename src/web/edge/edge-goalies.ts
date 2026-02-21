import { HttpClient } from '../../http/http-client.js';
import { EdgeGoalieStat, EdgeSeasonParams, EdgeResponse } from '../../types/edge.js';

export class EdgeGoaliesEndpoints {
  constructor(private http: HttpClient) {}

  private buildParams(params?: EdgeSeasonParams): Record<string, string | number | boolean | undefined> | undefined {
    if (!params) return undefined;
    const result: Record<string, string | number | boolean | undefined> = {};
    if (params.season) result.season = params.season;
    if (params.gameType !== undefined) result.gameType = params.gameType;
    if (params.team) result.team = params.team;
    if (params.limit !== undefined) result.limit = params.limit;
    if (params.start !== undefined) result.start = params.start;
    return Object.keys(result).length > 0 ? result : undefined;
  }

  async getRealTimeStats(params?: EdgeSeasonParams): Promise<EdgeResponse<EdgeGoalieStat>> {
    return this.http.get('/edge/goalie/stats/real-time', { params: this.buildParams(params) });
  }

  async getSaveTracking(params?: EdgeSeasonParams): Promise<EdgeResponse<EdgeGoalieStat>> {
    return this.http.get('/edge/goalie/stats/save-tracking', { params: this.buildParams(params) });
  }

  async getShotSpeed(params?: EdgeSeasonParams): Promise<EdgeResponse<EdgeGoalieStat>> {
    return this.http.get('/edge/goalie/stats/shot-speed', { params: this.buildParams(params) });
  }

  async getShotLocation(params?: EdgeSeasonParams): Promise<EdgeResponse<EdgeGoalieStat>> {
    return this.http.get('/edge/goalie/stats/shot-location', { params: this.buildParams(params) });
  }

  async getShotType(params?: EdgeSeasonParams): Promise<EdgeResponse<EdgeGoalieStat>> {
    return this.http.get('/edge/goalie/stats/shot-type', { params: this.buildParams(params) });
  }

  async getZoneTime(params?: EdgeSeasonParams): Promise<EdgeResponse<EdgeGoalieStat>> {
    return this.http.get('/edge/goalie/stats/zone-time', { params: this.buildParams(params) });
  }

  async getPenaltyKill(params?: EdgeSeasonParams): Promise<EdgeResponse<EdgeGoalieStat>> {
    return this.http.get('/edge/goalie/stats/penalty-kill', { params: this.buildParams(params) });
  }

  async getStartVsRelief(params?: EdgeSeasonParams): Promise<EdgeResponse<EdgeGoalieStat>> {
    return this.http.get('/edge/goalie/stats/start-vs-relief', { params: this.buildParams(params) });
  }

  async getDaysRest(params?: EdgeSeasonParams): Promise<EdgeResponse<EdgeGoalieStat>> {
    return this.http.get('/edge/goalie/stats/days-rest', { params: this.buildParams(params) });
  }

  async getOverview(params?: EdgeSeasonParams): Promise<EdgeResponse<EdgeGoalieStat>> {
    return this.http.get('/edge/goalie/stats/overview', { params: this.buildParams(params) });
  }

  async getLeaders(params?: EdgeSeasonParams): Promise<EdgeResponse<EdgeGoalieStat>> {
    return this.http.get('/edge/goalie/stats/leaders', { params: this.buildParams(params) });
  }
}
