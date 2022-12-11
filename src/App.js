import React, { Component } from 'react';
import Tasks from './components/Tasks'
import './App.css'

class App extends Component {
  state = { 
    tasks: [
      {done: false,id: 1, text:' hello'},
      {done: false,id: 222, text:' hello'},
    ],
    showTask: true,
    newTask:''
  } 
  handelShowTask = () => {
    
      this.setState({showTask:!this.state.showTask})

  }
  handelAddTask = (event) => {
    this.setState({newTask:event.target.value})
    
  }
  addTask = () => {
    const tasks = [...this.state.tasks]
    const task = {
      done: false,
      id: Math.ceil(Math.random() * 10000),
      text:this.state.newTask
    }
    tasks.push(task)
    this.setState({ tasks, newTask:''})
    
  }
  handelDelete = (id) => {
    // const tasks =[...this.state.tasks]
    const tasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks})
    // console.log(taskIndex)
  }
  handelEdit = (event, id) => {
    const taskIndex = this.state.tasks.findIndex(task => task.id === id);
    const tasks = [...this.state.tasks]
    tasks[taskIndex].text = event.target.value
    this.setState({tasks})
  }
  handelDone = (event,id) => {
    const taskIndex = this.state.tasks.findIndex(task => task.id === id)
    const tasks = [...this.state.tasks]
    tasks[taskIndex].done = event
    this.setState({tasks})
    
  }
  render() { 
    let showingTask = ''
    if (this.state.showTask) {
      showingTask = <Tasks tasks={this.state.tasks} deleteTask={this.handelDelete} editTask={this.handelEdit} changeDone={this.handelDone }/>
    }
    return (

      <div className="app">
       
        <h1 style={{textAlign: 'center'}}>Task App</h1>
        <div className="w-75 m-auto mb-2">
          <input type="text" className="border rounded w-25 p-2  ml-0" onChange={this.handelAddTask} value={this.state.newTask} />
          <button className="btn btn-primary  m-2 w-5 p-2" onClick={this.addTask}>Add Task</button>
          <button className="btn btn-primary  m-2 w-5 p-2" onClick={this.handelShowTask}>Show Task</button>
        </div>

        <table className="table table-dark table-borderless p-3 w-75 m-auto">
          <thead>
            <tr>
              <th scope="col">Done</th>
              <th scope="col">id</th>
              <th scope="col">Task</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          {showingTask}
        </table>
        
      </div>

    );
  }
}
 
export default App;