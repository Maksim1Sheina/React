import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Element from './components/Element';
import Layout from './components/Layout';
import PropLayout from './components/PropLayout';
import './index.css';
import { Router, Route, hashHistory } from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='element(/:id_element)' component={Element}></Route>
      <Route path='layout' component={Layout}></Route>
      <Route path='proplayout' component={PropLayout}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);