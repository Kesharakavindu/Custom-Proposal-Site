const noBtn = document.getElementById("noBtn");
const container = document.getElementById("questionContainer");

const yesBtn = document.getElementById("yesBtn");
const resultContainer = document.getElementById("resultContainer");

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

  // mouse eka langa awoth witharai
  if (distance < 120) {
    // normalize (direction math)
    const force = 120 / distance;

    let moveX = diffX * force;
    let moveY = diffY * force;

    // limit container athule thiyanna
    const maxX = containerRect.width / 2 - btnRect.width / 2;
    const maxY = containerRect.height / 2 - btnRect.height / 2;

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
