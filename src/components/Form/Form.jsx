import { Component } from "react";

class Form extends Component {
  render() {
    const {change, task, onSubmit} = this.props
    return (
      <div>
        <form onSubmit={onSubmit}>
          <input 
          value={task} 
          name="newTask" 
          onChange={change} 
          type="text" 
          placeholder="нове завдання"
          />
          
          <button type="submit">Add task</button>
        </form>
      </div>
    );
  }
}


export default Form