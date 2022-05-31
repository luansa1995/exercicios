const myTopTwoSeries=['Breaking Bad', 'True Detective']; 
const dramaSeries =[
  "The Handmaid's Tale",
  ...myTopTwoSeries,
  'House M.D.'
];
console.log(dramaSeries)

console.log("------------------- REST PARAMETERS-------------------------")
// ---------------------------------   REST PARAMETERS -------------------------



const showName=(... fullName)=>{
  console.log(fullName)
}
showName('luan','augusto', 'santos', 'de', 'sá' );  // OU SEJA, INDEPENDENTE DE QUANTOS NOMES EU POR...A FUNÇÃO VAI PEGAR O CONTEUDO E ARMAZENAR EM UM >>ARRAY<< , QUANDO PESSO PRA EXIBIR O ARRAY fullName, ELE VAI MOSTRAR CASA POR CASA DE TODO ARRAY