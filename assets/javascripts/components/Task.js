import React, { Component } from 'react';

export default class Task extends Component {
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
  };
  
  handleChange() {
    this.props.removeTask(this.props.text);
  };

  render() {
    return (
      <li>
        <label>
          <input type='checkbox' onChange={this.handleChange} id={this.props.taskId}/>
          <span>{this.props.text}</span>
        </label>
      </li>
    );
  };
}

Task.propTypes = {
  text: React.PropTypes.string.isRequired
};
