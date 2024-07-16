var mikuImg = null;
//Miku's original position
var y = 500;
var x = 1000;
var speed = 5;
var diagonalSpeed = speed - 1.5;
var direction = Math.floor(Math.random() * 10);  //This variable is called once
firstTime = true;

var playerImg = null;
var playerY = 200;
var playerX = 500;
var playerSpeed = 15;
var playerDirection;
var keysPressed = {};

function createMiku() {
    mikuImg = document.createElement('img');
    mikuImg.src = chrome.runtime.getURL('./imgs/miku_character/miku_walking_right.gif');
    mikuImg.style.position = 'absolute';
    document.body.appendChild(mikuImg); //Appends Miku to the page

    //Miku killer function, removes the image and unables the function createMiku()
    // mikuImg.addEventListener('click', function() {

        //Kills the timers, so they won't be called anymore
    function killMiku() {
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
    };

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
        var distance = getDistanceBetween(x, y, playerX, playerY);
        if(distance <= 70) {
            killMiku();
        }
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

function createPlayer() {
    playerImg = document.createElement('img');
    playerImg.src = chrome.runtime.getURL('./imgs/len_player/len_standing_right.png');
    playerImg.style.position = 'absolute';
    document.body.appendChild(playerImg); //Appends the player to the page

    function movePlayer() {
        playerX = Math.max(playerX, 0);
        playerY = Math.max(playerY, 0);

        playerImg.style.top = playerY + 'px';
        playerImg.style.left = playerX + 'px';
    }

    function handleMovement() {
        if (keysPressed["w"]) {
            playerY -= playerSpeed;
        }
        if (keysPressed["a"]) {
            if(playerDirection != "left") {
                playerImg.src = chrome.runtime.getURL('/imgs/len_player/len_left.gif');
            }
            playerDirection = "left";
            playerX -= playerSpeed;
        }
        if (keysPressed["s"]) {
            playerY += playerSpeed;
        }
        if (keysPressed["d"]) {
            if(playerDirection != "right") {
                playerImg.src = chrome.runtime.getURL('/imgs/len_player/len_right.gif');
            }
            playerDirection = "right";
            playerX += playerSpeed;
        }
        movePlayer();
    }

    document.addEventListener("keydown", function(event) {
        keysPressed[event.key] = true;
        handleMovement();
    });

    document.addEventListener("keyup", function(event) {
        keysPressed[event.key] = false;
    });
}

function getDistanceBetween(x1, y1, x2, y2) {
    distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    return distance;
}

//Checks if is the first time Miku is called, if not, calls createMiku();
if(!mikuImg && firstTime) {
    createPlayer();
    createMiku()
}
