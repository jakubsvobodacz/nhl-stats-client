import { HttpClient } from '../http/http-client.js';
import { PlayByPlay, Boxscore, GameLanding, GameStory, GameRightRail } from '../types/game.js';

export class GamesEndpoints {
  constructor(private http: HttpClient) {}

  async getPlayByPlay(gameId: number): Promise<PlayByPlay> {
    return this.http.get<PlayByPlay>(`/gamecenter/${gameId}/play-by-play`);
  }

  async getBoxscore(gameId: number): Promise<Boxscore> {
    return this.http.get<Boxscore>(`/gamecenter/${gameId}/boxscore`);
  }

  async getLanding(gameId: number): Promise<GameLanding> {
    return this.http.get<GameLanding>(`/gamecenter/${gameId}/landing`);
  }

  async getStory(gameId: number): Promise<GameStory> {
    return this.http.get<GameStory>(`/wsc/game-story/${gameId}`);
  }

  async getRightRail(gameId: number): Promise<GameRightRail> {
    return this.http.get<GameRightRail>(`/gamecenter/${gameId}/right-rail`);
  }

  async getReplay(gameId: number): Promise<unknown> {
    return this.http.get(`/gamecenter/${gameId}/recap`);
  }

  async getWscPlayByPlay(gameId: number): Promise<unknown> {
    return this.http.get(`/wsc/game-play-by-play/${gameId}`);
  }
}
