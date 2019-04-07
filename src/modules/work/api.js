import { BaseApiClient } from '#/common/api';

class WorkAPI extends BaseApiClient {
  constructor() {
    super('restapi/');
  }

  /**
   * Create Work Request object. Throws with error status 409 (CONFLICT) if object with the given data already exists.
   *
   * @param {{
      name: string
      description: string
      createdAt: any
      workSpecialization: number
      isClosed: boolean
    }} payload
   */
  async addRequest(payload) {
    return await this.post('workRequests', payload);
  }
}

export const workClient = new WorkAPI();
