import initialState from './state'
import { requestableReducerFactory } from '#/common/store/reducers'

export const reducerPreffix = 'CUSTOMER_'

const requestableReducer = requestableReducerFactory(reducerPreffix)

const customer = (state = initialState, action) => {
  const selectedReducer = requestableReducer[action.type]

  return selectedReducer ? selectedReducer(state, action) : state
}

export default customer
