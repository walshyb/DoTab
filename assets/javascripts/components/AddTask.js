import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SelectCategory from './SelectCategory';

export default class AddTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      selectValue: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  };

  getInitialState() {
    return { value: '' };
  };

  static defaultProps() {
    return {
      categories: [] 
    };
  };

  handleChange(event) {
    this.setState({value: event.target.value});
  };

  handleClick(event) {
    var key = this.state.selectValue; 
    var task = this.state.value;
   
    chrome.storage.sync.get(this.props.categoryName, function(tasks) {  // get tasks for selected category
      var tasksArray = tasks[key];
      tasksArray.push(task);

      var data = {};
      data[key] = tasksArray;
      chrome.storage.sync.set(data);
     
    }.bind(this));  

    
    
  };

  handleSelect(value) {
    this.setState({ selectValue: value }); 
  };

  render() {
    return (
      <div>
        <input type='text' value={this.state.value} onChange={this.handleChange}/> 
        <SelectCategory categories={this.props.categories} onSelect={this.handleSelect}/>
        <button onClick={this.handleClick}>Add Task</button>
      </div>
    );
  };
}
