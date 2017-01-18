import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CategoryList from './components/CategoryList';
import AddTaskBar from './components/AddTaskBar';

export default class TaskManager extends Component {

  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
    
    this.updateCategory = this.updateCategory.bind(this);
    this.updateCategories();
  };

  updateCategories() {
    chrome.storage.sync.get(null, function(categories) { 

      var categoryArray = [];

      for(var categoryKey in categories) {
        var data = {};
        data[categoryKey] = categories[categoryKey];
        categoryArray.push(data);
      }

      this.setState({ categories: categoryArray }); 
    }.bind(this)); 
  };

  updateCategory(categoryName, tasks) {
    var data = {};
    data[categoryName] = tasks;
    chrome.storage.sync.set(data);
    this.updateCategories();
  };

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

  render() {
    return (
      <div>
        { this.currentDate() }
        <CategoryList categories={this.state.categories} />
        <AddTaskBar 
          updateCategory={this.updateCategory}
          categories={this.state.categories}
        />
      </div> 
    );

  };
}

ReactDOM.render(React.createElement(TaskManager) , document.getElementById('app'));
