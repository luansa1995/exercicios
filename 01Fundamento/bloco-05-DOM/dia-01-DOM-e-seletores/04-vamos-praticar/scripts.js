
          function mudaTextoP(t){
            let texto = document.getElementsByTagName("p")[1];   // add o texto no 2° <p>  array [0,1,2]
            texto.innerText = t;


            //testado-OK > add esse texto em todas as linhas
            // for (let i=0;i<3;i+=1){
            //   let texto = document.getElementsByTagName("p")[i]; 
            //   texto.innerText = "com trabalho TOP e viajando todo fim de semana!";
            // }
          }
          mudaTextoP("com trabalho TOP e viajando todo fim de semana!");
     
        //  // questão 01 tentativa 02 - testado OK
        //  function mudaTextoParagrafo (diga){
        //    let texto = document.querySelector("h1");                 // DUVIDA - COMO SELECIONO UMA CASA  do paragravo 
        //    texto.innerText = diga;                                   // arrai do paragrafo  p[2]
        //  }
        //  mudaTextoParagrafo( "testando o DIGA");               //2° como coloco uma tag atas da outra ex.
        //                                                       //  header.h1  OU HEADER >H1



//__________________________________________________________________________

//q02

function mudarBackgroundMain (v) {
  let verde  = document.getElementsByClassName("main-content")[0];
  verde.style.background = v;                          //no style, não ta autocompletando 
}                                                             //aparenta até tá errado mas funciona

mudarBackgroundMain("rgb(76,164,109)");


//q03

function mudarFundoVermelhoBranco(w){
  let branco = document.getElementsByClassName("center-content")[0];
  branco.style.background = w ;
}
mudarFundoVermelhoBranco("rgb(255, 255, 255)");

//q04 
function correcaoTexto(t){
  let texto = document.getElementsByClassName("title")[0];
  console.log(texto.innerText = t);
}
correcaoTexto("Exercício 5.1 - JavaScript");


//q05
function paragrafoMaiusculo(){
  let paragrafo = document.getElementsByTagName("p")[0];
  // paragrafo.innerText = paragrafo.innerText.toUpperCase();
  console.log(paragrafo.innerText = paragrafo.innerText.toUpperCase());
  // paragrafo.innerText = "posso sobrescrever o texto por aqui mesmo atrbuindo esse valor".toUpperCase();
 
}
paragrafoMaiusculo();

//Q06

function exibirTagsP(){

  for (let i=0;i<3;i+=1){
    let textos = document.getElementsByTagName("p")[i];         
    console.log(textos.innerText);                            // mostrar no console SO FUNFA NO DA WEB
                                                            //É NORMAL nao funfar no console VScode
  }



  // let textos = document.getElementsByTagName("p");      //nao definindo o vaor do array ele tem os 3x   
  // for (let i=0;i<3;i+=1){
  //   console.log(textos[i].innerText);                           
  // }
  
}
exibirTagsP();