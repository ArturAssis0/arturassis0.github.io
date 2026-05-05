document.addEventListener('DOMContentLoaded', () => {

  const menu = document.getElementById("menu");
  const opcoes1 = document.getElementById("menu_opcoes_1");
  const opcoes2 = document.getElementById("menu_opcoes_2");

  if (!menu || !opcoes1 || !opcoes2) return;

  menu.addEventListener("click", (e) => {
    e.stopPropagation();

    opcoes1.classList.toggle("mostrar");
    opcoes2.classList.toggle("mostrar");
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