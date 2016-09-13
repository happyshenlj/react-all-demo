import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import api from '../middleware/api'
import rootReducer from '../reducers'

export default function configureStore(preloadedState) {
	//console.log(module.hot);
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, api)
  )
  
//if (module.hot) {
//  // Enable Webpack hot module replacement for reducers
//  module.hot.accept('../reducers', () => {
//    const nextRootReducer = require('../reducers').default
//    store.replaceReducer(nextRootReducer)
//  })
//}
  
  return store
}
