import { contractorClient } from '#/contractor'
import * as requestableTypes from '#/common/store/action-types'
import { requestError } from '#/common/store/actions'
import * as userActions from '#/user/store/actions'

const types = {
  ...requestableTypes
}

export const contractorLogin = (payload, cb) => dispatch => {
  dispatch({ type: types.ANY_REQUEST_START })
  contractorClient.login(payload)
    .then(userInfo => {
      if (userInfo) {
        dispatch(userActions.updateInfo(userInfo))
        localStorage.setItem('authToken', userInfo.token || '');
        cb && cb();
      } else {
        dispatch(requestError(types.ANY_FAILURE, new Error('')))
        return;
      }
      dispatch({ type: types.ANY_SUCCESS })
    })
    .catch(err => {
      console.error(err);
      dispatch(requestError(types.ANY_FAILURE, err));
    })
    .finally(() => {
      dispatch({ type: types.ANY_REQUEST_END })
    })
}

export const contractorRegister = (payload) => dispatch => {
  dispatch({ type: types.ANY_REQUEST_START })
  contractorClient.register(payload)
    .then(userInfo => {
      if (userInfo) {
        // TODO
      } else {
        dispatch(requestError(types.ANY_FAILURE, new Error('')))
        return;
      }
      dispatch({ type: types.ANY_SUCCESS })
    })
    .catch(err => {
      console.error(err);
      dispatch(requestError(types.ANY_FAILURE, err));
    })
    .finally(() => {
      dispatch({ type: types.ANY_REQUEST_END })
    })
}
