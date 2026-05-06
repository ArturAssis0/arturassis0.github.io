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

  // Cria o container unificado para mobile
  const menuUnificado = document.createElement("div");
  menuUnificado.id = "menu_mobile_unificado";

  // Coleta todos os links dos dois blocos, na ordem correta
  const todosOsLinks = [
    ...opcoes1.querySelectorAll("a"),
    ...opcoes2.querySelectorAll("a"),
  ];

  todosOsLinks.forEach(link => {
    const clone = link.cloneNode(true); // clona com texto e href
    menuUnificado.appendChild(clone);
  });

  // Insere o container unificado logo após o header-container
  const headerContainer = document.getElementById("header-container");
  headerContainer.insertAdjacentElement("afterend", menuUnificado);

  // Abre/fecha apenas o menu unificado no mobile
  menu.addEventListener("click", (e) => {
    e.stopPropagation();
    menuUnificado.classList.toggle("mostrar");
  });

});