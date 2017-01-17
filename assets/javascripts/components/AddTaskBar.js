import React, { Component } from 'react';

export default class AddTaskBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      currentCategory: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    var categories = this.props.categories;
    
    categories.map((category) => {
      var name = Object.keys(category)[0];
      if (name === this.state.currentCategory) {

        var tasks = category[name];
        tasks.push(this.state.inputValue);
        this.props.updateCategory(name, tasks);
      }
    });
  };

  handleInputChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  };

  handleSelectChange(event) {
    if(event.target.value !== '' && event.target.value !== 'add-category') {
      this.setState({
        currentCategory: event.target.value
      });
    }
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
        <select id='select-category' onChange={this.handleSelectChange}>
          <option value=''>Category</option>
          { this.renderCategoryOptions() }
        </select>
        <button id='add-task' onClick={this.handleClick}> + </button>
      </div>
    );
  };
}

AddTaskBar.propTypes = {
  updateCategory: React.PropTypes.func.isRequired,
  categories: React.PropTypes.array.isRequired
};
