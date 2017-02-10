import React, { Component } from 'react';

export default class AddTask extends Component {
  state = { taskText: '' };

  handleChange = ( event ) => {
    this.setState({ taskText: event.target.value });
  };

  addTask = () => {
    var tasks = this.props.tasks;
    tasks.push(this.state.taskText);
    this.props.updateCategory(this.props.categoryName, tasks);

    this.setState({ taskText: '' });
  };

  inputKey = ( e ) => {
    if( e.keyCode === 13 ) {
      this.addTask();
    }
  };

  render() {
    return (
      <div className='category-add-task'>
        <input 
          type='text' 
          value={this.state.taskText}
          onChange={this.handleChange}
          onKeyDown={this.inputKey}
          placeholder='What do you need to get done?' 
        />
        <button id='add-task' onClick={this.addTask} > + </button>
      </div>
    );
  };
}
