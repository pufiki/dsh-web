import { adminClient } from '#/admin'
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

export const doCloseToast = () => dispatch => {
  dispatch({ type: reducerPreffix + types.CLOSE_TOAST })
}

export const adminLogin = (payload) => dispatch => {
  dispatch({ type: reducerPreffix + types.ANY_REQUEST_START })
  adminClient.login(payload)
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
      dispatch(requestError(reducerPreffix + types.ANY_FAILURE, err));
      dispatch({ type: ToastActionTypes.SET_DATA, data: defaultErrorMapper(err) })
    })
    .finally(() => {
      dispatch({ type: reducerPreffix + types.ANY_REQUEST_END })
    })
}
