//problema 01 - quando voce aciona 2 resposta ao mesmo tempo ... por I ser
// usado nos dois eventos... ele empbaralha pulando 1 letra em cada resposta
let i = 0;    

//transformando em um array
const respostas = ["bahia", "uruguai", "cuba"];
const respSplit = respostas.map(splitWords);


const whereAnser = ['document.querySelector(".resp01")', 'document.querySelector(".resp02")', 'document.querySelector(".resp03")'];
console.log(whereAnser);

for ( let index = 0 ; index < respostas.length ; index = index+1 ){

    // let whereAnser01 = document.querySelector(".resp01")
    whereAnser[0].replace("'","");
    console.log(whereAnser[0]);
    whereAnser[0].addEventListener("click", function () {
    
    var intervalo = setInterval(function() {
        // corpo da funcao
        whereAnser[index].innerHTML += respSplit[i];
        i++
    }, 2000);             //total 2000 mile segundos // a=5 

    setTimeout(() => {
        clearInterval(intervalo);
        i = 0;
    }, respSplit[index].length *2000);   // a e resp01.lenght ambos = 5
});
}


function splitWords (word){
    return word.split('');
}

        // //resposta 01
        // let resposta01 = "bahia";
        // let resp01 = resposta01.split('');
        // let whereAnser01 = document.querySelector(".resp01")
        // whereAnser01.addEventListener("click", function () {
            
        //     var intervalo = setInterval(function() {
        //         // corpo da funcao
        //         whereAnser01.innerHTML += resp01[i];
        //         i++
        //     }, 2000);             //total 2000 mile segundos // a=5 

        //     setTimeout(() => {
        //         clearInterval(intervalo);
        //         i = 0;
        //     }, resp01.length *2000);   // a e resp01.lenght ambos = 5
        // });

// let whereAnser01 = document.querySelector(".resp01")
// whereAnser01.addEventListener("click", slowAnser(resp01, whereAnser01));

            // //resposta 02
            // let resposta02 = "uruguai";
            // let resp02 = resposta02.split('');
            // let whereAnser02 = document.querySelector(".resp02")
            // whereAnser02.addEventListener("click", function () {
                
            //     var intervalo = setInterval(function() {
            //         // corpo da funcao
            //         whereAnser02.innerHTML += resp02[i];
            //         i++
            //     }, 2000);             //total 2000 mile segundos // a=5 

            //     setTimeout(() => {
            //         clearInterval(intervalo);
            //         i = 0;
            //     }, resp02.length *2000);   // a e resp01.lenght ambos = 5
            // });







