const noBtn = document.getElementById("noBtn");
const container = document.getElementById("questionContainer");

const yesBtn = document.getElementById("yesBtn");

container.addEventListener("mousemove", (e) => {
  const btnRect = noBtn.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const btnCenterX = btnRect.left + btnRect.width / 2;
  const btnCenterY = btnRect.top + btnRect.height / 2;

  let diffX = btnCenterX - mouseX;
  let diffY = btnCenterY - mouseY;

  const distance = Math.sqrt(diffX * diffX + diffY * diffY);


  if (distance < 120) {

    const force = 120 / distance;

    let moveX = diffX * force;
    let moveY = diffY * force;

    const maxX = containerRect.width / 2 - btnRect.width / 2;
    const maxY = containerRect.height / 2 - btnRect.height / 2;

    moveX = Math.max(-maxX, Math.min(maxX, moveX));
    moveY = Math.max(-maxY, Math.min(maxY, moveY));

    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
  }
});

yesBtn.addEventListener("click", () => {
  window.location.href = "accepted.html";
});

document.addEventListener("dragstart", (e) => {
  e.preventDefault();
});

document.addEventListener("selectstart", (e) => {
  e.preventDefault();
});
