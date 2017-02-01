import React, { Component } from 'react';
import Task from './Task';

export default class CategoryListItem extends Component {
  constructor(props) {
    super(props);
    this.removeTask = this.removeTask.bind(this);
  };

  removeTask(task) {
    var index = this.props.tasks.indexOf(task);
    var newArray = this.props.tasks;

    if (index > -1 ) {
      newArray.splice(index, 1);
      this.props.updateCategory(this.props.categoryName, newArray);
    }
  };

  render() {
    const tasks = this.props.tasks.map(function(task, i) {
      return <Task key={`${task}${i}`} text={task} taskId={`${task}${i}`} removeTask={this.removeTask}/>;
    }.bind(this));
    return (
      <article className='category' id={this.props.categoryName}>
        <h2> {this.props.categoryName} </h2>
        <ul> { tasks } </ul>

        <AddTaskBar 
          updateCategory={this.props.updateCategory}
          categoryName={this.props.categoryName}
          tasks={this.props.tasks}
        />
      </article>
    );
  };  
}
