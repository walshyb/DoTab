import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class AddCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(event) {

    //var data = { toString(this.state.value): toString(this.state.value)};
    var key = this.state.value; 
    var data = {};
    data[key] = [];

    chrome.storage.sync.set(data);
  };

  handleChange(event) {
    this.setState({value: event.target.value});
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
