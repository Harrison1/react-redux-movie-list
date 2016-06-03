import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Home from './Home';

const app = document.getElementById('app');

ReactDOM.render(
	<Provider>
		<Home />, app);
	</Provider>