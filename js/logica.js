const mario = document.querySelector(".mario");
const tubo = document.querySelector(".tubo");
var contador = 0;

// Gatilho comando pulo
const pulo = () => {

    // Placar
    contador++;
    console.log(contador);
    document.getElementById("contador").innerHTML = contador
    // Fim placar

    mario.classList.add("pulo")
    setTimeout(() => {
        mario.classList.remove("pulo");
    }, 500)
}

// Verificação pulo
const loop = setInterval(() => {
    const posicaoTubo = tubo.offsetLeft;
    const alturaMario = +window.getComputedStyle(mario).bottom.replace("px", "");

    // Verificação colisão horizontal e altura
    if (posicaoTubo <= 125 && posicaoTubo > 0 && alturaMario < 80) {
        tubo.style.animation = "none";
        tubo.style.left = posicaoTubo + "px";

        mario.style.animation = "none";
        mario.style.bottom = alturaMario + "px";

        mario.src = "img/game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "50px";

        clearInterval(loop);
        setTimeout(() => {
            window.location.href = "gameover.html"
        }, 300)

    }
}, 10)


document.addEventListener("keydown", pulo);