import './App.css'
import { Component } from 'react'
import { nanoid } from 'nanoid'

import Title from './components/Title/Title'
import Form from './components/Form/Form'
import Tasks from './components/Tasks/Tasks'

class App extends Component {
  state = {
    tasks: [],
    newTask: "",
  }

  handleChange = (e) => {
    const {name, value} = e.target

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const {newTask} = this.state

    if(newTask.trim() === ""){return;}

    const newTasks = {
      id: nanoid(),
      newTask,
    }

    this.setState((prev) => ({
      tasks: [...prev.tasks, newTasks],
      newTask: "",
    }))
  }

  handleDelete = (idTasks) => {
    this.setState(prev => ({
      tasks: prev.tasks.filter(task => task.id !== idTasks)
    }))
  }

  render(){
      const {newTask, tasks} = this.state
    return(
      <div>
        <Title/>
        <Form 
        change={this.handleChange}
        task={newTask}
        onSubmit={this.handleSubmit}
        />

        <Tasks
        onDelete={this.handleDelete}
        onNewTask={tasks}
        />
      </div>
    )
  }
}


export default App
