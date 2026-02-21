import { WebApiClient, WebApiClientConfig } from './web/web-client.js';
import { PlayersEndpoints } from './web/players.js';
import { StandingsEndpoints } from './web/standings.js';
import { ScoresEndpoints } from './web/scores.js';
import { TeamsEndpoints } from './web/teams.js';
import { ScheduleEndpoints } from './web/schedule.js';
import { GamesEndpoints } from './web/games.js';
import { LeadersEndpoints } from './web/leaders.js';

export interface NHLClientConfig extends WebApiClientConfig {}

export class NHLClient {
  public readonly web: WebApiClient;
  public readonly players: PlayersEndpoints;
  public readonly standings: StandingsEndpoints;
  public readonly scores: ScoresEndpoints;
  public readonly teams: TeamsEndpoints;
  public readonly schedule: ScheduleEndpoints;
  public readonly games: GamesEndpoints;
  public readonly leaders: LeadersEndpoints;

  constructor(config?: NHLClientConfig) {
    this.web = new WebApiClient(config);
    this.players = this.web.players;
    this.standings = this.web.standings;
    this.scores = this.web.scores;
    this.teams = this.web.teams;
    this.schedule = this.web.schedule;
    this.games = this.web.games;
    this.leaders = this.web.leaders;
  }
}
