import { BaseApiClient } from '#/common/api';

export class RegisterAPI extends BaseApiClient {
  constructor() {
    super('register/');
  }

  /**
   *
   * @param {'customer' | 'contractor'} type
   * @param {any} payload
   */
  async register(type, payload) {
    try {
      let result = await this.post(type, payload);

      return result;
    } catch (e) {
      // TODO for @kaskar2008
    }
  }
}
