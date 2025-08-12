//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

function limparCampo(campo){
    let limpar
    limpar = document.querySelector(campo);
    limpar.value = '';
}

// Lista para armazenar os amigos
let amigos = [];

let listaAmigos = document.querySelector('#listaAmigos');

// Função para adicionar amigo à lista
function adicionarAmigo(){
    let campoNome = document.querySelector('#amigo').value; 

//validacao
    if (amigos.includes(campoNome)) {
        alert('Esse nome já foi adicionado ao sorteio.');
        return;
    }

    if(campoNome === "" ){
        alert('Digite um nome antes de adicionar.');

    } else{
        amigos.push(campoNome);
        listaAmigos.innerHTML += `<li> ${campoNome} </li>`;
        limparCampo('#amigo');
        //console.log(amigos);
    }
     
}
//Função para o botão sortear amigo
function sortearAmigo(){
    let botaoSortearAmigo = document.querySelector('.button-draw');
    //alert ('Sorteando amigo secreto');
    let numeroAleatorio = gerarNumeroAleatorio(amigos.length -1); //-1
    console.log(amigos[numeroAleatorio])
    let amigoEscolhido = amigos[numeroAleatorio]

    let resultado = document.querySelector("#resultado");
    resultado.innerHTML = `<li> 🎉O amigo secreto sorteado é <strong>${amigoEscolhido}</strong></li`;

    listaAmigos.innerHTML = ''
        if (amigos.length === 0){
        resultado.innerHTML= ('Não há mais nomes a serem sorteados!')
    }
    amigos.splice(numeroAleatorio,1)
}

//Gerando uma função para a criação de numero aleatório da lista
function gerarNumeroAleatorio(num) {
  const result = Math.round(Math.random() * (0 - num) + num);
    //return parseInt(Math.random() * num + 1);
  return result
}
