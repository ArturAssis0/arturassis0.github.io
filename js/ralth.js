document.addEventListener("DOMContentLoaded", () => {

    // elementos opcionais
    const items_ralth = document.getElementById("items_ralth");

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
    // BASE DE DADOS
    // ============================================================
    const informacoes = {
        item_1: {
            titulo: "FUTSAL",
            turmas: [
                {
                    titulo: "Turmas 01 - Manhã - 2ª e 6ª feiras",
                    horarios: [
                        "08h30 às 09h30 - Nível Iniciação",
                        "4ª feiras: 09h às 10h00"
                    ]
                },
                {
                    titulo: "Turma 02 - Tarde - 2ª e 4ª feiras",
                    horarios: ["17h40 às 18h30 - Nível Iniciação"]
                },
                {
                    titulo: "Turma 03 - Noite - 2ª e 4ª feiras",
                    horarios: ["18h30 às 19h30 - Nível Intermediário"]
                },
                {
                    titulo: "Turma 04 - Noite - 2ª, 4ª e 6ª feiras",
                    horarios: ["19h30 às 20h30 - Nível Avançado"]
                },
                {
                    titulo: "Turma 05 - Noite",
                    horarios: [
                        "5ª feira: 19h00 às 20h00",
                        "6ª feiras: 18h30 às 19h30"
                    ]
                },
                {
                    titulo: "Turma 06 - Tarde",
                    horarios: ["6ª feiras: 17h40 às 18h30 - Infantil"]
                }
            ],
            informacoes: [
                "Personal soccer: Agende seu horário",
                "MAIORES INFORMAÇÕES - 31 98813-7766",
                "Entre em contato e saiba mais sobre valores, eventos, concursos e torneios!",
                "MATRÍCULAS - 31 98288-7389",
                "Garanta sua vaga!"
            ]
        },

        item_2: {
            titulo: "VÔLEI",
            turmas: [
                {
                    titulo: "Turma Noite - 3ª e 5ª feiras",
                    horarios: ["18h20 às 19h10"]
                }
            ],
            informacoes: [
                "MAIORES INFORMAÇÕES - 31 98813-7766",
                "Saiba mais sobre valores, eventos e torneios!",
                "MATRÍCULAS - 31 98288-7389",
                "Garanta sua vaga!"
            ]
        },

        item_3: {
            titulo: "Lanchonete",
            subtitulo: "Uma pausa gostosa para recarregar as energias entre uma partida e outra.",
            item_lista_1: "Açaí",
            item_lista_2: "Salgados",
            item_lista_3: "Sucos",
            item_lista_4: "Espetinhos",
            item_lista_5: "Refrigerantes",
            item_lista_6: "E muito mais!",
            informacao1: "Consulte horários de funcionamento e preços.",
            imagem: "/img/img_acai.jpeg"
        }
    };

    // ============================================================
    // CONTAINER DE INFORMAÇÕES
    // ============================================================
    let infoSection = document.getElementById("info_escola");
    if (!infoSection) {
        infoSection = document.createElement("div");
        infoSection.id = "info_escola";
        infoSection.className = "info-escola";
        infoSection.hidden = true;

        if (items_ralth) {
            items_ralth.parentNode.insertBefore(infoSection, items_ralth.nextSibling);
        } else {
            document.body.appendChild(infoSection);
            console.warn("'items_ralth' não encontrado. info_escola anexado ao body.");
        }
    }

    if (!items_ralth) {
        console.warn("'items_ralth' não encontrado — não foi possível habilitar os cliques.");
        return;
    }

    const itens = document.querySelectorAll(".item-ralth");
    if (!itens.length) {
        console.warn("Nenhum .item-ralth encontrado.");
        return;
    }

    const fecharInformacoes = () => {
        infoSection.hidden = true;
        itens.forEach(item => {
            item.setAttribute("aria-expanded", "false");
            item.classList.remove("selecionado");
        });
    };

    // ============================================================
    // EVENTO DE CLICK PARA ITENS
    // ============================================================
    itens.forEach(item => {
        item.addEventListener("click", () => {
            const dados = informacoes[item.id];
            if (!dados) {
                console.warn(`Nenhuma informação cadastrada para ${item.id}.`);
                return;
            }

            itens.forEach(outroItem => {
                const selecionado = outroItem === item;
                outroItem.setAttribute("aria-expanded", String(selecionado));
                outroItem.classList.toggle("selecionado", selecionado);
            });

            let html = "";

            if (item.id === "item_3") {
                html = `
<div class="info-conteudo lanchonete-conteudo">
    <div class="lanchonete-texto">
        <span class="lanchonete-sobretitulo"><i class="fa-solid fa-store" aria-hidden="true"></i> Um intervalo com sabor</span>
        <h2>${dados.titulo}</h2>
        <p class="lanchonete-descricao">${dados.subtitulo || ''}</p>
        <h3>Opções para aproveitar</h3>
        <ul class="lanchonete-opcoes">
            ${Object.keys(dados)
                .filter(chave => /^item_lista_\d+$/.test(chave))
                .sort((a, b) => Number(a.slice(11)) - Number(b.slice(11)))
                .map(chave => `<li><i class="fa-solid fa-check" aria-hidden="true"></i>${dados[chave]}</li>`)
                .join("")}
        </ul>
        <p class="lanchonete-aviso"><i class="fa-regular fa-clock" aria-hidden="true"></i>${dados.informacao1 || ''}</p>
    </div>
    <img class="lanchonete-imagem" src="${dados.imagem}" alt="Tigela de açaí com banana e granola">
</div>
                `;
            } else {
                html = `
<div class="info-conteudo">
    <div class="ralth-info-texto">
        <h2>${dados.titulo}</h2>
        <div class="ralth-turmas-grid">
            ${dados.turmas.map(turma => `
                <section class="info-bloco">
                    <h3>${turma.titulo}</h3>
                    ${turma.horarios.map(horario => `<p>${horario}</p>`).join("")}
                </section>
            `).join("")}
        </div>
        ${dados.informacoes.length ? `
            <div class="info-bloco">
                ${dados.informacoes.map((informacao, indice) =>
                    `<p${indice === 0 ? ' id="span-negrito"' : ''}>${informacao}</p>`
                ).join("")}
            </div>
        ` : ""}
    </div>
    <div class="info-imagem-ralth" role="img" aria-label="${dados.titulo}"
        style="background-image: url('/img/img-ralth-futsal.jpeg')"></div>
</div>
                `;
            }

            infoSection.innerHTML = html;
            infoSection.hidden = false;

            const botaoFechar = document.createElement("button");
            botaoFechar.type = "button";
            botaoFechar.className = "fechar-info";
            botaoFechar.innerHTML = '<i class="fa-solid fa-xmark" aria-hidden="true"></i> Fechar informações';
            botaoFechar.addEventListener("click", fecharInformacoes);
            infoSection.querySelector(".info-conteudo").appendChild(botaoFechar);

            const bloco = infoSection.querySelector(".info-conteudo");
            setTimeout(() => bloco.classList.add("ativo"), 20);
            infoSection.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

});