const header = document.querySelector("header");
const containerHeader = document.querySelector(".container-header");
const mobileBtn = document.querySelectorAll(".btn-mobile");
const navMenu = document.querySelector(".nav-menu");
const overlay = document.querySelector(".overlay");

/* função para deixar o menu fixo */
function fixedMenu() {
  if (scrollY > 100) {
    header.classList.add("active");
    containerHeader.classList.add("active");
  } else {
    header.classList.remove("active");
    containerHeader.classList.remove("active");
  }
}
window.addEventListener("scroll", fixedMenu);

/* função para fechar e abrir menu mobile */
function openAndCloseMenuMobile(btn) {
  btn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    overlay.classList.toggle("active");
    btn.classList.toggle("active");
    mobileBtn.forEach(function (btn2) {
      if (btn !== btn2) {
        btn2.classList.toggle("active");
      }
    });
  });
}
mobileBtn.forEach(openAndCloseMenuMobile);

//função para ao clicar fora do menu, ou seja, no "overlay", fechar o menu
function closeOffScreen() {
  navMenu.classList.remove("active");
  overlay.classList.remove("active");
  mobileBtn.forEach(function (btn) {
    btn.classList.remove("active");
  });
}
overlay.addEventListener("click", closeOffScreen);

/* Função botão fixo de voltar ao início */

const backStart = document.querySelector(".backStart");

window.addEventListener("scroll", function () {
  if (window.scrollY > 1000) {
    backStart.classList.add("active");
  } else {
    backStart.classList.remove("active");
  }
});

/* função para desativar a class "active de acordo a dimensão da tela*/
window.addEventListener("resize", function () {
  if (window.innerWidth > 900) {
    overlay.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

/* funções do banner para alterar os artistas conforme o dia das atrações */

const day1 = document.querySelectorAll(".cointainer-programing-2 .day1");
const selectDay1 = document.querySelector(".selectDay1");
const day2 = document.querySelectorAll(".cointainer-programing-2 .day2");
const selectDay2 = document.querySelector(".selectDay2");
const day3 = document.querySelectorAll(".cointainer-programing-2 .day3");
const selectDay3 = document.querySelector(".selectDay3");

const selectDay = document.querySelectorAll(".date-programing");

selectDay1.addEventListener("click", function () {
  day1.forEach(function (el) {
    el.style.setProperty("display", "grid");
  });
  selectDay1.style.setProperty("color", "black");
  selectDay1.style.setProperty("border-bottom", "4px solid black");

  day2.forEach(function (el) {
    el.style.setProperty("display", "none");
  });
  selectDay2.style.setProperty("color", "#A9A9AC");
  selectDay2.style.setProperty("border-bottom", "4px solid #A9A9AC");

  day3.forEach(function (el) {
    el.style.setProperty("display", "none");
  });
  selectDay3.style.setProperty("color", "#A9A9AC");
  selectDay3.style.setProperty("border-bottom", "4px solid #A9A9AC");
});

selectDay2.addEventListener("click", function () {
  day1.forEach(function (el) {
    el.style.setProperty("display", "none");
  });
  selectDay1.style.setProperty("color", "#A9A9AC");
  selectDay1.style.setProperty("border-bottom", "4px solid #A9A9AC");

  day2.forEach(function (el) {
    el.style.setProperty("display", "grid");
  });
  selectDay2.style.setProperty("color", "black");
  selectDay2.style.setProperty("border-bottom", "4px solid black");

  day3.forEach(function (el) {
    el.style.setProperty("display", "none");
  });
  selectDay3.style.setProperty("color", "#A9A9AC");
  selectDay3.style.setProperty("border-bottom", "4px solid #A9A9AC");
});

selectDay3.addEventListener("click", function () {
  day1.forEach(function (el) {
    el.style.setProperty("display", "none");
  });
  selectDay1.style.setProperty("color", "#A9A9AC");
  selectDay1.style.setProperty("border-bottom", "4px solid #A9A9AC");

  day2.forEach(function (el) {
    el.style.setProperty("display", "none");
  });
  selectDay2.style.setProperty("color", "#A9A9AC");
  selectDay2.style.setProperty("border-bottom", "4px solid #A9A9AC");

  day3.forEach(function (el) {
    el.style.setProperty("display", "grid");
  });
  selectDay3.style.setProperty("color", "black");
  selectDay3.style.setProperty("border-bottom", "4px solid black");
});

/* -------------------------------carrosel relatos ------------------------------- */

const relatos = document.querySelectorAll(".reports-card");
const arrowRight = document.querySelector(".arrow-right");
const arrowLeft = document.querySelector(".arrow-left");

let carroselRelatosIndex = 0;

function nextReport() {
  if (carroselRelatosIndex === relatos.length - 1) {
    carroselRelatosIndex = 0;
  } else {
    carroselRelatosIndex++;
  }
  relatos.forEach(function (element) {
    element.classList.remove("active");
  });
  relatos[carroselRelatosIndex].classList.add("active");
}

arrowRight.addEventListener("click", nextReport);

setInterval(nextReport, 5000);

arrowLeft.addEventListener("click", function () {
  if (carroselRelatosIndex === 0) {
    carroselRelatosIndex = relatos.length - 1;
  } else {
    carroselRelatosIndex--;
  }

  relatos.forEach(function (element) {
    element.classList.remove("active");
  });
  relatos[carroselRelatosIndex].classList.add("active");
  console.log(carroselRelatosIndex);
});
