import React from "react";


const TodoItem= ({listItem, dispatch}) => {


    const {item, completed, id} = listItem;

    const setCompleted = e => {

        dispatch( {type: "COMPLETED",  payload: listItem})
    }

    return (
        <div>
            <input
            type="checkbox" 
            checked={completed}
            onChange={setCompleted}
            />
            <span className={`item ${completed}`}>
                {item}
            </span>
        </div>
    )

};

export default TodoItem;