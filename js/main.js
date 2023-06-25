const classe = document.querySelector(".container__navBar");

function menuHanburguer() {
    document.querySelector(".menu__hanburguer")
    .addEventListener("click", ()=>{
        classe.style.display = "block";
    })
}

function fecharMenuHanburguer() {
    document.getElementById("fecharMenu")
    .addEventListener("click", ()=>{
        classe.style.display = "none";
    })
}

menuHanburguer()
fecharMenuHanburguer()