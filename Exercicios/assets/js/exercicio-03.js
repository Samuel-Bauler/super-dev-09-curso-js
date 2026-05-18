function apresentarCamposContatoPessoal() {
    const campoContatoPessoal = document.getElementById("contato-pessoal");
    const campoContatoPessoal = document.getElementsByClassName("contato-pessoal")


    const campoContatoComercial = document.getElementById("contato-pessoal");
    campoContatoComercial.style.display = "block"
}

function apresentarCamposContatoComercial() {
    const campoContatoPessoal = document.getElementById("contato-pessoal");
    campoContatoPessoal.style.display = "none"

    const campoContatoComercial = document.getElementById("contato-comercial");
    campoContatoComercial.style.display = "block"
}

