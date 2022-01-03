function myFunction() {
  var input = document.getElementById("result").value;
  if (input == 2) {
      document.getElementById("answer").innerHTML = "Right!";
  } else {
      document.getElementById("answer").innerHTML = "Try again!";
  }
}
var cafeForm = document.getElementById("cafe");
cafeForm.addEventListener("submit", function(event) {
  console.log("HI");
  event.preventDefault();
  myFunction();
});

function secondFunction() {
    var drinklocal = document.getElementById("question").value;
    var parent = document.getElementById('image');
    var imagePath = "Coffeecup.jpeg";
    parent.innerHTML = "";
    for (let i = drinklocal; i > 0; i--) {
        var img = new Image();
        img.src = imagePath;
        parent.appendChild(img);
  }
}

var deafjavaForm = document.getElementById("deafjava");
deafjavaForm.addEventListener("submit", function(event) {
  console.log("HI2");
  event.preventDefault();
  secondFunction();
});
