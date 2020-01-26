var timer1 = null;
var el = null;
var moveRt = true;
var score = 0; // number of 'hits'
var shots = 0; // total 'shots'
function moveIt() {
    // animate the image
    // (parseInt(el.style.left) > (screen.width)) ? el.style.left = 0: el.style.left = parseInt(el.style.left) +  6 + 'px';
    // el.style.top = 100 + (80 * Math.sin(parseInt(el.style.left)/50)) + 'px';
    if(el.style.left === '1200px') moveRt = false
    if(el.style.left === '54px') moveRt = true

    if(moveRt){
        moveRight()
    } else {
        moveLeft()
    }
    // set the timer			
    timer1 = setTimeout(moveIt, 25);
}

function moveRight() {
    el.style.left = parseInt(el.style.left) + 2 + 'px';
    el.style.top = 100 + (80 * Math.sin(parseInt(el.style.left)/50)) + 'px';
    console.log(el.style.left, el.style.right)
}
function moveLeft() {
    el.style.left = parseInt(el.style.left) - 2 + 'px';
    el.style.top = 100 + (80 * Math.sin(parseInt(el.style.left)/50)) + 'px';
    console.log(el.style.left, el.style.right)
}
function scoreUp() {
    // increment the player's score
    score++;
}
function scoreboard() {
    // display the scorebaord
    document.getElementById("score").innerHTML = "Shots: " + shots + " Score: " + score;
}
window.onload = function() {
    el = document.getElementById("img1");
    // onClick handler calls scoreUp()
    // when the image is clicked
    el.onclick = scoreUp;
    // update total number of shots
    // for every click within play field
    document.getElementById("range").onclick = function() { 
        shots++; 
        // update scoreboard
        scoreboard();
        }
    // initialize game
    scoreboard();
    el.style.left = '50px';
    el.style.right = '50px';
        moveIt();
}