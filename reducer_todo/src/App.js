import React, { useReducer, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';

const App = () => {
  return (
    <div className="App">
      <TodoForm />
    </div>
  );
};

export default App;
