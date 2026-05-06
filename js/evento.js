document.addEventListener('DOMContentLoaded', () => {

    const menu = document.getElementById("menu");
    const opcoes1 = document.getElementById("menu_opcoes_1");
    const opcoes2 = document.getElementById("menu_opcoes_2");

    if (!menu || !opcoes1 || !opcoes2) return;

    // ============================================================
    // MENU MOBILE UNIFICADO
    // ============================================================
    const menuUnificado = document.createElement("div");
    menuUnificado.id = "menu_mobile_unificado";

    const todosOsLinks = [
        ...opcoes1.querySelectorAll("a"),
        ...opcoes2.querySelectorAll("a"),
    ];

    todosOsLinks.forEach(link => {
        const clone = link.cloneNode(true);
        menuUnificado.appendChild(clone);
    });

    const headerContainer = document.getElementById("header-container");
    if (headerContainer) {
        headerContainer.insertAdjacentElement("afterend", menuUnificado);
    }

    menu.addEventListener("click", (e) => {
        e.stopPropagation();
        menuUnificado.classList.toggle("mostrar");
    });

    // ============================================================
    // ACCORDION — BOTÕES .opc_inf
    // ============================================================
    const botoes = document.querySelectorAll('.opc_inf');

    const informacoes = document.getElementById('inf');
    if (informacoes) {
        informacoes.classList.add('mostrar');
    }

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            const conteudo_aberto = botao.nextElementSibling;
            const abrir = conteudo_aberto.classList.contains('mostrar');

            if (!abrir) {
                conteudo_aberto.classList.add('mostrar');
            } else {
                conteudo_aberto.classList.remove('mostrar');
            }
        });
    });

});