
let whereButton = document.querySelector("button");
let whereInput = document.querySelector("input");
let whereUl = document.querySelector("ul");


whereButton.addEventListener("click", addTarefa)

function addTarefa () {
    //let contentOfElement = "Texto de teste, depois vira parametro da minha funçao";
    let newTagLi = document.createElement("li");
    let newTagButton = document.createElement("button");
    newTagButton.setAttribute("class", "botao-lixo");
    newTagButton.innerText = "lixo";
    newTagButton.addEventListener("click", removeTask);
    newTagLi.innerText = whereInput.value;
    newTagLi.appendChild(newTagButton);
    whereUl.appendChild(newTagLi);
    whereInput.value = ""; 
}


function removeTask () {
    // event.target.
}


//PARTE 2 - creando elemento e jogando no HTML
//q01

//1° SELECIONAR ONDE VAI ENTRAR 
//let ondeEstou = document.querySelector("#pai");
// console.log(ondeEstou);

//2° conteudo que vou jogar dentro do elemento criado
//let contentOfElement = "Texto de teste, depois vira parametro da minha funçao";

//3°criar meu elemento = TAG  <p>,<div>, etc
//let newTag = document.createElement("div");

//4° juntando tudo... primeiro minha tag (((newTag))) depois o conteudo que entrará na TAG (((contentElement)))
//newTag.innerText = contentOfElement;

//5° e ultimo passo - JOGAR NO HTML >>> "Jogue em ondeEstou que foi o local selecionado e crie newTag (q ja tem a tag div+ o texto)"
//ondeEstou.appendChild(newTag);