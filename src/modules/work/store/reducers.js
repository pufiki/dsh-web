import initialState from './state'
import { requestableReducerFactory } from '#/common/store/reducers'
import { errorMapper } from '../'

export const reducerPreffix = 'WORK_'

const requestableReducer = requestableReducerFactory(reducerPreffix)

const work = (state = initialState, action) => {
  const selectedReducer = requestableReducer[action.type]

  return selectedReducer ? selectedReducer(state, action, errorMapper) : state
}

export default work
