import React,{ useReducer} from "react"
import TodoItem from "./TodoItem";
// import {initialState, todoListReducer} from "../reducers"

const TodoList = ({state}) => {


    // const [state, dispatch] = useReducer(todoListReducer, initialState);

    return (
        <div>
            {state.map((item) => {
                return <TodoItem key={item.id} listItem = {item}/>
            })}
            
        </div>
    )
};

export default TodoList;