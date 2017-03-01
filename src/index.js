import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Element from './components/Element';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <Element />,
  document.getElementById('root3')
);


function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);
            
ReactDOM.render(
  element,
  document.getElementById('root2')
);