import { HttpClient } from '../http/http-client.js';
import { StatsConfig, Country, GlossaryEntry, StatsApiResponse } from '../types/stats-api.js';

export class MiscStatsEndpoints {
  constructor(private http: HttpClient) {}

  async getConfig(): Promise<StatsConfig> {
    return this.http.get<StatsConfig>('/config');
  }

  async ping(): Promise<unknown> {
    return this.http.get('/ping');
  }

  async getCountries(): Promise<StatsApiResponse<Country>> {
    return this.http.get<StatsApiResponse<Country>>('/country');
  }

  async getGlossary(): Promise<StatsApiResponse<GlossaryEntry>> {
    return this.http.get<StatsApiResponse<GlossaryEntry>>('/glossary');
  }

  async getContent(path: string): Promise<unknown> {
    return this.http.get(`/content/${path}`);
  }
}
