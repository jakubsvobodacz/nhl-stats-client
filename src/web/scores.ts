import { HttpClient } from '../http/http-client.js';
import { ScoresResponse } from '../types/game.js';
import { TeamScoreboard } from '../types/team.js';

export class ScoresEndpoints {
  constructor(private http: HttpClient) {}

  async get(date?: string): Promise<ScoresResponse> {
    const path = date ? `/score/${date}` : '/score/now';
    return this.http.get<ScoresResponse>(path);
  }

  async getScoreboard(date?: string): Promise<ScoresResponse> {
    const path = date ? `/scoreboard/${date}` : '/scoreboard/now';
    return this.http.get<ScoresResponse>(path);
  }

  async getTeamScoreboard(teamAbbrev: string): Promise<TeamScoreboard> {
    return this.http.get<TeamScoreboard>(`/scoreboard/${teamAbbrev}/now`);
  }
}
