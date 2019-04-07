import initialState from './state'
import { requestableReducerFactory } from '#/common/store/reducers'
import errorMap from '../errorMap.json'
import { errorMapperFactory } from '@/services/errorHandler'

export const reducerPreffix = 'ADMIN_'

const requestableReducer = requestableReducerFactory(reducerPreffix)
const errorMapper = errorMapperFactory(errorMap)

const admin = (state = initialState, action) => {
  const selectedReducer = requestableReducer[action.type]

  return selectedReducer ? selectedReducer(state, action, errorMapper) : state
}

export default admin
