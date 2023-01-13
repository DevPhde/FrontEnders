let container = document.querySelector(".container");
let ring = document.querySelector(".ring-frame");
let disc = document.querySelector(".disc-frame");
let i = 1;
let num = 200;
let radius = 150;
let lim = 4;

if(window.screen.width <= 350){
  num = 150
}

for (i; i < lim; i++) {
  let span = document.createElement("span");
  let disk = document.createElement("span");
  span.setAttribute("class", "ring");
  disk.setAttribute("class", "disc");
  span.style.height = `${i * 10 + num}px`;
  span.style.width = `${i * 10 + num}px`;
  disk.style.animationDelay = `${i - 0.8}s`;
  ring.append(span);
  disc.append(disk);
}

function typingEffect() {
  const contactTexts = shuffleArray(['...']);
  const typedtext = document.getElementsByClassName("typedtext")[0];
  let removing = false;
  let idx = char = 0;

  setInterval(() => {

      if (char < contactTexts[idx].length) typedtext.innerHTML += contactTexts[idx][char];
      if (char == contactTexts[idx].length + 1) removing = true;
      if (removing) typedtext.innerHTML = typedtext.innerHTML.substring(-1, typedtext.innerHTML.length - 1);

      char++;

      if (typedtext.innerHTML.length === 0) {
          if (idx === contactTexts.length - 1) idx = 0
          else idx++;
          char = 0;
          removing = false;
      }
  }, 250);

}
typingEffect();
function shuffleArray(array) {
  let currentIndex = array.length,
      temporaryValue, randomIndex;
  while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  }
  return array;
}


// Define a função que será chamada a cada segundo
function redirectToHome() {
  window.location.href = 'https://devphde.github.io/FrontEnders/home.html'
}

// Define o timer para chamar a função a cada 1000 milissegundos (1 segundo)
setInterval(redirectToHome, 3000);
