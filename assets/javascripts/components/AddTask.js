import React, { Component } from 'react';

export default class AddTask extends Component {
  constructor(props) {
    super(props);

    this.addTask = this.addTask.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      taskText: ''
    };
  };

  handleChange(event) {
    this.setState({ taskText: event.target.value });
  };

  addTask(event) {
    event.preventDefault();

    var tasks = this.props.tasks;
    tasks.push(this.state.taskText);
    this.props.updateCategory(this.props.categoryName, tasks);

    this.setState({ taskText: '' });
  };

  render() {
    return (
      <div className='add-task'>
        <form onSubmit={this.addTask}>
          <input 
            type='text' 
            value={this.state.taskText}
            onChange={this.handleChange}
            placeholder='What do you need to get done?' 
          />
        <button type='submit' id='add-task' > + </button>
        </form>
      </div>
    );
  };
}
