import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk'

const middleware = [thunk];

export const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)
