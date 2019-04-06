import initialState from './state'
import {
  USER_INFO_RECIEVED,
  ANY_REQUEST_START,
  ANY_REQUEST_END,
  ANY_FAILURE,
  ANY_SUCCESS
} from './action-types'

const user = (state = initialState, action) => {
  switch (action.type) {
    case USER_INFO_RECIEVED:
      return {
        ...state,
        info: action.userInfo
      }
    case ANY_REQUEST_START:
      return {
        ...state,
        isLoading: true
      }
    case ANY_REQUEST_END:
      return {
        ...state,
        isLoading: false
      }
    case ANY_SUCCESS:
      return {
        ...state,
        error: null
      }
    case ANY_FAILURE:
      return {
        ...state,
        error: action.error || new Error('Error')
      }
    default:
      return state
  }
}

export default user
