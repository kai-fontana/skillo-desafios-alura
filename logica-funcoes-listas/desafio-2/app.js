//DESAFIO DO MÓDULO *FUNÇÕES* EM LÓGICA DE PROGRAMAÇÃO -- FUNÇÕES E LISTAS

// DESAFIO 01
function olaMundo() {
    console.log("Olá, mundo!");
}
olaMundo();


//DESAFIO 02

function exibirNomeNaTela(nomeDoUsuario) {
    console.log(`Olá, ${nomeDoUsuario}!`);
}
exibirNomeNaTela("Joana");


//DESAFIO 03

function receberNumero(n1, dobro) {
    console.log(n1 * dobro);
}

receberNumero(5, 2); 


// DESAFIO 04

function mediaDoNumero(n1, n2, n3) {
    return(n1 + n2 + n3) / 3;
}
let resultado = mediaDoNumero(6, 6, 6);
console.log(resultado);


// DESAFIO 05

function maiorOuMenor(n1, n2) {
    return n1 > n2 ? `O número ${n1} é maior` : `O número ${n2} é maior`;
}
let comparacaoDeNumeros = maiorOuMenor(19, 8);
console.log(comparacaoDeNumeros);


// DESAFIO 06

function multiplicacaoDeNumeros(n1) {
    return n1 * n1;
}
let dobroDoNumero = multiplicacaoDeNumeros(5);
console.log(dobroDoNumero);
 