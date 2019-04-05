import { RegisterAPI } from '#/common/api/register';

class CustomerAPI extends RegisterAPI {
  constructor() {
    super();
  }

  /**
   *
   * @param {{
        companyName: string,
        email: string,
        password: string
    }} payload
   */
  async register(payload) {
    return super.register('customer', payload)
  }
}

export const customerClient = new CustomerAPI();
