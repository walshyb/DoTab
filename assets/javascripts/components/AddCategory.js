import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Category from './Category';

export default class AddCategory extends Component {

  constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
      }

  handleChange(event) {
    this.setState({value: event.target.value});
    if (event.target.value === 'add-category') {
      
    }
  };

  render() {
    return (
      <form>
        <label>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value=''>Category</option> 
            <option value='add-category'>+ Create New</option>
            <option><input type="text"/> </option>
          </select>
        </label>
        { this.state.value === "add-category" ? <input type="text" /> : null }
      </form>

    ); 
  };
}
