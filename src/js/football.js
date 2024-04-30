const field = document.getElementById('field');
const ball = document.getElementById('ball');

const center = ball.offsetWidth / 2;
let ballOn = true;

field.addEventListener('click', onFieldClick);

function onFieldClick(e) {
  if (ballOn) {
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
    ballOn = false;
    ball.style.left = `${mouseX - center}px`;
    ball.style.top = `${mouseY - center}px`;

    setTimeout(() => {
      ball.classList.remove('rotating');
      ballOn = true;
    }, 1000);
  }
}
