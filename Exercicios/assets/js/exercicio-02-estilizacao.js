function redefinirCor() {
    const divCaixaCentral = document.getElementById("caixa-central");
    divCaixaCentral.classList.remove("verde" , "azul" , "vermelho");
    divCaixaCentral.classList.remove("aumentar-tamanho")
}

function definirVerde() {
    const divCaixaCentral = document.getElementById("caixa-central");
    divCaixaCentral.classList.remove("azul" , "vermelho")
    divCaixaCentral.classList.add("verde");
}

function definirVermelho() {
    const divCaixaCentral = document.getElementById("caixa-central");
    divCaixaCentral.classList.remove("azul" , "verde");
    divCaixaCentral.classList.add("vermelho");
}

function definirAzul() {
    const divCaixaCentral = document.getElementById("caixa-central");
    divCaixaCentral.classList.remove("vermelho" , "verde");
    divCaixaCentral.classList.add("azul");
}

function aumentarTamanho() {
    const divCaixaCentral = document.getElementById("caixa-central");
    divCaixaCentral.classList.add("aumentar-tamanho")
}