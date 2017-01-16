import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Category from './Category';
import AddCategory from './AddCategory';

export default class SelectCategory extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  };

  componentDidMount() {
    
    chrome.storage.sync.get(null, function(items) {   // get all keys from chrome storage
      var allKeys = Object.keys(items);               // store them in list
      var list = allKeys.map((key) =>                 // for each key, create JSX object
        <option value={key}> {key} </option>
      );

      this.setState( {categories: list} );            // assign list of JSX objects to attribute 'categories'
    }.bind(this));                                    // bind 'this' so we can have access to setState in chrome method
  };

  render() {
    return (
      <form>
        <label>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value=''>Category</option> 
            { this.state.categories } 
            <option value='add-category'>+ Create New</option>
          </select>
        </label>
        { this.state.value === "add-category" ? <AddCategory /> : null }
      </form>
    ); 
  };
}
