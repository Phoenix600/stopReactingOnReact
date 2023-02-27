import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// It renders the application with help of render() methods 
/**
 * The below application is rendering the root component i.e 
 * the app components in this component you nest other components 
 */
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
