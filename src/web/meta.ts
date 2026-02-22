import { HttpClient } from '../http/http-client.js';

export interface MetaResponse {
  players: MetaPlayer[];
  teams: MetaTeam[];
  seasonStates: MetaSeasonState[];
}

export interface MetaPlayer {
  playerId: number;
  name: string;
  teamId: number;
  teamAbbrev: string;
  position: string;
}

export interface MetaTeam {
  teamId: number;
  teamAbbrev: string;
  teamFullName: string;
}

export interface MetaSeasonState {
  seasonId: number;
  gameTypes: number[];
}

export interface GameMetaResponse {
  [key: string]: unknown;
}

export class MetaEndpoints {
  constructor(private http: HttpClient) {}

  async get(): Promise<MetaResponse> {
    return this.http.get<MetaResponse>('/meta');
  }

  async getGame(gameId: number): Promise<GameMetaResponse> {
    return this.http.get<GameMetaResponse>(`/meta/game/${gameId}`);
  }

  async getLocation(): Promise<unknown> {
    return this.http.get('/location');
  }

  async getSeason(): Promise<unknown> {
    return this.http.get('/season');
  }

  async getPlayoffSeriesMeta(): Promise<unknown> {
    return this.http.get('/meta/playoff-series');
  }
}
