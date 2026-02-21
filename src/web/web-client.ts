import { HttpClient } from '../http/http-client.js';
import { PlayersEndpoints } from './players.js';
import { StandingsEndpoints } from './standings.js';
import { ScoresEndpoints } from './scores.js';
import { TeamsEndpoints } from './teams.js';
import { ScheduleEndpoints } from './schedule.js';
import { GamesEndpoints } from './games.js';
import { LeadersEndpoints } from './leaders.js';

const WEB_API_BASE = 'https://api-web.nhle.com/v1';

export interface WebApiClientConfig {
  timeout?: number;
  retries?: number;
  retryDelay?: number;
}

export class WebApiClient {
  private http: HttpClient;
  public readonly players: PlayersEndpoints;
  public readonly standings: StandingsEndpoints;
  public readonly scores: ScoresEndpoints;
  public readonly teams: TeamsEndpoints;
  public readonly schedule: ScheduleEndpoints;
  public readonly games: GamesEndpoints;
  public readonly leaders: LeadersEndpoints;

  constructor(config?: WebApiClientConfig) {
    this.http = new HttpClient({
      baseURL: WEB_API_BASE,
      timeout: config?.timeout,
      retries: config?.retries,
      retryDelay: config?.retryDelay,
    });

    this.players = new PlayersEndpoints(this.http);
    this.standings = new StandingsEndpoints(this.http);
    this.scores = new ScoresEndpoints(this.http);
    this.teams = new TeamsEndpoints(this.http);
    this.schedule = new ScheduleEndpoints(this.http);
    this.games = new GamesEndpoints(this.http);
    this.leaders = new LeadersEndpoints(this.http);
  }

  get httpClient(): HttpClient {
    return this.http;
  }
}
