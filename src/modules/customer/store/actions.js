import { customerClient } from '#/customer'
import * as requestableTypes from '#/common/store/action-types'
import { requestError } from '#/common/store/actions'
import * as userActions from '#/user/store/actions'

const types = {
  ...requestableTypes
}

export const customerLogin = (payload) => dispatch => {
  dispatch({ type: types.ANY_REQUEST_START })
  customerClient.login(payload)
    .then(userInfo => {
      if (userInfo) {
        dispatch(userActions.updateInfo(userInfo))
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

export const customerRegister = (payload) => dispatch => {
  dispatch({ type: types.ANY_REQUEST_START })
  customerClient.register(payload)
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
