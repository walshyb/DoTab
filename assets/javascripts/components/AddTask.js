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
   console.log(this.props.children); 
  };

  render() {
    return (
      <div>
        <input type='text' value={this.state.value} onChange={this.handleChange}/> 
        <SelectCategory categories={this.props.categories} />
        <button onClick={this.handleClick}>Add Task</button>
      </div>
    );
  };
}
