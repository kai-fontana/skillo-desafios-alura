let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio";

function verificarConsole() {
    console.log("O botão foi clicado!");
}

function verificarAlerta() {
    console.log("Eu amo JS");
}

function verificarPrompt() {
    let cidadeDoBrasil = prompt("Diga o nome de uma cidade do Brasil.");
    alert(`Estive em ${cidadeDoBrasil} e lembrei de você.`);
}

function verificarSoma() {
    let numeroInteiro1 = parseInt(prompt("Insira um número inteiro aleatório:"));
    let numeroInteiro2 = parseInt(prompt("Insira outro número inteiro:"));
    let somaDeNumeros = numeroInteiro1 + numeroInteiro2;
    alert("O resultado da soma é " + somaDeNumeros);
}
