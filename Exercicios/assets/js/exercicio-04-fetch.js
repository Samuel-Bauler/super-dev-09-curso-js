function cadastrarProduto() {
    const url = "https://api.franciscosensaulas.com/api/v1/empresa/produtos";
    const dados = {
        nome: prompt("Digite o nome do Produto: "),
        preco: parseFloat(prompt("Digite o preço")),
        categoria: prompt("digite a categoria: (exemplo: impressora: ) ")
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
        alert("DEU CERTO GRAÇAS A DEUS")
    })
}

function listarProdutos() {
    const url = "https://api.franciscosensaulas.com/api/v1/empresa/produtos";

    const textarea = document.getElementById("produtos");

    textarea.value = "";

    fetch(url)
        .then(response => response.json())
        .then(produtos => {
            for (let i = 0; i < produtos.length; i++){
                const produto = produtos[i];
                const texto = `${produto.id} | ${produto.nome} | ${produto.preco} | ${produto.categoria}\n`;
                textarea.value = textarea.value + texto;
            }
        })

        .catch(error => {
            console.log("Erro: " + error);
            alert("Ocorreu um erro ao tentar listar as empresas");
        })
}

function apagarProduto() {
    const idParaApagar = parseInt(prompt("digite o id do produto que deseja apagar: "));
    const url = "https://api.franciscosensaulas.com/api/v1/empresa/produtos/" + idParaApagar;

    fetch(url, {
        method: "DELETE"
    }) 

    .then(response => response)
    .then(dados => {
        alert("produto excluido com sucesso")
        listarProdutos()
    })
    .catch(error => {
        console.error("Erro: " + error)
        alert("Ocorreu um erro ao tentar apagar o produto:")
    })
}

function consultarProdutoPorId() {
    const idParaConsultar = parseInt(prompt("digite o id do produto que deseja consultar: "));
    const url = "https://api.franciscosensaulas.com/api/v1/empresa/produtos/" + idParaConsultar;

    const textarea = document.getElementById("produtos");

    // limpar o textarea
    textarea.value = "";

    fetch(url)
        .then(response => response.json())
        .then(produto => {
            const texto = `ID: ${produto.id}\nNome: ${produto.nome}\nPreco: ${produto.preco}\nCategoria: ${produto.categoria}`;
            textarea.value = textarea.value + texto;
        })
        .catch(error => {
            console.error("Erro: " + error);
            alert("Deu bosta ai mermão, não deu pra achar o produto ai");
        }) 
}

function editarProduto() {
    const idParaEditar = parseInt(prompt("digite o id do produto que você deseja editar: "))
    const novoNome = prompt("digite o novo Nome do produto: ");
    const novoPreco = prompt("digite o novo preço do produto: ");
    const novaCategoria = prompt("digite o nova Categoria do produto: ");

    const url = "https://api.franciscosensaulas.com/api/v1/empresa/produtos/" + idParaEditar;

    const dados = {
        nome: novoNome,
        preco: novoPreco,
        categoria: novaCategoria
    }

    fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(dados)
    })
    .then(response => response)
    .then(produto => {
        alert("Produto editado com sucesso")
        listarProdutos()
    })
    .catch(error => {
        console.error("Erro: " + error)
        alert("Deu merda paizão");
    })
}