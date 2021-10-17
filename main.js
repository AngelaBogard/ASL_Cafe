var name = prompt("Please tell me your name: ");
while (name == 'null') {
    name = prompt("Please tell me your name: ");
}
if (name !== 'null') {
    alert("Welcome, " + name + "!");
}

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;