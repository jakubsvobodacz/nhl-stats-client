import { describe, it, expect, vi, beforeEach } from 'vitest';
import axios from 'axios';
import { HttpClient } from '../../src/http/http-client.js';
import { NHLApiError, NHLNotFoundError, NHLRateLimitError } from '../../src/http/errors.js';

vi.mock('axios');

const mockAxios = vi.mocked(axios);

describe('HttpClient', () => {
  let mockInstance: { get: ReturnType<typeof vi.fn> };

  beforeEach(() => {
    vi.clearAllMocks();
    mockInstance = {
      get: vi.fn(),
    };
    mockAxios.create.mockReturnValue(mockInstance as never);
    mockAxios.isAxiosError.mockImplementation(
      (error: unknown) => (error as Record<string, unknown>)?.isAxiosError === true
    );
  });

  it('should return data on successful request', async () => {
    mockInstance.get.mockResolvedValue({ data: { standings: [] } });
    const client = new HttpClient({ baseURL: 'https://api.test.com' });
    const result = await client.get('/standings');
    expect(result).toEqual({ standings: [] });
  });

  it('should throw NHLNotFoundError on 404', async () => {
    const error = {
      isAxiosError: true,
      response: { status: 404, headers: {} },
      config: { url: '/missing' },
      message: 'Not found',
    };
    mockInstance.get.mockRejectedValue(error);
    const client = new HttpClient({ baseURL: 'https://api.test.com', retries: 0 });
    await expect(client.get('/missing')).rejects.toThrow(NHLNotFoundError);
  });

  it('should throw NHLRateLimitError on 429 after retries', async () => {
    const error = {
      isAxiosError: true,
      response: { status: 429, headers: { 'retry-after': '1' } },
      config: { url: '/rate-limited' },
      message: 'Too many requests',
    };
    mockInstance.get.mockRejectedValue(error);
    const client = new HttpClient({
      baseURL: 'https://api.test.com',
      retries: 1,
      retryDelay: 10,
    });
    await expect(client.get('/rate-limited')).rejects.toThrow(NHLRateLimitError);
  });

  it('should retry on server error and succeed', async () => {
    const error = {
      isAxiosError: true,
      response: { status: 500, headers: {} },
      config: { url: '/error' },
      message: 'Server error',
    };
    mockInstance.get
      .mockRejectedValueOnce(error)
      .mockResolvedValueOnce({ data: { ok: true } });
    const client = new HttpClient({
      baseURL: 'https://api.test.com',
      retries: 1,
      retryDelay: 10,
    });
    const result = await client.get('/error');
    expect(result).toEqual({ ok: true });
    expect(mockInstance.get).toHaveBeenCalledTimes(2);
  });

  it('should not retry on 404', async () => {
    const error = {
      isAxiosError: true,
      response: { status: 404, headers: {} },
      config: { url: '/not-found' },
      message: 'Not found',
    };
    mockInstance.get.mockRejectedValue(error);
    const client = new HttpClient({
      baseURL: 'https://api.test.com',
      retries: 3,
      retryDelay: 10,
    });
    await expect(client.get('/not-found')).rejects.toThrow(NHLNotFoundError);
    expect(mockInstance.get).toHaveBeenCalledTimes(1);
  });

  it('should throw NHLApiError on other HTTP errors', async () => {
    const error = {
      isAxiosError: true,
      response: { status: 503, headers: {} },
      config: { url: '/service-unavailable' },
      message: 'Service unavailable',
    };
    mockInstance.get.mockRejectedValue(error);
    const client = new HttpClient({ baseURL: 'https://api.test.com', retries: 0 });
    await expect(client.get('/service-unavailable')).rejects.toThrow(NHLApiError);
  });

  it('should handle non-axios errors', async () => {
    mockInstance.get.mockRejectedValue(new Error('Network failure'));
    const client = new HttpClient({ baseURL: 'https://api.test.com', retries: 0 });
    await expect(client.get('/path')).rejects.toThrow(NHLApiError);
  });
});
