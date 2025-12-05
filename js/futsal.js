document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");
    const opcoes = document.getElementById("menu_opcoes");
    const containerEscolas = document.getElementById("escolas");

    if (!menu || !opcoes || !containerEscolas) {
        console.warn("Elemento(s) faltando: verifique ids 'menu', 'menu_opcoes' e 'escolas'");
        return;
    }

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

const escolas = {
    item_1: {
        nome: "ESCOLA DE FUTSAL CCV",

        horarios1Titulo: "TURNO MANHÃ – 2 DIAS DA SEMANA",
        horarios1Informacoes: "2ª e 4ª FEIRA • 11H30 às 12H20 – SUB 08 | 10 | 12",

        horarios2Titulo: "TURNO TARDE – 2 DIAS DA SEMANA",
        horarios2Informacoes: "2ª e 4ª FEIRA • 17H40 às 18H30 – SUB 08 | 10 | 12",

        horarios3Titulo: "TURNO TARDE – INFANTIL",
        horarios3Informacoes: "2ª e 4ª FEIRA • 16H50 às 17H35 – SUB 06",

        descricao: `A Escola de Futsal CCV está inserida em um dos Colégios da rede particular mais tradicionais de Contagem.
        O COLÉGIO CRISTÃO VITÓRIA possui como diferencial seus princípios cristãos e uma história de mais de 25 anos de Excelência de Ensino.
        Iniciamos nossa parceria em 2018, com a proposta de ensinar o FUTSAL de forma dinâmica e lúdica no âmbito escolar, utilizando as dependências do Colégio
        e proporcionando aos alunos um ambiente seguro, acolhedor e propício ao aprendizado e às amizades.`,

        nome2: "DIAS E HORÁRIOS",
        imagem: "img/img_futsal_ccv.jpeg",
    },

    item_2: {
        nome: "ESCOLA DE FUTSAL SUPREMO",

        horarios1Titulo: "TURNO MANHÃ – 2 DIAS DA SEMANA",
        horarios1Informacoes: "3ª e 5ª FEIRA • 11H30 às 12H20 – SUB 08 | 10 | 12",

        horarios2Titulo: "TURNO TARDE – 2 DIAS DA SEMANA",
        horarios2Informacoes: "3ª e 5ª FEIRA • 17H45 às 18H35 – SUB 08 | 10 | 12",

        horarios3Titulo: "TURNO TARDE – INFANTIL",
        horarios3Informacoes: "3ª e 5ª FEIRA • 17H00 às 17H45 – SUB 06",

        descricao: `A Escola de Futsal Supremo está inserida em um dos Colégios particulares mais tradicionais de Contagem.
        O COLÉGIO SUPREMO possui uma estrutura fantástica e mais de 29 anos de Excelência de Ensino.
        Iniciamos nossa parceria em 2019 com a proposta de ensinar FUTSAL de forma dinâmica e lúdica, utilizando as dependências do Colégio
        para proporcionar aos alunos um ambiente seguro, acolhedor e propício para o aprendizado e novas amizades.`,

        nome2: "DIAS E HORÁRIOS",
        imagem: "img/img_futsal_supremo.jpeg",
    },

    item_3: {
        nome: "ESCOLA DE FUTSAL E. KALIL",

        horarios1Titulo: "TURNO MANHÃ – 2 DIAS DA SEMANA",
        horarios1Informacoes: "4ª e 6ª FEIRA • 11H40 às 12H30 – SUB 11 | 13",

        horarios2Titulo: "TURNO TARDE – 2 DIAS DA SEMANA",
        horarios2Informacoes: "3ª e 5ª FEIRA • 18H05 às 18H55 – SUB 08 | 10 | 12",

        horarios3Titulo: "TURNO TARDE – INFANTIL",
        horarios3Informacoes: "3ª e 5ª FEIRA • 17H20 às 18H05 – SUB 06",

        descricao: `A Escola de Futsal Elizabeth Kalil está inserida em um dos Colégios particulares mais tradicionais de Contagem.
        O INSTITUTO ELIZABETH KALIL possui estrutura fantástica e mais de 50 anos de Excelência de Ensino.
        A parceria, iniciada em 2023, tem como objetivo ensinar FUTSAL de forma dinâmica e lúdica,
        proporcionando um ambiente seguro, acolhedor e estimulante para os alunos.`,

        nome2: "DIAS E HORÁRIOS",
        imagem: "img/img_futsal_kalil.jpeg",
    },

    item_6: {
        nome: "ESCOLA DE FUTSAL IHF",

        horarios1Titulo: "TURNO MANHÃ – 2 DIAS DA SEMANA",
        horarios1Informacoes: "3ª e 6ª FEIRA • 11H30 às 12H20 – SUB 08 | 10 | 12",

        horarios2Titulo: "TURNO TARDE – 2 DIAS DA SEMANA",
        horarios2Informacoes: "3ª e 5ª FEIRA • 17H40 às 18H30 – SUB 08 | 10 | 12",

        horarios3Titulo: "TURNO TARDE – INFANTIL",
        horarios3Informacoes: "3ª e 5ª FEIRA • 17H00 às 17H40 – SUB 06",

        descricao: `A Escola de Futsal IHF está inserida em um dos Colégios particulares mais tradicionais de Contagem.
        O INSTITUTO HELENA FERNANDES tem longa história de Excelência em Educação.
        A parceria, iniciada em 2025, promove o ensino do FUTSAL de forma lúdica e dinâmica,
        garantindo um ambiente seguro, acolhedor e ideal para o aprendizado e o desenvolvimento dos alunos.`,

        nome2: "DIAS E HORÁRIOS",
        imagem: "img/img_futsal_ihf.jpeg",
    },

    item_5: {
        nome: "ESCOLA DE ESPORTES CRESCER",

        horarios1Titulo: "TURNO MANHÃ – 2 DIAS DA SEMANA",
        horarios1Informacoes: "3ª e 6ª FEIRA • 11H30 às 12H20 – SUB 08 | 10 | 12",

        horarios2Titulo: "TURNO TARDE – 2 DIAS DA SEMANA",
        horarios2Informacoes: "2ª e 4ª FEIRA • 17H40 às 18H40 – SUB 08 | 10 | 12",

        horarios3Titulo: "TURNO TARDE – INFANTIL",
        horarios3Informacoes: "3ª e 5ª FEIRA • 17H00 às 17H40 – SUB 06",

        descricao: `A Escola de Esportes Crescer está inserida em um dos Colégios particulares mais tradicionais de Contagem.
        O COLÉGIO CRESCER CONTAGEM possui uma estrutura fantástica e uma história marcada pela Excelência de Ensino.
        A parceria, iniciada em 2025, promove o FUTSAL no ambiente escolar de maneira dinâmica e lúdica,
        garantindo segurança, acolhimento e estímulo ao aprendizado e às amizades.`,

        nome2: "DIAS E HORÁRIOS",
        imagem: "img/CRESCER ESPORTES.png",
    },

    item_4: {
        nome: "ESCOLA DE FUTSAL CONSTRUIR +",

        horarios1Titulo: "TURNO TARDE – 2 DIAS DA SEMANA",
        horarios1Informacoes: "2ª e 4ª FEIRA • 18H00 às 18H50 – SUB 12",

        horarios2Titulo: "TURNO TARDE – 2 DIAS DA SEMANA",
        horarios2Informacoes: "2ª e 4ª FEIRA • 17H10 às 18H00 – SUB 08 | 10",

        horarios3Titulo: "TURNO TARDE – INFANTIL",
        horarios3Informacoes: "6ª FEIRA • 17H40 às 18H30 – SUB 06",

        descricao: `A Escola de Futsal CONSTRUIR+ está inserida em um dos Colégios particulares mais tradicionais de Contagem.
        O COLÉGIO CONSTRUIR+ possui estrutura fantástica e uma história marcada pela Excelência de Ensino.
        A parceria, iniciada em 2024, leva aos alunos um FUTSAL dinâmico, lúdico e seguro, utilizando as dependências da instituição
        para promover um ambiente acolhedor e propício ao aprendizado e às amizades.`,

        nome2: "DIAS E HORÁRIOS",
        imagem: "img/img_futsal_construir.jpeg",
    }
};


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

                    <div class="grid-horarios">
                        <div class="bloco-horario">
                            <h3>${dados.horarios1Titulo}</h3>
                            <p>${dados.horarios1Informacoes}</p>
                        </div>

                        <div class="bloco-horario">
                            <h3>${dados.horarios2Titulo}</h3>
                            <p>${dados.horarios2Informacoes}</p>
                        </div>

                        <div class="bloco-horario">
                            <h3>${dados.horarios3Titulo}</h3>
                            <p>${dados.horarios3Informacoes}</p>
                        </div>

                        <div class="bloco-horario bloco-vazio"></div>
                    </div>
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
