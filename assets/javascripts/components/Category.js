import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './List';

export default class Category extends Component {
  static defaultProps() {
    return {
      categories: [] 
    };
  };

 


  render() {

    return (
      <div> 
        { this.props.categories.map(function(key) { 
            return (
              <article className="category">
                <h2>{key}</h2>
              </article>
            );
          })  
        } 
      </div>

    ); 
  };
}
