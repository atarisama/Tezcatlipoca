document.getElementById("btn_menu").addEventListener("click", mostrar_menu);
document.getElementById("back_menu").addEventListener("click", ocultar_menu)
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

nav = document.getElementById("nav");

backgound_menu = document.getElementById("back_menu");

function mostrar_menu(){
    nav.style.right = "0px";
    backgound_menu.style.display = "block";
}

function ocultar_menu(){
    nav.style.right = "-250px";
    backgound_menu.style.display = "none";
}

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');

let currentIndex = 0;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

showImage(currentIndex);

// Configuración de la fecha objetivo
const targetDate = new Date("October 31, 2025 00:00:00").getTime();

// Actualizar la cuenta regresiva cada segundo
const countdown = setInterval(() => {
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  if (timeRemaining <= 0) {
    clearInterval(countdown);

    // Cambiar el contenido al finalizar el tiempo
    const timeReleaseElement = document.querySelector(".timeRelese");
    timeReleaseElement.innerHTML = `
      <h3>‎ ‎  Ya a la venta  ‎ ‎ </h3>
    `;
    const timeReleaseElement2 = document.querySelector(".hero2 .timeRelese");
    timeReleaseElement2.innerHTML = `
      <h3>‎ ‎  Ya a la venta  ‎ ‎ </h3>
    `;
    return;
  }

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Actualizar los elementos HTML
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  document.getElementById("days2").textContent = days;
  document.getElementById("hours2").textContent = hours;
  document.getElementById("minutes2").textContent = minutes;
  document.getElementById("seconds2").textContent = seconds;
}, 1000);