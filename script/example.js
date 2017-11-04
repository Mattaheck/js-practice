(function() {
  //Part One: create a hotel object and wrtie out the offer details
  var hotel = {
    name: 'Park',
    roomRate: 567, //amount in dollars
    discount: 15, //percentage discount
    offerPrice: function() {
      var offerRate = this.roomRate * ((100 - this.discount)/ 100);
      return offerRate;
    }
  };

  //write out the hotel name, standard rate, and the special rate
  var hotelName, roomRate, specialRate; //declare variables

  hotelName = document.getElementById('hotelName'); //get elements
  roomRate = document.getElementById('roomRate');
  specialRate = document.getElementById('specialRate');

  hotelName.textContent = hotel.name; //write hotel name
  roomRate.textContent = '$' + hotel.roomRate.toFixed(2); //write room rate
  specialRate.textContent = '$' + hotel.offerPrice(); //write offer offerPrice


  //Part two: calculate and write out the expiry details for the offerPrice
  var expiryMsg; //message displayed to users
  var today; //today's Date
  var elEnds; //the element that shows the message about the offer ending


  function offerExpires(today) {
    //declare variables within the function for local scope
    var weekFromToday, day, date, month, year, dayNames, monthNames;
    // add 7 days time(added in milliseconds)
    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000); //7 days in a week, 24 hours in a day, 60 minutes in an hour, 60 seconds in a minute, 1000 milliseconds in a second
    //create arrays to hold the names of days/ monthNames
    dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November','December'];

    //collect the parts of the date to show on the page

    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();
    //create the message
    expiryMsg = 'Offer expires next';
    expiryMsg += day + '<br />(' + date + ' ' + month + ' ' + year + ')';
    return expiryMsg;
  }

  today = new Date(); //put today's date in a variables
  elEnds = document.getElementById('offerEnds'); //get the offerEnds element
  elEnds.innerHTML = offerExpires(today); //add the expiry message

  //finish the immediately invoked function expression
}());
