import { withQuery } from 'kefetchup';
import { BaseApiClient } from '#/common/api';

const SUFFIX = 'customer';

class CustomerAPI extends BaseApiClient {
  constructor() {
    super();
  }

  /**
   * Register Customer user. Throws with error status 409 if already exists.
   * @param {{
      name: string,
      email: string,
      phone: string
    }} payload
   */
  async register(payload) {
    return this.post(`register/${SUFFIX}`, payload)
  }

  /**
   * Login as a Customer user. Throws with error status 404 if couldn't find the user.
   * @param {{
   *  email: string,
      password: string
   * }} payload
   */
  async login(payload) {
    return await this.post(`login/${SUFFIX}`, payload);
  }

  /**
   * Return all Customer users.
   * @param {number} size Page size
   * @param {number} page Page number
   * @param {'asc' | 'desc'} sort Sorting direction
   * @param {string} sortBy Field to sort by
   */
  async getList(size, page, sortDirection, sortBy) {
    const sort = [sortDirection || 'desc', sortBy || 'createdAt'].join(',');
    return await this.get(withQuery(`restapi/${SUFFIX}s`, {
      size: Number(size) || 10,
      page: Number(page) || 1,
      sort
    }));
  }

  /**
   * Return Customer user with {id}.
   * @param {number} id
   */
  async getInfo(id) {
    return await this.get(`restapi/${SUFFIX}s/${String(id)}`);
  }

  /**
   * Replace Customer user with {id} with the given Customer object data.
   * @param {number} id
   * @param {any} newInfo
   */
  async replaceInfo(id, newInfo) {
    return await this.put(`restapi/${SUFFIX}s/${String(id)}`, newInfo)
  }

  /**
   * Update Customer user with {id} with the given Customer object data.
   * @param {number} id
   * @param {any} newInfo
   */
  async updateInfo(id, newInfo) {
    return await this.patch(`restapi/${SUFFIX}s/${String(id)}`, newInfo)
  }

  /**
   * Delete Customer user with {id}.
   * @param {number} id
   */
  async remove(id) {
    return await this.delete(`restapi/${SUFFIX}s/${String(id)}`)
  }
}

export const customerClient = new CustomerAPI();
