document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("miku").addEventListener("click", mikudayo);
    document.getElementById("dance").addEventListener("click", dance);
    document.getElementById("pan").addEventListener("click", pan);
    document.getElementById("gasolina").addEventListener("click", gasolina);
    document.getElementById("scream").addEventListener("click", scream);
    var miku = document.getElementById('miku-img');
    var isBusy = false;
    var audio = null;

    function reiniciarImagem() {
        miku.src = "./imgs/miku_standing.png"
        isBusy = false;
    }

    function mikudayo() {
        
        if(!isBusy) { 
            if(audio) {
                audio.pause();
                audio.currentTime = 0;
                miku.src = "./imgs/miku_standing.png";
            }
            audio = new Audio('./sounds/mikudayo.mp3');
            miku.src = "./imgs/miku_icon.png";
            audio.play();
            setTimeout(reiniciarImagem, 1500)
        }
    }

    function dance() {
        if(!isBusy) {
            if(audio) {
                audio.pause();
                audio.currentTime = 0;
                miku.src = "./imgs/miku_standing.png";
            }
            audio = new Audio("./sounds/sekai_de.mp3");
            miku.src = "./imgs/miku_dancing.gif";
            audio.play();
            setTimeout(reiniciarImagem, 254000);
        }
    }

    function pan() {
        if(!isBusy) {
            if(audio) {
                audio.pause();
                audio.currentTime = 0;
                miku.src = "./imgs/miku_standing.png";
            }
            audio = new Audio("./sounds/pan.mp3");
            miku.src = "./imgs/miku_bread.png";
            audio.play();
            setTimeout(reiniciarImagem, 800);
        }
    }

    function gasolina() {
        if(!isBusy) {
            if(audio) {
                audio.pause();
                audio.currentTime = 0;
                miku.src = "./imgs/miku_standing.png";
            }
            audio = new Audio("./sounds/gasolina.mp3");
            miku.src = "./imgs/miku_dance_meme.gif";
            audio.play();
            setTimeout(reiniciarImagem, 5000);
        }
    }

    function scream() {
        if(!isBusy) {
            if(audio) {
                audio.pause();
                audio.currentTime = 0;
                miku.src = "./imgs/miku_standing.png";
            }
            audio = new Audio("./sounds/scream.mp3");
            miku.src = "./imgs/miku_dying.png";
            audio.play();
            setTimeout(reiniciarImagem, 2500);
        }
    }
});