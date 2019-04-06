import { GenericAPIClient, ResponseError, ResponseErrors } from 'kefetchup/dist/cjs';
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
      if (resp.status === 204) {
        return Promise.resolve();
      }

      throw new ResponseError('JSON parse error: ' + error, ResponseErrors.UnknownError, error);
    }
  }

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

  put(
    url,
    body,
    fetchConfig = {},
    overrideDefault
  ) {
    return this._put(url, { ...fetchConfig, body }, overrideDefault);
  }

  patch(
    url,
    body,
    fetchConfig = {},
    overrideDefault
  ) {
    return this._patch(url, { ...fetchConfig, body }, overrideDefault);
  }

  delete(...args) {
    return this._delete(...args);
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

    this._get = this.$alias('get');
    this._post = this.$alias('post');
    this._put = this.$alias('put');
    this._patch = this.$alias('patch');
    this._delete = this.$alias('delete');
  }
}
