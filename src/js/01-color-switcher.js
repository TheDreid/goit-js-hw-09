const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let intervalId;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function startChangingBgColor() {
  startBtn.disabled = true; // Делаем кнопку «Start» неактивной
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopChangingBgColor() {
  startBtn.disabled = false; // Делаем кнопку «Start» активной
  clearInterval(intervalId);
  document.body.style.backgroundColor = ''; // Возвращаем исходный цвет фона
}

startBtn.addEventListener('click', startChangingBgColor);
stopBtn.addEventListener('click', stopChangingBgColor);
