
// >>>código pronto - PARA EXIBIR A RESPOSTA DE FORMA VAGAROSAMENTE
const whereTeste = document.querySelector("#teste");

let resposta01 = "bahia";
let resp01 = resposta01.split('');
let i = 0;                                    //inicio -> 0  
let maxIteracao = resp01.length-1            //maximo -> 4 - nem vou usar

//Ou seja nesse COMBO  entre setInterval a cada 2 segundo fazendo o CORPO DA FUNÇÃO e 
//setTimeOut cancela o setInterval depois de 10 seg, logo isso se transforma num looping q ocorre 5x
//o diferencial aqui é que no setInterval voce pode definir um periodo de espera/suspense
var intervalo = window.setInterval(function() {
    // corpo da funcao
    whereTeste.innerHTML += resp01[i];
    i++
}, 2000);

window.setTimeout(function() {
    clearInterval(intervalo);
}, 10000);

// ----------------------------------------------------------------------------