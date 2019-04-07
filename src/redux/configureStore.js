import { applyMiddleware, createStore, compose } from 'redux'
import { combineReducers } from 'redux'
import rootReducer from './reducers'
import customersReducer from '#/customer/store/reducers'
import userReducer from '#/user/store/reducers'
import adminReducer from '#/admin/store/reducers'
import contractorReducer from '#/contractor/store/reducers'
import { ToastReducer } from 'parts/Toasts'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  root: rootReducer,
  customer: customersReducer,
  user: userReducer,
  admin: adminReducer,
  contractor: contractorReducer,
  toast: ToastReducer,
})

export default function configureStore(state = {}) {
  return compose(applyMiddleware(thunk))(createStore)(
    reducer,
    state,
  )
}
