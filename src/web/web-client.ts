import { HttpClient } from '../http/http-client.js';
import { PlayersEndpoints } from './players.js';
import { StandingsEndpoints } from './standings.js';
import { ScoresEndpoints } from './scores.js';
import { TeamsEndpoints } from './teams.js';
import { ScheduleEndpoints } from './schedule.js';
import { GamesEndpoints } from './games.js';
import { LeadersEndpoints } from './leaders.js';
import { DraftEndpoints } from './draft.js';
import { PlayoffsEndpoints } from './playoffs.js';
import { NetworkEndpoints } from './network.js';
import { MetaEndpoints } from './meta.js';
import { EdgeTeamsEndpoints } from './edge/edge-teams.js';
import { EdgeSkatersEndpoints } from './edge/edge-skaters.js';
import { EdgeGoaliesEndpoints } from './edge/edge-goalies.js';

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
  public readonly draft: DraftEndpoints;
  public readonly playoffs: PlayoffsEndpoints;
  public readonly network: NetworkEndpoints;
  public readonly meta: MetaEndpoints;
  public readonly edge: {
    teams: EdgeTeamsEndpoints;
    skaters: EdgeSkatersEndpoints;
    goalies: EdgeGoaliesEndpoints;
  };

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
    this.draft = new DraftEndpoints(this.http);
    this.playoffs = new PlayoffsEndpoints(this.http);
    this.network = new NetworkEndpoints(this.http);
    this.meta = new MetaEndpoints(this.http);
    this.edge = {
      teams: new EdgeTeamsEndpoints(this.http),
      skaters: new EdgeSkatersEndpoints(this.http),
      goalies: new EdgeGoaliesEndpoints(this.http),
    };
  }

  get httpClient(): HttpClient {
    return this.http;
  }
}
