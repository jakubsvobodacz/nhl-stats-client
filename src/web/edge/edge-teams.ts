import { HttpClient } from '../../http/http-client.js';
import { EdgeTeamStat, EdgeSeasonParams, EdgeResponse } from '../../types/edge.js';

export class EdgeTeamsEndpoints {
  constructor(private http: HttpClient) {}

  private buildParams(params?: EdgeSeasonParams): Record<string, string | number | boolean | undefined> | undefined {
    if (!params) return undefined;
    const result: Record<string, string | number | boolean | undefined> = {};
    if (params.season) result.season = params.season;
    if (params.gameType !== undefined) result.gameType = params.gameType;
    if (params.limit !== undefined) result.limit = params.limit;
    if (params.start !== undefined) result.start = params.start;
    return Object.keys(result).length > 0 ? result : undefined;
  }

  async getRealTimeStats(params?: EdgeSeasonParams): Promise<EdgeResponse<EdgeTeamStat>> {
    return this.http.get('/edge/team/stats/real-time', { params: this.buildParams(params) });
  }

  async getDistance(params?: EdgeSeasonParams): Promise<EdgeResponse<EdgeTeamStat>> {
    return this.http.get('/edge/team/stats/distance', { params: this.buildParams(params) });
  }

  async getSpeed(params?: EdgeSeasonParams): Promise<EdgeResponse<EdgeTeamStat>> {
    return this.http.get('/edge/team/stats/speed', { params: this.buildParams(params) });
  }

  async getSpeedBursts(params?: EdgeSeasonParams): Promise<EdgeResponse<EdgeTeamStat>> {
    return this.http.get('/edge/team/stats/speed-bursts', { params: this.buildParams(params) });
  }

  async getZoneTime(params?: EdgeSeasonParams): Promise<EdgeResponse<EdgeTeamStat>> {
    return this.http.get('/edge/team/stats/zone-time', { params: this.buildParams(params) });
  }

  async getShotSpeed(params?: EdgeSeasonParams): Promise<EdgeResponse<EdgeTeamStat>> {
    return this.http.get('/edge/team/stats/shot-speed', { params: this.buildParams(params) });
  }

  async getShotLocation(params?: EdgeSeasonParams): Promise<EdgeResponse<EdgeTeamStat>> {
    return this.http.get('/edge/team/stats/shot-location', { params: this.buildParams(params) });
  }

  async getTimeBetweenShots(params?: EdgeSeasonParams): Promise<EdgeResponse<EdgeTeamStat>> {
    return this.http.get('/edge/team/stats/time-between-shots', { params: this.buildParams(params) });
  }

  async getPossessionTime(params?: EdgeSeasonParams): Promise<EdgeResponse<EdgeTeamStat>> {
    return this.http.get('/edge/team/stats/possession-time', { params: this.buildParams(params) });
  }

  async getPenaltyKill(params?: EdgeSeasonParams): Promise<EdgeResponse<EdgeTeamStat>> {
    return this.http.get('/edge/team/stats/penalty-kill', { params: this.buildParams(params) });
  }

  async getPowerPlay(params?: EdgeSeasonParams): Promise<EdgeResponse<EdgeTeamStat>> {
    return this.http.get('/edge/team/stats/power-play', { params: this.buildParams(params) });
  }

  async getFaceoffs(params?: EdgeSeasonParams): Promise<EdgeResponse<EdgeTeamStat>> {
    return this.http.get('/edge/team/stats/faceoffs', { params: this.buildParams(params) });
  }

  async getOverview(params?: EdgeSeasonParams): Promise<EdgeResponse<EdgeTeamStat>> {
    return this.http.get('/edge/team/stats/overview', { params: this.buildParams(params) });
  }
}
