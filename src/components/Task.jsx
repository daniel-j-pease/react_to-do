import React, {Components} from 'react';

export default class Footer extends Component {
  render() {
    return (
      <section className="jumbotron">
        <h1>Task Manager</h1>
        <form className="form-inline">
          <div className="form-group">
            <label className="sr-only" for="task_name">Task Name</label>
            <input type="text" className="form-control input-lg" id="task_name" placeholder="Task Name" />
          </div>
          <div className="form-group">
            <label className="sr-only" for="task_desc">Task Description</label>
            <input type="text" className="form-control input-lg" id="task_desc" placeholder="Task Description" />
          </div>

          <button type="submit" className="btn btn-danger btn-lg">Add Task</button>
        </form>
      </section>
    )
  }
}
