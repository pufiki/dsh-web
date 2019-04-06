import initialState from './state'
import {
  LOGIN_REQUEST_START,
  LOGIN_REQUEST_END,
  LOGIN_FAILURE,
  LOGIN_SUCCESS
} from './action-types'

const admin = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST_START:
      return {
        ...state,
        isLoading: true
      }
    case LOGIN_REQUEST_END:
      return {
        ...state,
        isLoading: false
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: null
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.error || new Error('Error')
      }
    default:
      return state
  }
}

export default admin
