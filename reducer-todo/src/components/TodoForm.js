import React, { useState } from "react"

const TodoForm = () => {

    const [newTodo, setNewTodo] = useState("")

    const handleChanges = e => {

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
            <button >Add Todo</button>
            
        </div>

    )
};

export default TodoForm;