export class NHLApiError extends Error {
  public readonly statusCode: number;
  public readonly url: string;

  constructor(message: string, statusCode: number, url: string) {
    super(message);
    this.name = 'NHLApiError';
    this.statusCode = statusCode;
    this.url = url;
  }
}

export class NHLNotFoundError extends NHLApiError {
  constructor(url: string) {
    super(`Resource not found: ${url}`, 404, url);
    this.name = 'NHLNotFoundError';
  }
}

export class NHLRateLimitError extends NHLApiError {
  public readonly retryAfter: number | null;

  constructor(url: string, retryAfter: number | null = null) {
    super(`Rate limit exceeded: ${url}`, 429, url);
    this.name = 'NHLRateLimitError';
    this.retryAfter = retryAfter;
  }
}
