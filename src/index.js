import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import storeConfig from './store/storeConfig';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = storeConfig();

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
