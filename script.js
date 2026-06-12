const noBtn = document.getElementById("noBtn");
const container = document.getElementById("questionContainer");

const yesBtn = document.getElementById("yesBtn");
const resultContainer = document.getElementById("resultContainer");
const buttonsArea = document.querySelector(".buttons");

container.addEventListener("mousemove", (e) => {
  const btnRect = noBtn.getBoundingClientRect();
  const areaRect = buttonsArea.getBoundingClientRect();

  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const btnCenterX = btnRect.left + btnRect.width / 2;
  const btnCenterY = btnRect.top + btnRect.height / 2;

  let diffX = btnCenterX - mouseX;
  let diffY = btnCenterY - mouseY;

  const distance = Math.sqrt(diffX * diffX + diffY * diffY);

  if (distance < 120) {
    const force = 120 / Math.max(distance, 1);

    let moveX = diffX * force;
    let moveY = diffY * force;

    const maxX = areaRect.width / 2 - btnRect.width / 2;
    const maxY = areaRect.height / 2 - btnRect.height / 2;

    moveX = Math.max(-maxX, Math.min(maxX, moveX));
    moveY = Math.max(-maxY, Math.min(maxY, moveY));

    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
  }
});

yesBtn.addEventListener("click", () => {
  container.style.display = "none";
  resultContainer.style.display = "block";
});

container.addEventListener("touchmove", (e) => {
  const touch = e.touches[0];

  const fakeEvent = new MouseEvent("mousemove", {
    clientX: touch.clientX,
    clientY: touch.clientY
  });

  container.dispatchEvent(fakeEvent);
});
