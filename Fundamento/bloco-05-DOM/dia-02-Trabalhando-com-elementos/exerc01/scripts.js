//1° SELECIONAR ONDE VAI ENTRAR  document.queryselector ou document.getElemenetby...
//2° cria variavel conteudo que vou jogar dentro do elemento(<TAG>) criado e já atribuir ele VAR = "texto aki"
//3°criar meu elemento>>  let VAR = createElement("div")           TAGs  <p>,<div>, etc
//4° juntando tudo... primeiro minha tag (((newTag))) depois o conteudo que entrará na TAG (((contentElement)))  >>> newTag.innerText = contentOfElement
//5° e ultimo passo - JOGAR NO HTML >>> "Jogue em ondeEstou que foi o local selecionado e crie newTag (q ja tem a tag div+ o texto)"  ondeEstou.appendchild(newTag)                
                
                
                // // *INSPECIONE O SITE NO >LIVE SERVER< VÁ EM CONSOLE E VEJA O QUE FOI EXIBIDO


                // // console.log(document.getElementById('start').nextSibling); // nó

                // // console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>

                // //______________________________PARTE 01________________________________________________-


                //                 // 1 - Acesse o elemento elementoOndeVoceEsta .
                // let exercicio01 = document.getElementById("elementoOndeVoceEsta");  //nao precisa
                // // console.log(document.getElementById("elementoOndeVoceEsta"));
                // //ou
                // // console.log(exercicio01);


                //                 //2 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
                // let exercicio02 = document.getElementById("elementoOndeVoceEsta").parentNode;
                // // console.log(document.getElementById("elementoOndeVoceEsta").parentNode);   //parentElement traria com tag acho >>>   <section</sec...

                // exercicio02.style.background = "red";
                //         // ou       >      opção abaixo serve tbm... porem a de cima e mais limpa
                // // document.getElementById("elementoOndeVoceEsta").parentNode.style.background = "blue";

                //                 //3 Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se
                //                 //lembra dos vídeos da aula anterior, como fazer isso?


                // let exercicio03 = document.getElementById("primeiroFilhoDoFilho");
                // // console.log(exercicio03);

                //                         //4  Acesse o primeiroFilho a partir de pai .
                // let exercicio04 = document.getElementById("pai").firstElementChild;
                // console.log(exercicio04);

                //                                 //5 Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
                                
                // console.log(exercicio01.previousElementSibling);

                
                //                                 //6 Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
                // console.log(exercicio01.nextSibling);

                //                                 //7 Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
                // console.log(exercicio01.nextElementSibling);
                //                                 //8 Agora acesse o terceiroFilho a partir de pai .

                // // console.log(exercicio02.lastElementChild.previousElementSibling);


                                     
                        //PARTE 2 - criando elemento e jogando no HTML
//parte 2-q01

//1° SELECIONAR ONDE VAI ENTRAR 
let ondeEstouPai = document.querySelector("#pai");
// console.log(ondeEstou);

//2° conteudo que vou jogar dentro do elemento criado
let contentOfElement = "Texto de teste, depois vira parametro da minha funçao";

//3°criar meu elemento = TAG  <p>,<div>, etc
let newTag = document.createElement("div");

//4° juntando tudo... primeiro minha tag (((newTag))) depois o conteudo que entrará na TAG (((contentElement)))
newTag.innerText = contentOfElement;

//5° e ultimo passo - JOGAR NO HTML >>> "Jogue em ondeEstou que foi o local selecionado e crie newTag (q ja tem a tag div+ o texto)"
ondeEstouPai.appendChild(newTag);



//parte 2-q02  - Crie um filho para elementoOndeVoceEsta .

//1° SELECIONAR ONDE VAI ENTRAR  document.queryselector ou document.getElemenetby...
 // ondeEstou criei na q01
 let ondeEstou = document.querySelector("#elementoOndeVoceEsta");
//2° cria variavel conteudo que vou jogar dentro do elemento(<TAG>) criado e já atribuir ele VAR = "texto aki"
        let ContentOfOndeEstouSon = "2222sou filho de ondeestou2222";
//3°criar meu elemento>>  let VAR = document.createElement("div")            TAGs  <p>,<div>, etc
        let newTagFilhoDeOndeEstou = document.createElement("div");
//4° juntando tudo... primeiro minha tag (((newTag))) depois o conteudo que entrará na TAG (((contentElement)))  >>> newTag.innerText = contentOfElement
newTagFilhoDeOndeEstou.innerText = ContentOfOndeEstouSon;  
//5° e ultimo passo - JOGAR NO HTML >>> "Jogue em ondeEstou que foi o local selecionado e crie newTag (q ja tem a tag div+ o texto)"  ondeEstou.appendchild(newTag)
ondeEstou.appendChild(newTagFilhoDeOndeEstou);


//parte2-q03  Crie um filho para primeiroFilhoDoFilho .
//1° SELECIONAR ONDE VAI ENTRAR  document.queryselector ou document.getElemenetby...
let ondePrimeiroFilhoDoFilho = document.querySelector("#primeiroFilhoDoFilho")
//2° cria variavel conteudo que vou jogar dentro do elemento(<TAG>) que irei criar no passo 3° e já atribuir ele VAR = "texto aki"
let contentOfSonOfPrimeiroFilhoDoFilho = "333conteudo questao 3333";
//3°criar meu elemento>>  let VAR = document.createElement("div")           TAGs  <p>,<div>, etc
let newTagPrimeiroFilhoDoFilhoSon = document.createElement("div");
//4° juntando tudo... primeiro minha tag (((newTag))) depois o conteudo que entrará na TAG (((contentElement)))  >>> newTag.innerText = contentOfElement
newTagPrimeiroFilhoDoFilhoSon.innerText = contentOfSonOfPrimeiroFilhoDoFilho;
//5° e ultimo passo - JOGAR NO HTML >>> "Jogue em ondeEstou que foi o local selecionado e crie newTag (q ja tem a tag div+ o texto)"  ondeEstou.appendchild(newTag)     
ondePrimeiroFilhoDoFilho.appendChild(newTagPrimeiroFilhoDoFilhoSon);


//parte2-q04    A partir desse filho criado, acesse terceiroFilho .  DESISTI
//1° SELECIONAR ONDE VAI ENTRAR  document.queryselector ou document.getElemenetby...
// ondePrimeiroFilhoDoFilho.classN\ame = "ultimaAtividade";  // adicionei uma classe a esse local pra facilitar
        // let ondeFilhoDoPrimeiroFilhoDoFilho = document.getElementsByClassName("ultimaAtividade")
//2° cria variavel conteudo que vou jogar dentro do elemento(<TAG>) criado e já atribuir ele VAR = "texto aki"



//6° COMO DELETAR ALGO ?

//var list = document.getElementById("myList");   // Pega a <ul> tag/element cujo id="myList"
// list.removeChild(list.childNodes[0]);           // Remove <ul> primeira  nó  filho (index 0)


// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .

let checarPaiDoPai = document.querySelector("#paiDoPai");

// console.log(ondeEstouPai.firstElementChild);
let primeiroFilho = document.getElementById("primeiroFilho");

primeiroFilho.remove();

// ondeEstouPai.removeChild[0];
