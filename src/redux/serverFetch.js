import * as Actions from './actions'

export function serverFetch(store) {
  store.dispatch(Actions.chooseUser())
}
