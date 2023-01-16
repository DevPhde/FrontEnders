$(function () {
  function rescaleHome() {
    let body = $('body').parent().width();
    let div = document.getElementById('responsivity__div')
    let image = document.getElementById('image__')
    let sectionTicker = document.getElementById("sect__ticker")
    if (body < 700){
      div.classList.remove('row');
      div.classList.remove('row-cols-2');
      image.classList.add('visually-hidden')
    } else {
      div.classList.add('row');
      div.classList.add('row-cols-2');
      image.classList.remove('visually-hidden')
    }
    body < 315 ? sectionTicker.classList.add("mt-5") : sectionTicker.classList.remove('mt-5')
    if (body < 315) {
      
    }
  }
  rescaleHome()
  $(window).resize(function () {rescaleHome()});
})


// PARALLAX CARD

const cardWidth = 500,
  degIncrement = 6,
  card = document.getElementById("card");

const getRotateDeg = (input) => {
  if (input < cardWidth * 0.33) {
    return `-${degIncrement * 5}deg`;
  } else if (input >= cardWidth * 0.33 && input < cardWidth * 0.66) {
    return `-${degIncrement}deg`;
  } else if (input >= cardWidth * 0.66 && input < cardWidth * 0.5) {
    return "0deg";
  } else if (input >= cardWidth * 0.5 && input < cardWidth * 0.33) {
    return `${degIncrement}deg`;
  } else {
    return `${degIncrement * 5}deg`;
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

// AUTO TYPING

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