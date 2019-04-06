import initialState from './state'
import { requestableReducer } from '#/common/store/reducers'

const contractor = (state = initialState, action) => {
  const selectedReducer = requestableReducer[action.type]

  return selectedReducer ? selectedReducer(state, action) : state
}

export default contractor
