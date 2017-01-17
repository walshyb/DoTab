import React, { Component } from 'react';

export default class AddTaskBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      selectValue: ''
    };
  };

  render() {
    return (
      <div id='add-task-bar'>
        <input type='text' placeholder='What do you need to get done?' />
        <select id='select-category'>
          <option>Category</option>
        </select>
        <button id='add-task'> + </button>
      </div>
    );
  };
}

AddTaskBar.propTypes = {
  updateCategories: React.PropTypes.func.isRequired
};
