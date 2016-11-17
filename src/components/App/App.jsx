import React, {Components} from 'react';
// import Footer from '../Footer';
// import IconButton from '../IconButton';
// import Nav from '../Nav';
// import Task from '../Task';
// import TaskForm from '../TaskForm';
// import TaskList from '../TaskList';
// import ToggleableTask from '../ToggleableTask';

export default class App extends Component{
  constructor() {
    super();

    this.state = {
      tasks: {},
    }
  }
  render() {
    return (
      <container>
        <header>
          <nav>Nav</nav>
        </header>
        <main>
          <h3>Hello Task</h3>
        </main>
        <footer>
          <p>footer</p>
        </footer>
      </container>
    )
  }
}
