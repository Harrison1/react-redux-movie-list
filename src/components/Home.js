import React from 'react';
import { createStore } from 'redux';
import movieList from '../reducer/reducer';

const store = createStore(movieList);

// console.log(store.getState());
// store.dispatch({ type: 'ADD_MOVIE' });
// console.log(store.getState());

store.subscribe(() => {
	document.getElementById('num').innerText = store.getState();
});

document.addEventListener('click', () => {
	store.dispatch({ type: 'ADD_MOVIE' });
});

// document.getElementById('countme').addEventListener('click', () => {
// 	store.dispatch({ type: 'ADD_MOVIE' });
// });

class Home extends React.Component {
  render() {
    return (
    	<div>
        <h1>Hello World</h1>
        <h2 id='num'>0</h2>
        <button id='countme'>COUNT</button>
        </div>
    );
  }
}


export default Home;
