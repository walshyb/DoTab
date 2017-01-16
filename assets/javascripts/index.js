import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './components/List'
import SelectCategory from './components/SelectCategory';

export default class TaskManager extends Component {

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
        <List /> 
        <SelectCategory /> 
      </div> 
    );
  
  };
}

ReactDOM.render(React.createElement(TaskManager) , document.getElementById('app'));
