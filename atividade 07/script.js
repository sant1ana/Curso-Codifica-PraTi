// Array para armazenar as receitas cadastradas
var receitas = [];

// Função para adicionar uma nova receita na lista
    function adicionarReceita() {
    var nome = document.getElementById("nome").value;
    var ingredientes = document.getElementById("ingredientes").value;
    var modoPreparo = document.getElementById("modo-preparo").value;
    var tempoPreparo = document.getElementById("tempo-preparo").value;

    var receita = {
    nome: nome,
    ingredientes: ingredientes,
    modoPreparo: modoPreparo,
    tempoPreparo: tempoPreparo
    };

    receitas.push(receita);
    exibirReceitas();

  // Limpar os campos do formulário após o cadastro
    document.getElementById("nome").value = "";
    document.getElementById("ingredientes").value = "";
    document.getElementById("modo-preparo").value = "";
    document.getElementById("tempo-preparo").value = "";
}

// Função para exibir as receitas cadastradas na lista
    function exibirReceitas() {
    var receitasList = document.getElementById("recipe-list");
    receitasList.innerHTML = "";

    for (var i = 0; i < receitas.length; i++) {
    var receita = receitas[i];
    var receitaItem = document.createElement("li");
    receitaItem.className = "recipe-item";
    receitaItem.innerHTML = "<h3>" + receita.nome + "</h3>" +
                            "<p><strong>Ingredientes:</strong></p>" +
                            "<p>" + receita.ingredientes + "</p>" +
                            "<p><strong>Modo de Preparo:</strong></p>" +
                            "<p>" + receita.modoPreparo + "</p>" +
                            "<p><strong>Tempo de Preparo:</strong> " + receita.tempoPreparo + " minutos</p>";

    receitasList.appendChild(receitaItem);
    }
}

// Evento de submissão do formulário
document.getElementById("recipe-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede que a página seja recarregada
    adicionarReceita();
});
