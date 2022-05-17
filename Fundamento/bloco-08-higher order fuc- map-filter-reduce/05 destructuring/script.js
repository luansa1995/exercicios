
// Destructuring - em um objeto ou array se tem algum valor que voce precisa,
//  voce só coleta o que voce precisa



const dog = {
  name: 'Ellie Da Silva',
  breed: 'Corgi',
  age: 7
}

const {name, breed } = dog                  
console.log( name, breed);

//voce pode já pegar e no parametro ja dizer qual o novo nome // no caso name passa a ser capturedName
// const{name: capturedName, age: capturedAge } = dog                  
// console.log(capturedName, capturedAge)