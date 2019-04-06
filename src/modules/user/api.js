import { BaseApiClient } from '#/common/api';

class UserAPI extends BaseApiClient {
  constructor() {
    super();
  }

  /**
   * Get user info.
   */
  async me() {
    return await this.get(`login/me`);
  }
}

export const userClient = new UserAPI();
