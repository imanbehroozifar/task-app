import React, { Component } from 'react'
import Task from './Task'

class Tasks extends Component {
    state = {  } 
    render() { 
        return (
           
            <tbody>
                {this.props.tasks.map(task => <tr><Task id={task.id} text={task.text} done={task.done} delete={(id)=>this.props.deleteTask(task.id)} edit={(event,id)=>this.props.editTask(event,task.id)} Done={(event,id)=>this.props.changeDone(event,task.id)} /></tr>)}
            </tbody>
        
        );
    }
}
 
export default Tasks;