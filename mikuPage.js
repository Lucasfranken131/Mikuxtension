var mikuImg;
var y = 200;
var x = 200;
function createMiku() {
    mikuImg = document.createElement('img');
    mikuImg.src = chrome.runtime.getURL('./imgs/miku_character/miku_walking_right.gif');
    mikuImg.style.position = 'absolute';

    document.body.appendChild(mikuImg);

    mikuImg.addEventListener('click', function() {
        alert('Você clicou na imagem da Miku!');
    });
    setInterval(moveMiku, 10);

    function moveMiku() {
        if(x < window.screen.width - mikuImg.width) {
            x += 5
        }
        if(y < window.screen.height - mikuImg.height)  {
            y += 0
        }
        mikuImg.style.top = y + 'px';
        mikuImg.style.left = x + 'px';
    }
}

if(!mikuImg) {
    createMiku();
}

else {
    document.body.removeChild(mikuImg);
    mikuImg = null;
}