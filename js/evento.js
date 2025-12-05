document.addEventListener('DOMContentLoaded', () => {

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

  const botoes = document.querySelectorAll('.opc_inf');

  const informacoes = document.getElementById('inf')
  informacoes.classList.add('mostrar')

  botoes.forEach(botao => {
    botao.addEventListener('click', () => {
      const conteudo_aberto = botao.nextElementSibling;
      const abrir = conteudo_aberto.classList.contains('mostrar');
      

      if (!abrir) {
        conteudo_aberto.classList.add('mostrar');
      }else{
        conteudo_aberto.classList.remove('mostrar')
      }



    });
  });
});