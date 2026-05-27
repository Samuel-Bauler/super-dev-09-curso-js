function cadastrarAtendimento() {
    const url = "https://api.franciscosensaulas.com/api/v1/trabalho/atendimentos";
    const dados = {
        cliente: prompt("digite o nome do cliente: "),
        tipoAtendimento: prompt("digite o tipo de Atendimento: "),
        descricao: prompt("Digite a descrição do atendimento: (exemplo: foi bom/ foi ruim"),
        atendente: prompt("Digite o nome do atendente: "),
        duracaoMinutos: parseInt(prompt("digite a duração em minutos do atendimento: "))
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
        alert("DEU CERTO GRAÇAS A DEUS, MUITO OBRIGADO!")
    }) 
}

function listarAtendimentos() {
    const url = "https://api.franciscosensaulas.com/api/v1/trabalho/atendimentos";
    
    const textarea = document.getElementById("atendimentos");

    textarea.value = "";

    fetch(url)
        .then(response => response.json())
        .then(atendimentos => {
            for (let i = 0; i < atendimentos.length;i++ ){
                const atendimento = atendimentos[i];
                const texto = `${atendimento.id} | ${atendimento.cliente} | ${atendimento.tipoAtendimento} | ${atendimento.descricao} | ${atendimento.atendente} | ${atendimento.duracaoMinutos}\n`;
                textarea.value = textarea.value + texto;
            }
        })

        .catch(error => {
            console.error("Erro: " + error);
            alert("Deu bosta amigo");
        }) 
}

function consultarAtendimentoPorId() {
    const idParaConsultar = parseInt(prompt("digite o id do atendimento para consultar"));
    const url = "https://api.franciscosensaulas.com/api/v1/trabalho/atendimentos/" + idParaConsultar;

    const textarea = document.getElementById("atendimentos");

    textarea.value = "";

    fetch(url)
        .then(response => response.json())
        .then(atendimento => {
            const texto = `${atendimento.id} | ${atendimento.cliente} | ${atendimento.tipoAtendimento} | ${atendimento.descricao} | ${atendimento.atendente} | ${atendimento.duracaoMinutos}\n`;
            textarea.value = textarea.value + texto;
        })
        .catch(error => {
            console.error("Erro: " + error);
            alert("deu bosta ai")
        })
}

function apagarAtendimento() {
    const idParaApagar = parseInt(prompt("digite o id do atendimento para apagar"));
    const url = "https://api.franciscosensaulas.com/api/v1/trabalho/atendimentos/" + idParaApagar;

    fetch(url, {
        method: "DELETE"
    })

    .then(response => response) 
    .then(dados => {
        alert("deu boa mermão")
        listarAtendimentos()
    })
    .catch(error => {
        console.error("Erro: " + error);
        alert("deu bosta ai");
    })
}

function editarAtendimento() {
    const idParaEditar = parseInt(prompt("digite o id do atendimento para apagar"));
    const url = "https://api.franciscosensaulas.com/api/v1/trabalho/atendimentos/" + idParaEditar;
    const novoCliente = prompt("Digite o novo Nome do cliente:");
    const novoTipoAtendimento = prompt("Digite o novo tipo de Atendimento: ");
    const novoDescricao = prompt("Digite a nova descrição de atendimento: (exemplo: foi bom/ foi ruim");
    const novoAtendente = prompt("Digite o novo nome do atendente: ");
    const novoDuracaoMinutos = parseInt(prompt("digite a nova duração em minutos do atendimento"));

    const dados = {
        cliente: novoCliente,
        tipoAtendimento: novoTipoAtendimento,
        descricao: novoDescricao,
        atendente: novoAtendente,
        duracaoMinutos: novoDuracaoMinutos
    }

    fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })
    .then(response => response)
    .then(atendimento => {
        alert("Deu certinho my friend ")
        listarAtendimentos()
    })
    .catch(error => {
        console.error("Erro: " + error);
        alert("deu bosta meu hermano: ")
    })
    

}