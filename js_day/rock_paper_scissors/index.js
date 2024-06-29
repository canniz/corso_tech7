const initialState = `
  <div class="container-moves">
    <button class="move" data-move="paper">
      <span class="emoji">🖐️</span>
      <span class="label">Carta</span>
    </button>
    <button class="move" data-move="scissors">
      <span class="emoji">✌️</span>
      <span class="label">Forbice</span>
    </button>
    <button class="move" data-move="rock">
      <span class="emoji">✊</span>
      <span class="label">Sasso</span>
    </button>
  </div>
  <button type="button" disabled id="button-confirm-move">
    Conferma selezione
  </button>
`;

const gameContainer = document.getElementById("game-container");

gameContainer.innerHTML = initialState;

let selectedMove;

const possibleMoves = ["rock", "paper", "scissors"];

const moveElements = document.querySelectorAll(".move");

moveElements.forEach((element) => {
  element.addEventListener("click", (event) => {
    const move = event.currentTarget.dataset.move;
    selectedMove = move;

    element.classList.add("active");

    moveElements.forEach((el) => {
      if (el.dataset.move !== move) {
        el.classList.remove("active");
      }
    });

    const buttonConfirmMove = document.getElementById("button-confirm-move");

    if (buttonConfirmMove.disabled) {
      buttonConfirmMove.disabled = false;
    }

    buttonConfirmMove.addEventListener("click", (event) => {
      gameContainer.innerHTML = `
    <div class="container-loader">
      <p class="text">🤖 Calcolando la migliore mossa...</p>
      <p class="text">Potrei non essere molto intelligente 😭</p>
      <svg class="spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="spinner-circle" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="spinner-path" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </div>
  `;

      const randomMove =
        possibleMoves[Math.floor(Math.random() * possibleMoves.length)];

      let result;

      console.log(selectedMove);
      console.log(randomMove);

      if (selectedMove === randomMove) {
        result = "draw";
      } else if (
        (selectedMove === "paper" && randomMove === "rock") ||
        (selectedMove === "scissors" && randomMove === "paper") ||
        (selectedMove === "rock" && randomMove === "scissors")
      ) {
        result = "win";
      } else {
        result = "lose";
      }

      setTimeout(() => {
        gameContainer.innerHTML = `
        <div class="container-result">
          <p class="text" id="result"></p>
          <button type="button" id="button-restart">
            Fatti un altra partita
          </button>
        </div>
      `;

        if (result === "win") {
          document.querySelector("#result").innerHTML = "👏 Bravo! Hai vinto";
        } else if (result === "lose") {
          document.querySelector("#result").innerHTML =
            "💀 Come hai fatto a perdere contro un bot?";
        } else {
          document.querySelector("#result").innerHTML =
            "🤔 Non so cosa dire, hai pareggiato";
        }

        document
          .querySelector("#button-restart")
          .addEventListener("click", (event) => {
            location.reload();
          });
      }, 3000);
    });
  });
});
