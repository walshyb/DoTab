import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class AddCategory extends Component {

  handleSubmit(event) {
  alert('submit');
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' placeholder='Category'/>
        <input type='submit' value='Add Category'/>
      </form>
    ); 
  };
}
