import React from 'react';
import ReactDOM from 'react-dom';
import {Hashrouter, Route, Link, Switch} from 'react-router-dom';

//COMPONENTS
import Header from './components/header';

import Page1 from "./Page1";
import Page2 from "./Page2";

export default () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Page1} />
      <Route exact path="/" component={Page2} />
    </Switch>
  </HashRouter>
)

const App = () => {
  return <div><Header/></div>
}

ReactDOM.render(<App/>, document.querySelector('root'));