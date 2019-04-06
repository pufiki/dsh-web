import * as types from './action-types'

export const updateInfo = (userInfo) => ({
  type: types.USER_INFO_RECIEVED,
  userInfo
});

export const updateUserInfo = (payload) => dispatch => {
  dispatch(updateInfo(payload));
}
