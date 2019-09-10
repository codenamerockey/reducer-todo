import React, { useReducer, useState } from 'react';
import { reducer, todo } from '../reducers/TodoReducer';

const TodoForm = () => {
  const [{ todos }, dispatch] = useReducer(reducer, { todos: [] });
  const [text, setText] = useState();

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: 'ADD_TODO', text });
          setText('');
        }}
      >
        <input value={text} onChange={e => setText(e.target.value)} />
      </form>
      {/* places todo items on the screen by returning a div */}
      {todos.map((t, idx) => {
        return (
          <div
            key={Math.random().toString()}
            onClick={() => dispatch({ type: 'TOGGLE_TODO', idx })}
            style={{ textDecoration: t.completed ? 'line-through' : '' }}
          >
            {t.text}
          </div>
        );
      })}
      {/* <pre>{JSON.stringify(todos, null, 2)}</pre> */}
    </div>
  );
};

export default TodoForm;
