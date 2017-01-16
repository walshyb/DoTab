import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './components/List'
import SelectCategory from './components/SelectCategory';
import Category from './components/Category.js';

export default class TaskManager extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  currentDate() {
    var date = new Date();
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    var dayOfWeek = weekdays[date.getDay()];
    var month = months[date.getMonth()]; 
    var day = date.getDate();
    var year = date.getFullYear();

    return <h1>{dayOfWeek}, {month} {day}, {year} </h1>; 
  };

  get categories() {
    chrome.storage.sync.get(null, function(items) {   
      var allKeys = Object.keys(items);               
      return allKeys;
    });          
  };

  componentWillMount() {
    chrome.storage.sync.get(null, function(items) {   // get all keys from chrome storage
      var allKeys = Object.keys(items);               // store them in list

      this.setState( {categories: allKeys} );            // assign list of JSX objects to attribute 'categories'
    }.bind(this));  

    chrome.storage.sync.get(this.props.categoryName, function(tasks) {  
      this.setState( {tasks: tasks} );            // assign list of JSX objects to attribute 'tasks'
    }.bind(this));  
  };

  render() {
    return (
      <div>
      { this.currentDate() }
      {
        this.state.categories.map(function(category) {
          return <Category categoryName={category}/>;
        })
      }
      <SelectCategory categories={this.state.categories}/ > 
      </div> 
    );

  };
}

ReactDOM.render(React.createElement(TaskManager) , document.getElementById('app'));
