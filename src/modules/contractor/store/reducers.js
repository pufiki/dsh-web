import initialState from './state'
import { requestableReducerFactory } from '#/common/store/reducers'
import { errorMapper } from '../'

export const reducerPreffix = 'CONTRACTOR_'

const requestableReducer = requestableReducerFactory(reducerPreffix)

const contractor = (state = initialState, action) => {
  const selectedReducer = requestableReducer[action.type]

  return selectedReducer ? selectedReducer(state, action, errorMapper) : state
}

export default contractor
