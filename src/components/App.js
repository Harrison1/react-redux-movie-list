import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import { createStore } from 'redux';
import movieList from '../reducer/reducer';

const app = document.getElementById('app');

ReactDOM.render(<Home />, app);