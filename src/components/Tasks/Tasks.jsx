import { Component } from "react";

class Tasks extends Component {
    render(){
        return(
            <div>
                <ul>
                    {this.props.onNewTask.map(({id, newTask}) => (
                        <li key={id}>
                            <p>{newTask}</p>
                            <button type="button" onClick={() => this.props.onDelete(id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Tasks