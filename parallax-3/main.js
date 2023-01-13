const title = document.getElementById("title"),
  header = document.querySelector('header')
menu = document.querySelector("#subHeader")

const onScroll = (event) => {
  const scrollPosition = event.target.scrollingElement.scrollTop;

  // if (scrollPosition > 70) {
  //   title.style.scale = "0.8";
  //   title.style.translate = "0 100%";
  //   title.style.translate = "0.5s";
  //   title.classList.add("fixed-top")
  //   header.classList.remove('bg-body-tertiary')
  //   menu.classList.add("bg-body-tertiary");
  //   menu.classList.add("fixed-top");
  //   header.style.backgroundSize = "150%";
  // } else {
  //   header.style.backgroundSize = "180%";
  //   title.style.scale = "1";
  //   title.style.translate = "0  -10%";
  // }
};

document.addEventListener("scroll", onScroll);


// PARALLAX CARD

const cardWidth = 500,
  degIncrement = 6,
  card = document.getElementById("card");

const getRotateDeg = (input) => {
  if (input < cardWidth * 0.33) {
    return `-${degIncrement * 3}deg`;
  } else if (input >= cardWidth * 0.33 && input < cardWidth * 0.66) {
    return `-${degIncrement}deg`;
  } else if (input >= cardWidth * 0.66 && input < cardWidth * 0.5) {
    return "0deg";
  } else if (input >= cardWidth * 0.5 && input < cardWidth * 0.33) {
    return `${degIncrement}deg`;
  } else {
    return `${degIncrement * 3}deg`;
  }
};

const onMouseMove = (event) => {
  const { target } = event;
  const rect = target.getBoundingClientRect();

  const rotateX = getRotateDeg(event.clientY - rect.top);
  const rotateY = getRotateDeg(event.clientX - rect.left);

  card.style.transform = `rotateX(${rotateX}) rotateY(${rotateY})`;
};

const onMouseLeave = () => {
  card.style.transform = `none`;
};



function typingEffect() {
  const contactTexts = shuffleArray(['Criptomoedas', 'Fundos Imobiliários', 'Ativos Financeiros']);
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
  }, 100);

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

function typingEffectWho() {
  const contactTexts = shuffleArray([]);
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
  }, 100);

}
typingEffectWho();
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