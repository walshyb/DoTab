import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Category from './Category';
import AddCategory from './AddCategory';

export default class SelectCategory extends Component {
  static defaultProps() {
    return {
      categories: [] 
    };
  };

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  };

  render() {
    return (
      <form>
        <label>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value=''>Category</option> 
            { this.props.categories } 
            <option value='add-category'>+ Create New</option>
          </select>
        </label>
        { this.state.value === "add-category" ? <AddCategory /> : null }
      </form>
    ); 
  };
}
