import React, { Component } from 'react';
import AddCategory from './AddCategory';
import { connect } from 'react-redux';
import { add_task_bar_actions } from '../redux/actions/add_task_bar';

export class AddTaskBar extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      taskText: ''
    };
  };

  handleChange(event) {
    this.setState({ taskText: event.target.value });
  };

  handleSubmit(event) {
    this.props.handleSubmit(event, this.props);
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
        <form onSubmit={this.handleSubmit}>
          <input 
            type='text' 
            value={this.state.taskText}
            onChange={this.handleChange}
            placeholder='What do you need to get done?' 
          />
          <select id='select-category' value={this.props.currentCategory} onChange={this.props.handleSelectChange}>
            <option value=''>Category</option>
            { this.renderCategoryOptions() }
            <option value='add-category'>Add Category</option>
          </select>

          { this.props.displayAddCategoryField ? 
              <AddCategory 
                updateCategory={this.props.updateCategory} 
                setCategoryOption={this.setCategoryOption}
                categoryFieldValue={this.props.categoryFieldValue}
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
  updateCategory: React.PropTypes.func.isRequired,
  categories: React.PropTypes.array.isRequired
};

export default connect(
  // map state to props
  function( state ) {
    return {
      categoryFieldValue: state.add_task_bar.categoryFieldValue,
      currentCategory: state.add_task_bar.currentCategory,
      displayAddCategoryField: state.add_task_bar.displayAddCategoryField,
    };
  },
  // map dispatch actions to props
  add_task_bar_actions
)( AddTaskBar );
