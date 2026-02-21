import axios, { AxiosInstance, AxiosError } from 'axios';
import { HttpClientConfig, RequestOptions } from './types.js';
import { NHLApiError, NHLNotFoundError, NHLRateLimitError } from './errors.js';

const DEFAULT_TIMEOUT = 10000;
const DEFAULT_RETRIES = 3;
const DEFAULT_RETRY_DELAY = 1000;

export class HttpClient {
  private client: AxiosInstance;
  private retries: number;
  private retryDelay: number;

  constructor(config: HttpClientConfig) {
    this.retries = config.retries ?? DEFAULT_RETRIES;
    this.retryDelay = config.retryDelay ?? DEFAULT_RETRY_DELAY;
    this.client = axios.create({
      baseURL: config.baseURL,
      timeout: config.timeout ?? DEFAULT_TIMEOUT,
    });
  }

  async get<T>(path: string, options?: RequestOptions): Promise<T> {
    let lastError: Error | undefined;

    for (let attempt = 0; attempt <= this.retries; attempt++) {
      try {
        const response = await this.client.get<T>(path, {
          params: options?.params,
          headers: options?.headers,
        });
        return response.data;
      } catch (error) {
        lastError = this.transformError(error, path);

        if (lastError instanceof NHLNotFoundError) {
          throw lastError;
        }

        if (lastError instanceof NHLRateLimitError) {
          const delay = lastError.retryAfter
            ? lastError.retryAfter * 1000
            : this.retryDelay * Math.pow(2, attempt);
          if (attempt < this.retries) {
            await this.sleep(delay);
            continue;
          }
          throw lastError;
        }

        if (attempt < this.retries) {
          await this.sleep(this.retryDelay * Math.pow(2, attempt));
          continue;
        }
      }
    }

    throw lastError ?? new Error('Request failed');
  }

  private transformError(error: unknown, path: string): NHLApiError {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      const status = axiosError.response?.status ?? 0;
      const url = axiosError.config?.url ?? path;

      if (status === 404) {
        return new NHLNotFoundError(url);
      }

      if (status === 429) {
        const retryAfter = axiosError.response?.headers?.['retry-after'];
        return new NHLRateLimitError(
          url,
          retryAfter ? parseInt(retryAfter, 10) : null
        );
      }

      return new NHLApiError(
        axiosError.message || `Request failed with status ${status}`,
        status,
        url
      );
    }

    if (error instanceof Error) {
      return new NHLApiError(error.message, 0, path);
    }

    return new NHLApiError('An unknown error occurred', 0, path);
  }

  private sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
