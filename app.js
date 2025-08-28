//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

    function limparCampo(campo){
    //let limpar
    //limpar = document.querySelector(campo);
    //limpar.value = '';
    const input = document.querySelector(campo);
    if (input) input.value = '';
}

// Impede que números sejam digitados no campo de nome
    document.querySelector('#amigo').addEventListener('input', function () {
        
// Aceita apenas letras (A-Z, a-z), acentos e espaços
    this.value = this.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
    this.value = this.value.replace(/[0-9]/g, ''); // remove números
    
});

// Lista para armazenar os amigos
    let amigos = [];
    let listaAmigos = document.querySelector('#listaAmigos');
    let amigo

// Função para adicionar amigo à lista
    function adicionarAmigo(){
    let campoNome = document.querySelector('#amigo').value.trim()

//validacao
    if (amigos.includes(campoNome)) {
        alert('Esse nome já foi adicionado ao sorteio.');
        return;     
   }

    if(campoNome === "" ){
        alert('Digite um nome antes de adicionar.');
        return;
    }

// Ignora diferenças de maiúsculas/minúsculas
    if (amigos.some(a => a.toLowerCase() === campoNome.toLowerCase())) {
        alert('Esse nome já foi adicionado ao sorteio.');
        return;
            
    }  else{
        amigos.push(campoNome);
        listaAmigos.innerHTML += `<li> ${campoNome} </li>`;
        limparCampo('#amigo');
        //console.log(amigos);
    }
     
}

//Função para o botão sortear amigo
    function sortearAmigo(){
    let botaoSortearAmigo = document.querySelector('.button-draw');
    let numeroAleatorio = gerarNumeroAleatorio(amigos.length -1);
    let amigoEscolhido = amigos[numeroAleatorio]

    let resultado = document.querySelector("#resultado");
    resultado.innerHTML = `<li> 🎉O amigo secreto sorteado é <strong>${amigoEscolhido}</strong></li`;

    listaAmigos.innerHTML = ''
        if (amigos.length === 0){
        resultado.innerHTML= ('Não há mais nomes para sortear!')
    }
    amigos.splice(numeroAleatorio,1)
}

//Função para a criação de numero aleatório da lista
    function gerarNumeroAleatorio(num) {
        return Math.floor(Math.random() * (num + 1));
    //const result = Math.round(Math.random() * (0 - num) + num);
    //return parseInt(Math.random() * num + 1);
    //return result
}

    function novoSorteio() {
        amigos = []
        listaAmigos.innerHTML = ''
        alert("Tem certeza que deseja criar um novo sorteio?");
        
    }

    const resultado = document.getElementById('#resultado');
    resultado.innerHTML = ''; // limpa o sorteio anterior
    sortearAmigo(); // chama novamente o sorteio