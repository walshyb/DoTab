import React, { Component } from 'react';

export default class AddTaskBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      selectValue: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  };

  handleClick() {
    
  };

  handleInputChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  };

  renderCategoryOptions() {
    const categoryNames = this.props.categories.map((category) => {
      var name = Object.keys(category)[0];
      return <option value={name} key={name}> {name} </option>;
    });

    return categoryNames;
  };

  render() {
    return (
      <div id='add-task-bar'>
        <input 
          type='text' 
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          placeholder='What do you need to get done?' 
        />
        <select id='select-category'>
          <option>Category</option>
          { this.renderCategoryOptions() }
        </select>
        <button id='add-task' onClick={this.handleClick}> + </button>
      </div>
    );
  };
}

AddTaskBar.propTypes = {
  updateCategories: React.PropTypes.func.isRequired,
  categories: React.PropTypes.array.isRequired
};
