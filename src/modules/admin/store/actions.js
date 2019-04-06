import { adminClient } from '#/admin'
import * as types from './action-types'

import * as userActions from '#/user/store/actions'

export const requestError = (type, error) => ({
  type,
  error
});

export const adminLogin = (payload) => dispatch => {
  dispatch({ type: types.LOGIN_REQUEST_START })
  adminClient.login(payload)
    .then(userInfo => {
      if (userInfo) {
        dispatch(userActions.updateInfo(userInfo))
        localStorage.setItem('authToken', userInfo.token || '');
      } else {
        dispatch(requestError(types.LOGIN_FAILURE, new Error('')))
        return;
      }
      dispatch({ type: types.LOGIN_SUCCESS })
    })
    .catch(err => {
      console.error(err);
      dispatch(requestError(types.LOGIN_FAILURE, err));
    })
    .finally(() => {
      dispatch({ type: types.LOGIN_REQUEST_END })
    })
}
