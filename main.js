var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

var greeting = document.getElementById("greeting");
var day = new Date();
var hr = day.getHours();
if (hr >= 0 && hr < 12) {
  greeting.textContent = ("Good Morning!");
} else if (hr == 12) {
  greeting.textContent = ("Good Noon!");
} else if (hr >= 12 && hr <= 17) {
  greeting.textContent = ("Good Afternoon!");
} else {
  greeting.textContent = ("Good Evening!");
}


var myfrm = document.getElementById("myfrm");
myfrm.addEventListener("submit", function(event) {
  event.preventDefault();
  alert("You submitted the form!");
});
