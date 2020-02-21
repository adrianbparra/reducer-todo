import React from "react";
import { Checkbox, Segment, Item,Card } from 'semantic-ui-react'
import Moment from "react-moment";


const TodoItem= ({listItem, dispatch}) => {


    const {item, completed,date} = listItem;

    const setCompleted = e => {

        e.stopPropagation()

        dispatch( {type: "COMPLETED",  payload: listItem})
    }

    console.log()

    return (
        <Card fluid onClick={setCompleted}>
            <Card.Content>
            <Card.Header>
                <Checkbox 
                
                type="checkbox" 
                checked={completed}
                // onChange={setCompleted}
                readOnly
                label={item}
                />
            </Card.Header>
            {
                date && <>
                <Card.Meta style={{color:"black"}}  >
                    Due: {date}
                    
                </Card.Meta>
                <Moment fromNow>{date}</Moment>
                </>
            }
            {/* <span>Due: <Moment style={{color:"red"}}  fromNow>{date}</Moment></span> */}
            </Card.Content>
        </Card>
    )

};

export default TodoItem;