import { HttpClient } from '../http/http-client.js';
import { TeamRoster, TeamSeasonStats, TeamScheduleResponse, ProspectStats, TeamScoreboard } from '../types/team.js';

export class TeamsEndpoints {
  constructor(private http: HttpClient) {}

  async getRoster(teamAbbrev: string, season?: string): Promise<TeamRoster> {
    const path = season
      ? `/roster/${teamAbbrev}/${season}`
      : `/roster/${teamAbbrev}/current`;
    return this.http.get<TeamRoster>(path);
  }

  async getRosterSeason(teamAbbrev: string): Promise<number[]> {
    return this.http.get<number[]>(`/roster-season/${teamAbbrev}`);
  }

  async getStats(teamAbbrev: string, season?: string, gameType?: number): Promise<TeamSeasonStats> {
    if (season && gameType !== undefined) {
      return this.http.get<TeamSeasonStats>(`/club-stats/${teamAbbrev}/${season}/${gameType}`);
    }
    return this.http.get<TeamSeasonStats>(`/club-stats/${teamAbbrev}/now`);
  }

  async getStatsSeasonList(teamAbbrev: string): Promise<unknown> {
    return this.http.get(`/club-stats-season/${teamAbbrev}`);
  }

  async getSchedule(teamAbbrev: string, month?: string): Promise<TeamScheduleResponse> {
    const path = month
      ? `/club-schedule/${teamAbbrev}/month/${month}`
      : `/club-schedule/${teamAbbrev}/month/now`;
    return this.http.get<TeamScheduleResponse>(path);
  }

  async getScheduleByWeek(teamAbbrev: string, date?: string): Promise<TeamScheduleResponse> {
    const path = date
      ? `/club-schedule/${teamAbbrev}/week/${date}`
      : `/club-schedule/${teamAbbrev}/week/now`;
    return this.http.get<TeamScheduleResponse>(path);
  }

  async getScheduleSeason(teamAbbrev: string, season?: string): Promise<TeamScheduleResponse> {
    if (season) {
      return this.http.get<TeamScheduleResponse>(`/club-schedule-season/${teamAbbrev}/${season}`);
    }
    return this.http.get<TeamScheduleResponse>(`/club-schedule-season/${teamAbbrev}/now`);
  }

  async getProspects(teamAbbrev: string): Promise<ProspectStats> {
    return this.http.get<ProspectStats>(`/prospects/${teamAbbrev}`);
  }

  async getScoreboard(teamAbbrev: string): Promise<TeamScoreboard> {
    return this.http.get<TeamScoreboard>(`/scoreboard/${teamAbbrev}/now`);
  }

  async getSeasonList(): Promise<unknown> {
    return this.http.get('/season');
  }

  async getLogo(teamAbbrev: string): Promise<string> {
    return this.http.get<string>(`/team/${teamAbbrev}/logo`);
  }
}
