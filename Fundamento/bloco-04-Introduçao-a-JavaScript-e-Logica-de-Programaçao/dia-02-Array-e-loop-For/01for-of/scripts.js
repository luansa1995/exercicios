// let numeros = [1, 2, 3, 4, 5];
// for (let numero of numeros) {
//     console.log(numero);
// }





let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let nam of names[0]) {
    console.log(nam);
}


// let word = ['Hello',
//     'hello02'
// ];
// for (let letter of word[1]) {
//     console.log(letter);
// }

// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:

// let acumulador = 0;

// for (let i = 1; i <= 50; i += 1) {

//     acumulador += i;
// }
// console.log(acumulador);


//2 -

// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

// let acumulador = 0;

// for (let i = 2; i <= 150; i += 1) {
//     if (i % 3 == 0) {
//         acumulador += 1;
//     }
// }

// if (acumulador == 50) {
//     console.log("mensagem secreta !");
// } else {
//     console.log("acumulador : " + acumulador);
// }


// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

const jogo = ["pedra", "papel", "tesoura"];
const jogador01 = Math.floor(Math.random());
console.log(jogador01); // resultado aleatório


lista = ['Linux', 'macOS', 'Windows']
elemento = lista[Math.floor(Math.random() * lista.length)]

console.log(`Meu sistema operacional favorito é ${elemento}!`)