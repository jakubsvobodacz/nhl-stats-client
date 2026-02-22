import { HttpClient } from '../http/http-client.js';
import { SkatersStatsEndpoints } from './skaters.js';
import { GoaliesStatsEndpoints } from './goalies.js';
import { TeamsStatsEndpoints } from './teams.js';
import { DraftStatsEndpoints } from './draft.js';
import { GamesStatsEndpoints } from './games.js';
import { SeasonsStatsEndpoints } from './seasons.js';
import { MiscStatsEndpoints } from './misc.js';

const STATS_API_BASE = 'https://api.nhle.com/stats/rest';

export interface StatsApiClientConfig {
  language?: string;
  timeout?: number;
  retries?: number;
  retryDelay?: number;
}

export class StatsApiClient {
  private http: HttpClient;
  private language: string;

  public readonly skaters: SkatersStatsEndpoints;
  public readonly goalies: GoaliesStatsEndpoints;
  public readonly teams: TeamsStatsEndpoints;
  public readonly draft: DraftStatsEndpoints;
  public readonly games: GamesStatsEndpoints;
  public readonly seasons: SeasonsStatsEndpoints;
  public readonly misc: MiscStatsEndpoints;

  constructor(config?: StatsApiClientConfig) {
    this.language = config?.language ?? 'en';
    this.http = new HttpClient({
      baseURL: `${STATS_API_BASE}/${this.language}`,
      timeout: config?.timeout,
      retries: config?.retries,
      retryDelay: config?.retryDelay,
    });

    this.skaters = new SkatersStatsEndpoints(this.http);
    this.goalies = new GoaliesStatsEndpoints(this.http);
    this.teams = new TeamsStatsEndpoints(this.http);
    this.draft = new DraftStatsEndpoints(this.http);
    this.games = new GamesStatsEndpoints(this.http);
    this.seasons = new SeasonsStatsEndpoints(this.http);
    this.misc = new MiscStatsEndpoints(this.http);
  }

  get httpClient(): HttpClient {
    return this.http;
  }
}
