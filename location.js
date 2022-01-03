var myfrm = document.getElementById("myfrm");
myfrm.addEventListener("submit", function(event) {
  event.preventDefault();
  alert("You submitted the form!");
});
