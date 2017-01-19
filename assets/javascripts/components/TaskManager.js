import React, { Component } from 'react';
import CategoryList from './CategoryList';
import AddTaskBar from './AddTaskBar';
import { connect } from 'react-redux';
import { task_manager_actions } from '../redux/actions/task_manager'

export class TaskManager extends Component {
  currentDate() {
    var date = new Date();
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    var dayOfWeek = weekdays[date.getDay()];
    var month = months[date.getMonth()]; 
    var day = date.getDate();
    var year = date.getFullYear();

    return <h1>{dayOfWeek}, {month} {day}, {year} </h1>; 
  };

  componentWillMount () {
    this.props.updateCategories();
  };

  render() {
    return (
      <div>
        { this.currentDate() }
        <CategoryList categories={this.props.categories} />
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
      categories: state.task_manager.categories,
    };
  },
  // map dispatch actions to props
  task_manager_actions
)( TaskManager );
