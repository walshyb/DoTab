import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add_task_actions } from '../redux/actions/add_task';

export class AddTask extends Component {
  state = { taskText: '' };

  handleChange = ( event ) => {
    this.setState({ taskText: event.target.value });
  };

  addTask = () => {
    var tasks = this.props.tasks;
    tasks.push(this.state.taskText);
    this.props.updateCategory(this.props.categoryName, tasks);

    this.setState({ taskText: '' });

    this.props.addTask('');
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

export default connect(
  // map state to props
  function( state ) {
    return {
      arch: state.add_task.arch,
    };
  },
  // map dispatch actions to props
  add_task_actions
)( AddTask );
