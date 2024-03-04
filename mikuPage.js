document.addEventListener('DOMContentLoaded', function() {
    var walkButton = document.getElementById('walk');
    walkButton.addEventListener('click', function() {
        var mikuImg;
        if(!mikuImg) {
            mikuImg = document.createElement('img');
            mikuImg.src = chrome.runtime.getURL('./imgs/miku_character/miku_walking_right.gif');
            mikuImg.style.position = 'fixed';
            mikuImg.style.top = '50px'; // Posição superior da imagem
            mikuImg.style.left = '50px'; // Posição esquerda da imagem
            mikuImg.style.zIndex = '9999'; // Para garantir que a imagem fique acima de outros elementos na página
            document.body.appendChild(mikuImg);
            // Adiciona evento de clique na imagem
        
            mikuImg.addEventListener('click', function() {
                alert('Você clicou na imagem da Miku!');
            });
        }
    });
});


