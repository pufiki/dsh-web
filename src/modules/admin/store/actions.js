import { adminClient } from '#/admin'
import * as requestableTypes from '#/common/store/action-types'
import { requestError } from '#/common/store/actions'
import * as userActions from '#/user/store/actions'

const types = {
  ...requestableTypes
}

export const adminLogin = (payload) => dispatch => {
  dispatch({ type: types.ANY_REQUEST_START })
  adminClient.login(payload)
    .then(userInfo => {
      if (userInfo) {
        dispatch(userActions.updateInfo(userInfo))
        localStorage.setItem('authToken', userInfo.token || '');
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
