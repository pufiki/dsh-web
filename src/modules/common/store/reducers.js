export const requestableReducer = {
  ANY_REQUEST_START(state) {
    return {
      ...state,
      isLoading: true
    }
  },
  ANY_REQUEST_END(state) {
    return {
      ...state,
      isLoading: false
    }
  },
  ANY_SUCCESS(state) {
    return {
      ...state,
      error: null
    }
  },
  ANY_FAILURE(state, action) {
    return {
      ...state,
      error: action.error || new Error('Error')
    }
  }
}
