import React from 'react';

const AddTodo = (props) => {
        return (
                <form onSubmit={props.AddTask}>
                    <input type='text' 
                        onChange={props.updateTask} 
                        value={props.currentTask}                                                 
                        />
                    <button type='submit'>Add Todo!</button>
                </form>
        );
}

export default AddTodo;