// REDUCE ()


const numbers =[1, 2, 3] ;
const sum=numbers.reduce((accumulator, item) => accumulator+item, 0);                   // pode tambem receber os parametros (INDEX,ARRAY,item,accumulator)
//o codigo reduz o array a um valor final, em que a função recebe parametros
//accumulator(inicialmente definido como 0) e item(inicialmente sendo 1 depois 2,3) e faz a soma do accumulator+item[0] e automaticamente joga dentro de 
//accumulator e continua a fazer com item[1] e item[2]
//no final o array sum terá somente o valor 6 
console.log(sum)