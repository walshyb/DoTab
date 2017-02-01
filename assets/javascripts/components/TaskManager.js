import React, { Component } from 'react';
import CategoryList from './CategoryList';
import AddTaskBar from './AddTaskBar';
import { connect } from 'react-redux';
import { task_manager_actions } from '../redux/actions/task_manager'
import { util } from '../utils';

export class TaskManager extends Component {

  componentWillMount () {
    this.props.updateCategories();
  };

  render() {
    return (
      <div>
        <h1> { util.getCurrentDate() } </h1>
        <CategoryList 
          updateCategory={this.props.updateCategory}
          categories={this.props.categories} 
        />
      </div> 
    );
  };
}

export default connect(
  // map state to props
  function( state ) {
    return {
      categories: state.task_manager.categories,
    };
  },
  // map dispatch actions to props
  task_manager_actions
)( TaskManager );
