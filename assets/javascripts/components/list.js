import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class List extends Component {
  static defaultProps() {
    return {
      tasks: [] 
    }
  };

  
    
  render() {
    return ( 
      <ul> 
        { this.props.tasks.map(function(task){
          return <li> {task} </li>;
        })
        }
      
      </ul>
    );
  };
}
