import { contractorClient } from '#/contractor'
import * as requestableTypes from '#/common/store/action-types'
import { requestError } from '#/common/store/actions'
import * as userActions from '#/user/store/actions'
import { reducerPreffix } from './reducers'
import { errorMapper } from '../'
import { ToastActionTypes } from 'parts/Toasts'

const types = {
  ...requestableTypes
}

export const contractorLogin = (payload, cb) => dispatch => {
  dispatch({ type: reducerPreffix + types.ANY_REQUEST_START })
  contractorClient.login(payload)
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
      dispatch({ type: ToastActionTypes.SET_DATA, data: errorMapper(err) })
    })
    .finally(() => {
      dispatch({ type: reducerPreffix + types.ANY_REQUEST_END })
    })
}

export const contractorRegister = (payload) => dispatch => {
  dispatch({ type: reducerPreffix + types.ANY_REQUEST_START })
  contractorClient.register(payload)
    .then(userInfo => {
      if (userInfo) {
        // TODO
      } else {
        dispatch(requestError(reducerPreffix + types.ANY_FAILURE, new Error('')))
        return;
      }
      dispatch({ type: reducerPreffix + types.ANY_SUCCESS })
    })
    .catch(err => {
      console.error(err);
      dispatch(requestError(reducerPreffix + types.ANY_FAILURE, err));
      dispatch({ type: ToastActionTypes.SET_DATA, data: errorMapper(err) })
    })
    .finally(() => {
      dispatch({ type: reducerPreffix + types.ANY_REQUEST_END })
    })
}
