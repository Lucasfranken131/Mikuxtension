var mikuImg = null;
//Miku's original position
var y = 500;
var x = 1000;
var speed = 5
var diagonalSpeed = speed - 1.5
var direction = Math.floor(Math.random() * 10);  //This variable is called once
firstTime = true;
function createMiku() {
    mikuImg = document.createElement('img');
    mikuImg.src = chrome.runtime.getURL('./imgs/miku_character/miku_walking_right.gif');
    mikuImg.style.position = 'absolute';
    document.body.appendChild(mikuImg); //Appends Miku to the page

    //Miku killer function, removes the image and unables the function createMiku()
    mikuImg.addEventListener('click', function() {
        //Kills the timers, so they won't be called anymore
        clearInterval(mikuMoving);
        clearInterval(mikuMovingDirection);
        if(direction == 1 || direction == 4 || direction == 6) {
            mikuImg.src = chrome.runtime.getURL('./imgs/miku_character/miku_dead_left.png');
        }
        else {
            mikuImg.src = chrome.runtime.getURL('./imgs/miku_character/miku_dead_right.png');
        }
        setTimeout(function() {
            alert("Miku foi eliminada.");
            document.body.removeChild(mikuImg);
            mikuImg = null;
        }, 1000);
        firstTime = false;
    });

    //Timers to animate Miku and change the direction which she is moving
    var mikuMoving = setInterval(moveMiku, 10);
    var mikuMovingDirection = setInterval(changeDirection, 1000);

    //Function to move Miku through the page
    function moveMiku() {
        if (x < window.screen.width - mikuImg.width && y < window.screen.height - mikuImg.height) {
            mikuDirection();
        }
        else {
            x = 500
            y = 500
        }
        x = Math.max(x, 0);
        y = Math.max(y, 0);

        mikuImg.style.top = y + 'px';
        mikuImg.style.left = x + 'px';
    }

    function changeDirection() {
        direction = Math.floor(Math.random() * 10);
        if(direction == 1 || direction == 4 || direction == 6) {
            mikuImg.src = chrome.runtime.getURL('./imgs/miku_character/miku_walking_left.gif');
        }
        else if(direction == 8 || direction == 9) {
            mikuImg.src = chrome.runtime.getURL('./imgs/miku_character/miku_emoting.gif');
        }
        else if(direction == 3 || direction == 5 || direction == 7){
            mikuImg.src = chrome.runtime.getURL('./imgs/miku_character/miku_walking_right.gif');
        }
        return direction;
    }

    function mikuDirection() {
        if(direction == 0) { //cima
            y -= speed
        }
        if(direction == 1) { //esquerda
            x -= speed
        }
        if(direction == 2) { //baixo
            y += speed
        }
        if(direction == 3) { // direita
            x += speed
        }
        if(direction == 4) { // cima esquerda
            y -= diagonalSpeed
            x -= diagonalSpeed
        }
        if(direction == 5) { // cima direita
            y -= diagonalSpeed
            x -= diagonalSpeed
        }
        if(direction == 6) { // baixo esquerda
            y += diagonalSpeed
            x -= diagonalSpeed
        }
        if(direction == 7) { // baixo direita
            y += diagonalSpeed
            x += diagonalSpeed
        }
    }
}

//Checks if is the first time Miku is called, if not, calls createMiku();
if(!mikuImg && firstTime) {
    createMiku();
}