import React from "react"
import TodoItem from "./TodoItem";

// import {initialState, todoListReducer} from "../reducers"

const TodoList = ({state,dispatch}) => {


    // const [state, dispatch] = useReducer(todoListReducer, initialState);

    return (
        <div>
            {state.map((item) => {
                return <TodoItem key={item.id} listItem = {item} dispatch={dispatch}/>
            })}
            
        </div>
    )
};

export default TodoList;