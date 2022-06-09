
//01

// let diasDaSemana = {
//   1: 'domingo',
//   2: 'segunda',
//   3: 'terça',
//   4: 'quarta',
//   5: 'quinta',
//   6: 'sexta',
//   7: 'sábado',
// };

// console.log(diasDaSemana[1]);



//02

// let conta = {
//   agencia: '0000',
//   banco: {
//     cod: '012',
//     id: 4,
//     nome: 'TrybeBank',
//   },
// };

// let infoDoBanco = 'banco';
// console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
// console.log(conta[infoDoBanco]['nome']); // TrybeBank

// console.log(conta.agencia); // 0000
// console.log(conta['agencia']); // 0000

// console.log(conta.banco.cod); // 012
// console.log(conta['banco']['id']); // 4


//03 - ENCADEADA 

// let usuario = {
//   id: 99,
//   email: 'jakeperalta@gmail.com',
//   infoPessoal: {
//     nome: 'Jake',
//     sobrenome: 'Peralta',
//     endereco: {
//       rua: 'Smith Street',
//       bairro: 'Brooklyn',
//       cidade: 'Nova Iorque',
//       estado: 'Nova Iorque',
//     },
//   },
// };

// console.log(usuario['id']); // 99
// console.log(usuario.email); // jakeperalta@gmail.com

// console.log(usuario.infoPessoal.endereco.rua); // Smith Street
// console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque




//04

// let moradores = [
//   {
//     nome: 'Luiza',
//     sobrenome: 'Guimarães',
//     andar: 10,
//     apartamento: 1005,
//   },
//   {
//     nome: 'William',
//     sobrenome: 'Albuquerque',
//     andar: 5,
//     apartamento: 502,
//   },
//   {
//     nome: 'Murilo',
//     sobrenome: 'Ferraz',
//     andar: 8,
//     apartamento: 804,
//   },
//   {
//     nome: 'Zoey',
//     sobrenome: 'Brooks',
//     andar: 1,
//     apartamento: 101,
//   },
// ];

// let primeiroMorador = moradores[0];
// console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
// console.log(primeiroMorador['andar']); // 10

// let ultimoMorador = moradores[moradores.length - 1];
// console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
// console.log(ultimoMorador.nome); // Zoey




// let player = {
//   name:"marta",
//   lastName: "silva",
//   age:34,
//     medals: {
//     golden:2,
//     silver:3,
//   }
//  } 


//  console.log("a jogdora "+player.name+ " "+ player.lastName+"de "+player.age+ " anos ganhou "+player.medals.golden+" de ouro");


//arvore de asterisco questão BONUS 05

let linha01 ="";
let linha02 ="";
let linha03 ="";
let linha04 ="";
let linha05 ="";

for (let i=1;i<=5;i+=1){      // 5x apenas quando for 3
  if (i != 3){
    linha01 += " "; 
  }else {
    linha01 += "*";
   
  }  
}  

console.log(" "+linha01);



for (let i=1;i<=5;i+=1){         // for  // 5x apenas quando for 2 e 4
  if (i != 2 && i != 4 ){
    linha02 += " "; 
  } else {
    linha02 += "*";
  }
}  
 console.log(" "+linha02);




 for (let i=1;i<=5;i+=1){             // for  // 5x  1 e 5
  if (i != 2 && i != 3 && i != 4 ){
    linha03 += "*"; 
  } else {
    linha03 += " ";
  }
}  
 console.log(" "+linha03);




 for (let i=1;i<=7;i+=1){             // for //em todos os looping
 
    linha04 += "*";
  
}  
 console.log(linha04);



