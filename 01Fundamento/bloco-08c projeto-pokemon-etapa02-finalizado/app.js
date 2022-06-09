//função de buscar pokemons pra nós

//explicação fetch - fetch é tipo... busca lá o pokemon de id 'x'
//depois é criado um array vazio chamado 'pokemonPromises' , que futuramente vamos preencher com os dados de cada pokemon
//depois foi feito um For/looping para acionar a busca varias vezes no site/API como são 150 pokemons, logo vamos buscar 150x 
//usamos o push para empurrar cada pokemon em um dos slots do array q iniciou vazio
//esse push vai conter oque ?  vai conter/receber a busca de uma unidade de pokemon(primeiro o pokemon 1 depois o 2 ,3,4 ...)
//o THEN vai pegar o resultado dessa busca e fazer uma função que recebe esse resultado/Response da busca(fetch) e converta !!! converter porque ?  veja abaixo:
//quando vc busca informações de uma API, de outro site ou de um servidor etc... você não captura uma string , ou um INT ou coisa do tipo, logo voce pega um pacode de informaçãos do tipo JSON (q nada mais é do que informações organizadas como uma grande string no formado de algo que se parece com um OBJETO) justamente pra quando voce pegar esse dado e converte-lo ele facilmente virar esse objeto e poder ser acessado e usado seus dados
//seguindo... ao ter o resultado dessa conversão, agora é um OBJETO, logo pode ser usado seus valores. Ai entra o Promise.all(array já completamente preenchido), já que vai receber varios objetos (varios pokemons)cada um com caracteristicas, com poderes ,etc.
//e com o resultado dessa promise.all é acionado outro THEN esse resultado é usado como o parametro "pokemons" ou seja um OBJETO com varios pokemons(L20). 
//(L25) lembrando que tem q ser acionada essa função, caso contrario nada acontece!!!


  //Parte02 - projeto  - video 10:19 -  ATUALLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL

// (L31) localisei a ul do html
//como eu sei que esse array é um array de promisses e que dentro das promisses tem um objeto com as caracteristicas do objeto/pokemon então catei um tipo de informação pra jogar na tela 
//(L32) neste caso foi o nome do pokemon no slot 24, por ser uma promise uso o then que altomaticamente ele por padrão espera uma promise e já usa o resultado dela como parametro pra a função que voce for criar nela.

//já que consegui exibir 1 valor do slot 24 porque não tentar fazer um looping mostrando todos os nomes ?

const fetchPokemon=()=>{
  const getPokemonUrl = id =>  `https://pokeapi.co/api/v2/pokemon/${id}`
  const pokemonPromises=[];
  for( let i=1; i <= 150 ; i++ ){
    pokemonPromises.push(fetch(getPokemonUrl(i)).then(response=>response.json()));
    
    
  }  



// FOCO EM CONTINUAR AKI NESSA LOGICA !!!
//tentar criar uma variavel q recebe mais paramertos como "poderes " e agrupar esses poderes
//tentar ja jogar no monitor essas informaçoes 
let whereUl = document.querySelector('.pokedex');

  let joinPokemons = Promise.all(pokemonPromises)  
    .then(pokemons => {                      //pokemons = array com 150 slots de pokemons ja como objeto e nao como json
      // console.log(pokemons)     
      whereUl.innerHTML =
        pokemons.reduce( (total, currentValue ) => {
          if(currentValue.id >= 10){
            let typesss =currentValue.types.map((currentItem)=>currentItem.type.name);
            let heldItems = currentValue.held_items.map((typeInfo)=> typeInfo.item.name);

            return total += 
            `<div class='card'> <img class='card-image ${typesss[0]}' alt='${currentValue.name}' 
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${currentValue.id}.png"
        
            ">`
            +
              "<h3 class='card-title'>"+currentValue.id+"-"+currentValue.species.name+ "</h3>\n Peso:" + currentValue.weight+"\n Altura:"+currentValue.height+"\n <br> Held Items: "+ 
              heldItems.join(' | ')+     
              //o resultado desse map, foi outro array com 1 ou varios elementos entao o join agrupa
              "<br> <spam class='card-subtitle'> Type: "+
              typesss.join(" | ")+
              "</spam> </div>"
            //depois adicionar imagem do bicho por ultimo ***
          } else {
            
            let typesss =currentValue.types.map((currentItem)=>currentItem.type.name);
            let heldItems = currentValue.held_items.map((typeInfo)=> typeInfo.item.name);

            return total += 
            `<div class='card'> <img class='card-image ${typesss[0]}' alt='${currentValue.name}' 
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${currentValue.id}.png"
        
            ">`
            +
              "<h3 class='card-title'>"+currentValue.id+"-"+currentValue.species.name+ "</h3>\n Peso:" + currentValue.weight+"\n Altura:"+currentValue.height+"\n <br> Held Items: "+ 
              heldItems.join(' | ')+     
              //o resultado desse map, foi outro array com 1 ou varios elementos entao o join agrupa
              "<br> <spam class='card-subtitle'> Type: "+
              typesss.join(" | ")+
              "</spam> </div>"
            //depois adicionar imagem do bicho por ultimo ***               
            }
          //up.repetição dp
         
          }," ")
        
    
    })
    // document.getElementById("demo").innerHTML = myArray;
    // teste.join('|');  
}
fetchPokemon()


      










// const generate Pokemon Promises=()=>Array(150).fill().map((_,index)=>
//  fetch(getPokemonUrl(index+1)).then(response=>response.json()))
//                                                                            {const generateHTML=pokemons=>pokemons.reduce((accumulator,pokemon)=>
//     const types=pokemon.types.map(typeInfo=>typeInfo.type.name)
//     accumulator+=
//       <li class="card${types[0]}">
//         <img class="card-image"alt="${pokemon.name}"src="https://pokeres.bastionbot.org/images/pokem
//         <h2 class="card-title">${pokemon.id}.${pokemon.name}</h2>
//         <pclass="card-subtitle">${types.join('|')}</p>
//       </li>
//   return accumulator
// },'')
// const insert Pokemons IntoPage=pokemons=>{
//   const ul=document.querySelector('[data-js="pokedex"]')
//   ul.innerHTML=pokemons
// const pokemon Promises=generate Pokemon Promises()



























// console.log(pokemonPromises);

  
  // pokemonPromises[24].then(pokemonPikaxu => whereUl.innerHTML = pokemonPikaxu.species.name )

  //abaixo, agora vou tentar  exibir TODOS OS NOMES 
                            // let arrayNames = [];

                            // for ( let ii=1; ii<=150 ;ii++){
                            //   let whereUl = document.querySelector('.pokedex');
                              
                              
                            //     console.log(
                            //     pokemonPromises.reduce( (total, currentValue ) => {
                            //     return total += currentValue.then(value => { value.json()}) 
                                
                            //   }, "") 
                            //   )


                            


                              
                            // }