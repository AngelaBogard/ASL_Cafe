function getGreeting() {
    var day = new Date();
    var hr = day.getHours();
    if (hr >= 0 && hr < 12) { 
      return "Good Morning!";
    } else if (hr == 12) {
      return "Good Noon!";
    } else if (hr >= 12 && hr <= 17) {
      return "Good Afternoon!";
    } else {
      return "Good Evening!";
    }
  }
  var greeting = document.getElementById("greeting");
  greeting.textContent = getGreeting();