import React from "react";
import { Checkbox, Segment, Item } from 'semantic-ui-react'
import Moment from "react-moment";

const TodoItem= ({listItem, dispatch}) => {


    const {item, completed,date} = listItem;

    const setCompleted = e => {

        e.stopPropagation()

        dispatch( {type: "COMPLETED",  payload: listItem})
    }

    return (
        <Segment className="item" onClick={setCompleted}>
            <Checkbox
            type="checkbox" 
            checked={completed}
            // onChange={setCompleted}
            readOnly
            label={item}
            />
            <Item.Meta>
                Due date: {date}
            </Item.Meta>
            <Moment fromNow>{date}</Moment>
            
        </Segment>
    )

};

export default TodoItem;