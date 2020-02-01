import React from "react";


const TodoItem= ({listItem}) => {


    const {item, completed, id} = listItem;

    return (
        <p className={`item ${completed}`}>
            {item}
        </p>
    )

};

export default TodoItem;