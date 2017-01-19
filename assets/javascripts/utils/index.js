const getCurrentDate = () => {
  var date = new Date();
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  var dayOfWeek = weekdays[date.getDay()];
  var month = months[date.getMonth()]; 
  var day = date.getDate();
  var year = date.getFullYear();

  return `${dayOfWeek}, ${month} ${day}, ${year}`;
};

export const util = {
  getCurrentDate
};
