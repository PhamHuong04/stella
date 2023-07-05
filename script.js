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

let slideIndex = 2;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("image-author");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}



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
