const yesButton = document.querySelector("#yesButton");
const noButton = document.querySelector("#noButton");
const response = document.querySelector("#response");

const yesMessages = [
  "You're my whole entire soul 💕",
  "my soul longs for your happiness 💖",
  "you make me happy with every breathe i take💘",
];

const noMessages = [
  "I LOVE YOU BITCH 🥺",
  "I AINT EVER STOP LOVING YOU",
  "BITCH💗",
];

const randomMessage = (messages) => messages[Math.floor(Math.random() * messages.length)];

yesButton.addEventListener("click", () => {
  response.textContent = randomMessage(yesMessages);
  response.classList.add("yes-answer");
});

noButton.addEventListener("mouseenter", () => {
  const shiftX = Math.floor(Math.random() * 120) - 60;
  const shiftY = Math.floor(Math.random() * 80) - 40;
  noButton.style.transform = `translate(${shiftX}px, ${shiftY}px)`;
  response.textContent = randomMessage(noMessages);
});

noButton.addEventListener("click", () => {
  response.textContent = "ok kys 💞";
});