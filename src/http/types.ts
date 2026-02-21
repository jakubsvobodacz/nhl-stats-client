export interface HttpClientConfig {
  baseURL: string;
  timeout?: number;
  retries?: number;
  retryDelay?: number;
}

export interface RequestOptions {
  params?: Record<string, string | number | boolean | undefined>;
  headers?: Record<string, string>;
}
