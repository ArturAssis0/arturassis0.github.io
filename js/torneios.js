/* ../js/torneios.js */
document.addEventListener('DOMContentLoaded', () => {

  // normaliza strings (remove acento e espaços)
  const norm = s => (s || '').toString().trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const menu = document.getElementById('menu');
  const opcoes = document.getElementById('menu_opcoes');
  const botoesFiltro = Array.from(document.querySelectorAll('.filtro'));
  const cards = Array.from(document.querySelectorAll('.card_evento2'));
  const meses = Array.from(document.querySelectorAll('.mes_eventos'));
  const grids = Array.from(document.querySelectorAll('.grid_eventos')); // agora cada mês tem 1 grid

  // segurança
  if (!menu || !opcoes) console.warn("menu ou menu_opcoes não encontrados.");

  // menu hamburguer
  if (menu && opcoes) {
    menu.addEventListener('click', (e) => {
      e.stopPropagation();
      opcoes.classList.toggle('mostrar');
    });
    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && !opcoes.contains(e.target))
        opcoes.classList.remove('mostrar');
    });
    opcoes.addEventListener('click', e => e.stopPropagation());
  }

  // ===============================================================
  // NOVA FUNÇÃO DE FILTRO + REORGANIZAÇÃO DOS CARDS
  // ===============================================================
  function aplicarFiltroTexto(textoFiltro) {
    const filtroNorm = norm(textoFiltro);

    // 1) Mostrar/ocultar cards
    cards.forEach(card => {
      const categoria = norm(card.dataset.cat || card.querySelector('.categoria')?.textContent || '');

      const mostrar =
        filtroNorm === norm('Todos os Eventos') ||
        filtroNorm === '' ||
        categoria === filtroNorm;

      card.style.display = mostrar ? 'flex' : 'none';
    });

    // 2) Reorganizar os cards dentro de cada grid para eliminar buracos
    grids.forEach(grid => {

      const all = Array.from(grid.querySelectorAll('.card_evento2'));
      const visiveis = all.filter(c => c.style.display !== 'none');
      const ocultos = all.filter(c => c.style.display === 'none');

      // limpa a ordem visual (reappend)
      visiveis.forEach(c => grid.appendChild(c));
      ocultos.forEach(c => grid.appendChild(c));

      // Mostra grid se houver ao menos 1 card visível
      grid.style.display = visiveis.length ? "grid" : "none";
    });

    // 3) Esconder mês inteiro se a grid dele estiver vazia
    meses.forEach(mes => {
      const grid = mes.querySelector('.grid_eventos');
      const visibleCards = grid.querySelectorAll('.card_evento2:not([style*="display: none"])');

      mes.style.display = visibleCards.length ? '' : 'none';
    });
  }

  // ===============================================================
  // Inicialização do filtro
  // ===============================================================
  const botaoAtivoInicial = botoesFiltro.find(b => b.classList.contains('ativo')) || botoesFiltro[0];

  botoesFiltro.forEach(b => b.classList.remove('ativo'));
  botaoAtivoInicial.classList.add('ativo');

  aplicarFiltroTexto(botaoAtivoInicial.textContent.trim());

  // eventos dos botões
  botoesFiltro.forEach(botao => {
    botao.addEventListener('click', () => {
      botoesFiltro.forEach(b => b.classList.remove('ativo'));
      botao.classList.add('ativo');
      aplicarFiltroTexto(botao.textContent.trim());
    });

    botao.addEventListener('keyup', e => {
      if (e.key === 'Enter' || e.key === ' ')
        botao.click();
    });
  });

});
