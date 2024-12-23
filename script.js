const imageContainer = document.getElementById('images');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');

const images = document.querySelectorAll('#images img');

let index = 0;

let interval = setInterval(() => {
  index++;
  changeImg();
}, 3000)

function changeImg() {
  if (index > images.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = images.length - 1;
  }

  imageContainer.style.transform = `translateX(${-index * 500}px)`;
}

leftButton.addEventListener('click', () => {
  index--;
  changeImg();
  clearInterval(interval);
  interval = setInterval(() => {
    index++;
    changeImg();
  }, 3000)
})

rightButton.addEventListener('click', () => {
  index++;
  changeImg();
  clearInterval(interval);
  interval = setInterval(() => {
    index++;
    changeImg();
  }, 3000)
})