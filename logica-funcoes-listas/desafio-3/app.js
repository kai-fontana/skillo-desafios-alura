// DESAFIO DO MÓDULO 03: REINICIANDO O JOGO

 /////////      DESAFIO 01       ///////////

function verificarImc(altura, peso) {
    let  calculoDoImc = peso / (altura * altura);
    return  alert(`O seu IMC é ${calculoDoImc}.`);
}

verificarImc(parseFloat(prompt("Insira a sua altura em metros:")),parseInt(prompt("Insira o seu peso em quilogramas apenas:")));

 /////////      DESAFIO 02       ///////////

function numeroFatorial(n) {
    if (n < 0) {
        return -1;
    } else if (n == 0) {
        return 1;
    } else {
        return (n * numeroFatorial(n - 1));
    }
}
alert(numeroFatorial(5));


  /////////      DESAFIO 03       ///////////

function conversorDeDolar(real, dolar) {
    let dolarParaReal = real * dolar;
    return alert(dolarParaReal);
}
conversorDeDolar(parseInt(prompt("Insira o valor em reais (R$) que deseja converter:")), parseFloat(4.80));

   /////////      DESAFIO 04       ///////////

function verificarAreaPerimetro(altura, largura) {
    let areaRetangular = largura * altura;
    let perimetroRetangular = (largura * 2) + (altura * 2);

    return alert(`A área da sala retangular é ${areaRetangular} e o perímetro da sala retangular é ${perimetroRetangular}.`); 
}



   /////////      DESAFIO 05       ///////////

function verificarAreaPerimetro(raio, pi) {

    let areaCircular = (raio * raio) * pi;
    let perimetroCircular = (pi * 2) * raio;

    return alert(`A área da sala circular é ${areaCircular} e o perímetro da sala circular é ${perimetroCircular}.`); 
}

verificarAreaPerimetro(5, 3.14);

   /////////      DESAFIO 05       ///////////

function verificarTabuada(n, nMultiplicando) {

    while (nMultiplicando <= 9) {
    nMultiplicando++;
    let resultadoMultiplicacao = n * nMultiplicando;
    alert(`A multiplicação entre ${n} e ${nMultiplicando} é:
        ${resultadoMultiplicacao} `);
    };
 
}

verificarTabuada(2, 1);