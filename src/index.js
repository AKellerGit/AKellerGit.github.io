import React from 'react';
import ReactDOM from 'react-dom';
import SideNav, {MenuIcon} from 'react-simple-sidenav';

//COMPONENTS
import Header from './components/header';

const App = () => {
  return <div><SideNav
  title="Simple Sidenav"
  items={['Item 1', 'Item 2']}
  /><Header/></div>
}

ReactDOM.render(<App/>, document.querySelector('#root'));