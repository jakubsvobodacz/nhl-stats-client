import { WebApiClient, WebApiClientConfig } from './web/web-client.js';
import { StatsApiClient, StatsApiClientConfig } from './stats/stats-client.js';
import { PlayersEndpoints } from './web/players.js';
import { StandingsEndpoints } from './web/standings.js';
import { ScoresEndpoints } from './web/scores.js';
import { TeamsEndpoints } from './web/teams.js';
import { ScheduleEndpoints } from './web/schedule.js';
import { GamesEndpoints } from './web/games.js';
import { LeadersEndpoints } from './web/leaders.js';
import { DraftEndpoints } from './web/draft.js';
import { PlayoffsEndpoints } from './web/playoffs.js';
import { NetworkEndpoints } from './web/network.js';
import { MetaEndpoints } from './web/meta.js';

export interface NHLClientConfig extends WebApiClientConfig {
  stats?: StatsApiClientConfig;
}

export class NHLClient {
  public readonly web: WebApiClient;
  public readonly stats: StatsApiClient;
  public readonly players: PlayersEndpoints;
  public readonly standings: StandingsEndpoints;
  public readonly scores: ScoresEndpoints;
  public readonly teams: TeamsEndpoints;
  public readonly schedule: ScheduleEndpoints;
  public readonly games: GamesEndpoints;
  public readonly leaders: LeadersEndpoints;
  public readonly draft: DraftEndpoints;
  public readonly playoffs: PlayoffsEndpoints;
  public readonly network: NetworkEndpoints;
  public readonly meta: MetaEndpoints;

  constructor(config?: NHLClientConfig) {
    this.web = new WebApiClient(config);
    this.stats = new StatsApiClient(config?.stats);
    this.players = this.web.players;
    this.standings = this.web.standings;
    this.scores = this.web.scores;
    this.teams = this.web.teams;
    this.schedule = this.web.schedule;
    this.games = this.web.games;
    this.leaders = this.web.leaders;
    this.draft = this.web.draft;
    this.playoffs = this.web.playoffs;
    this.network = this.web.network;
    this.meta = this.web.meta;
  }
}
