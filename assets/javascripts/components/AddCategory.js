import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add_category_actions } from '../redux/actions/add_category'

export class AddCategory extends Component {

  constructor(props) {
    super(props);
    this.handleAddCategoryClick = this.handleAddCategoryClick.bind(this);
  };

  handleAddCategoryClick(event) {
    this.props.handleAddCategoryClick(event, this.props);
  };

  render() {
    return (
      <div id='add-category'>
        <input type='text' value={this.props.inputValue} onChange={this.props.handleChange} placeholder='Category'/>
        <button onClick={this.handleAddCategoryClick}> Add Category </button>
      </div>
    ); 
  };
}

export default connect (
  function ( state ) {
    return {
      inputValue: state.add_category.inputValue
    };
  },
  add_category_actions
)( AddCategory );
