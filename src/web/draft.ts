import { HttpClient } from '../http/http-client.js';
import { DraftRankingsResponse, DraftPicksResponse } from '../types/draft.js';

export class DraftEndpoints {
  constructor(private http: HttpClient) {}

  async getRankingsNow(): Promise<DraftRankingsResponse> {
    return this.http.get<DraftRankingsResponse>('/draft/rankings/now');
  }

  async getRankings(season: string, prospectCategory?: string): Promise<DraftRankingsResponse> {
    const params = prospectCategory ? { prospectCategory } : undefined;
    return this.http.get<DraftRankingsResponse>(`/draft/rankings/${season}`, { params });
  }

  async getPicksNow(): Promise<DraftPicksResponse> {
    return this.http.get<DraftPicksResponse>('/draft/picks/now');
  }

  async getPicks(season: string, round?: number): Promise<DraftPicksResponse> {
    if (round !== undefined) {
      return this.http.get<DraftPicksResponse>(`/draft/picks/${season}/round/${round}`);
    }
    return this.http.get<DraftPicksResponse>(`/draft/picks/${season}`);
  }
}
