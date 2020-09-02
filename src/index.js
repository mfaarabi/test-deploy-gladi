import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const name = 'Dave';
const heading = 'h2';
const div = <div>Hello {name}!</div>;
const HelloWorld = ({ heading }) =>
  heading === 'h1' ? <h1>{div}</h1> : <h2>{div}</h2>;
ReactDOM.render(
  <HelloWorld heading={heading} />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
