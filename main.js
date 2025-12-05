document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".carrossel", {
      loop: true,
      autoplay: {
          delay: 5000,
          disableOnInteraction: false,
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true, 
      },
      grabCursor: true,
  });

  const menu = document.getElementById("menu");
  const opcoes = document.getElementById("menu_opcoes");


  menu.addEventListener("click", (e) => {
      e.stopPropagation(); 
      opcoes.classList.toggle("mostrar");
  });


  document.addEventListener("click", (e) => {
      if (!menu.contains(e.target) && !opcoes.contains(e.target)) {
          opcoes.classList.remove("mostrar"); 
      }
  });


  opcoes.addEventListener("click", (e) => {
      e.stopPropagation(); 
  });


  const carrossel = document.querySelector(".carrossel");
  carrossel.addEventListener("click", () => {
      opcoes.classList.remove("mostrar"); 
  });
});