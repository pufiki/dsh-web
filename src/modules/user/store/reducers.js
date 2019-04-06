import initialState from './state'
import {
  USER_INFO_RECIEVED
} from './action-types'

const user = (state = initialState, action) => {
  switch (action.type) {
    case USER_INFO_RECIEVED:
      return {
        ...state,
        info: action.userInfo
      }
    default:
      return state
  }
}

export default user
