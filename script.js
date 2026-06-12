const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const container = document.getElementById("questionContainer");
const resultContainer = document.getElementById("resultContainer");

function moveNoButton() {
  const containerRect = container.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = containerRect.width - btnRect.width - 20;
  const maxY = containerRect.height - btnRect.height - 20;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
  noBtn.style.right = "auto";
  noBtn.style.transform = "none";
}

noBtn.addEventListener("mouseover", moveNoButton);

noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
}, { passive: false });

noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNoButton();
});

yesBtn.addEventListener("click", () => {
  container.style.display = "none";
  resultContainer.style.display = "block";
});
