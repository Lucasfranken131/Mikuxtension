var mikuImg = null;
var y = 500;
var x = 1000;
var direction = Math.floor(Math.random() * 4);
function createMiku() {
    mikuImg = document.createElement('img');
    mikuImg.src = chrome.runtime.getURL('./imgs/miku_character/miku_walking_right.gif');
    mikuImg.style.position = 'absolute';

    document.body.appendChild(mikuImg);

    mikuImg.addEventListener('click', function() {
        alert("Miku foi eliminada.");
        document.body.removeChild(mikuImg);
        mikuImg = null;
    });
    setInterval(moveMiku, 10);
    setInterval(changeDirection, 1000);

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
        direction = Math.floor(Math.random() * 4);
        if(direction == 1) {
            mikuImg.src = chrome.runtime.getURL('./imgs/miku_character/miku_walking_left.gif');
        }
        if(direction == 3) {
            mikuImg.src = chrome.runtime.getURL('./imgs/miku_character/miku_walking_right.gif');
        }
    }

    function mikuDirection() {
        if(direction == 0) {
            y -= 5
        }
        if(direction == 1) {
            x -= 5
        }
        if(direction == 2) {
            y += 5
        }
        if(direction == 3) {
            x += 5
        }
    }
}

if(!mikuImg) {
    createMiku();
}