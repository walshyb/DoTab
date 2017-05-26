import React, { Component } from 'react';
import Task from './Task';

export default class CategoryListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      categoryName: this.props.categoryName
    };
  };

  setEditMode = (event) => {
    if(this.state.editMode) {
      this.setState({editMode: false});
    } else {
      this.setState({editMode: true});
    }
  };

  removeCategory = (event) => {
    this.props.removeCategory(this.props.categoryName);
  };

  updateCategoryNameText = (event) => {
    this.setState({ categoryName: event.target.value });
  };

  updateCategoryName = (event) => {
    if(event.keyCode == 13) {
      this.props.updateCategoryName(this.props.categoryName, this.state.categoryName); 
    }
  };

  render() {
    const tasks = Object.keys(this.props.tasks).map(function(task) {
      return <Task 
        key={task} 
        text={this.props.tasks[task]} 
        taskId={task} 
        categoryName={this.props.categoryName}
        removeTask={this.props.removeTask}/>;
    }.bind(this));

    return (
      <article className='category' id={this.props.id}>
        { !this.state.editMode ? (
          <div className='view-mode'>
            <h2> 
              {this.props.categoryName} 
              {/*TODO: make edit-category button be an svg of a pencil and not an emoji*/}
              <button onClick={this.setEditMode} className='edit-category'>✏️  </button>
            </h2>
          </div>
        ) : (
          <div className='edit-mode'>
            <input 
              onKeyDown={this.updateCategoryName}
              onChange={this.updateCategoryNameText}
              className='edit-category-name' 
              value={this.state.categoryName}
            />
            <button onClick={this.removeCategory} className='remove-category'>X</button> 
          </div>
        )}
        <ul className='tasks'> { tasks } </ul>
      </article>
    );
  };  
}
