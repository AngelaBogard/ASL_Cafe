var contactform = document.getElementById("contactform");
contactform.addEventListener("submit", function(event) {
  event.preventDefault();
  alert("You submitted the form!");
});
