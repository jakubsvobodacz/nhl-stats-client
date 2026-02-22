# NHL API Client

A comprehensive TypeScript client for both NHL APIs. Covers standings, scores, players, teams, games, NHL Edge analytics, shift charts, and more.

## Features

- **Two APIs, one client** - Web API (`api-web.nhle.com/v1`) + Stats API (`api.nhle.com/stats/rest`)
- **TypeScript** - Full type definitions for all endpoints and responses
- **Dual format** - CJS + ESM output, works in Node.js and bundlers
- **Resilient** - Retry with exponential backoff, rate-limit handling, typed errors
- **100+ endpoints** - Players, teams, games, standings, scores, draft, playoffs, NHL Edge analytics, shift charts, and more
- **CayenneExpBuilder** - Fluent helper for Stats API filter expressions

## Installation

```bash
npm install nhl-api-client
```

## Quick Start

```typescript
import { NHLClient } from 'nhl-api-client';

const nhl = new NHLClient();

// Standings
const standings = await nhl.standings.get();

// Player info
const player = await nhl.players.getLanding(8478402); // Connor McDavid

// Live scores
const scores = await nhl.scores.get();

// Game boxscore
const boxscore = await nhl.games.getBoxscore(2024020001);

// Team roster
const roster = await nhl.teams.getRoster('TOR');
```

## API Reference

### NHLClient

```typescript
const nhl = new NHLClient({
  timeout: 10000,    // Request timeout in ms (default: 10000)
  retries: 3,        // Max retries on failure (default: 3)
  retryDelay: 1000,  // Base retry delay in ms (default: 1000)
  stats: {           // Stats API specific config
    language: 'en',  // API language (default: 'en')
  },
});
```

The client exposes convenience namespaces and direct API access:

```typescript
// Convenience (same as nhl.web.standings)
nhl.standings.get();

// Direct Web API access
nhl.web.standings.get();

// Direct Stats API access
nhl.stats.skaters.getByReport('summary', { cayenneExp: '...' });

// NHL Edge analytics
nhl.web.edge.skaters.getSpeed();
```

---

### Players

```typescript
nhl.players.getLanding(playerId)           // Full player profile
nhl.players.getGameLog(playerId, season, gameType) // Game log for season
nhl.players.getGameLogNow(playerId)        // Current season game log
nhl.players.getSpotlight()                 // Featured players
```

### Standings

```typescript
nhl.standings.get()                        // Current standings
nhl.standings.get('2024-01-15')            // Standings on specific date
nhl.standings.getSeasonList()              // Available seasons
```

### Scores

```typescript
nhl.scores.get()                           // Today's scores
nhl.scores.get('2024-01-15')               // Scores for specific date
nhl.scores.getScoreboard()                 // Scoreboard view
nhl.scores.getTeamScoreboard('TOR')        // Team-specific scoreboard
```

### Teams

```typescript
nhl.teams.getRoster('TOR')                 // Current roster
nhl.teams.getRoster('TOR', '20232024')     // Historical roster
nhl.teams.getRosterSeason('TOR')           // Available roster seasons
nhl.teams.getStats('TOR')                  // Current season stats
nhl.teams.getStats('TOR', '20232024', 2)   // Historical stats
nhl.teams.getStatsSeasonList('TOR')        // Available stat seasons
nhl.teams.getSchedule('TOR')               // Current month schedule
nhl.teams.getSchedule('TOR', '2024-01')    // Schedule for specific month
nhl.teams.getScheduleByWeek('TOR')         // Current week schedule
nhl.teams.getScheduleSeason('TOR')         // Full season schedule
nhl.teams.getProspects('TOR')              // Team prospects
nhl.teams.getScoreboard('TOR')             // Team scoreboard
nhl.teams.getLogo('TOR')                   // Team logo URL
```

### Schedule

```typescript
nhl.schedule.get()                         // Current schedule
nhl.schedule.get('2024-01-15')             // Schedule for date
nhl.schedule.getCalendar()                 // Schedule calendar
nhl.schedule.getByTeam('TOR')              // Team schedule
nhl.schedule.getSeasonSchedule('20242025') // Full season
```

### Games

```typescript
nhl.games.getPlayByPlay(gameId)            // Play-by-play data
nhl.games.getBoxscore(gameId)              // Game boxscore
nhl.games.getLanding(gameId)               // Game landing page data
nhl.games.getStory(gameId)                 // Game story/recap
nhl.games.getRightRail(gameId)             // Right rail stats
nhl.games.getReplay(gameId)                // Replay info
nhl.games.getWscPlayByPlay(gameId)         // WSC play-by-play
```

### Leaders

```typescript
nhl.leaders.getSkatersCurrent()            // Current skater leaders
nhl.leaders.getSkatersCurrent('goals,assists') // Specific categories
nhl.leaders.getSkaters('20232024', 2)      // Season skater leaders
nhl.leaders.getGoaliesCurrent()            // Current goalie leaders
nhl.leaders.getGoalies('20232024', 2)      // Season goalie leaders
```

### Draft

```typescript
nhl.draft.getRankingsNow()                 // Current draft rankings
nhl.draft.getRankings('2024')              // Rankings by year
nhl.draft.getPicksNow()                   // Current draft picks
nhl.draft.getPicks('2024')                 // Picks by year
nhl.draft.getPicks('2024', 1)              // Picks by round
```

### Playoffs

```typescript
nhl.playoffs.getSeriesCarousel()           // Current playoff series
nhl.playoffs.getSeriesCarousel('20232024') // Historical series
nhl.playoffs.getSeriesSchedule('20232024', 'A') // Series schedule
nhl.playoffs.getBracket()                  // Current bracket
nhl.playoffs.getBracket('20232024')        // Historical bracket
```

### Network

```typescript
nhl.network.getTvSchedule()               // Today's TV schedule
nhl.network.getTvSchedule('2024-01-15')   // TV schedule by date
nhl.network.getWhereToWatch()             // Where to watch info
nhl.network.getPartnerGames('US')         // Partner games by country
```

### Meta

```typescript
nhl.meta.get()                             // Players, teams, seasons metadata
nhl.meta.getGame(gameId)                   // Game metadata
nhl.meta.getLocation()                     // Location info
nhl.meta.getSeason()                       // Season info
nhl.meta.getPlayoffSeriesMeta()            // Playoff series metadata
```

---

### NHL Edge Analytics

Advanced tracking data from NHL EDGE (skating speed, shot velocity, zone time, etc.).

#### Edge - Teams

```typescript
nhl.web.edge.teams.getRealTimeStats(params?)
nhl.web.edge.teams.getDistance(params?)
nhl.web.edge.teams.getSpeed(params?)
nhl.web.edge.teams.getSpeedBursts(params?)
nhl.web.edge.teams.getZoneTime(params?)
nhl.web.edge.teams.getShotSpeed(params?)
nhl.web.edge.teams.getShotLocation(params?)
nhl.web.edge.teams.getTimeBetweenShots(params?)
nhl.web.edge.teams.getPossessionTime(params?)
nhl.web.edge.teams.getPenaltyKill(params?)
nhl.web.edge.teams.getPowerPlay(params?)
nhl.web.edge.teams.getFaceoffs(params?)
nhl.web.edge.teams.getOverview(params?)
```

#### Edge - Skaters

```typescript
nhl.web.edge.skaters.getRealTimeStats(params?)
nhl.web.edge.skaters.getDistance(params?)
nhl.web.edge.skaters.getSpeed(params?)
nhl.web.edge.skaters.getSpeedBursts(params?)
nhl.web.edge.skaters.getZoneTime(params?)
nhl.web.edge.skaters.getShotSpeed(params?)
nhl.web.edge.skaters.getShotLocation(params?)
nhl.web.edge.skaters.getTimeBetweenShots(params?)
nhl.web.edge.skaters.getPossessionTime(params?)
nhl.web.edge.skaters.getPenaltyKill(params?)
nhl.web.edge.skaters.getPowerPlay(params?)
nhl.web.edge.skaters.getFaceoffs(params?)
nhl.web.edge.skaters.getOverview(params?)
nhl.web.edge.skaters.getRealtimeLeaders(params?)
nhl.web.edge.skaters.getSpeedLeaders(params?)
```

#### Edge - Goalies

```typescript
nhl.web.edge.goalies.getRealTimeStats(params?)
nhl.web.edge.goalies.getSaveTracking(params?)
nhl.web.edge.goalies.getShotSpeed(params?)
nhl.web.edge.goalies.getShotLocation(params?)
nhl.web.edge.goalies.getShotType(params?)
nhl.web.edge.goalies.getZoneTime(params?)
nhl.web.edge.goalies.getPenaltyKill(params?)
nhl.web.edge.goalies.getStartVsRelief(params?)
nhl.web.edge.goalies.getDaysRest(params?)
nhl.web.edge.goalies.getOverview(params?)
nhl.web.edge.goalies.getLeaders(params?)
```

#### Edge Parameters

```typescript
interface EdgeSeasonParams {
  season?: string;     // e.g. '20242025'
  gameType?: number;   // 2 = regular, 3 = playoffs
  position?: string;   // 'F', 'D' (skaters only)
  team?: string;       // Team abbreviation
  limit?: number;
  start?: number;
}
```

---

### Stats API

The Stats API (`api.nhle.com/stats/rest`) provides deep statistical querying with `cayenneExp` filter expressions.

#### Skaters

```typescript
nhl.stats.skaters.getByReport('summary', {
  cayenneExp: 'seasonId=20242025 and gameTypeId=2',
  sort: 'points',
  dir: 'DESC',
  limit: 50,
});

nhl.stats.skaters.getLeaders('goals', {
  cayenneExp: 'seasonId=20242025 and gameTypeId=2',
});

nhl.stats.skaters.getMilestones();
```

#### Goalies

```typescript
nhl.stats.goalies.getByReport('summary', {
  cayenneExp: 'seasonId=20242025 and gameTypeId=2',
});

nhl.stats.goalies.getLeaders('wins');
nhl.stats.goalies.getMilestones();
```

#### Teams

```typescript
nhl.stats.teams.getAll();
nhl.stats.teams.getById(10);
nhl.stats.teams.getByReport('summary', {
  cayenneExp: 'seasonId=20242025 and gameTypeId=2',
});
nhl.stats.teams.getFranchises();
```

#### Other Stats Endpoints

```typescript
nhl.stats.draft.get({ cayenneExp: 'draftYear=2024' });
nhl.stats.games.get({ cayenneExp: 'season=20242025' });
nhl.stats.games.getShiftCharts(gameId);          // Shift chart data
nhl.stats.games.getMeta();                        // Game metadata
nhl.stats.seasons.get();                          // All seasons
nhl.stats.seasons.getComponentSeason();
nhl.stats.misc.getConfig();                       // Full API config
nhl.stats.misc.ping();
nhl.stats.misc.getCountries();
nhl.stats.misc.getGlossary();
nhl.stats.misc.getContent('path');
```

---

### CayenneExp Guide

The Stats API uses [Apache Cayenne expressions](https://cayenne.apache.org/docs/4.0/cayenne-guide/expressions.html) for filtering. The `CayenneExpBuilder` provides a fluent API to build these.

#### Operators

| Operator | Description |
|----------|-------------|
| `=` | Equals |
| `!=` | Not equals |
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater than or equal |
| `<=` | Less than or equal |
| `and` | Logical AND |
| `or` | Logical OR |

#### Common Filter Fields

| Field | Description | Example |
|-------|-------------|---------|
| `seasonId` | Season (YYYYYYYY format) | `seasonId=20242025` |
| `gameTypeId` | 2=regular, 3=playoffs | `gameTypeId=2` |
| `teamId` | Team numeric ID | `teamId=10` |
| `currentTeamId` | Current team ID | `currentTeamId=7` |
| `positionCode` | Player position | `positionCode="F"` |
| `gamesPlayed` | Games played threshold | `gamesPlayed>=20` |
| `gameId` | Specific game | `gameId=2024020001` |
| `gameDate` | Date (ISO 8601) | `gameDate>="2024-10-01"` |
| `franchiseId` | Franchise ID | `franchiseId=10` |
| `playerId` | Player ID | `playerId=8478402` |

#### CayenneExpBuilder Usage

```typescript
import { CayenneExpBuilder, GameType } from 'nhl-api-client';

// Regular season forwards in 2024-25
const exp = new CayenneExpBuilder()
  .seasonId('20242025')
  .gameTypeId(GameType.RegularSeason)
  .position('F')
  .build();
// => 'seasonId=20242025 and gameTypeId=2 and positionCode="F"'

// Players with 20+ games
const exp2 = new CayenneExpBuilder()
  .seasonId('20242025')
  .gamesPlayed('>=', 20)
  .build();
// => 'seasonId=20242025 and gamesPlayed>=20'

// Date range filter
const exp3 = new CayenneExpBuilder()
  .gameDate('>=', '2024-10-01')
  .gameDate('<=', '2025-04-15')
  .build();
// => 'gameDate>="2024-10-01" and gameDate<="2025-04-15"'

// Custom field filter
const exp4 = new CayenneExpBuilder()
  .where('shootsCatches', '=', 'L')
  .build();
// => 'shootsCatches="L"'

// Raw expression
const exp5 = new CayenneExpBuilder()
  .raw('seasonId=20242025 and gameTypeId=3')
  .build();
```

#### Discovering Available Filters

The Stats API config endpoint returns all available report types and filter fields:

```typescript
const config = await nhl.stats.misc.getConfig();
```

---

### Error Handling

```typescript
import { NHLApiError, NHLNotFoundError, NHLRateLimitError } from 'nhl-api-client';

try {
  const player = await nhl.players.getLanding(99999999);
} catch (error) {
  if (error instanceof NHLNotFoundError) {
    console.log('Player not found');
  } else if (error instanceof NHLRateLimitError) {
    console.log(`Rate limited. Retry after: ${error.retryAfter}s`);
  } else if (error instanceof NHLApiError) {
    console.log(`API error: ${error.statusCode} - ${error.message}`);
  }
}
```

The client automatically retries failed requests (up to 3 times with exponential backoff) and respects `Retry-After` headers on 429 responses. 404 errors are not retried.

---

### TypeScript

All response types are exported:

```typescript
import type {
  PlayerLanding,
  StandingsResponse,
  Boxscore,
  PlayByPlay,
  TeamRoster,
  StatsApiResponse,
  StatsSkater,
} from 'nhl-api-client';
```

---

## Acknowledgments

- The [NHL API](https://api-web.nhle.com) for providing public hockey data
- [Zmalski/NHL-API-Reference](https://github.com/Zmalski/NHL-API-Reference) for comprehensive API documentation
- [dfleis/nhl-api-docs](https://github.com/dfleis/nhl-api-docs) for automated endpoint discovery

## License

MIT
