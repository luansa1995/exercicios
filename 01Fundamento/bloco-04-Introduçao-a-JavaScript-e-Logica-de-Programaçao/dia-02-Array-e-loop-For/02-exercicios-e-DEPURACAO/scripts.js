//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;



//01


// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let i = 0; i < 10; i += 1) {
//     console.log(numbers[i]);
// }

// // 2

// let soma = 0;
// for (let i = 0; i < 10; i += 1) {
//     console.log(numbers[i]);
//     soma += numbers[i];
// }
// console.log(soma);

//todos os exercicios dessa lista são faceis... PULEI


let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (array[index] < array[secondIndex]) {
            let position = array[index];
            array[index] = array[secondIndex];
            array[secondIndex] = position;
        }
    }
}

console.log(array);