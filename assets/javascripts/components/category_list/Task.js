import React, { Component } from 'react';

export default class Task extends Component {
  constructor(props){
    super(props);
  };

  handleChange = () => {
    this.props.removeTask(this.props.categoryName, this.props.taskId);
  };

  render() {
    return (
      <li className='task'>
        <label>
          <input type='checkbox' onChange={this.handleChange} id={this.props.taskId}/>
          <span className='task-text'>{this.props.text}</span>
        </label>
      </li>
    );
  };
}

Task.propTypes = {
  text: React.PropTypes.string.isRequired
};
