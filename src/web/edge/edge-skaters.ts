import { HttpClient } from '../../http/http-client.js';
import { EdgeSkaterStat, EdgeSeasonParams, EdgeResponse } from '../../types/edge.js';

export class EdgeSkatersEndpoints {
  constructor(private http: HttpClient) {}

  private buildParams(params?: EdgeSeasonParams): Record<string, string | number | boolean | undefined> | undefined {
    if (!params) return undefined;
    const result: Record<string, string | number | boolean | undefined> = {};
    if (params.season) result.season = params.season;
    if (params.gameType !== undefined) result.gameType = params.gameType;
    if (params.position) result.position = params.position;
    if (params.team) result.team = params.team;
    if (params.limit !== undefined) result.limit = params.limit;
    if (params.start !== undefined) result.start = params.start;
    return Object.keys(result).length > 0 ? result : undefined;
  }

  async getRealTimeStats(params?: EdgeSeasonParams): Promise<EdgeResponse<EdgeSkaterStat>> {
    return this.http.get('/edge/skater/stats/real-time', { params: this.buildParams(params) });
  }

  async getDistance(params?: EdgeSeasonParams): Promise<EdgeResponse<EdgeSkaterStat>> {
    return this.http.get('/edge/skater/stats/distance', { params: this.buildParams(params) });
  }

  async getSpeed(params?: EdgeSeasonParams): Promise<EdgeResponse<EdgeSkaterStat>> {
    return this.http.get('/edge/skater/stats/speed', { params: this.buildParams(params) });
  }

  async getSpeedBursts(params?: EdgeSeasonParams): Promise<EdgeResponse<EdgeSkaterStat>> {
    return this.http.get('/edge/skater/stats/speed-bursts', { params: this.buildParams(params) });
  }

  async getZoneTime(params?: EdgeSeasonParams): Promise<EdgeResponse<EdgeSkaterStat>> {
    return this.http.get('/edge/skater/stats/zone-time', { params: this.buildParams(params) });
  }

  async getShotSpeed(params?: EdgeSeasonParams): Promise<EdgeResponse<EdgeSkaterStat>> {
    return this.http.get('/edge/skater/stats/shot-speed', { params: this.buildParams(params) });
  }

  async getShotLocation(params?: EdgeSeasonParams): Promise<EdgeResponse<EdgeSkaterStat>> {
    return this.http.get('/edge/skater/stats/shot-location', { params: this.buildParams(params) });
  }

  async getTimeBetweenShots(params?: EdgeSeasonParams): Promise<EdgeResponse<EdgeSkaterStat>> {
    return this.http.get('/edge/skater/stats/time-between-shots', { params: this.buildParams(params) });
  }

  async getPossessionTime(params?: EdgeSeasonParams): Promise<EdgeResponse<EdgeSkaterStat>> {
    return this.http.get('/edge/skater/stats/possession-time', { params: this.buildParams(params) });
  }

  async getPenaltyKill(params?: EdgeSeasonParams): Promise<EdgeResponse<EdgeSkaterStat>> {
    return this.http.get('/edge/skater/stats/penalty-kill', { params: this.buildParams(params) });
  }

  async getPowerPlay(params?: EdgeSeasonParams): Promise<EdgeResponse<EdgeSkaterStat>> {
    return this.http.get('/edge/skater/stats/power-play', { params: this.buildParams(params) });
  }

  async getFaceoffs(params?: EdgeSeasonParams): Promise<EdgeResponse<EdgeSkaterStat>> {
    return this.http.get('/edge/skater/stats/faceoffs', { params: this.buildParams(params) });
  }

  async getOverview(params?: EdgeSeasonParams): Promise<EdgeResponse<EdgeSkaterStat>> {
    return this.http.get('/edge/skater/stats/overview', { params: this.buildParams(params) });
  }

  async getRealtimeLeaders(params?: EdgeSeasonParams): Promise<EdgeResponse<EdgeSkaterStat>> {
    return this.http.get('/edge/skater/stats/leaders/real-time', { params: this.buildParams(params) });
  }

  async getSpeedLeaders(params?: EdgeSeasonParams): Promise<EdgeResponse<EdgeSkaterStat>> {
    return this.http.get('/edge/skater/stats/leaders/speed', { params: this.buildParams(params) });
  }
}
