// REDUCE ()


const numbers =[1, 2, 3] ;
const sum=numbers.reduce((accumulator, item) => accumulator+item, 0);                   // pode tambem receber os parametros (INDEX,ARRAY,item,accumulator)
//o codigo reduz o array a um valor final, em que a função recebe parametros
//accumulator(inicialmente definido como 0) e item(inicialmente sendo 1 depois 2,3) e faz a soma do accumulator+item[0] e automaticamente joga dentro de 
//accumulator e continua a fazer com item[1] e item[2]
//no final o array sum terá somente o valor 6 
console.log("soma do array é igual a: \n"+sum);
console.log("-----------------------------------------------------------------");







//reduce ex02 - hardcore

const people = [
   {id: 5 , name: 'Angelica', age: 18, federativeUnit: 'Pernambuco' },
   {id: 81, name: 'Thales', age: 19, federativeUnit: 'São Paulo' },
   {id: 47, name: 'Ana Carolina', age: 18, federativeUnit: 'Alagoas' },
   {id: 87, name: 'Felipe', age: 18, federativeUnit: 'Minas Gerais' },
   {id:9,name: 'Gabriel', age: 20, federativeUnit: 'São Paulo' },
   {id: 73, name: 'Aline', age: 19, federativeUnit: 'Brasília'}
  
]


//o que acontece abaixo? >>> Eu crio uma variavel e jogo dentro dela o array people reduzido(resumido) a um menor array ou a uma string. recebendo como parametro 2 valores, o ACCUMULATOR E {AGE}  lembrando que o age só de tá entre chaves eu já pego diretamente o conteudo de dentro da propriedade age(como map, filter e reduce rodam o array todo, funcionam como um looping e vai pegar o age 18 depois o age 19 ...). Com esses parametros sendo pegos a cada looping ((=>)) ((faça o que ta dentro das chaves)) que é pegar o accumulator[age] e gerar uma propriedade com o valor 18, 19,20 e outros caso sejam criados mais elementos no array 
//accumulator[age] inicialmente é underfined, entao se só deixar undefined+1 = Nan(not a number), ou seja da erro por isso precisou colocar || 1 para que inicialmente ele jogue dentro da variavel valor 1 e dai em diante, accumulator[age] + 1 vai conseguir somar 1+ ... 2+1...3+1 
const agesFrequency=people.reduce((accumulator,{age }) =>{
    accumulator[age]=accumulator[age]+1||1            
     //se acc[age]+1 = Nan(not a Number), atribua 1 variavel   

    return accumulator
  }, {})                                                      
  //por fim {} indica que por padrão o acumulador é uma PROPRIEDADE vazia se fosse " " seria uma string vazia, ou 0 numero zerado.
  console.log(agesFrequency)



    // Resultado desejado:
    //  {18: 3, 19: 2, 20:1}