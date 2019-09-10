export function reducer(state, action) {
  //most common syntax you will see is a Switch statement
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [
          ...state.todos,
          { text: action.text, completed: false, id: Math.random().toString() }
        ]
      };

    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map((t, index) =>
          index === action.index ? { ...t, completed: !t.completed } : t
        )
      };

    case 'CLEAR_COMPLETED_TODO':
      return {
        todos: state.todos.filter(t => !t.completed)
      };

    default:
      return state;
  }
}

export const initialState = {
  todos: [
    {
      item: 'learn reducers',
      completed: false,
      id: new Date()
    }
  ]
};
