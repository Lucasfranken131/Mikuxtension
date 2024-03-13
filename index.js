//Creates a listener to the page and the buttons
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("miku").addEventListener("click", mikudayo);
    document.getElementById("dance").addEventListener("click", dance);
    document.getElementById("pan").addEventListener("click", pan);
    document.getElementById("gasolina").addEventListener("click", gasolina);
    document.getElementById("scream").addEventListener("click", scream);
    var miku = document.getElementById('miku-img');
    var isBusy = false; //Variable made to verify if Miku is doing something or not
    var audio = null;

    //Resets to the original image
    function reiniciarImagem() {
        miku.src = "./imgs/miku_standing.png"
        isBusy = false;
    }

    //This function and onwards are functions called by the buttons on the page
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