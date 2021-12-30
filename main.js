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

var myfrm = document.getElementById("myfrm");
myfrm.addEventListener("submit", function(event) {
  event.preventDefault();
  alert("You submitted the form!");
});

}
function myFunction() {
    var input = document.getElementById("result").value;
    if (input == 2) {
        document.getElementById("answer").innerHTML = "Right!"
    } else {
        document.getElementById("answer").innerHTML = "Try again!"
  }
}
var cafeForm = document.getElementById("cafe");
cafeForm.addEventListener("submit", function(event) {
  event.preventDefault();
  myFunction();
});

function secondFunction() {
    var drinklocal = document.getElementById("question").value;
    var parent = document.getElementById('image');
    var imagePath = "Coffeecup.jpeg";

    for (let i = drinklocal; i > 0; i--) {
        var img = new Image();
        img.src = imagePath;
        parent.appendChild(img);
  }
}

var deafjavaForm = document.getElementById("deafjava");
deafjavaForm.addEventListener("submit", function(event) {
  event.preventDefault();
  secondFunction();
});

