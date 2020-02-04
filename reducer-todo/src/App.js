import React,{useReducer} from 'react';
import "./App.css";
import { Container, Header, Segment, Divider, } from 'semantic-ui-react'
//components
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

//reducer
import {initialState, todoListReducer} from "./reducers/index"


function App() {
  const [state, dispatch] = useReducer(todoListReducer, initialState);

 



  return (
    <Container className="App">
      <Header size="huge">Todo List</Header>
      <TodoForm dispatch={dispatch} />
      <Divider/>
      <Segment >
        <TodoList state={state} dispatch={dispatch} />
      </Segment>
        
      
    </Container>
  );
}

export default App;
