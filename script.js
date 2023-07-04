function updateCountdown() {
  const endDate = new Date("2024-06-24 00:00:00").getTime();
  const now = new Date().getTime();
  const timeLeft = endDate - now;
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  document.getElementById("days").textContent = days
    .toString()
    .padStart(2, "0");
  document.getElementById("hours").textContent = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").textContent = seconds
    .toString()
    .padStart(2, "0");

  if (timeLeft <= 0) {
    clearInterval(countdownInterval);
    document.querySelector(".count-down").style.display = "none";
    document.querySelector(".title").textContent = "The time is up!";
  }
}
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

const carousel = document.querySelector(".ava");
const imgs = carousel.querySelectorAll(".image-author");
const imgWidth = imgs[0].clientWidth;

let currentImgIndex = 0;

function moveCarousel() {
  const nextImgIndex = (currentImgIndex + 1) % imgs.length;
  const prevImgIndex = (currentImgIndex - 1 + imgs.length) % imgs.length;

  imgs[currentImgIndex].classList.remove("active");
  imgs[nextImgIndex].classList.add("active");

  // Move images in a circle
  imgs[prevImgIndex].style.left = `-${imgWidth}px`;
  imgs[nextImgIndex].style.left = `${imgWidth}px`;

  setTimeout(() => {
    imgs[prevImgIndex].style.left = `${imgWidth}px`;
    imgs[currentImgIndex].style.left = `-${imgWidth}px`;

    currentImgIndex = nextImgIndex;

    setTimeout(() => {
      imgs[currentImgIndex].style.left = "0";
    }, 50);

    setTimeout(moveCarousel, 2000);
  }, 1000);
}

setTimeout(moveCarousel, 2000);

let currentIndex = 0;
const intervalTime = 2000;
let timer;

function moveToNext() {
  const carouselImages = document.querySelector(".list-image");
  const imageWidth = carouselImages.querySelector(".image").clientWidth;
  currentIndex = (currentIndex + 1) % carouselImages.childElementCount;
  const displacement = -currentIndex * imageWidth;
  carouselImages.style.transition = "transform 0.5s ease";
  carouselImages.style.transform = `translateX(${displacement}px)`;
}

function startAutoplay() {
  timer = setInterval(moveToNext, intervalTime);
}

function stopAutoplay() {
  clearInterval(timer);
}

startAutoplay();
