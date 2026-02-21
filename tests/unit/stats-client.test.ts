import { describe, it, expect, vi, beforeEach } from 'vitest';
import axios from 'axios';
import { StatsApiClient } from '../../src/stats/stats-client.js';

vi.mock('axios');
const mockAxios = vi.mocked(axios);

describe('StatsApiClient', () => {
  let mockInstance: { get: ReturnType<typeof vi.fn> };
  let client: StatsApiClient;

  beforeEach(() => {
    vi.clearAllMocks();
    mockInstance = { get: vi.fn().mockResolvedValue({ data: { data: [], total: 0 } }) };
    mockAxios.create.mockReturnValue(mockInstance as never);
    mockAxios.isAxiosError.mockReturnValue(false);
    client = new StatsApiClient();
  });

  describe('skaters', () => {
    it('getByReport calls correct path', async () => {
      await client.skaters.getByReport('summary', {
        cayenneExp: 'seasonId=20232024 and gameTypeId=2',
      });
      expect(mockInstance.get).toHaveBeenCalledWith('/skater/summary', {
        params: { cayenneExp: 'seasonId=20232024 and gameTypeId=2' },
        headers: undefined,
      });
    });

    it('getLeaders calls correct path', async () => {
      await client.skaters.getLeaders('goals');
      expect(mockInstance.get).toHaveBeenCalledWith('/leaders/skaters/goals', expect.anything());
    });
  });

  describe('goalies', () => {
    it('getByReport calls correct path', async () => {
      await client.goalies.getByReport('summary');
      expect(mockInstance.get).toHaveBeenCalledWith('/goalie/summary', expect.anything());
    });
  });

  describe('teams', () => {
    it('getAll calls correct path', async () => {
      await client.teams.getAll();
      expect(mockInstance.get).toHaveBeenCalledWith('/team', expect.anything());
    });

    it('getFranchises calls correct path', async () => {
      await client.teams.getFranchises();
      expect(mockInstance.get).toHaveBeenCalledWith('/franchise', expect.anything());
    });

    it('getByReport calls correct path', async () => {
      await client.teams.getByReport('summary');
      expect(mockInstance.get).toHaveBeenCalledWith('/team/summary', expect.anything());
    });
  });

  describe('games', () => {
    it('getShiftCharts calls with cayenne filter', async () => {
      await client.games.getShiftCharts(2024020001);
      expect(mockInstance.get).toHaveBeenCalledWith('/shiftcharts', {
        params: { cayenneExp: 'gameId=2024020001' },
        headers: undefined,
      });
    });
  });

  describe('seasons', () => {
    it('get calls correct path', async () => {
      await client.seasons.get();
      expect(mockInstance.get).toHaveBeenCalledWith('/season', expect.anything());
    });
  });

  describe('misc', () => {
    it('getConfig calls correct path', async () => {
      await client.misc.getConfig();
      expect(mockInstance.get).toHaveBeenCalledWith('/config', expect.anything());
    });

    it('ping calls correct path', async () => {
      await client.misc.ping();
      expect(mockInstance.get).toHaveBeenCalledWith('/ping', expect.anything());
    });
  });
});
