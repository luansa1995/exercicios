// let produto01 = 20;
// let produto02 = 25;

// console.log(produto01 + produto02);

// 15 % 2 === 0;

// console.log(teste);

// let patientId = 50;
// let isEnrolled = true;
// const patientInfo = { firstName: 'Ana', lastName: 'Santos' };
// const patientEmail = 'ana@email.com';


// console.log(typeof patientEmail);




//qUESTÕES NO FINAL DO CODIGO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const a = 8,
    b = 10,
    c = 5;

let maior;

const anguloA = 80,
    anguloB = 70,
    anguloC = 30;

let nomePeca = "REI";
let nomePecaConvertido;

let grade = 92;

const numA = 3,
    numB = 5,
    numC = 9;

let bol = false;

const custoDeProduto = 100,
    valorDeVenda = 200;

console.log("Soma de A e B");
console.log(a + b);

console.log("subitração de A e B");
console.log(a - b);

console.log("Multiplicação de A e B");
console.log(a * b);

console.log("divisão de A e B");
console.log(a / b);

console.log("Modulo de A e B");
console.log(a % b);

// maior numero
if (a > b) {
    console.log("A é maior");
} else if (a < b) {
    console.log("B é maior");
} else {
    console.log("A e B tem mesmo tamanho");
}

//maior de tres numeros A B C

if (a >= b && a >= c) {
    maior = a;
} else if (b >= a && b >= c) {
    maior = b;
} else if (c >= a && c >= b) {
    maior = c;
}
console.log("Maior valor é: " + maior);

if (maior > 0) {
    console.log("Valor " + maior + " é um valor POSITIVO!");
} else if (maior < 0) {
    console.log("Valor " + maior + " é um valor NEGATIVO!");
} else {
    console.log("Valor " + maior + " é = a 0");
}

// exercicio angulos triangulo
if (anguloA + anguloB + anguloC == 180 && anguloA > 0 && anguloB > 0 && anguloC > 0) {
    console.log("é um triangulo !");
} else if (anguloA <= 0 || anguloB <= 0 || anguloC <= 0) {
    console.log("Algum(ns) desse(es) angulo(s) é/são inválidos")
} else {
    console.log(" não é um triangulo !");
}


//Xadrez


nomePecaConvertido = nomePeca.toLowerCase(); // joguei o nome da var, pra minusculo


//copiei os textos de regras de XADREZ do gabarito
if (nomePecaConvertido == "rei") {
    console.log('Rei-> Uma casa apenas para qualquer direção.');
} else if (nomePecaConvertido == "rainha") {
    console.log('Rainha-> Diagonal, horizontal e vertical.');
} else if (nomePecaConvertido == "bispo") {
    console.log('Bispo-> Diagonal.');
} else if (nomePecaConvertido == "cavalo") {
    console.log('Cavalo -> "L" pode pular sobre as peças.');
} else if (nomePecaConvertido == "torre") {
    console.log('Torre -> Horizontal e vertical.');
} else if (nomePecaConvertido == "peão") {
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
} else {
    console.log("Nome da peça digitada errrada! tente novamente!")
}


if (grade >= 90) {
    console.log("Nota A");
} else if (grade >= 80) {
    console.log("Nota B");
} else if (grade >= 70) {
    console.log("Nota C");
} else if (grade >= 60) {
    console.log("Nota D");
} else if (grade >= 50) {
    console.log("Nota E");
} else if (grade < 50) {
    console.log("Nota F");
} else {
    console.log("largue de ser abestado e bote a nota certa !")
}


if (numA % 2 == 0 || numB % 2 == 0 || numC % 2 == 0) {
    console.log("Tem Número PAR!");
    bol = true;
    console.log(bol);
} else {
    console.log("só tem número IMPAR!");
    console.log(bol);
}


if (numA % 2 == 1 || numB % 2 == 1 || numC % 2 == 1) {
    console.log("Tem Número IMPAR!");
    bol = true;
    console.log(bol);
} else {
    console.log("só tem número PAR!");
    console.log(bol);
}


//valor de custo e de venda
if (valorDeVenda < 0 || custoDeProduto < 0) {
    console.log("tem coisa errada ai");
}

let valorCustoTotal = custoDeProduto + (20 / 100) * custoDeProduto;
let lucro = valorDeVenda - valorCustoTotal;

console.log("O lucro é de " + (lucro * 1000));



//11
let salBruto = 2100; //adicione o novo salario aaqui !!!
salBruto = salBruto;
let salbruto02 = salBruto;
let salBrutoSemInss, salBrutoSemImpostoR;
let deducao;
let deducao02;

if (salBruto <= 1556.94) {
    salBrutoSemInss = salBruto - (salBruto * (8 / 100))
} else if (salBruto <= 2594.92) {
    salBrutoSemInss = salBruto - (salBruto * (9 / 100))
} else if (salBruto <= 5189.82) {
    salBrutoSemInss = salBruto - (salBruto * (11 / 100))
} else {
    salBrutoSemInss = salBruto - 570.88;
}
console.log("Deduzido INSS fica: " + salBrutoSemInss);



if (salbruto02 <= 1903.98) {
    console.log("Escapou da onça! vá trabalhar mais");
    deducao02 = 0;
    salBrutoSemImpostoR = 0;
} else if (salbruto02 <= 2826.65) {
    salBrutoSemImpostoR = salbruto02 - (salbruto02 * (7.5 / 100)) - 142.80;
} else if (salbruto02 <= 3751.05) {
    salBrutoSemImpostoR = salBruto02 - (salbruto02 * (15 / 100)) - 354.80;
} else if (salbruto02 <= 4664.68) {
    salBrutoSemImpostoR = salbruto02 - (salbruto02 * (22.5 / 100)) - 636.13;
} else {
    salBrutoSemImpostoR = salbruto02 - (salbruto02 * (27.5 / 100)) - 869.36;
}

deducao = salBruto - salBrutoSemInss;
deducao02 = salbruto02 - salBrutoSemImpostoR;


console.log("Deduzido Imposto de Renda: " + salBrutoSemImpostoR);

console.log("Deduzido Imposto de Renda e INSS: " + ((salbruto02 - deducao) - deducao02));








// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)
// *Dica: Neste link você encontra mais detalhes sobre operadores matemáticos 😉
// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.
// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)
// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if .
// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if .
// Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)
// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
// Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
// Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
// R$ 2.670,00: salário com INSS já deduzido;
// 7.5%: alíquota de imposto de renda;
// R$ 142,80 parcela a se deduzir do imposto.
// Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
// O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
// Resultado: R$ 2.612,55.