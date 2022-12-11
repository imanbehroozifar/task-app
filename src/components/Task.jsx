import React, { Component } from 'react';
import '../App.css'

class Task extends Component {
    state = {  } 
    render() { 
        
        return (

            <>
                <td><input type="checkbox" onClick={(event) =>this.props.Done(event.target.checked)}/></td>
                <td>{this.props.id}</td>
                <td>{this.props.done ? <del>{this.props.text}</del> : this.props.text}</td>
                <td><input type='text' className='border rounded w-4 p-1 m-1 ' onChange={(event) => this.props.edit(event)} placeholder={'Edit '+this.props.text }/></td>
                <td><button className='btn btn-danger' onClick={this.props.delete}>Delete</button></td>
            </>
            
        );
    }
}
 
export default Task;