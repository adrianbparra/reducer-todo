import React, { useState } from "react"

const TodoForm = ({dispatch}) => {

    const [newTodo, setNewTodo] = useState("")

    const handleChanges = e => {
        
        setNewTodo(e.target.value)
        console.log("handleChanges",e.target.value)
    }

    const addTodo = e=> {
        const newTodoItem = {
            item: newTodo,
            completed:false,
            id: Date.now(),
        }
        setNewTodo("")
        console.log("addtodo",newTodoItem)
        dispatch({type: "ADD_TODO",payload: newTodoItem})
    }

    return (
        <div className="form">
            <input
                className="input"
                type="text"
                name="newTodo"
                value ={newTodo}
                onChange={handleChanges}
            />
            <button onClick={addTodo}>Add Todo</button>
            
        </div>

    )
};

export default TodoForm;