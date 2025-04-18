// Atividade 1 – Tabuada (manual)

function tabuada(numero) {
  console.log(`${numero} x 1 = ${numero * 1}`);
  console.log(`${numero} x 2 = ${numero * 2}`);
  console.log(`${numero} x 3 = ${numero * 3}`);
  console.log(`${numero} x 4 = ${numero * 4}`);
  console.log(`${numero} x 5 = ${numero * 5}`);
  console.log(`${numero} x 6 = ${numero * 6}`);
  console.log(`${numero} x 7 = ${numero * 7}`);
  console.log(`${numero} x 8 = ${numero * 8}`);
  console.log(`${numero} x 9 = ${numero * 9}`);
  console.log(`${numero} x 10 = ${numero * 10}`);
}

tabuada(3); // Você pode trocar o número aqui

//Atividade 2 – Soma de dois números

function somar(num1, num2) {
  const resultado = num1 + num2;
  console.log(`A soma é: ${resultado}`);
}

somar(10, 5);

//Atividade 3 – Verificar se um número é par

function ehPar(numero) {
  console.log(numero % 2 === 0);
}

ehPar(4); // true
ehPar(7); // false

//Atividade 4 – Funções das 4 operações

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

// Valores que seriam "recebidos do usuário"

const numero1 = 20;
const numero2 = 4;

const resultadoSoma = somar(numero1, numero2);
const resultadoSubtracao = subtrair(numero1, numero2);
const resultadoMultiplicacao = multiplicar(numero1, numero2);
const resultadoDivisao = dividir(numero1, numero2);

console.log("Soma:", resultadoSoma);
console.log("Subtração:", resultadoSubtracao);
console.log("Multiplicação:", resultadoMultiplicacao);
console.log("Divisão:", resultadoDivisao);