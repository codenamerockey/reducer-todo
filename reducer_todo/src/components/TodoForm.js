import React, { useReducer, useState } from 'react';
import { reducer, initialState } from '../reducers/TodoReducer';

const TodoForm = () => {
  const [todoList, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState('');

  const onsubmitHandler = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', text });
    setText('');
  };

  return (
    <div className="section is-medium container">
      <form onSubmit={onsubmitHandler}>
        <div className="field ">
          <div className="control">
            <input
              className="input is-info"
              value={text}
              onChange={e => setText(e.target.value)}
            />
          </div>
        </div>
      </form>
      {/* places todo items on the screen by returning a div */}
      {todoList.todos.map((t, index) => {
        return (
          <div
            key={Math.random().toString()}
            onClick={() => dispatch({ type: 'TOGGLE_TODO', index })}
            style={{ textDecoration: t.completed ? 'line-through' : '' }}
          >
            {t.text}
          </div>
        );
      })}
      <button onClick={onsubmitHandler}>Add Todo</button>
      <button onClick={() => dispatch({ type: 'CLEAR_COMPLETED_TODO' })}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoForm;
