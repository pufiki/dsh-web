import { userClient } from '#/user'
import * as userTypes from './action-types'
import * as requestableTypes from '#/common/store/action-types'
import { requestError } from '#/common/store/actions'
import { reducerPreffix } from './reducers'

const types = {
  ...requestableTypes,
  ...userTypes
}

export const updateInfo = (userInfo) => ({
  type: reducerPreffix + types.INFO_RECIEVED,
  userInfo
});

export const updateUserInfo = (payload) => dispatch => {
  dispatch(updateInfo(payload));
}

export const userMe = (cb) => dispatch => {
  dispatch({ type: reducerPreffix + types.ANY_REQUEST_START })
  userClient.me()
    .then(userInfo => {
      if (userInfo) {
        dispatch(userActions.updateInfo(userInfo))
        cb && cb();
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
