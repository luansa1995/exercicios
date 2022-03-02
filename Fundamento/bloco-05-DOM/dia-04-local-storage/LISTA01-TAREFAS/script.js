
let whereButton = document.querySelector("button");
let whereInput = document.querySelector("input");
let whereUl = document.querySelector("ul");
    whereUl.className = "no-border";
let newTagLi = document.createElement("li");   // repetido
let whereOl = document.querySelector('ol');
 let ii=1; 
let arrayOfTasks = [];



//PROVEVEL Q NAO USEI ESSES 2 ABAIXO
let whereLi = document.getElementsByTagName("li");
let whereSpan = document.querySelectorAll(".span");
// let whereTeste = document.getElementsByClassName("teste");


whereButton.addEventListener("click", addTarefa);  // mudar pra addtask

function addTarefa () {  // mudar pra addtask   anto pro DOM quanto pro STORAGE
    let newTagLi = document.createElement("li");
    let newTagSpan = document.createElement("span");
    let newTagButton = document.createElement("button");
   
    newTagButton.setAttribute("class", "botao-lixo");
    newTagButton.innerText = "Delete";
    newTagButton.addEventListener("click", removeTask);
    newTagSpan.innerText = whereInput.value;  // preenche com texto
    arrayOfTasks.push(whereInput.value);      // preenchendo array pro addStorage()
   
   
            newTagLi.appendChild(newTagSpan);
            newTagLi.addEventListener("mouseover", setBorder);
            newTagLi.addEventListener("mouseout", takeItOutBorder);       
            newTagSpan.className = "span";
            newTagSpan.addEventListener("dblclick", setStrike);
            newTagLi.appendChild(newTagButton);
            whereUl.appendChild(newTagLi);
            // console.log(whereSpan.innerText);

    //mostrar lista na parte do STORAGE


    //deixando desativado pois nao criei nada pra limpar o local storage e ai acabar acumulando
    
    // adicionar();
    //deixando desativado pois nao criei nada pra limpar o local storage e ai acabar acumulando
    addStorage();
    showTasksStorage();

    whereInput.value = "";
}


    







function addStorage() {
    localStorage.setItem('list_task', JSON.stringify(arrayOfTasks));
    // alert("Item adicionado.");
    
   
}

// function removeTaskArray(){}

function showTasksStorage () {
    whereOl.innerHTML = "";       // limpo a lista toda antes de jogar lista atualizada
    arrayOfTasks = JSON.parse(localStorage.getItem('list_task'));

    for (key of arrayOfTasks){

        let newTagLi = document.createElement("li");
        let newTagSpan = document.createElement("span");
        let newTagButton = document.createElement("button");

        newTagSpan.innerText = key;
        newTagButton.setAttribute("class", "botao-lixo");
        newTagButton.innerText = "Delete";
        whereOl.appendChild(newTagLi);
        newTagLi.appendChild(newTagSpan);
        newTagLi.appendChild(newTagButton);
        newTagSpan.className = "span";
        newTagLi.addEventListener("mouseover", setBorder);
        newTagLi.addEventListener("mouseout", takeItOutBorder);
       
        newTagSpan.addEventListener("dblclick", setStrike);  
        whereInput.value = "";
    }
    
}


function removeTask (event) {
//   let whereLi = document.getElementsByTagName("li");
//   let indexArray = indexOf(event.target);
//   whereLi.splice(indexArray, 1); 
    event.target.parentNode.remove();
                //PENDENTE
                            //remover do storage também
                            console.log(event.target.parentNode.length);
    showTasksStorage();
}


// whereLi.addEventListener("click", strike);
function setStrike (event){
    if(event.target.classList == "span"){
            event.target.classList.add("strike");
        } else  {
            event.target.classList.remove("strike");
        }

}

function setBorder (event){
    // if(event.target.className == "span strike"){
    event.target.parentNode.classList.add("border");
    // } else if (event.target.className == "span")
}

function takeItOutBorder (event){
    event.target.parentNode.classList.remove("border");
}

// function createArray(){
 
//     let whereSpanTwo = document.getElementsByTagName("span");

//     let myArrayOfTasks = [];
    
//     // for(let i=0 ; i<whereSpanTwo.length ; i+=1){
//     //     myArrayOfTasks.push(whereSpanTwo[i]);
//     //     //erro >>> VM7432:1 Uncaught ReferenceError: myArrayOfTasks is not defined at <anonymous>:1:1
//     // }

    

//     for (key of whereSpanTwo){
//         localStorage.setItem('list_task', JSON.stringify(whereSpanTwo[indexOf(key)]));
//     } 
// }


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