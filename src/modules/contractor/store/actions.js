import { contractorClient } from '#/contractor'
import * as types from './action-types'

import * as userActions from '#/user/store/actions'

export const requestError = (type, error) => ({
  type,
  error
});

export const contractorLogin = (payload, cb) => dispatch => {
  dispatch({ type: types.LOGIN_REQUEST_START })
  contractorClient.login(payload)
    .then(userInfo => {
      if (userInfo) {
        dispatch(userActions.updateInfo(userInfo))
        localStorage.setItem('authToken', userInfo.token || '');
        cb && cb();
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

export const contractorRegister = (payload) => dispatch => {
  dispatch({ type: types.REGISTER_REQUEST_START })
  contractorClient.register(payload)
    .then(userInfo => {
      if (userInfo) {
        // TODO
      } else {
        dispatch(requestError(types.REGISTER_FAILURE, new Error('')))
        return;
      }
      dispatch({ type: types.REGISTER_SUCCESS })
    })
    .catch(err => {
      console.error(err);
      dispatch(requestError(types.REGISTER_FAILURE, err));
    })
    .finally(() => {
      dispatch({ type: types.REGISTER_REQUEST_END })
    })
}
