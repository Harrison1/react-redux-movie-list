import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import movieList from '../reducer/reducer';
import Home from './Home';

let store = createStore(movieList);
const app = document.getElementById('app');

ReactDOM.render(
	<Provider store={store}>
		<Home />
	</Provider>
	, app);