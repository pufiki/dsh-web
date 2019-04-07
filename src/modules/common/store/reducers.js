import { errorMapperFactory } from '@/services/errorHandler'

const defaultErrorMapper = errorMapperFactory()

export const requestableReducerFactory = (preffix) => ({
  [preffix + 'ANY_REQUEST_START'](state) {
    return {
      ...state,
      isLoading: true,
      error: null
    }
  },
  [preffix + 'ANY_REQUEST_END'](state) {
    return {
      ...state,
      isLoading: false
    }
  },
  [preffix + 'ANY_SUCCESS'](state) {
    return {
      ...state,
      error: null
    }
  },
  [preffix + 'ANY_FAILURE'](state, action, errorMapper = defaultErrorMapper) {
    const error = action.error || new Error('Error')
    return {
      ...state,
      error
    }
  }
})
