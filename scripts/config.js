function openPlayerConfig(event) {
  editedPlayer = event.target.dataset.playerid;

  playerConfigOverlayElemnt.style.display = "block";
  backdropElemnt.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElemnt.style.display = "none";
  backdropElemnt.style.display = "none";
  formELemnt.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
  inputForErase.value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playername").trim();

  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "Please enter a valid name";
    return;
  }

  const updatedplayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedplayerDataElement.children[1].textContent = enteredPlayerName;
  players[editedPlayer - 1].name = enteredPlayerName;
  closePlayerConfig();
}
