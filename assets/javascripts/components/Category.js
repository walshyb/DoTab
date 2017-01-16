import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './List';

export default class Category extends Component {
  static defaultProps() {
    return {
      categoryName: null 
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };

  };

  render() {
    return (
      <article className="category">
        <h2>{this.props.categoryName}</h2>
        <List tasks={this.state.tasks}/>
      </article>
    );
  };
}
