var i = 0;
var x = 0
var y = 0
const txt = 'Hi, I\'m Matt.'
const txt2= 'I\'m a web developer.'
var txt3 = 'I like creating concepts and building cool stuff for the web'
var speed1 = 100; /* The speed/duration of the effect in milliseconds */
var speed2 = 200
var speed3 = 400
var isDone1 = false
var isDone2 = false
let input = document.getElementById('type1')
let input2 = document.getElementById('type2')


function typeWriter1() {
  if (i < txt.length) {
    input.innerHTML += txt.charAt(i);
    i++;
  }
  setTimeout(typeWriter1, speed1)

}


















typeWriter1()
