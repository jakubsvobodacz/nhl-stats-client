import { HttpClient } from '../http/http-client.js';

const WEB_API_BASE = 'https://api-web.nhle.com/v1';

export interface WebApiClientConfig {
  timeout?: number;
  retries?: number;
  retryDelay?: number;
}

export class WebApiClient {
  private http: HttpClient;

  constructor(config?: WebApiClientConfig) {
    this.http = new HttpClient({
      baseURL: WEB_API_BASE,
      timeout: config?.timeout,
      retries: config?.retries,
      retryDelay: config?.retryDelay,
    });
  }

  get httpClient(): HttpClient {
    return this.http;
  }
}
