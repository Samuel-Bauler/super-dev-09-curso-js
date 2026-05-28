function cadastrarTransporte() {
    const url = "https://api.franciscosensaulas.com/api/v1/trabalho/transportes";
    const veiculo = prompt("Qual é o veiculo: ");
    const motorista = prompt("Digite o nome do motorista");
    const carga = prompt("Digite a qual é o tipo da carga: (madeira, pedra)");
    const destino = prompt("Digite qual é o destino");

    const dados = {
        veiculo: veiculo,
        motorista: motorista,
        carga: carga,
        destino: destino
    }

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })
    .then(response => response.json())
    .then(dado => {
        alert("Deu certinho meu guria")
    })
    .catch(error => {
        console.error("Erro: " + error);
        alert("Deu bosta meu hermano: ")
    })

}

function listarTransporte() {
    const url = "https://api.franciscosensaulas.com/api/v1/trabalho/transportes";

    const textarea = document.getElementById("transporte");

    textarea.value = "";

    fetch(url)
        .then(response => response.json())
        .then(transportes => {
            for (let i = 0; i < transportes.length; i++) {
                const transporte = transportes[i]
                const texto = `${transporte.id} | ${transporte.veiculo} | ${transporte.motorista} | ${transporte.carga} | ${transporte.destino}\n`
                textarea.value = textarea.value + texto;
            }
        })
        .catch(error => {
            console.error("Erro: " + error);
            alert("Deu bosta nego");
        })
}

function consultarTransportePorId() {
    const idParaConsultar = parseInt(prompt("Digite o id para consultar"));
    const url = "https://api.franciscosensaulas.com/api/v1/trabalho/transportes/" + idParaConsultar;

    const textarea = document.getElementById("transporte");

    textarea.value = "";

    fetch(url)
        .then(response => response.json())
        .then(transporte => {
            const texto = `Id: ${transporte.id}\nVeiculo: ${transporte.veiculo}\nMotorista: ${transporte.motorista}\nCarga: ${transporte.carga}\nDestino: ${transporte.destino}`
            textarea.value = textarea.value + texto;
        })
        .catch(error => {
            console.error("Erro: " + error);
            alert("Deu bosta");
        })
}

function apagarTransporte() {
    const idParaApagar = parseInt(prompt("Digite o id para apagar: "));
    const url = "https://api.franciscosensaulas.com/api/v1/trabalho/transportes/" + idParaApagar;

    fetch(url, {
        method: "DELETE"
    })
    .then(response => response)
    .then(dados => {
        alert("Deu certo");
        listarTransporte();
    })
    .catch(error => {
        console.error("Erro: " + error);
        alert("Deu bosta: ");
    })
}