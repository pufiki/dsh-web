import initialState from './state'
import { requestableReducerFactory } from '#/common/store/reducers'
import { errorMapper } from '../'

export const reducerPreffix = 'ADMIN_'

const requestableReducer = requestableReducerFactory(reducerPreffix)

const admin = (state = initialState, action) => {
  const selectedReducer = requestableReducer[action.type]

  return selectedReducer ? selectedReducer(state, action, errorMapper) : state
}

export default admin
