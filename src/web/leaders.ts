import { HttpClient } from '../http/http-client.js';
import { LeadersResponse } from '../types/leaders.js';

export class LeadersEndpoints {
  constructor(private http: HttpClient) {}

  async getSkatersCurrent(categories?: string): Promise<LeadersResponse> {
    const params = categories ? { categories } : undefined;
    return this.http.get<LeadersResponse>('/skater-stats-leaders/current', { params });
  }

  async getSkaters(season: string, gameType: number, categories?: string): Promise<LeadersResponse> {
    const params = categories ? { categories } : undefined;
    return this.http.get<LeadersResponse>(`/skater-stats-leaders/${season}/${gameType}`, { params });
  }

  async getGoaliesCurrent(categories?: string): Promise<LeadersResponse> {
    const params = categories ? { categories } : undefined;
    return this.http.get<LeadersResponse>('/goalie-stats-leaders/current', { params });
  }

  async getGoalies(season: string, gameType: number, categories?: string): Promise<LeadersResponse> {
    const params = categories ? { categories } : undefined;
    return this.http.get<LeadersResponse>(`/goalie-stats-leaders/${season}/${gameType}`, { params });
  }
}
