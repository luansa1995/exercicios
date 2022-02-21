// 1 -fatorial 

// let  fatorial=10;

// for(let i=1; i<10;i+=1){
//   fatorial *=i;
//   console.log(fatorial);
// }


//2  separar uma string por letra e por num array e inverter a palavra

// let word = 'tryber';

// let array_de_letter = word.split(""); // separei letra por letra, joguei nesse outro array

// console.log(array_de_letter);


// for (let i=0; i<array_de_letter.length;i+=1){
//   // console.log(i);
//   console.log(array_de_letter[array_de_letter.length-i-1]);
// }




//3  maior e menor array[i]

// let array = ['java', 'javascript', 'python', 'html', 'css'];

// let array_de_letter = word.split(""); 

// let menorPalavra = array[0];
// let maiorPalavra = array[0];

//   for(let i=0; i<array.length ; i+=1){
//     console.log(array[i].length);
//     if(array[i].length < menorPalavra.length){
//       menorPalavra = array[i];
//     }
//     if(array[i].length > maiorPalavra.length){
//       maiorPalavra = array[i];
//     }
//   }

//   console.log(menorPalavra);

//   console.log(maiorPalavra);


//4
let acumulador = 0;
let  divisores =0;
let i,ii;
// console.log(divisores);
// console.log(decremento);

for( i=50;i>=1;i-=1){         //x50   mudar depois
    for ( ii=i;ii>=1;ii-=1){                         //repetir ate chegar a ele mesmo
        if(i%ii==0 ){
            divisores++;
        }
               
    }
    
    
    if(divisores==2){
        console.log("este é numero primo: "+i);
    }
    divisores = 0;
}




