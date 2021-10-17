var name = prompt("Please tell me your name: ");
while (name == 'null') {
    name = prompt("Please tell me your name: ");
}
if (name !== 'null') {
    alert("Welcome, " + name + "!");
}