const addBotao = document.getElementById('add-notation');
console.log("Chegou aqui");

var novaanotacao = window.document.querySelector('input#nova-anotacao')

function adicionar() {
    let na = String(novaanotacao.value)
    const listagem = document.getElementById('anotation-list');
    const elementoDivListagem = document.createElement('div');
    elementoDivListagem.innerHTML = `${na}`;
    elementoDivListagem.classList.add('list-group-item')
    elementoDivListagem.classList.add('d-flex')
    elementoDivListagem.classList.add('flex-column')
    listagem.appendChild(elementoDivListagem);
}

function limpar() {
    novaanotacao.value = ''
}