const idTimestamp = () => {return new Date().getTime();}

function addMovie (text) {
	return {
		type: 'ADD_MOVIE',
		payload: {
			id: idTimestamp(),
			text: text
		}
	};
}

export default addMovie();



// export function addTodo(text) {
//   return {
//     type: 'ADD_TODO',
//     payload: {
//       id: uid(),
//       isDone: false,
//       text: text
//     }
//   };
// }

// export function toggleTodo(id) {
//   return {
//     type: 'TOGGLE_TODO',
//     payload: id
//   }
// }