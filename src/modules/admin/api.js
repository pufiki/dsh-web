import { withQuery } from 'kefetchup';
import { BaseApiClient } from '#/common/api';

const SUFFIX = 'admin';

class AdminAPI extends BaseApiClient {
  constructor() {
    super();
  }

  /**
   * Login as a Admin user. Throws with error status 404 if couldn't find the user.
   * @param {{
   *  username: string,
      password: string
   * }} payload
   */
  async login(payload) {
    return await this.post(`login/${SUFFIX}`, payload);
  }
}

export const adminClient = new AdminAPI();
