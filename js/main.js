//Abrir menu______________________________________________
const classe = document.querySelector(".container__navBar");

function menuHanburguer() {
    document.querySelector(".menu__hanburguer")
        .addEventListener("click", () => {
            classe.style.display = "block";
        })
}
//Fechar menu______________________________________________
function fecharMenuHanburguer() {
    document.getElementById("fecharMenu")
        .addEventListener("click", () => {
            classe.style.display = "none";
        })
}

menuHanburguer();
fecharMenuHanburguer();

//_________________________________________________________________
//Carrossel
const containerBanner = document.querySelector(".container__banner");
const containerImg = document.querySelector(".container__img");

let imgItens = document.querySelectorAll(".img__itens");

const botaoEsquerdo = document.getElementById("botao__esquerdo");
const botaoDireito = document.getElementById("botao__direito");

botaoEsquerdo.addEventListener("click", () => {
    containerImg.appendChild(imgItens[0]);
    imgItens = document.querySelectorAll(".img__itens");
});

botaoDireito.addEventListener("click", () => {
    const lastItem = imgItens[imgItens.length - 1];
    containerImg.insertBefore(lastItem, imgItens[0]);
    imgItens = document.querySelectorAll(".img__itens");
});

//_________________________________________________________________
//Sessão produtos

const imagens = [
    { "url": "./images/img__produtos/Card camiseta.png" },
    { "url": "./images/img__produtos/Card calça.png" },
    { "url": "./images/img__produtos/Card tenis.png" },
    { "url": "./images/img__produtos/Card jaqueta jeans.png" },
    { "url": "./images/img__produtos/Cards óculos.png" },
    { "url": "./images/img__produtos/Card bolsa.png" }
];

const containerModal = document.querySelector(".container__modal--produtos");

//Produtos_______________________________________________________________
const tituloProduto = document.querySelectorAll(".card__titulo");
const textoProduto = document.querySelectorAll(".card__texto");
const precoProduto = document.querySelectorAll(".preco");
//_______________________________________________________________________

//Modal_______________________________________________________________
const nomeProdutoModal = document.querySelector(".nome__produto");
const informacaoProdutoModal = document.querySelector(".informacao__produto");
const precoProdutoModal = document.querySelector(".preco__produto");
const img = document.getElementById("img__modal");
//_______________________________________________________________________

//Abrir modal_______________________________________________________________
const botaoVerMais = document.querySelectorAll(".ver__mais");

for (let contador = 0; contador < botaoVerMais.length; contador++) {
    botaoVerMais[contador]
        .addEventListener("click", () => {
            containerModal.style.display = "grid"

            img.src = imagens[contador].url
            nomeProdutoModal.innerHTML = tituloProduto[contador].innerText
            informacaoProdutoModal.innerHTML = textoProduto[contador].innerText
            precoProdutoModal.innerHTML = precoProduto[contador].innerText
        })
}

//Função fechar modal produtos_______________________________________________________________
const fecharModalProdutos = document.getElementById("icon__fechar");

fecharModalProdutos.addEventListener("click", () => {
    containerModal.style.display = "none";
})
//___________________________________________________________________

//modal enviar cadastro newletter_______________________________________________________________
const formNewletter = document.querySelector(".container__newletter");
const modalEmailCadastrado = document.querySelector(".modal__email__cadastrado");
const enviarCadastro = document.getElementById("botao__enviar");
const fecharModalNewletter = document.getElementById("icon__fechar--modalNewletter");

function validarEmail(email) {
    const reEmail = /\S+@\S+\.\S+/;
    return reEmail.test(email);
}

formNewletter.addEventListener("submit", (e) => {
    e.preventDefault();

    abrirModalNewletter()
})

function abrirModalNewletter() {
    const campoEmail = document.getElementById("campo__email");
    const inputEmail = campoEmail.value

    if (validarEmail(inputEmail)) {
        modalEmailCadastrado.style.display = "flex";
        campoEmail.value = "";
    }
}

fecharModalNewletter.addEventListener("click", () => {
    modalEmailCadastrado.style.display = "none";
})

//___________________________________________________________________