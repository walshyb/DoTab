import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class AddCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryFieldValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(event) {

    //var data = { toString(this.state.value): toString(this.state.value)};
    var key = this.state.categoryFieldValue; 
    var data = {};
    data[key] = [];

    this.props.updateCategory(key, []);

    this.setState({
      categoryFieldValue: ''
    });
  };

  handleChange(event) {
    this.setState(
      {categoryFieldValue: event.target.value
    });
  }

  render() {
    return (
      <div id='add-category'>
        <input type='text' value={this.state.value} onChange={this.handleChange} placeholder='Category'/>
        <button onClick={this.handleClick}> Add Category </button>
      </div>
    ); 
  };
}
