import React,{useReducer} from 'react';
import './App.css';
//components
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

//reducer
import {initialState, todoListReducer} from "./reducers/index"


function App() {
  const [state, dispatch] = useReducer(todoListReducer, initialState);

 



  return (
    <div className="App">
      <h1>Reducer Todo List</h1>
      <TodoForm dispatch={dispatch} />
      <TodoList state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
