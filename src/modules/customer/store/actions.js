import { customerClient } from '#/customer'
import * as requestableTypes from '#/common/store/action-types'
import { requestError } from '#/common/store/actions'
import * as userActions from '#/user/store/actions'
import { reducerPreffix } from './reducers'
import { errorMapperFactory } from '@/services/errorHandler'
import { ToastActionTypes } from 'parts/Toasts'

const defaultErrorMapper = errorMapperFactory()

const types = {
  ...requestableTypes
}

export const customerLogin = (payload) => dispatch => {
  dispatch({ type: reducerPreffix + types.ANY_REQUEST_START })
  customerClient.login(payload)
    .then(userInfo => {
      if (userInfo) {
        dispatch(userActions.updateInfo(userInfo))
      } else {
        dispatch(requestError(reducerPreffix + types.ANY_FAILURE, new Error('')))
        return;
      }
      dispatch({ type: reducerPreffix + types.ANY_SUCCESS })
    })
    .catch(err => {
      console.error(err);
      dispatch(requestError(reducerPreffix + types.ANY_FAILURE, err));
      dispatch({ type: ToastActionTypes.SET_DATA, data: defaultErrorMapper(err) })
    })
    .finally(() => {
      dispatch({ type: reducerPreffix + types.ANY_REQUEST_END })
    })
}

export const customerRegister = (payload, cb) => dispatch => {
  dispatch({ type: reducerPreffix + types.ANY_REQUEST_START })
  customerClient.register(payload)
    .then(userInfo => {
      if (userInfo) {
        // TODO
        cb && cb(userInfo)
      } else {
        dispatch(requestError(reducerPreffix + types.ANY_FAILURE, new Error('')))
        cb && cb(null)
        return;
      }
      dispatch({ type: reducerPreffix + types.ANY_SUCCESS })
    })
    .catch(err => {
      console.error(err);
      dispatch(requestError(reducerPreffix + types.ANY_FAILURE, err));
      cb && cb(null)
    })
    .finally(() => {
      dispatch({ type: reducerPreffix + types.ANY_REQUEST_END })
    })
}
