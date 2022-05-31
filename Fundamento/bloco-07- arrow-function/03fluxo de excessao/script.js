// try & catch 

// try & catch 

//  Ou seja, você deseja que o bloco try  tenha sucesso, e 
// se ele não tiver êxito, você quer o controle passado para o 
// bloco catch











// EXPLEMPLO 01 -------------------------------------------------


 console.log(getMonthName(13));

function getMonthName(mo) {
  mo = mo - 1; // Ajusta o número do mês para o índice do array (1 = Jan, 12 = Dec)
  var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul",
                "Aug","Sep","Oct","Nov","Dec"];
  if (months[mo]) {                        //LUAN: se months[1-12(ou seja, ele existe, Faça!)] retorna oque ta dentro da variavel 
     return months[mo];
  } else {                                 //LUAN:  já no caso do ELSE, na hora de aparecer no console o erro, já vai dizer que o problema está na parte "MonthNo" quem bater o olho já vai saber 
    throw "InvalidMonthNo"; //lança uma palavra-chave aqui usada.
  }
}

try { // statements to try
  monthName = getMonthName(myMonth); // função poderia lançar uma exceção
}
catch (e) {
  // monthName = "unknown";
  // logMyErrors(e); // passa a exceção para o manipulador de erro -> sua função local.
}


// ---------------EXEMPLO 02 - MUITO BOM /P ENTENDER !!! ------------------------------------

openMyFile();
try {
  writeMyFile(theData); //Isso pode lançar um erro,caso dê erro, aciona o catch
} catch(e) {
  handleError(e); // Se temos um erro temos que lidar com ele. o (e) já é o erro sendo passado como parametro tipo quando usamos event.target, onde os dados são o proprio evento emq questão (o que foi clicado, ou passado mouse etc.)
} finally {
  closeMyFile(); // Sempre feche o recurso
}





// var a = +"1.1" + +"1.1";
// console.log(a);  // Avaliado como NaN






// var myArray = [];
// if (myArray[0]) console.log('oi');




// //PARTE 2 - creando elemento e jogando no HTML
// //q01

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