import React from 'react';
import '../App.css';
import AddTodo from './addTodo';

class Todo extends React.Component {
    constructor() {
        super();
        this.toggler = this.toggler.bind(this);
        this.updateTask = this.updateTask.bind(this); 
        this.addTask = this.addTask.bind(this);                
        this.state = {
            tasks: [{
                    name: 'Office',
                    completed: false
            },{
                name: 'University',
                completed: false
            },{
                name: 'walk',
                completed: false
            }],
            currentTask: ''
        }
    }
    addTask(evt){
        evt.preventDefault();
        let tasks = this.state.tasks;
        let currentTask = this.state.currentTask;
        tasks.push({
            name: currentTask,
            completed: false
        })
        this.setState({
            tasks
        })
    }
    updateTask(newValue){
        this.setState({
            currentTask: newValue.target.value
        })
    }
    toggler(index){
        // console.log(this.state.tasks[index]);
        var task = this.state.tasks[index];
        task.completed = !task.completed;
        this.setState({
            task: task,
        })
        console.log(this.state.tasks[index]);        
    }
    render(){
        return(
            <section>
                <AddTodo 
                    currentTask={this.state.currentTask} 
                    addTask={this.addTask}                     
                    updateTask={this.updateTask}
                />
                <ul>
                    {
                        this.state.tasks.map((task, index) => {
                            return(
                            <TodoItems details={task} index={index}
                             changeToggle={this.toggler} key={task.name} 
                             />                                                                
                            );
                        })
                    }
                </ul>
            </section>
        );
    }
}

class TodoItems extends React.Component {
    render(){
        return (
            <section>
                <li onClick={ () => {this.props.changeToggle(this.props.index);} } 
                    className={this.props.details.completed ? '' : 'completed' }>
                    {this.props.details.name} 
                </li>
            </section>   
        )
    }
}

export default Todo;