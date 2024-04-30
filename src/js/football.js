const field = document.getElementById('field');
const ball = document.getElementById('ball');

const center = ball.offsetWidth / 2;
let ballSpin = false;

field.addEventListener('click', onFieldClick);

function onFieldClick(e) {
  if (!ballSpin) {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;

    mouseX =
      mouseX > field.offsetWidth - ball.offsetWidth + center
        ? field.offsetWidth - ball.offsetWidth + center
        : mouseX;
    mouseY =
      mouseY > field.offsetHeight - ball.offsetHeight + center
        ? field.offsetHeight - ball.offsetHeight + center
        : mouseY;

    mouseX = mouseX < center ? center : mouseX;
    mouseY = mouseY < center ? center : mouseY;

    ball.classList.add('rotating');
    ballSpin = true;
    ball.style.left = `${mouseX - center}px`;
    ball.style.top = `${mouseY - center}px`;

    setTimeout(() => {
      ball.classList.remove('rotating');
      ballSpin = false;
    }, 1000);
  }
}
