import { WebApiClient, WebApiClientConfig } from './web/web-client.js';

export interface NHLClientConfig extends WebApiClientConfig {}

export class NHLClient {
  public readonly web: WebApiClient;

  constructor(config?: NHLClientConfig) {
    this.web = new WebApiClient(config);
  }
}
