// MAP() -  filtra o array e  retorna novo array modificando todo ele sem alterar o original


//numbers.map((item, index, array) {})              //só o item é o brigatório de ser passado
                                                    //voce pode passar só item ou passar os outros 2 valores tbm

const numbers=[1, 2, 3];


const arraySoma1 = numbers.map( item => item = item+1); //cria um novo array chamado arraySoma1 passa por todo array coletando cada item e somando 1
console.log("resposta do MAP(SOMANDO O ARRAY MAIS 1):");
console.log(arraySoma1);
console.log(" ");


// FILTER  - bUSQUE todos os filmes anteriores ao ano 2000!

const tarantinoMovies = [
  {name: 'Bastardos inglórios', release: 2009 },
  {name: 'Pulp Fiction', release: 1994 },
   {name: 'Kill Bill: Volume 2', release: 2004 },
  {name: 'Quatro Quartos', release: 1995 },
  {name: 'Sin City', release: 2005 },
  {name: 'Era uma Vez em... Hollywood', release: 2019 },
  {name: 'Django Livre', release: 2012 },
   {name: 'Cães de Aluguel', release: 1992 },
  {name: 'À Prova de Morte', release: 2007 },
   {name: 'Kill Bill: Volume 1', release: 2003}
]

const tarantinoMoviesAntigo = tarantinoMovies.filter(({release}) => release < 2000 ); // temos que retornar um BOOLEAN ou seja verdadeiro(incluo no meu novo array) caso falso, 

console.log("resposta do FILTER(buscando filmes antigos, anteriores ao ano 2000):");
console.log(tarantinoMoviesAntigo);


/////////////////////////////////////////////////////////////////////////////////

//filter ex02

const firstTravelerCities = [
  'Sydney',
  'Berlim',
  'Lisboa',
  'Sófia',
  'Praga',
  'Bali',
  'Florianópolis'
];

const secondTravelercities = ['Praga', 'Roma', 'Chiang Mai', 'Lisboa', 'Zagreb'];

//const commonCities = firstTravelerCities.filter(city => secondTravelerCities.includes(city));

const commonCities = firstTravelerCities.filter(city => secondTravelercities.includes (city)) 
// const differentCities = firstTravelerCities.filter(city => !secondTravelercities.includes (city))   //para pegar cidades distintas só adicionar a Esclamação !

console.log(" ");
console.log("resposta do FILTER ex02 - cidades em comum:");
console.log(commonCities);