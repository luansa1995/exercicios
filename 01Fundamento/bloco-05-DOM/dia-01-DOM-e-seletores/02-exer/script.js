// BASEEEEEEEEEEEEEEE

// let teste = document.getElementById("footer-container");    //1° joguei numa variavel
 //teste.innerText = "LUAN";                             //2° usei o innerTexto para mudar texto no site
 //teste.style.backgroundColor = "red";                 //3° posso fazer alterações de estilo, etc.



//////////////////////////////////////////////////////////////////////////////////

//1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

 function mudaTextoP(p){
     let texto = document.getElementsByTagName("p");
    texto.innerText = p;
    texto.style.backgroundColor = "blue";

 }

 mudaTextoP("Daqui a 2 anos tô trabalhandoe  viajando aos finais de semana !!! uhu");





//document.getElementById()
//document.getElementsByClassName()
//document.getElementsByTagName()