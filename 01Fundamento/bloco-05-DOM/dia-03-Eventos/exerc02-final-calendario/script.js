function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
whereDays = document.querySelector("#days");
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
// console.log(dezDaysList.length);

function daysOfTheWeek (){

   for (let i = 0 ;i<dezDaysList.length;i+=1){
    let contentOfDays = dezDaysList[i]; 
    newTagForDays = document.createElement("li");
    
    if(dezDaysList[i] === 31 || dezDaysList[i] === 24 ){
      newTagForDays.className = "day holiday";
    }else if(dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18){
      newTagForDays.classList = "day friday";
    } else if( dezDaysList[i] === 25){
      newTagForDays.className = "day holiday friday";
    } else   {
      newTagForDays.className = "day";
    }
     
    newTagForDays.innerHTML = contentOfDays;
    // newTagForDays.innerHTML = "<h2>"+contentOfDays+"</h2>";  // aumenta
    whereDays.appendChild(newTagForDays);
  }
}

daysOfTheWeek();


//q02
// console.log(whereDays.parentElement);   // whereDaysContainer  ou days-container 
function createButtonHoliday(){
let whereButtonContainer = document.querySelector(".buttons-container");
let contentOfButtonHoliday = "Feriados";
let newTagButtonHoliday = document.createElement("button");

newTagButtonHoliday.innerText = contentOfButtonHoliday;
newTagButtonHoliday.id = "btn-holidays";
whereButtonContainer.appendChild(newTagButtonHoliday);
}
createButtonHoliday();

//q03


const whereIdHoliday  = document.getElementById("btn-holidays");
const whereClassHoliday = document.querySelectorAll(".holiday");
// const whereClassHoliday = document.getElementsByClassName("holiday");   //serve também
function changeColorHoliday(){
  
  if ( whereClassHoliday[0].style.background === "red"){
    for(let i =0 ; i<whereClassHoliday.length;i+=1 ) {
      whereClassHoliday[i].style.background = "rgb(238,238,238)";  
    }

  }else {
    for(let i =0 ; i<whereClassHoliday.length;i+=1 ) {
      whereClassHoliday[i].style.background = "red";  
    }
  }

  
}

whereIdHoliday.addEventListener("click" , changeColorHoliday)



//q04 - gabarito para acelerar
let whereButtonContainer = document.querySelector('.buttons-container');

function createFridayButton(buttonName) {
  let whereButtonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  // let newButtonID = 'btn-friday btn-holidays';
  newButton.innerHTML = buttonName;
  newButton.id = 'btn-friday';
  whereButtonContainer.appendChild(newButton);
};

createFridayButton('Sexta-feira');



// //q05 - 
//do gabarito - acelerar , tenho q  fazer o projeto
let getFridayButton = document.querySelector('#btn-friday');
let fridays = document.getElementsByClassName('friday');

function displayFridays(fridaysArray) {
  let newFridayText = 'SEXTOU o/';
  getFridayButton.addEventListener('click', function() {
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML !== newFridayText) {
              fridays[index].innerHTML = newFridayText;
      } else {
              fridays[index].innerHTML = fridaysArray[index];
      }
    }
  })
};

let dezFridays = [ 4, 11, 18, 25 ];
displayFridays(dezFridays);



 //q06 -  gabarito 

 function dayMouseOver() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};

function dayMouseOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
};

dayMouseOver();
dayMouseOut();






//q07- gabarito

let tasksContainer = document.querySelector('.my-tasks');

function newTaskSpan(task) {
  let taskName = document.createElement('span');
  taskName.innerHTML = task+" <br />";
  tasksContainer.appendChild(taskName);
};

newTaskSpan('Projeto:');

newTaskSpan('teste ');


//q08- gabarito
// ja criei na questao 07 >>>  let tasksContainer = document.querySelector('.my-tasks');
function newTaskDiv(color) {
  let newTask = document.createElement('div');
  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  tasksContainer.appendChild(newTask);
};

newTaskDiv('green');


//q09 - gabarito acelerar 

let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

function setTaskClass() {
  
  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};
//testar no console  >>>>   
setTaskClass();








// //1° SELECIONAR ONDE VAI ENTRAR 
// let ondeEstou = document.querySelector("#pai");
// // console.log(ondeEstou);

// //2° conteudo que vou jogar dentro do elemento criado
// let contentOfElement = "Texto de teste, depois vira parametro da minha funçao";

// //3°criar meu elemento = TAG  <p>,<div>, etc
// let newTag = document.createElement("div");

// //4° juntando tudo... primeiro minha tag (((newTag))) depois o conteudo que entrará na TAG (((contentElement)))
// newTag.innerText = contentOfElement;

// //5° e ultimo passo - JOGAR NO HTML >>> "Jogue em ondeEstou que foi o local selecionado e crie newTag (q ja tem a tag div+ o texto)"
// ondeEstou.appendChild(newTag);
/////////////////////////////////////////////////////////////////////////////////////
