
    console.log("----------------------exemplo 01(explicação comentada embaixo) --------------------");

const topBrazilMovies = [
  {title: 'Vingadores: Ultimato', peopleAmount: 19_686_119, distributedBy: 'Disney' },
  {title: 'Titanic', peopleAmount: 17_050_000, distributedBy: 'Paramount/20th Century' },
  {title: '0 Rei Leão', peopleAmount: 16_267_649, distributedBy: 'Disney' },
  {title: 'Vingadores: Guerra Infinita', peopleAmount: 14_572_181, distributedBy: 'Disney' },
  {title: 'Tubarão', peopleAmount: 13_035_000, distributedBy: 'Universal' },
  {title: 'NadaaPerder', peopleAmount: 11_944_985, distributedBy: 'Paris Filmes' },
  {title: 'Os Dez Mandamentos', peopleAmount: 11_259_536, distributedBy: 'Paris/Downtown Filmes' },
  {title: 'Tropa de Elite 2', peopleAmount: 11_204_815, distributedBy: 'Zazen' },
  {title: 'Os Vingadores', peopleAmount: 10_968_065, distributedBy: 'Disney' },
  {title: 'Dona FloreSeus Dois Maridos', peopleAmount: 10_735_524, distributedBy:'Embrafilme'}
]

console.log(
  topBrazilMovies
    .filter(({ distributedBy }) => distributedBy === 'Disney')
    .reduce((accumulator, {peopleAmount} ) => accumulator + peopleAmount, 0));

    //explicando o código. esse consolelog é uma linha só ... pulamos linhas pra ficar susualmente melhor saber o metodo filter e o que é o metodo reduce
    //primeiro foi usado o filter. o metodo recebe o valor do tipo PROPRIEDADE (já que veio com chaves e as chaves são usadas para propriedades) distributedBy e faz(=>) teste se cada propriedade é ou não igual a 'Disney' quando for verdadeiro joga a linha do array nesse novo array que é criado automaticamente com o filter e jogo em seguida tendo como retorno dessa função esse array já é aplicado o REDUCE que vai fazer um acumulo de todos os valores de pessoas que assistiram a estes filmes. de que forma? // aceionando a função reduce e recebendo como parametros 2 parametros o (acumulator) e a propriedade ({peopleAmout}) e em seguida => (faz) a soma do acumulador com people amount (,) (sendo) q acumulador começa sendo 0.

    console.log("----------------------exemplo 02 --------------------");



    console.log("----------------------exemplo 02 --------------------");

  
    const pets= [
      {name: 'Boris', age: 4, gender: 'Male', type: 'Dog' },
      {name: 'Jimmy', age: 1, gender: 'Male', type: 'Cat' },
      {name: 'Pérola', age: 2, gender: 'Female', type: 'Dog' },
      {name: 'Lucy', age: 5, gender: 'Female', type: 'Cat' },
      {name: 'Cristal', age: 3, gender: 'Female', type: 'Dog' },
      {name: 'Chico', age: 6, gender: 'Male', type: 'Dog'}
    ]  
                    


    const getDogs = ({ type }) => type ===  'Dog'

    const convertToHumanAge = ({ name, age }) => {
      // name: name,
      // convertedAge: age*7
      let teste = {name: name, convertedAge: age*7}
    return teste
    }

////////////// OU  a opção abaixo/////////////////////////////////

//ou da pra resumir a ação dessa funçao colocando os valores entre ({name, convertedAge: age*7})... assim, a função automaticamente ja retorna esses valores sem precisar usar o RETURN. ou seja, uma forma mais ENXUTA porem funciona do mesmo jeito

// const convertToHumanAgeTwo =  ({ name, age }) => ({
//   name,
//   convertedAge: age*7
// })
 

   

    console.log(
      pets
        .filter(getDogs)
       .map(convertToHumanAge)
    )