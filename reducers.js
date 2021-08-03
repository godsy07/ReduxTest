const { createStore } = require('redux');

// State declaration and initialization with initial values
const initialState = {
	posts: [],
	todos: [],
}

const myReducer = ( state = initialState, action ) => {
	if (action.type === 'ADD_TODO') {
		return {
			...state,
			todos: [...state.todos, action.todos ]
		}
	}
	if (action.type === 'ADD_POST') {
		return {
			...state,
			posts: [...state.posts, action.posts ]
		}
	}
}

const store = createStore(myReducer);

store.subscribe(() => {
	// console.log('state updated');
	console.log(store.getState());
})

const todo1Action = { type:'ADD_TODO', todos:'Go for a Walk' }
const todo2Action = { type:'ADD_TODO', todos:'Buy Milk' }
const todo3Action = { type:'ADD_TODO', todos:'Attend Meeting' }
const postAction = { type:'ADD_POST', posts:'World is Beautiful' }

store.dispatch(todo1Action);
store.dispatch(todo2Action);
store.dispatch(todo3Action);
store.dispatch(postAction);