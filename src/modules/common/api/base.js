import { GenericAPIClient, ResponseError, ResponseErrors } from 'kefetchup';
import { baseUrl, commonHeaders } from './config';

export class BaseApiClient extends GenericAPIClient {
  $requestFactory(
    url,
    config,
    requestFunction
  ) {
    if (typeof config.body !== 'string' && typeof config.body !== 'undefined') {
      config.body = JSON.stringify(config.body);
    }

    return super.$requestFactory(url, config, requestFunction);
  }

  async $responseHandler(resp) {
    const response = super.$responseHandler(resp);

    if (response.body == null) {
      return Promise.resolve();
    }

    try {
      const json = await response.json();

      if (!json) {
        throw new ResponseError('Error in response', ResponseErrors.UnknownError);
      }

      return json.payload || json;
    }
    catch (error) {
      throw new ResponseError('JSON parse error: ' + error, ResponseErrors.UnknownError, error);
    }
  }

  _get = this.$alias('get');
  _post = this.$alias('post');

  get(...args) {
    return this._get(...args);
  }

  post(
    url,
    body,
    fetchConfig = {},
    overrideDefault
  ) {
    return this._post(url, { ...fetchConfig, body }, overrideDefault);
  }

  constructor(
    subUrl = '',
    config = {}
  ) {
    super(String(new URL(subUrl, baseUrl)), {
      ...config,
      headers: {
        ...commonHeaders,
        ...(config.headers || {})
      },
    });
  }
}
