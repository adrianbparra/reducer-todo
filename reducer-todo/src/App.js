import React,{useReducer, useState} from 'react';
import './App.css';
//components
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

//reducer
import {initialState, todoListReducer} from "./reducers/index"


function App() {
  const [state, dispatch] = useReducer(todoListReducer, initialState);

  const [newTodo, addNewTodo] = useState("")


  const handleChanges = e => {

  }

  return (
    <div className="App">
      <h1>Reducer Todo List</h1>
      <TodoForm />
      <TodoList state={state} />
    </div>
  );
}

export default App;
