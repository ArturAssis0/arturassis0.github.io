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
  const opcoes1 = document.getElementById("menu_opcoes_1");
  const opcoes2 = document.getElementById("menu_opcoes_2");

  if (!menu || !opcoes1 || !opcoes2) return;

  menu.addEventListener("click", (e) => {
    e.stopPropagation();

    opcoes1.classList.toggle("mostrar");
    opcoes2.classList.toggle("mostrar");
  });
  
});