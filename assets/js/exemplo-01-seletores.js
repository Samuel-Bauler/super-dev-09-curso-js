function concatenar() {
    // get element by => pegar elemento por id
    const campoNome = document.getElementById("nome");
    const nome = campoNome.value;

    const campoSobre = document.getElementById("sobrenome")
    const sobrenome = campoSobre.value;

    alert(`Nome completo: ${nome} ${sobrenome}`)
}

function verificarPar() {
    // 40 % 2 === 0
    const campoNumero = document.getElementById("numero");
    const numero1 = parseInt(campoNumero.value);

    if(numero1 % 2 === 0) {
        alert("Numero par");
    } else {
        alert("Numero é impar");
    }
    // limpar o campo
    campoNumero.value = "";
    // colocar o cursor no campo
    campoNumero.focus();
}

function processarPedido() {
    const campoCliente = document.getElementById("cliente");
    const cliente = campoCliente.value;

    const campoQuantidadeLincencas = document.getElementById("quantidade-licencas");
    const quantidadeLicencas = parseInt(campoQuantidadeLincencas.value);

    const campoTipo = document.querySelector("[name='tipo']:checked");
    if (campoTipo === null) {
        alert("Selecione um tipo");
        return;
    }
    const tipo = campoTipo.value;

    const campoPlano = document.getElementById("plano");
    const plano = campoPlano.value;

    if ((plano !== "Básico") && (plano !== "Intermediário") && (plano !== "Avançado")) {
        alert("Escolha um plano: ")
        return;
    }

    const campoDataEncerramento = document.getElementById("data-encerramento-contrato");
    const dataEncerramento = campoDataEncerramento.value;

    const campoBackup = document.getElementById("backup");
    const backup = campoBackup.checked;

    let precoBase = 0;
    if (tipo === "ERP") {
        precoBase = 250;
    } else if (tipo === "Hospital") {
        precoBase = 400;
    } else if (tipo === "Oficina") {
        precoBase = 100;
    }

    let multiplicadorPlano = 1.0;
    if ( plano === "Intermediário") {
        multiplicadorPlano = 1.5;
    } else if (plano === "Avançado") {
        multiplicadorPlano = 2.0
    }

    let total = quantidadeLicencas * precoBase * multiplicadorPlano;

    const campoResultado = document.getElementById("resultado");
    campoResultado.value = `
Cliente: ${cliente}
quantidade de licenças: ${quantidadeLicencas}
tipo: ${tipo}
plano: ${plano}
data de encerramento: ${dataEncerramento}
backup ${backup ? "Sim" : "Não"}
Preço Base: R$ ${precoBase.toFixed(2)}
Multiplicador do plano: ${multiplicadorPlano}
Total: R$ ${total.toFixed(2)}`;

}