const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");
//const pontos = document.querySelector('pontos');
const textStart = document.getElementById('text-start');
const pontos = document.querySelector(".Pontos");
const music = document.querySelector(".trilhaSonora");
const gameOverMusic = document.querySelector(".gameOverMusic");
const abertura = document.querySelector(".capaAbertura");
const imgCapa = document.querySelector(".img-capaAbertura");
const reload = document.querySelector(".btn-reload");

/*Contagem de Pontos*/
const contarPontos = pontos;
let score = 0;
const contador = setInterval(() => {
  score++;
  contarPontos.innerHTML = `Pontos: ${score}`;
},500);

/*Função Pulo*/
function jump() {
  textStart.style.display = "none";
  mario.classList.add("jump-mario");

  setTimeout(() => {
    mario.classList.remove("jump-mario");
  }, 500);

}

/*Função Start*/
function start(jump) {
  abertura.style.display="none";
  pipe.classList.add('pipe-animation');
  mario.src = './imagens/super-mario.gif';
  mario.style.width = '150px';
  

};


/*Verficar se bateu*/
const loopGame = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");
  music.play();

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./imagens/mario-game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "45px";

    music.volume=0.0;
    gameOverMusic.play();

    setInterval(()=>{
      abertura.style.display="inline-block";
      imgCapa.src = "./imagens/gameOverVerde.jpg";
  
     
      textStart.style.display = "inline-block";
      textStart.style.backgroundColor = "rgb(15, 139, 40)";
      textStart.style.fontSize = "50px";
      //textStart.classList.add('gameOver');
      reload.style.display = "flex";
      document.getElementById("text-start").innerHTML =  `Pontos: ${score}`;

    },3000);

   
    
    clearInterval(contador);
    clearInterval(loopGame);


  }
 
}, 20);



//cument.location.reload(true);
document.addEventListener('keydown', start);
document.addEventListener("keydown", jump);

function reloadPage() {
  document.location.reload(true);
};

