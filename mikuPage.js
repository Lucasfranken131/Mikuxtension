var mikuImg;
if(!mikuImg) {
    mikuImg = document.createElement('img');
    mikuImg.src = chrome.runtime.getURL('./imgs/miku_character/miku_walking_right.gif');
    mikuImg.style.position = 'fixed';
    mikuImg.style.top = '50px';
    mikuImg.style.left = '50px';
    mikuImg.style.zIndex = '9999';
    document.body.appendChild(mikuImg);

    mikuImg.addEventListener('click', function() {
        alert('Você clicou na imagem da Miku!');
    });
}

