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

    this.handleSubmit = this.handleSubmit.bind(this);
  };

  static defaultProps() {
    return {
      categories: [] 
    };
  };

  handleChange(event) {
    console.log(this.state.selectValue); 
  };

  handleSubmit(event) {
  
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' value={this.state.value} onChange={this.handleChange}/> 
        <SelectCategory categories={this.props.categories} />
        <input type='submit' value='Submit'/>
      </form>
    );
  };
}
