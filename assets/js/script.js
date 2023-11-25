let words = [
  { front: "Fui/Estuve", back: "Was/Were" },
  { front: "Tuve", back: "Had" },
  { front: "Hice", back: "Did" },
  { front: "Dije", back: "Said" },
  { front: "Fui", back: "Went" },
  { front: "Obtuve", back: "Got" },
  { front: "Hice", back: "Made" },
  { front: "Supe/Conocí", back: "Knew" },
  { front: "Tomé", back: "Took" },
  { front: "Vi", back: "Saw" },
  { front: "Vine", back: "Came" },
  { front: "Pensé", back: "Thought" },
  { front: "Miré", back: "Looked" },
  { front: "Quise", back: "Wanted" },
  { front: "Di", back: "Gave" },
  { front: "Usé", back: "Used" },
  { front: "Encontré", back: "Found" },
  { front: "Dije", back: "Told" },
  { front: "Pregunté", back: "Asked" },
  { front: "Trabajé", back: "Worked" },
  { front: "Parecí", back: "Seemed" },
  { front: "Intenté", back: "Tried" },
  { front: "Llamé", back: "Called" },
  { front: "Necesité", back: "Needed" },
  { front: "Pregunté", back: "Asked" },
  { front: "Me Convertí", back: "Became" },
  { front: "Dejé/Salí", back: "Left" },
  { front: "Puse", back: "Put" },
  { front: "Signifiqué", back: "Meant" },
  { front: "Guardé/Mantuve", back: "Kept" },
  { front: "Permití/Dejé", back: "Let" },
  { front: "Comencé", back: "Began" },
  { front: "Parecí", back: "Seemed" },
  { front: "Ayudé", back: "Helped" },
  { front: "Hablé", back: "Talked" },
  { front: "Giré", back: "Turned" },
  { front: "Comencé", back: "Started" },
  { front: "Mostré", back: "Showed" },
  { front: "Oí", back: "Heard" },
  { front: "Jugué", back: "Played" },
  { front: "Corrí", back: "Ran" },
  { front: "Me Moví", back: "Moved" },
  { front: "Gusté", back: "Liked" },
  { front: "Viví", back: "Lived" },
  { front: "Creí", back: "Believed" },
  { front: "Sostuve", back: "Held" },
  { front: "Traje", back: "Brought" },
  { front: "Ocurrió", back: "Happened" },
  { front: "Escribí", back: "Wrote" },
  { front: "Proporcioné", back: "Provided" },
  { front: "Me Senté", back: "Sat" },
  { front: "Me Puse De Pie", back: "Stood" },
  { front: "Perdí", back: "Lost" },
  { front: "Pagué", back: "Paid" },
  { front: "Conocí", back: "Met" },
  { front: "Leí", back: "Read" },
  { front: "Compré", back: "Bought" },
  { front: "Dije", back: "Told" },
  { front: "Entendí", back: "Understood" },
  { front: "Enseñé", back: "Taught" },
  { front: "Vestí", back: "Wore" },
  { front: "Pasé", back: "Spent" },
  { front: "Guié", back: "Led" },
  { front: "Construí", back: "Built" },
  { front: "Crecí", back: "Grew" },
  { front: "Elegí", back: "Chose" },
  { front: "Caí", back: "Fell" },
  { front: "Romí", back: "Broke" },
  { front: "Envié", back: "Sent" },
  { front: "Hablé", back: "Spoke" },
  { front: "Escuché", back: "Heard" },
  { front: "Compré", back: "Bought" },
  { front: "Me Convertí", back: "Became" },
  { front: "Dejé/Salí", back: "Left" },
  { front: "Sentí", back: "Felt" },
  { front: "Conocí", back: "Met" },
  { front: "Pagé", back: "Paid" },
  { front: "Gané", back: "Won" },
  { front: "Perdí", back: "Lost" },
  { front: "Puse", back: "Put" },
  { front: "Leí", back: "Read" },
  { front: "Corté", back: "Cut" },
  { front: "Expandí", back: "Spread" },
  { front: "Golpeé", back: "Hit" },
  { front: "Envié", back: "Sent" },
  { front: "Construí", back: "Built" },
  { front: "Crecí", back: "Grew" },
  { front: "Elegí", back: "Chose" },
  { front: "Caí", back: "Fell" },
  { front: "Romí", back: "Broke" },
  { front: "Hablé", back: "Spoke" },
  { front: "Escuché", back: "Heard" },
  { front: "Compré", back: "Bought" },
  { front: "Me Convertí", back: "Became" },
  { front: "Dejé/Salí", back: "Left" },
  { front: "Sentí", back: "Felt" },
  { front: "Conocí", back: "Met" },
  { front: "Pagé", back: "Paid" },
  { front: "Gané", back: "Won" },
  { front: "Perdí", back: "Lost" },
];

let remainingWords = [...words]; // Copia de la lista original
let currentIndex = -1;
let wordsShown = 0;

function showRandomCard() {
  const container = document.getElementById("flashcard-container");

  if (remainingWords.length === 0) {
    // Si no quedan palabras, mostrar mensaje de felicitaciones y el botón Reiniciar
    container.innerHTML = "";
    const completionMessage = document.createElement("p");
    completionMessage.textContent =
      "¡Felicitaciones! Has completado la baraja de verbos.";
    container.appendChild(completionMessage);

    const restartButton = document.getElementById("restart-button");
    restartButton.style.display = "block";

    container.classList.add("complete");

    // Ocultar el botón de reinicio después de hacer clic en él
    restartButton.addEventListener("click", function () {
      restartGame();
    });

    return;
  }

  // Selecciona una palabra al azar de las palabras restantes
  const randomIndex = Math.floor(Math.random() * remainingWords.length);
  const selectedWord = remainingWords.splice(randomIndex, 1)[0];

  // Crea la carta y la agrega al contenedor
  const card = createCard(selectedWord.front, selectedWord.back);
  container.innerHTML = ""; // Limpiar el contenedor antes de agregar una nueva carta
  container.appendChild(card);

  // Actualiza el indicador de palabras mostradas
  wordsShown++;
  updateIndicators();
}

function restartGame() {
  // Reiniciar todas las variables y mostrar la primera tarjeta
  remainingWords = [...words];
  currentIndex = -1;
  wordsShown = 0;

  const container = document.getElementById("flashcard-container");
  const restartButton = document.getElementById("restart-button");

  // Limpiar el contenedor y ocultar el botón de reinicio
  container.innerHTML = "";
  restartButton.style.display = "none";

  // Restablecer clases y mostrar la primera tarjeta
  container.classList.remove("complete");
  showRandomCard();
}

function updateIndicators() {
  const shownIndicator = document.getElementById("shown-indicator");
  shownIndicator.textContent = `PALABRAS MOSTRADAS: ${wordsShown}`;

  const totalCardsIndicator = document.getElementById("total-cards");
  totalCardsIndicator.textContent = `TOTAL DE FLASHCARDS: ${words.length}`;
}

function showRandomCardAfterDelay() {
  setTimeout(() => {
    showRandomCard();
    const card = document.querySelector(".flashcard.clicked");
    if (card) {
      card.classList.remove("clicked");
    }
  }, 1500);
}

function createCard(frontText, backText) {
  const card = document.createElement("div");
  card.classList.add("flashcard");

  let isFlipped = false; // Variable para rastrear si la tarjeta está volteada

  card.addEventListener("click", function () {
    if (!isFlipped) {
      this.classList.add("clicked");
      showRandomCardAfterDelay();
      isFlipped = true; // Marcar la tarjeta como volteada
    }
  });

  const front = document.createElement("div");
  front.classList.add("front");
  front.innerHTML = frontText;

  const back = document.createElement("div");
  back.classList.add("back");
  back.innerHTML = backText;

  card.appendChild(front);
  card.appendChild(back);

  return card;
}

// Al cargar la página, mostrar la primera tarjeta
showRandomCard();
