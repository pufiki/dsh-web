import { CHOOSE_USER } from './actions'

export default function rootReducer(state, action) {
  switch (action.type) {
    case CHOOSE_USER:
      return { ...state, user: action.user };
    default:
      return state
  }
}
