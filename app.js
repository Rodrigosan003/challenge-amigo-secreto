// Array para armazenar os amigos
let amigos = [];

function adicionarAmigo() {
    // 1. Capturar o valor do campo de entrada
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    // 2. Validar a entrada
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // 3. Adicionar ao array
    amigos.push(nome);

    // 4. Atualizar a lista visualmente
    atualizarLista();

    // 5. Limpar o campo
    input.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpa a lista antes de redesenhar

    amigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função de exemplo para sortear amigo (se precisar usar depois)
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }

    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${sorteado}</strong></li>`;
}
