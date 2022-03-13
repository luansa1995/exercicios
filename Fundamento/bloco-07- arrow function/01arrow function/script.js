
            // EX.:
            // Normal:

function sumNormal (a, b){
	return a+b;
}


        // Arrow function 01 resumindo

const sum = (a, b) => {
return a + b; 
}

                   // posso apagar até o nome “return” pois com 1                       
                    //linha só já se entende que vai retornar o que vem a seguir 

//  Pode ficar ainda mais resumida 
// Arrow function 02 Resumida mais ainda(sem parenteses)
                    
      const sum02 = (a , b) => a+b;  
      //criou uma variável que será a função// que recebe A e B// e faz a ação a+b e //automaticamente retorna resultado dessa soma, mesmo com o return omitido               
                    

///////////////////////////////////////////////////

const getRandomNumber = () => Math.floor(Math.random() * 10);

console.log(getRandomNumber());  // mostrar valor


///////////////////// FUNÇÃO ANONIMA DENTRO DE UM addEventListener ////////////////////////////////
//vai dar erro pois não especifiquei onde esse evento acontece.... coloquei em document ex>>> whereButton
document.addEventListener('click', function() {
    console.log('clicked');
})


document.addEventListener('click', () => {
    console.log('clicked');
})


