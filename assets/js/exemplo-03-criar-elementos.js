function adicionarAluno() {
    const campoNome = document.getElementById("campo-nome");
    const nome = campoNome.value.trim();

    if(nome.length === 0) {
        alert("digite o nome do aluno")
        campoNome.focus();
        return;
    }

    /*
    Gerar o html 
    <div class="card-aluno">
        <h3>MAtheus</h3>
        <p>Aluno cadastro com JavaScrit</p>
    </div>
    */

    const divCardAluno = document.createElement("div"); // <div></div>
    divCardAluno.classList.add("card-aluno"); // <div class="card-aluno"></div>

    const h3NomeAluno = document.createElement("h3");
    h3NomeAluno.innerText = nome;

    const pMensagem = document.createElement("p");
    pMensagem.innerText = "aluno cadastrado com JavaScript";

    divCardAluno.appendChild(h3NomeAluno);
    divCardAluno.appendChild(pMensagem);

    // Pegar o elemnto (lista-alunos) que eu adicionarei a nova div
    const divListaAlunos = document.getElementsByClassName("lista-alunos")[0];
    divListaAlunos.appendChild(divCardAluno);

    // limpar campo
    campoNome.value = "";
    campoNome.focus();
}

function adicionarAlunoNoEnter(evento) {
    if (evento.key === "Enter") {
        adicionarAluno();
    }
}

