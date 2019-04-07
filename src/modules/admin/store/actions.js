import { adminClient } from '#/admin'
import * as requestableTypes from '#/common/store/action-types'
import { requestError } from '#/common/store/actions'
import * as userActions from '#/user/store/actions'
import { reducerPreffix } from './reducers'

const types = {
  ...requestableTypes
}

export const adminLogin = (payload) => dispatch => {
  dispatch({ type: reducerPreffix + types.ANY_REQUEST_START })
  adminClient.login(payload)
    .then(userInfo => {
      if (userInfo) {
        dispatch(userActions.updateInfo(userInfo))
        localStorage.setItem('authToken', userInfo.token || '');
      } else {
        dispatch(requestError(reducerPreffix + types.ANY_FAILURE, new Error('')))
        return;
      }
      dispatch({ type: reducerPreffix + types.ANY_SUCCESS })
    })
    .catch(err => {
      console.error(err);
      dispatch(requestError(reducerPreffix + types.ANY_FAILURE, err));
    })
    .finally(() => {
      dispatch({ type: reducerPreffix + types.ANY_REQUEST_END })
    })
}
