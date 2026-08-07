// =====================================
// MENU MOBILE
// =====================================

const botaoMenu = document.getElementById("botaoMenu");
const menu = document.querySelector(".menu");

botaoMenu.addEventListener("click", () => {

    menu.classList.toggle("ativo");

});


// Fechar o menu quando clicar em um link

const linksMenu = document.querySelectorAll(".menu a");

linksMenu.forEach((link) => {

    link.addEventListener("click", () => {

        menu.classList.remove("ativo");

    });

});


// =====================================
// BOTÃO DA MENSAGEM FINAL
// =====================================

const botaoMensagem = document.getElementById("botaoMensagem");
const mensagem = document.getElementById("mensagem");

botaoMensagem.addEventListener("click", () => {

    mensagem.textContent =
        "O futuro sustentável depende da união entre conhecimento humano, tecnologia e responsabilidade ambiental.";

});


// =====================================
// ANIMAÇÃO AO APARECER NA TELA
// =====================================

const elementos = document.querySelectorAll(
    ".card, .impacto, .risco, .habilidades div"
);

const observador = new IntersectionObserver(

    (elementosObservados) => {

        elementosObservados.forEach((elemento) => {

            if (elemento.isIntersecting) {

                elemento.target.style.opacity = "1";
                elemento.target.style.transform = "translateY(0)";

                observador.unobserve(elemento.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


elementos.forEach((elemento) => {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(25px)";
    elemento.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    observador.observe(elemento);

});


// =====================================
// ANO AUTOMÁTICO NO CONSOLE
// =====================================

console.log(
    "Projeto AGRINHO 2026 - Agro Forte, Futuro Sustentável"
);
