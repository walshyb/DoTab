import React, { Component } from 'react';
import CategoryList from '../category_list/CategoryList';
import AddTaskBar from '../add_task_bar/AddTaskBar';
import { connect } from 'react-redux';
import { list_manager_actions } from '../../redux/list_manager/list_manager'
import { util } from '../../utils';

export class ListManager extends Component {

  render() {
    return (
      <div>
        <h1> { util.getCurrentDate() } </h1>
        <CategoryList 
          categories={this.props.categories} 
          archiveTask={this.props.archiveTask}
          removeCategory={this.props.removeCategory}
          renameCategory={this.props.renameCategory}
        />
        <AddTaskBar 
          addCategory={this.props.addCategory}
          addTask={this.props.addTask}
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
      categories: state.list_manager.categories,
    };
  },
  // map dispatch actions to props
  list_manager_actions
)( ListManager );
