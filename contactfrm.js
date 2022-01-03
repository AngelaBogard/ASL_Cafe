var contactfrm = document.getElementById("contactfrm");
contactfrm.addEventListener("submit", function(event) {
  event.preventDefault();
  alert("You submitted the form!");
});