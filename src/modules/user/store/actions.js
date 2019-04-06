import { userClient } from '#/user'
import * as types from './action-types'

export const updateInfo = (userInfo) => ({
  type: types.USER_INFO_RECIEVED,
  userInfo
});

export const updateUserInfo = (payload) => dispatch => {
  dispatch(updateInfo(payload));
}

export const userMe = (cb) => dispatch => {
  dispatch({ type: types.ANY_REQUEST_START })
  userClient.me()
    .then(userInfo => {
      if (userInfo) {
        dispatch(userActions.updateInfo(userInfo))
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
