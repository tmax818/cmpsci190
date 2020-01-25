var timer1 = null;
var el = null;
var score = 0; // number of 'hits'
var shots = 0; // total 'shots'
function moveRight() {
    if(parseInt(el.style.left) < screen.width){
	el.style.left = parseInt(el.style.left) - 6 + 'px';
    el.style.top = 100 + (80 * Math.sin(parseInt(el.style.left)/50)) + 'px';
    }
}
function moveLeft() {
    if(parseInt(el.style.left) < parseInt(el.style.right)){
        el.style.right = parseInt(el.style.right) - 6 + 'px';
        el.style.left = parseInt(el.style.left) + 6 + 'px';
        console.log(el.style.left, el.style.right)
        el.style.top = 100 + (80 * Math.sin(parseInt(el.style.left)/50)) + 'px';
    }

    if(parseInt(el.style.left) > parseInt(el.style.right)) {
        el.style.right = parseInt(el.style.right) + 6 + 'px';
        el.style.left = parseInt(el.style.left) - 6 + 'px';
        console.log(el.style.left, el.style.right, screen.width);
        el.style.top = 100 + (80 * Math.sin(parseInt(el.style.left)/50)) + 'px';
        } 


     

 
}
// function moveIt() {
//     // animate the image
//     if(parseInt(el.style.left) > (screen.width - 50)) el.style.left = 0;	
//     el.style.left = parseInt(el.style.left) + 6 + 'px';
//     el.style.top = 100 + (80 * Math.sin(parseInt(el.style.left)/50)) + 'px';
//     // set the timer			
//     timer1 = setTimeout(moveIt, 25);
// }
function moveIt() {
    moveLeft()
    timer1 = setTimeout(moveIt, 25);
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
    el.style.left = '0px'
    el.style.right = '1000px'
    //moveIt();
}