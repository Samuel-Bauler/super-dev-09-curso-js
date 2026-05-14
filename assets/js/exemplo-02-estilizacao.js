function alterarVisibilidadeBotao() {
    // busca no html o elemento que possuio id "id caixa-01"
    const divCaixa01 = document.getElementById("caixa-01");
    // Busca no html o bota que possui o id "botao-alternar-visibilidade"
    const botaoAlternarVisibilidade = document.getElementById("botao-alternar-visibilidade");

    // verifica se a caixa está sem valor de display ou escondida
    if(divCaixa01.style.display === "" || divCaixa01.style.display === "none") {
        //mostra a caixa na tela
        divCaixa01.style.display = "block";
        // altera o texto do botao para indicar que a caixa pode ser ocultada
        botaoAlternarVisibilidade.innerText = "Ocultar caixa";

    // Caso a caixa já esteja vísivel 
    } else {
        // esconde a caixa da tela
        divCaixa01.style.display = "none";
        // altera o texto do botão para indicar que a caixa pode ser apresentada novamente
        botaoAlternarVisibilidade.innerText = "Apresentar"
    }
}

function definirCorVermelho() {
    const divCaixa01 = document.getElementById("caixa-01");
    divCaixa01.classList.remove("caixa-azul");
    divCaixa01.classList.add("caixa-vermelha");
}

function redefinirCor() {
    const divCaixa01 = document.getElementById("caixa-01");
    divCaixa01.classList = []
}

function definirCorAzul() {
    const divCaixa01 = document.getElementById("caixa-01");
    // remove a clase 'caixa-vermelha' da div
    divCaixa01.classList.remove("caixa-vermelha");
    // adicionar a classe 'caixa-azul' na div
    divCaixa01.classList.add("caixa-azul");
}

function arcoIris() {
    const cores = ["vermelha" , "azul" , "laranja" , "amarela" , "verde" , "anil" , "violeta"];
    const divCaixa01 = document.getElementById("caixa-01");
    for(let i = 0; i < cores.length; i++) {
        // alert(cores[i]);
        setTimeout(() => {
            const cor = `caixa-${cores[i]}`;
            divCaixa01.classList = [cor]
        }, i * 1000);
    }
}

function apresentarCamposPessoaFisica() {
    const divCamposPf = document.getElementById("campos-pf");
    divCamposPf.classList.remove("hidden");

    const divCamposPj = document.getElementById("campos-pj");
    divCamposPj.classList.add("hidden");
}

function apresentarCamposPessoaJuridica() {
    const divCamposPj = document.getElementById("campos-pj");
    divCamposPj.classList.remove("hidden");

    const divCamposPf = document.getElementById("campos-pf");
    divCamposPf.classList.add("hidden");
}

const imagemDragonBall = "https://ovicio.com.br/wp-content/uploads/dragon-ball-z-vegeta-9000-238679.png";
const imagemAbsoluteCinema = "https://lazersemfronteiras.com.br/wp-content/uploads/2025/09/Absolute-cinema-o-que-e-e-por-que-esse-meme-viralizou.jpg";
const imagemSapo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwqd6Yl7zik3g7UBl3_gM_OYK3IKpGL2fJeQ&s";

function alterarImagem(evento) {
    if (evento.key === "Enter") {
        const imagem = document.getElementsByClassName("imagem")[0]
        const campoPes
    }
}