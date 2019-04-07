import { workClient } from '#/work'
import * as requestableTypes from '#/common/store/action-types'
import { requestError } from '#/common/store/actions'
import { reducerPreffix } from './reducers'
import { errorMapper } from '../'
import { ToastActionTypes } from 'parts/Toasts'

const types = {
  ...requestableTypes
}

export const workRequests = (payload, cb) => dispatch => {
  dispatch({ type: reducerPreffix + types.ANY_REQUEST_START })
  workClient.addRequest(payload)
    .then(() => {
      dispatch({ type: reducerPreffix + types.ANY_SUCCESS })
      cb && cb();
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
