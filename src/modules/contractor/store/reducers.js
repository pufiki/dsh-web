import initialState from './state'
import {
  REGISTER_REQUEST_START,
  REGISTER_REQUEST_END,
  REGISTER_FAILURE,
  REGISTER_SUCCESS
} from './action-types'

const contractor = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST_START:
      return {
        ...state,
        error: null,
        isLoading: true
      }
    case REGISTER_REQUEST_END:
      return {
        ...state,
        isLoading: false
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        error: null
      }
    case REGISTER_FAILURE:
      return {
        ...state,
        error: action.error || new Error('Error')
      }
    default:
      return state
  }
}

export default contractor
