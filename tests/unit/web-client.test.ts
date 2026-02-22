import { describe, it, expect, vi, beforeEach } from 'vitest';
import axios from 'axios';
import { WebApiClient } from '../../src/web/web-client.js';

vi.mock('axios');
const mockAxios = vi.mocked(axios);

describe('WebApiClient', () => {
  let mockInstance: { get: ReturnType<typeof vi.fn> };
  let client: WebApiClient;

  beforeEach(() => {
    vi.clearAllMocks();
    mockInstance = { get: vi.fn().mockResolvedValue({ data: {} }) };
    mockAxios.create.mockReturnValue(mockInstance as never);
    mockAxios.isAxiosError.mockReturnValue(false);
    client = new WebApiClient();
  });

  describe('players', () => {
    it('getLanding calls correct path', async () => {
      await client.players.getLanding(8478402);
      expect(mockInstance.get).toHaveBeenCalledWith('/player/8478402/landing', expect.anything());
    });

    it('getGameLog calls correct path', async () => {
      await client.players.getGameLog(8478402, '20232024', 2);
      expect(mockInstance.get).toHaveBeenCalledWith('/player/8478402/game-log/20232024/2', expect.anything());
    });

    it('getGameLogNow calls correct path', async () => {
      await client.players.getGameLogNow(8478402);
      expect(mockInstance.get).toHaveBeenCalledWith('/player/8478402/game-log/now', expect.anything());
    });

    it('getSpotlight calls correct path', async () => {
      await client.players.getSpotlight();
      expect(mockInstance.get).toHaveBeenCalledWith('/player-spotlight', expect.anything());
    });
  });

  describe('standings', () => {
    it('get without date calls /standings/now', async () => {
      await client.standings.get();
      expect(mockInstance.get).toHaveBeenCalledWith('/standings/now', expect.anything());
    });

    it('get with date calls /standings/{date}', async () => {
      await client.standings.get('2024-01-15');
      expect(mockInstance.get).toHaveBeenCalledWith('/standings/2024-01-15', expect.anything());
    });
  });

  describe('scores', () => {
    it('get without date calls /score/now', async () => {
      await client.scores.get();
      expect(mockInstance.get).toHaveBeenCalledWith('/score/now', expect.anything());
    });
  });

  describe('teams', () => {
    it('getRoster calls correct path', async () => {
      await client.teams.getRoster('TOR');
      expect(mockInstance.get).toHaveBeenCalledWith('/roster/TOR/current', expect.anything());
    });

    it('getRoster with season calls correct path', async () => {
      await client.teams.getRoster('TOR', '20232024');
      expect(mockInstance.get).toHaveBeenCalledWith('/roster/TOR/20232024', expect.anything());
    });

    it('getStats now calls correct path', async () => {
      await client.teams.getStats('TOR');
      expect(mockInstance.get).toHaveBeenCalledWith('/club-stats/TOR/now', expect.anything());
    });

    it('getSchedule calls correct path', async () => {
      await client.teams.getSchedule('TOR');
      expect(mockInstance.get).toHaveBeenCalledWith('/club-schedule/TOR/month/now', expect.anything());
    });
  });

  describe('schedule', () => {
    it('get without date calls /schedule/now', async () => {
      await client.schedule.get();
      expect(mockInstance.get).toHaveBeenCalledWith('/schedule/now', expect.anything());
    });
  });

  describe('games', () => {
    it('getPlayByPlay calls correct path', async () => {
      await client.games.getPlayByPlay(2024020001);
      expect(mockInstance.get).toHaveBeenCalledWith('/gamecenter/2024020001/play-by-play', expect.anything());
    });

    it('getBoxscore calls correct path', async () => {
      await client.games.getBoxscore(2024020001);
      expect(mockInstance.get).toHaveBeenCalledWith('/gamecenter/2024020001/boxscore', expect.anything());
    });
  });

  describe('leaders', () => {
    it('getSkatersCurrent calls correct path', async () => {
      await client.leaders.getSkatersCurrent();
      expect(mockInstance.get).toHaveBeenCalledWith('/skater-stats-leaders/current', expect.anything());
    });

    it('getGoaliesCurrent calls correct path', async () => {
      await client.leaders.getGoaliesCurrent();
      expect(mockInstance.get).toHaveBeenCalledWith('/goalie-stats-leaders/current', expect.anything());
    });
  });
});
