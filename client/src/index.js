import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import './index.css';
import App from './App';
import reducers from './reducers';
import WordsIndex from './components/words_index';
import WordsShow from './components/words_show';
import WordsTest from './components/words_test';

// const createStoreWithMiddleware = applyMiddleware()(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          {/* <Route path="/posts/new" component={PostsNew} /> */}
          <Route path="/words/:category/test" component={WordsTest} />
          <Route path="/words/:category" component={WordsShow} />
          <Route path="/" component={WordsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
