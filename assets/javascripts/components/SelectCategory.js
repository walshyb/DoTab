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
    this.props.onSelect(event.target.value);
  };

  renderOptions() {
    this.props.categories.map((key) => {
      return <option value={key}> {key} </option>;
    });
  };

  render() {
    return (
      <div id='select-category-container'>
        <select value={this.state.value} onChange={this.handleChange} id='select-category'>
          <option value=''>Category &#9660; </option> 
            { this.props.categories.map(function(key){
              return <option value={key}> {key} </option>
            })}
          <option value='add-category'>+ Create New</option>
        </select>
        { this.state.value === "add-category" ? <AddCategory /> : null }
      </div>
    ); 
  };
}
