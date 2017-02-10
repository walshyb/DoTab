import React, { Component } from 'react';
import CategoryList from './CategoryList';
import AddTaskBar from './AddTaskBar';
import { connect } from 'react-redux';
import { list_manager_actions } from '../redux/actions/list_manager'
import { util } from '../utils';

export class ListManager extends Component {

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
        <AddTaskBar 
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
      categories: state.list_manager.categories,
    };
  },
  // map dispatch actions to props
  list_manager_actions
)( ListManager );