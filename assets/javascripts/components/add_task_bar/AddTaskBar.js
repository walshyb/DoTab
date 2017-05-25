import React, { Component } from 'react';
import AddCategory from './AddCategory';

export default class AddTaskBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskText: '',
      currentCategory: '',
      displayAddCategoryField: false
    };
  };

  setCurrentCategory = (currentCategory) => {
    this.setState({ currentCategory });
  };

  setDisplayAddCategoryField = (displayAddCategoryField) => {
    this.setState({ displayAddCategoryField });
  };

  handleChange = (event) => {
    this.setState({ taskText: event.target.value });
  };

  // add task
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTask(this.state.currentCategory, this.state.taskText);
  };

  renderCategoryOptions = () => {
    const categoryNames = Object.keys(this.props.categories).map(function(key) {
      return <option value={key} key={`${key}${Date.now()}`}> {key} </option>;
    });

    return categoryNames;
  };

  handleSelectChange = (event) => {
    var categoryName = event.target.value;

    if(categoryName === 'add-category') {
      this.setState({ currentCategory: categoryName, displayAddCategoryField: true});
    } else {
      this.setState({ currentCategory: categoryName, displayAddCategoryField: false });
    }
  };

  render() {
    return (
      <div id='add-task-bar'>
        <form onSubmit={this.handleSubmit}>
          <input 
            type='text' 
            value={this.state.taskText}
            onChange={this.handleChange}
            placeholder='What do you need to get done?' 
          />
          <select id='select-category' value={this.state.currentCategory} onChange={this.handleSelectChange}>
            <option value=''>Category</option>
            { this.renderCategoryOptions() }
            <option value='add-category'>Add Category</option>
          </select>

          { this.state.displayAddCategoryField ? 
              <AddCategory 
                addCategory={this.props.addCategory}
                setCurrentCategory={this.setCurrentCategory}
                setDisplayAddCategoryField={this.setDisplayAddCategoryField}
              /> 
              : null 
          }

          <button type='submit' id='add-task' > + </button>
        </form>
      </div>
    );
  };
}

AddTaskBar.propTypes = {
  addCategory: React.PropTypes.func.isRequired,
  categories: React.PropTypes.object.isRequired
};
