import initialState from './state'
import { requestableReducer } from '#/common/store/reducers'

const user = (state = initialState, action) => {
  const reducerList = {
    ...requestableReducer,
    USER_INFO_RECIEVED(state, action) {
      return {
        ...state,
        info: action.userInfo
      }
    }
  }
  const selectedReducer = reducerList[action.type]

  return selectedReducer ? selectedReducer(state, action) : state
}

export default user
