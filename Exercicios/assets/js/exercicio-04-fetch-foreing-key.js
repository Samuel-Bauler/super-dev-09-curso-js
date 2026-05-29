function cadastrarCliente(){
    const url = "https://api.franciscosensaulas.com/api/v1/mecanica/clientes";

    const nomeCliente = prompt("Digite nome do cliente: ");
    const telefoneCliente = prompt("digite o telefone do cliente: ");

    const dados = {
        nome: nomeCliente,
        telefone: telefoneCliente
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
        alert("deu certinho")
        listarClientes()
    })
    .catch(error => {
        console.error("Erro:" + error);
        alert("deu bosta: ")
    })

}

function listarClientes(){
    const url = "https://api.franciscosensaulas.com/api/v1/mecanica/clientes";

    const textarea = document.getElementById("clientes");

    textarea.value = "";

    fetch(url)
        .then(response => response.json())
        .then(clientes => {
            for (let i = 0; i < clientes.length; i++) {
                const cliente = clientes[i];
                const texto = `Id: ${cliente.id} | Nome: ${cliente.nome} | ${cliente.telefone}

-----------------------------------------------------------------------------\n`;

                textarea.value = textarea.value + texto;
            }
        })

}


function cadastrarAgendamento() {

    const textarea = document.getElementById("clientes");

    const base = "https://api.franciscosensaulas.com/api/v1/mecanica/clientes";

    const pedirNome = prompt("digite o nome do cliente que desejar cadastrar agendamento: ");

    fetch(base)
        .then(response => response.json())
        .then(clientes => {
            let idDoCliente = 0;

            for (let i = 0; i < clientes.length; i++) {
                const cliente = clientes[i];
                if (cliente.nome === pedirNome) {
                    idDoCliente = cliente.id;
                }
            }

            const url = "https://api.franciscosensaulas.com/api/v1/mecanica/agendamentos";
            const agendamentoData = new Date();
            const descricaoCliente = prompt("Escreva uma breve descrição sobre o atendimento: ");

            const dados = {
                "id": 0,
                "dataAgendamento": agendamentoData,
                "descricao": descricaoCliente,
                "clienteId": idDoCliente
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
                alert("Deu bom!");
            });
        });

}


function listarAgendamentos() {
    const base = "https://api.franciscosensaulas.com/api/v1/mecanica/clientes";
    const agendamentosUrl = "https://api.franciscosensaulas.com/api/v1/mecanica/agendamentos";

    const textarea = document.getElementById("agendamentos");

    textarea.value = "";

    fetch(base)
        .then(response => response.json())
        .then(clientes => {
            for (let i = 0; i < clientes.length; i++) {
                const cliente = clientes[i];
            }

            fetch(agendamentosUrl)
                .then(response => response.json())
                .then(agendamentos => {
                    for (let i = 0; i < agendamentos.length; i++) {
                        const agendamento = agendamentos[i];

                        const texto = `Id do agendamento: ${agendamento.id}
Data do Agendamento: ${agendamento.dataAgendamento}
Descrição do Agendamento: ${agendamento.descricao}
Cliente:
    Id do cliente: ${agendamento.cliente.id}
    Nome do cliente: ${agendamento.cliente.nome}
    Telefone do Cliente: ${agendamento.cliente.telefone}
---------------------------------------------------------------\n`

                        textarea.value = textarea.value + texto;
                    }
                })
                .catch(error => {
                    console.error("Erro" + error);
                    alert("Deu errado nos agendamentos ai");
                });
        })
        .catch(error => {
            console.error("Erro" + error);
            alert("Deu errado nos clientes ai");
        });
}


function apagarAgendamento() {
    const idParaApagar = parseInt(prompt("Digite um id de agendamento para apagar"));
    const url = "https://api.franciscosensaulas.com/api/v1/mecanica/agendamentos/" + idParaApagar;

    fetch(url, {
        method: "DELETE"
    })

    .then(response => response) 
    .then(dados => {
        alert("deu boa mermão")
        listarAgendamentos()
    })
    .catch(error => {
        console.error("Erro: " + error);
        alert("deu bosta ai");
    })
}

function apagarClientes() {
    const idParaApagar = parseInt(prompt("Digite um id de agendamento para apagar"));
    const url = "https://api.franciscosensaulas.com/api/v1/mecanica/clientes/" + idParaApagar;

    fetch(url, {
        method: "DELETE"
    })

    .then(response => response) 
    .then(dados => {
        alert("deu boa mermão")
        listarClientes()
    })
    .catch(error => {
        console.error("Erro: " + error);
        alert("deu bosta ai");
    })
}

listarClientes()


