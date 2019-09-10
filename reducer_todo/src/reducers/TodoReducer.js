export function reducer(state, action) {
  //most common syntax you will see is a Switch statement
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [...state.todos, { text: action.text, completed: false }]
      };

    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map((t, idx) =>
          idx === action.idx ? { ...t, completed: !t.completed } : t
        )
      };

    default:
      return state;
  }
}

export const todo = [
  {
    item: 'learn reducers',
    completed: false,
    id: new Date()
  }
];
