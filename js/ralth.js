document.addEventListener("DOMContentLoaded", () => {

    // elementos opcionais
    const menu = document.getElementById("menu");
    const opcoes = document.getElementById("menu_opcoes");
    const items_ralth = document.getElementById("items_ralth");

    // --- MENU RESPONSIVO ---
    if (menu && opcoes) {
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
    } else {
        console.warn("Menu não inicializado porque 'menu' ou 'menu_opcoes' não foram encontrados.");
    }

    // ============================================================
    // BASE DE DADOS
    // ============================================================
    const informacoes = {
        item_1: {
            titulo: "⚽ FUTSAL",
            subtitulo: "Turmas Noite - 2ª e 4ª feiras",
            item_lista_1: "18h30 às 19h30 SUB 07 e 09 (06 e 09 anos)",
            item_lista_2: "19h30 às 20h30 SUB 11 e 13 (10 e 13 anos)",
            item_lista_3: "20h30 às 21h30 SUB 15 e 17 (14 e 17 anos)",

            subtitulo2: "Turmas Tarde - 2ª e 4ª feiras",
            item_lista_4: "14h00 às 15h00 - SUB 11/13 (10 à 13 anos)",
            item_lista_5: "15h00 às 16h00 - SUB 07/09 (06 à 09 anos)",
            item_lista_6: "16h00 às 16h50 - SUB 03/05 (03 à 05 anos)",

            subtitulo3: "Turmas Manhã - 2ª e 4ª feiras",
            item_lista_7: "08h30 às 09h30 - SUB 11/13 (10 à 13 anos)",
            item_lista_8: "09h30 às 10h30 - SUB 07/09 (06 à 09 anos)",
            item_lista_9: "10h30 às 11h20 - SUB 03/05 (03 à 05 anos)",

            informacao1: "Personal soccer: Agende seu horário",
            informacao2: "MAIORES INFORMAÇÕES - 31 98813-7766",
            informacao3: "Entre em contato e saiba mais sobre",
            informacao3_5: "valores, eventos, concursos e torneios!",
            informacao4: "MATRÍCULAS - 31 98288-7389",
            informacao5: "Garanta sua vaga!"
        },

        item_2: {
            titulo: "🏐 VÔLEI",
            subtitulo: "Turmas Noite - 3ª e 6ª feiras",
            item_lista_1: "18h10 às 19h00 - SUB 10/14 (09 e 14 anos)",

            subtitulo2: "Turmas Noite Adulto - 6ª feiras",
            item_lista_2: "19h00 às 20h00* - SUB 17 / Adultos",

            subtitulo3: "Turmas Tarde - 3ª e 6ª feiras",
            item_lista_3: "14h00 às 15h00 - SUB 10/11 (09 e 11 anos)",
            item_lista_4: "15h00 às 16h00 - SUB 12/15 (12 e 15 anos)",

            subtitulo4: "Turmas Manhã - 3ª e 6ª feiras",
            item_lista_5: "09h00 às 10h00 - SUB 12/15 (12 e 15 anos)",
            item_lista_6: "10h00 às 11h00 - SUB 10/11 (09 e 11 anos)",

            informacao1: "MAIORES INFORMAÇÕES - 31 98813-7766",
            informacao2: "Saiba mais sobre valores, eventos e torneios!",
            informacao3: "MATRÍCULAS - 31 98288-7389",
            informacao4: "Garanta sua vaga!"
        },

        item_3: {
            titulo: "🍔 LANCHONETE PRINELOPE",
            subtitulo: "Venha conhecer nosso espaço com lanches maravilhosos.",
            item_lista_1: "Açaí",
            item_lista_2: "Salgados",
            item_lista_3: "Sucos",
            item_lista_4: "Espetinhos",
            item_lista_5: "Refrigerantes",
            item_lista_6: "E muito mais!",
            informacao1: "Consulte horários de funcionamento e preços.",
            imagem: "img/img_acai.jpeg"
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
        infoSection.style.display = "none";

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

    // ============================================================
    // EVENTO DE CLICK PARA ITENS
    // ============================================================
    itens.forEach(item => {
        item.addEventListener("click", () => {
            const dados = informacoes[item.id];
            let html = "";

            if (item.id === "item_3") {
                // ==========================
                // LANCHONETE CENTRALIZADA
                // ==========================
                html = `
<div class="info-conteudo centralizado">
    <h2 class="titulo2">${dados.titulo}</h2>
    <p>${dados.subtitulo || ''}</p>

    <div class="info-imagem" style="background-image: url(${dados.imagem});"></div>

    <ul>
        ${dados.item_lista_1 ? `<li>${dados.item_lista_1}</li>` : ''}
        ${dados.item_lista_2 ? `<li>${dados.item_lista_3}</li>` : ''}
        ${dados.item_lista_3 ? `<li>${dados.item_lista_2}</li>` : ''}
        ${dados.item_lista_4 ? `<li>${dados.item_lista_4}</li>` : ''}
        ${dados.item_lista_5 ? `<li>${dados.item_lista_5}</li>` : ''}
        ${dados.item_lista_6 ? `<li>${dados.item_lista_6}</li>` : ''}
    </ul>

    <p>${dados.informacao1 || ''}</p>
</div>
                `;
            } else {

                if (item.id === "item_2") {

                    html = `
<div class="info-conteudo">
    <div class="info-texto">

        <h2 class="titulo">${dados.titulo}</h2>

        <!-- BLOCO 1 -->
        <div class="info-bloco">
            <h3>${dados.subtitulo || ""}</h3>
            <p>${dados.item_lista_1 || ""}</p>
        </div>

        <!-- BLOCO 2 -->
        <div class="info-bloco">
            <h3>${dados.subtitulo2 || ""}</h3>
            <p>${dados.item_lista_2 || ""}</p>
        </div>

        <!-- BLOCO 3 -->
        <div class="info-bloco">
            <h3>${dados.subtitulo3 || ""}</h3>
            <p>${dados.item_lista_3 || ""}</p>
            <p>${dados.item_lista_4 || ""}</p>
        </div>

        <!-- BLOCO 4 -->
        <div class="info-bloco">
            <h3>${dados.subtitulo4 || ""}</h3>
            <p>${dados.item_lista_5 || ""}</p>
            <p>${dados.item_lista_6 || ""}</p>
        </div>

        <!-- BLOCO 5 -->
        <div class="info-bloco">
            <p id="span-negrito">${dados.informacao1 || ''}</p>
            <p>${dados.informacao2 || ''}</p>
            <p>${dados.informacao3 || ''}</p>
            <p>${dados.informacao4 || ''}</p>
        </div>

    </div>
</div>
                `} else {

                    //FUTSAL

                    html = `
<div class="info-conteudo">
    <div class="info-texto">

        <h2 class="titulo">${dados.titulo}</h2>

        <!-- BLOCO 1 -->
        <div class="info-bloco">
            <h3>${dados.subtitulo || ""}</h3>
            <p>${dados.item_lista_1 || ""}</p>
            <p>${dados.item_lista_2 || ""}</p>
            <p>${dados.item_lista_3 || ""}</p>
        </div>

        <!-- BLOCO 2 -->
        <div class="info-bloco">
            <h3>${dados.subtitulo2 || ""}</h3>
            <p>${dados.item_lista_4 || ""}</p>
            <p>${dados.item_lista_5 || ""}</p>
            <p>${dados.item_lista_6 || ""}</p>
        </div>

        <!-- BLOCO 3 -->
        <div class="info-bloco">
            <h3>${dados.subtitulo3 || ""}</h3>
            <p>${dados.item_lista_7 || ""}</p>
            <p>${dados.item_lista_8 || ""}</p>
            <p>${dados.item_lista_9 || ""}</p>
        </div>

        <!-- BLOCO 5 -->
        <div class="info-bloco">
            <p id="span-negrito">${dados.informacao1 || ''}</p>
            <p>${dados.informacao2 || ''}</p>
            <p>${dados.informacao3 || ''}</p>
            <p>${dados.informacao3_5 || ''}</p>
            <p>${dados.informacao4 || ''}</p>
            <p>${dados.informacao5 || ''}</p>
        </div>

    </div>
            <div class="info-imagem-ralth" style="background-image: url(img/img-ralth-futsal.jpeg)">
        </div>
</div>
                `

                };
            }

            infoSection.innerHTML = html;
            infoSection.style.display = "block";

            const bloco = infoSection.querySelector(".info-conteudo");
            setTimeout(() => bloco.classList.add("ativo"), 20);

            if (window.innerWidth <= 1068) {
                infoSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

});
