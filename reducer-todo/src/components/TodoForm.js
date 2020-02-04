import React, { useState } from "react"
import { Button, Icon, Grid, Form, TextArea, Label} from "semantic-ui-react";
import { DateInput } from 'semantic-ui-calendar-react';
import moment from "moment"



const TodoForm = ({dispatch}) => {

    

    const [newTodo, setNewTodo] = useState("")
    const [date, setDate] = useState("")

    const handleChanges = e => {
        
        setNewTodo(e.target.value)
        console.log("handleChanges",e.target.value)
    }

    const addTodo = e=> {

        e.preventDefault();
        if(newTodo=== ""){
            alert("Add some text")
            return
        }
        console.log("addtodo", newTodo)
        dispatch({type: "ADD_TODO",payload: {newTodo, date}})
        setNewTodo("")
        setDate("")
    }

    const clearCompleted = e => {
        e.preventDefault()
        console.log("clear completed")
        dispatch({type: "CLEAR_COMPLETED"})
    }

    const handleDateChange = (e,{value}) =>{
        setDate(value)
        console.log(value)
    }

    return (
        <Form className="form">
            <Grid columns="equal" stackable>
                <Grid.Row >
                    <TextArea
                        
                        placeholder="Your todo..."
                        type="text"
                        name="newTodo"
                        value ={newTodo}
                        onChange={handleChanges}
                    />
                </Grid.Row>
                <Grid.Row>
                    <Label>Due Date:</Label>
                    <DateInput
                        iconPosition="left"
                        name="date"
                        placeholder="Due Date"
                        value={date}
                        onChange={handleDateChange}
                        dateFormat="MM-DD-YYYY"
                    />
                </Grid.Row>
                {/* <Divider horizontal/> */}
                <Grid.Row >
                    <Button color="blue" onClick={addTodo} type="submit"><Icon name="plus"/>Add Todo</Button>

                    <Button color="red" onClick={clearCompleted}> <Icon name="delete"/>Clear Completed </Button>
                </Grid.Row>
                
            </Grid>
        </Form>

    )
};

export default TodoForm;