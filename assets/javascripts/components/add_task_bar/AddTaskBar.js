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

  // setter for currentCategory
  setCurrentCategory = (currentCategory) => {
    this.setState({ currentCategory });
  };

  // setter for displayAddCategoryField
  setDisplayAddCategoryField = (displayAddCategoryField) => {
    this.setState({ displayAddCategoryField });
  };

  // update input field text on change
  handleChange = (event) => {
    this.setState({ taskText: event.target.value });
  };

  // on submit, add task and reset input field text
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTask(this.state.currentCategory, this.state.taskText);

    this.setState({ taskText: '' });
  };

  // populate Select element with options whose values are category names
  renderCategoryOptions = () => {
    const categoryNames = Object.keys(this.props.categories).map(function(key) {
      return <option value={key} key={`${key}${Date.now()}`}> {key} </option>;
    });

    return categoryNames;
  };

  // update Select element's value on change
  // detect whether to display AddCategory component or not
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
      <div className='add-task-bar'>
        <form onSubmit={this.handleSubmit}>

          <input 
            type='text' 
            className='add-task-bar-field'
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

          <button type='submit' className='add-task-bar-btn' > + </button>
        </form>
      </div>
    );
  };
}

AddTaskBar.propTypes = {
  addCategory: React.PropTypes.func.isRequired,
  categories: React.PropTypes.object.isRequired
};
