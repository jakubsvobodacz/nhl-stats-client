import { HttpClient } from '../http/http-client.js';
import { PlayoffSeriesCarousel, PlayoffSeriesSchedule, PlayoffBracket } from '../types/playoffs.js';

export class PlayoffsEndpoints {
  constructor(private http: HttpClient) {}

  async getSeriesCarousel(season?: string): Promise<PlayoffSeriesCarousel> {
    const path = season ? `/playoff-series/carousel/${season}` : '/playoff-series/carousel/now';
    return this.http.get<PlayoffSeriesCarousel>(path);
  }

  async getSeriesSchedule(season: string, seriesLetter: string): Promise<PlayoffSeriesSchedule> {
    return this.http.get<PlayoffSeriesSchedule>(`/playoff-series/schedule/${season}/${seriesLetter}`);
  }

  async getBracket(season?: string): Promise<PlayoffBracket> {
    const path = season ? `/playoff-bracket/${season}` : '/playoff-bracket/now';
    return this.http.get<PlayoffBracket>(path);
  }
}
