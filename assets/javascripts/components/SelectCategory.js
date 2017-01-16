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

  renderOptions() {
    this.props.categories.map((key) => {
      return <option value={key}> {key} </option>;
    });
  };

  render() {
    return (
      <form>
        <label>
<<<<<<< HEAD
            <select value={this.state.value} onChange={this.handleChange}>
              <option value=''>Category</option> 
              { this.state.categories } 
              <option value='add-category'>+ Create New</option>
            </select>
=======
          <select value={this.state.value} onChange={this.handleChange}>
            <option value=''>Category</option> 
            { this.props.categories.map(function(key){
              return <option value={key}> {key} </option>
            })}
    
            <option value='add-category'>+ Create New</option>
          </select>
>>>>>>> 9598f1224430b6c063b48dd7ee75d39e87e7132b
        </label>
        { this.state.value === "add-category" ? <AddCategory /> : null }
      </form>
    ); 
  };
}
