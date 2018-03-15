import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx'

const rootElement = document.getElementById('root');
rootElement ? render( <App />, rootElement) : false;
