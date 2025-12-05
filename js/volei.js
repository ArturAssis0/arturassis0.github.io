document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");
    const opcoes = document.getElementById("menu_opcoes");
    const containerEscolas = document.getElementById("escolas");

    if (!menu || !opcoes || !containerEscolas) {
        console.warn("Elemento(s) faltando: verifique ids 'menu', 'menu_opcoes' e 'escolas'");
        return;
    }

    // ======== MENU RESPONSIVO ========
    menu.addEventListener("click", (e) => {
        e.stopPropagation();
        opcoes.classList.toggle("mostrar");
    });

    document.addEventListener("click", (e) => {
        if (!menu.contains(e.target) && !opcoes.contains(e.target)) {
            opcoes.classList.remove("mostrar");
        }
    });

    opcoes.addEventListener("click", (e) => e.stopPropagation());

    // ============================================================
    // ==========   BASE DE DADOS COMPLETA DAS ESCOLAS   ==========
    // ============================================================
    const escolas = {
        // =======================================================
        // 1 — SUPREMO
        // =======================================================
        item_1: {
            nome: "ESCOLA DE VÔLEI SUPREMO",
            descricao: `
A Escola de Vôlei Supremo está inserida em um dos Colégios da rede particular mais tradicionais de Contagem.
O COLÉGIO SUPREMO possui uma estrutura fantástica e uma linda história de mais de 29 anos de Excelência de Ensino.

A parceria, iniciada em 2019, tem como objetivo ensinar o VÔLEI de forma dinâmica e lúdica no ambiente escolar,
proporcionando aos alunos um espaço seguro, acolhedor e ideal para o aprendizado e novas amizades.
            `,

            nome2: "DIAS E HORÁRIOS",

            horarios1Titulo: "TURNO MANHÃ – 1 DIA NA SEMANA",
            horarios1Informacoes: "5ª FEIRA • 11H30 ÀS 12H20 – SUB 11 | 13",

            horarios2Titulo: "TURNO TARDE – 2 DIAS NA SEMANA",
            horarios2Informacoes: "4ª E 6ª FEIRA • 17H30 ÀS 18H20 – SUB 08 | 10 | 12",

            imagem: "img/img_volei_supremo.jpeg",
        },

        // =======================================================
        // 2 — KALIL
        // =======================================================
        item_2: {
            nome: "ESCOLA DE VÔLEI KALIL",
            descricao: `
A Escola de Vôlei Elizabeth Kalil está inserida em um dos Colégios particulares mais tradicionais de Contagem.
O INSTITUTO ELIZABETH KALIL possui uma excelente estrutura e mais de 50 anos de história dedicada à educação.

A parceria, iniciada em 2023, tem como objetivo ensinar o VÔLEI de forma dinâmica e lúdica,
sempre garantindo segurança, acolhimento e estímulo ao aprendizado.
            `,

            nome2: "DIAS E HORÁRIOS",

            horarios1Titulo: "TURNO MANHÃ – 1 DIA NA SEMANA",
            horarios1Informacoes: "5ª FEIRA • 11H40 ÀS 12H30 – SUB 11 | 13",

            horarios2Titulo: "TURNO TARDE – 2 DIAS NA SEMANA",
            horarios2Informacoes: "2ª E 4ª FEIRA • 17H30 ÀS 18H20 – SUB 08 | 10 | 12",

            imagem: "img/img_volei_kalil.jpeg",
        },

        // =======================================================
        // 3 — CONSTRUIR +
        // =======================================================
        item_3: {
            nome: "ESCOLA DE VÔLEI CONSTRUIR +",
            descricao: `
A Escola de Vôlei Construir+ está inserida em um dos Colégios da rede particular mais tradicionais de Contagem.
O COLÉGIO CONSTRUIR+ possui uma excelente estrutura e uma história marcada pela Excelência de Ensino.

A parceria, iniciada em 2024, tem como objetivo ensinar VÔLEI de forma dinâmica e divertida,
garantindo aos alunos um ambiente seguro, acolhedor e inspirador.
            `,

            nome2: "DIAS E HORÁRIOS",

            horarios1Titulo: "TURNO MANHÃ – (SEM TURMAS)",
            horarios1Informacoes: "Nenhuma turma disponível no período da manhã.",

            horarios2Titulo: "TURNO TARDE – 2 DIAS NA SEMANA",
            horarios2Informacoes: "3ª E 5ª FEIRA • 17H40 ÀS 18H30 – SUB 11 | 13",

            imagem: "img/img_volei_construir.jpeg",
        },

        // =======================================================
        // 4 — CRESCER
        // =======================================================
        item_4: {
            nome: "ESCOLA DE ESPORTES CRESCER",
            descricao: `
A Escola de Esportes Crescer está inserida em um dos Colégios particulares mais tradicionais de Contagem.
O COLÉGIO CRESCER CONTAGEM possui excelente estrutura e uma reconhecida história de Excelência de Ensino.

A parceria, iniciada em 2025, promove o ensino do VÔLEI de forma lúdica, dinâmica e segura,
proporcionando aos alunos um ambiente acolhedor e ideal para o aprendizado.
            `,

            nome2: "DIAS E HORÁRIOS",

            horarios1Titulo: "TURNO MANHÃ – 2 DIAS NA SEMANA",
            horarios1Informacoes: "2ª E 4ª FEIRA • 11H40 ÀS 12H30 – SUB 11 | 13",

            horarios2Titulo: "TURNO TARDE – 2 DIAS NA SEMANA",
            horarios2Informacoes: "3ª E 5ª FEIRA • 17H40 ÀS 18H30 – SUB 08 | 10 | 12",

            imagem: "img/img_volei_crescer.jpeg",
        },
    };

    // ============================================================
    // ========== FUNÇÃO DE EXIBIR INFORMAÇÕES ====================
    // ============================================================

    let infoSection = document.getElementById("info_escola");
    if (!infoSection) {
        infoSection = document.createElement("div");
        infoSection.id = "info_escola";
        infoSection.className = "info-escola";
        infoSection.style.display = "none";
        containerEscolas.parentNode.insertBefore(infoSection, containerEscolas.nextSibling);
    }

    const itens = document.querySelectorAll(".iten_escola");

    itens.forEach(item => {
        item.addEventListener("click", () => {
            const dados = escolas[item.id];

            infoSection.innerHTML = `
                <div class="info-conteudo">
                    <div class="info-texto">
                        <h2>${dados.nome}</h2>
                        <p>${dados.descricao}</p>

                        <h2>${dados.nome2}</h2>

                        <h3>${dados.horarios1Titulo}</h3>
                        <p>${dados.horarios1Informacoes}</p>

                        <h3>${dados.horarios2Titulo}</h3>
                        <p>${dados.horarios2Informacoes}</p>
                    </div>

                    <div class="info-imagem" style="background-image: url(${dados.imagem});"></div>
                </div>
            `;

            infoSection.style.display = "block";

            const bloco = infoSection.querySelector(".info-conteudo");
            setTimeout(() => bloco.classList.add("ativo"), 20);

            if (window.innerWidth <= 1068) {
                infoSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
});
