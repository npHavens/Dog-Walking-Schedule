// You are running a part-time dog-walking business. You work from Monday to Thursday from 9am to 3pm. Each walking slot starts on the hour, and is an hour long. You only walk 1 dog per slot.

// Define a data structure to model this data and write a function that prints out your schedule in a tidy tabular format on the command line:



//Dog constructor
function Dog(name, date, time) {
  this.name = name;
  this.date = date;
  this.time = time;
}

var days = ['Mon', 'Tue', 'Wed', 'Thu'];
var times = ['9am', '10am', '11am', '12pm', '1pm', '2pm'];
var dogs = [];

dogs.push(new Dog('Bowser', 'Mon', '10am'),
  new Dog('Fifi', 'Tue', '11am'),
  new Dog('Spike', 'Wed', '12pm'),
  new Dog('Maggie', 'Mon', '2pm'));


//check if this is the first column
//then add spaces to the string to make it equal to the total width
function columnSpacer(str, isFirstCol) {
  var width = isFirstCol ? 6 : 12;
  return str + ' '.repeat(width - str.length);
}

//build up a string of labels for the days
//then join to a string and concatanate with a smaller, blank first column
function drawColumnLabels(arr) {
  return columnSpacer('', true) + arr.map(day => columnSpacer(day)).join('');
}

//build a string using the weekArr and loop through the dogArr 
//add the dog's name if it corresponds to the day in the current time slot
//concatenate a shorter string containing the time slot to the beginning of the row
function drawRow(timeSlot, weekArr, dogArr) {
  return columnSpacer(timeSlot, true) + weekArr.map(function(day) {
    var cell = '';
    dogArr.forEach(function(dog) {
       if(dog.date === day && dog.time === timeSlot) {
         cell += dog.name;
       }
    });
    return columnSpacer(cell);
  }).join('');
}

//log the labels row
//then loop through the timeArr to print a row for each timeslot
function printSchedule(timeArr, weekArr, dogArr) {
  console.log(drawColumnLabels(weekArr));
  timeArr.forEach(function(timeSlot) {
    console.log(drawRow(timeSlot, weekArr, dogArr));
  });
}

printSchedule(times, days, dogs);