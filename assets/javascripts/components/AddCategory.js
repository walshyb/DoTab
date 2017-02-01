import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class AddCategory extends Component {

  constructor(props) {
    super(props);

    this.state = {
      categoryName: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };

  handleChange(event) {
    this.setState({ categoryName: event.target.value });
  };


  // this invokes ADD_TASK, we don't want that
  handleClick(event) {
    var key = this.state.categoryName;
    var data = { [key] : [] };

    this.props.updateCategory(key, []);
    this.props.updateCategoryOption(key);

    this.setState( { categoryName: '' });
  };

  render() {
    return (
      <div id='add-category'>
        <input type='text' 
          value={this.state.categoryName} 
          onChange={this.handleChange} 
          placeholder='Category'
        />
        <button onClick={this.handleClick}> Add Category </button>
      </div>
    ); 
  };
}
