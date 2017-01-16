import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class AddCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(event) {

    //var data = { toString(this.state.value): toString(this.state.value)};
    var key = this.state.value; 
    var data = {};
    data[key] = [];

    chrome.storage.sync.set(data, function() {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        resolve();
      }
    });
  };

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' value={this.state.value} onChange={this.handleChange} placeholder='Category'/>
        <input type='submit' value='Add Category'/>
      </form>
    ); 
  };
}
