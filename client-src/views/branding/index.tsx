import React from 'react';
import ReactDOM from 'react-dom';
import Branding from './Branding';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.hydrate(<Branding />, document.getElementById('root'));
});
