import { HttpClient } from '../http/http-client.js';
import { PlayerLanding, PlayerGameLog, PlayerSpotlight } from '../types/player.js';

export class PlayersEndpoints {
  constructor(private http: HttpClient) {}

  async getLanding(playerId: number): Promise<PlayerLanding> {
    return this.http.get<PlayerLanding>(`/player/${playerId}/landing`);
  }

  async getGameLog(playerId: number, season: string, gameType: number): Promise<PlayerGameLog> {
    return this.http.get<PlayerGameLog>(`/player/${playerId}/game-log/${season}/${gameType}`);
  }

  async getGameLogNow(playerId: number): Promise<PlayerGameLog> {
    return this.http.get<PlayerGameLog>(`/player/${playerId}/game-log/now`);
  }

  async getSpotlight(): Promise<PlayerSpotlight[]> {
    return this.http.get<PlayerSpotlight[]>('/player-spotlight');
  }
}
