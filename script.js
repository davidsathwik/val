const yesButton = document.querySelector("#yesButton");
const noButton = document.querySelector("#noButton");
const response = document.querySelector("#response");

const yesMessages = [
  "Yay! You just made my whole year! 💕",
  "Best answer ever. Can’t wait to celebrate with you! 💖",
  "Eeek! I’m the luckiest. 💘",
];

const noMessages = [
  "Let me try again… pretty please? 🥺",
  "Are you sure? I brought extra snacks. 🍓",
  "I’ll be right here waiting for a yes. 💗",
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
  response.textContent = "I’ll keep asking until it’s a yes. 💞";
});