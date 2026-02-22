# Changelog

## [2.0.0] - 2026-02-21

### Breaking Changes

- Complete rewrite from JavaScript to TypeScript
- New API surface: `NHLClient` class replaces individual function exports
- Minimum Node.js version: 18

### Added

- **Dual API support**: Both NHL Web API (`api-web.nhle.com/v1`) and Stats API (`api.nhle.com/stats/rest`)
- **TypeScript**: Full type definitions for all endpoints and responses
- **Dual module format**: CJS + ESM output with `.d.ts` declarations
- **HTTP client**: Retry with exponential backoff, rate-limit handling (429 + Retry-After), typed errors
- **Web API endpoints**:
  - Players: landing, game log, spotlight
  - Standings: current and historical
  - Scores: live scores and scoreboards
  - Teams: roster, stats, schedule, prospects
  - Schedule: league and team schedules
  - Games: play-by-play, boxscore, landing, story, right rail
  - Leaders: skater and goalie stat leaders
  - Draft: rankings and picks
  - Playoffs: series carousel, schedule, bracket
  - Network: TV schedule, where to watch
  - Meta: player/team metadata, location, season info
  - NHL Edge analytics: 39 endpoints for teams, skaters, and goalies (speed, distance, zone time, shot speed, and more)
- **Stats API endpoints**:
  - Skaters: stats by report type, leaders, milestones
  - Goalies: stats by report type, leaders, milestones
  - Teams: all teams, franchises, stats by report type
  - Draft, games (including shift charts), seasons, config, glossary
- **CayenneExpBuilder**: Fluent builder for Stats API filter expressions
- **Error types**: `NHLApiError`, `NHLNotFoundError`, `NHLRateLimitError`
- **CI/CD**: GitHub Actions for PR testing and npm publishing

### Removed

- Old `index.js` with `getPlayer`, `getPlayerGameLog`, `getPlayerGameLogNow` exports

## [1.0.0] - 2024-01-01

### Added

- Initial release with `getPlayer`, `getPlayerGameLog`, `getPlayerGameLogNow`
