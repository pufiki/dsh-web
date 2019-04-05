import { applyMiddleware, createStore, compose } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

export default function configureStore(state) {
  return compose(applyMiddleware(thunk))(createStore)(
    rootReducer,
    state,
  )
}
