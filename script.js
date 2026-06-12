const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const container = document.getElementById("questionContainer");
const resultContainer = document.getElementById("resultContainer");

function moveNoButton(clientX, clientY) {
  const btnRect = noBtn.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  const btnCenterX = btnRect.left + btnRect.width / 2;
  const btnCenterY = btnRect.top + btnRect.height / 2;

  let diffX = btnCenterX - clientX;
  let diffY = btnCenterY - clientY;

  const distance = Math.sqrt(diffX * diffX + diffY * diffY);

  if (distance < 120) {
    const force = 120 / Math.max(distance, 1);

    let moveX = diffX * force;
    let moveY = diffY * force;

    const maxX = containerRect.width / 2 - btnRect.width / 2;
    const maxY = containerRect.height / 2 - btnRect.height / 2;

    moveX = Math.max(-maxX, Math.min(maxX, moveX));
    moveY = Math.max(-maxY, Math.min(maxY, moveY));

    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
  }
}

container.addEventListener("mousemove", (e) => {
  moveNoButton(e.clientX, e.clientY);
});

container.addEventListener(
  "touchmove",
  (e) => {
    e.preventDefault();

    const touch = e.touches[0];
    moveNoButton(touch.clientX, touch.clientY);
  },
  { passive: false }
);

yesBtn.addEventListener("click", () => {
  container.style.display = "none";
  resultContainer.style.display = "block";
});
