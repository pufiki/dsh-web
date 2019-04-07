import { BaseApiClient } from '#/common/api';

const SUFFIX = 'contractor';

class ContractorAPI extends BaseApiClient {
  constructor() {
    super('restapi/');
  }

  /**
   * Register Contractor user. Throws with error status 409 if already exists.
   * @param {{
      companyName: string,
      email: string,
      password: string
    }} payload
   */
  async register(payload) {
    return this.post(`register/${SUFFIX}`, payload)
  }

  /**
   * Login as a Contractor user. Throws with error status 404 if couldn't find the user.
   * @param {{
   *  email: string,
      password: string
   * }} payload
   */
  async login(payload) {
    return await this.post(`login/${SUFFIX}`, payload);
  }
}

export const contractorClient = new ContractorAPI();
