
let whereButton = document.querySelector("button");
let whereInput = document.querySelector("input");
let whereUl = document.querySelector("ul");
let newTagLi = document.createElement("li");   // repetido

//PROVEVEL Q NAO USEI ESSES 2 ABAIXO
let whereLi = document.getElementsByTagName("li");
let whereSpan = document.querySelectorAll(".span");
// let whereTeste = document.getElementsByClassName("teste");


whereButton.addEventListener("click", addTarefa);

function addTarefa () {
    let newTagLi = document.createElement("li");
    let newTagSpan = document.createElement("span");
    let newTagButton = document.createElement("button");
    newTagButton.setAttribute("class", "botao-lixo");
    newTagButton.innerText = "Delete";
    newTagButton.addEventListener("click", removeTask);
    newTagSpan.innerText = whereInput.value;  //
    newTagLi.appendChild(newTagSpan);
    newTagLi.addEventListener("mouseover", setBorder);     
    newTagSpan.className = "span";
    newTagSpan.addEventListener("dblclick", setStrike);
    newTagLi.appendChild(newTagButton);
    whereUl.appendChild(newTagLi);
    whereInput.value = "";  
}

function removeTask (event) {
//   let whereLi = document.getElementsByTagName("li");
//   let indexArray = indexOf(event.target);
//   whereLi.splice(indexArray, 1); 
    event.target.parentNode.remove();
}


// whereLi.addEventListener("click", strike);
function setStrike (event){
     if(event.target.className == "span"){
        event.target.classList.add("strike");
    }else {
        event.target.classList.remove("strike");
    }

}

function setBorder (event){
    if(event.target.className == "span"){
       event.target.classList.add("border");
   }else {
       event.target.classList.remove("border");
   }
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










// whereTeste.addEventListener("mouseover", strikeThrough);


// let whereTeste = document.getElementsByClassName("teste");
//     whereTeste.addEventListener("click", strike);
//     function strike (event){
    
//         event.target.setAttribute("class", "strike");
//         // event.target.className = "strike";
//     }