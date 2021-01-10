var i = 0;
var x = 0
var y = 0
var txt = 'Hi, I\'m Matt' /* The text */
var txt2 = 'I\'m a web developer'
var txt3 = 'I like creating concepts and building cool stuff for the web'
var speed1 = 50; /* The speed/duration of the effect in milliseconds */
var speed2 = 200
var speed3 = 400
var isDone1 = false
var isDone2 = false

function typeWriter1() {
  if (i < txt.length) {
    document.getElementById("type1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter1, speed2);
    }
}



typeWriter1()
//typeWriter1()
