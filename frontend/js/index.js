import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import * as reducers from './reducers'
import { Navi, Test } from './components'

import thunk from 'redux-thunk'

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer,
  form: formReducer
})

const enhancer = compose(
  applyMiddleware(thunk)
)

const store = createStore(
  reducer,
  enhancer
)

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={Navi}>
          <Route path="/test" component={Test}/>
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
)
