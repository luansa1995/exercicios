// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   recorrente: 'Sim',
// };

// console.log("Bem vinda, "+info.personagem);


// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
 
// };
//  info.recorrente = "sim";


// //mostra as caracteristicas... personagem, origen,note, recorrente
// // imagine algo assim >     let key = info;                      jogue info dentro de key ou seja> personagem, origem,nota
//         // for(let key in info){
//         //   console.log(key);
//         // }


// //dados dentro da caracteristicas que estão dentro da variavel INFO  >>>         info>caracteristicas/key > (isso aki em seguida)
// for(let key in info){
//   console.log(info[key]);
// }


//6
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
})

console.log("o livro favorito de "+leitor.nome + " "+leitor.sobrenome+" se chama \n"+leitor.livrosFavoritos[0].titulo);

console.log("o livro favorito de "+leitor.nome + " "+leitor.sobrenome+" se chama \n"+leitor.livrosFavoritos[1].titulo);

console.log(leitor.nome + " possui "+ leitor.livrosFavoritos.length+ " Livros favoritos");