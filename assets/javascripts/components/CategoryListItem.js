import React, { Component } from 'react';
import Task from './Task';

export default class CategoryListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };
    this.removeTask = this.removeTask.bind(this);
  };

  removeTask(task) {
    console.log(this.state);
    var index = this.state.tasks.indexOf(task);

    var newArray = this.props.tasks;

    if (index > -1 ) {
      newArray.splice(index, 1);
      this.setState({
        tasks: newArray
      });

      chrome.storage.sync.set({ [this.props.categoryName] : newArray  });
    }

    
  };

  componentWillMount() {
    this.setState({
      tasks: this.props.tasks
    });
    
  };

  render() {
    const tasks = this.props.tasks.map(function(task, i) {
      return <Task key={`${this.props.categoryName}${i}`} text={task} taskId={i} removeTask={this.removeTask}/>;
    }.bind(this));
    return (
      <article className='category' id={this.props.categoryName}>
        <h2> {this.props.categoryName} </h2>
        <ul> { tasks } </ul>
      </article>
    );
  };  
}


