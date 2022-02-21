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

//q01 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let whereBody = document.getElementById("body");
let contentOfElement01 = "Texto de teste, filho body <h1>  Exercício 5.2 - JavaScript DOM ";
let newTagEx01 = document.createElement("h1");
newTagEx01.innerText = contentOfElement01;
whereBody.appendChild(newTagEx01);


//q02 Adicione a tag main com a classe main-content como filho da tag body ;

let contentOfElement02 = "Teste main";
let newTagEx02 = document.createElement("main");
newTagEx02.className = "main"
newTagEx02.innerText = contentOfElement02;
whereBody.appendChild(newTagEx02);

//q03  Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

let whereMain = document.getElementsByClassName("main");
let newTagEx03 = document.createElement("section");
newTagEx03.className = "center-content";
let contentOfElement03 = "Teste center-content";
newTagEx03.innerText = contentOfElement03;
whereBody.appendChild(newTagEx03);

                  // da pra usar INNER.HTML E PASSAR  JÁ COM TAG H1
                            // let whereMain = document.getElementsByClassName("main");
                            // let newTagEx03 = document.createElement("section");
                            // newTagEx03.className = "center-content";
                            // let contentOfElement03 = "<h1>Teste center-content</h1>";
                            // newTagEx03.innerHTML = contentOfElement03;
                            // whereBody.appendChild(newTagEx03);


//q04  Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

let whereCenterContent = document.querySelector(".center-content");
let newTagEx04 = document.createElement("p");
newTagEx04.className = "content-p";
let contentOfElement04 = "teste tag P dentro de center content";
newTagEx04.innerText = contentOfElement04;
whereCenterContent.appendChild(newTagEx04);

//q05  Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;



let whereMain02 = document.querySelector("main");  // tentei puxar whereMain .. .só q  deu erro ai fiz outra
let newTagEx05 = document.createElement("section");
newTagEx05.className = "left-content";
let contentOfElement05 = "teste tag section.left-content dentro de main";
newTagEx05.innerText =  contentOfElement05;
whereMain02.appendChild(newTagEx05);

//q06  Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

let newTagEx06 = document.createElement("section");
newTagEx06.className = "right-content";
let contentOfElement06 = "teste tag section.right-content dentro de main";
newTagEx06.innerText =  contentOfElement06;
whereMain02.appendChild(newTagEx06);


//q07 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;

let whereLeftContent = document.querySelector(".left-content");// tentei puxar whereMain .. .só q  deu erro ai fiz outra
let newTagEx07 = document.createElement("img");
newTagEx07.src = "https://www.w3schools.com/images/lamp.jpg"
newTagEx07.className = "small-image left-img"; 
// newTagEx07.className = "";
// let contentOfElement07 = 
// newTagEx07.innerHTML =  "<img src="https://www.w3schools.com/images/lamp.jpg" >" ;
whereLeftContent.appendChild(newTagEx07);

//q08 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
whereRightContent = document.querySelector(".right-content");
const newTagEx08 = document.createElement('ul');
whereRightContent.appendChild(newTagEx08);
let arrayNumbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis',
  'Sete', 'Oito', 'Nove', 'Dez'];
for (let key in arrayNumbers) {
  const newTagEx088 = document.createElement('li');
  newTagEx088.innerHTML = arrayNumbers[key];
  newTagEx08.appendChild(newTagEx088);
}


// 9. Adicione 3 tags `h3`, todas sendo filhas do `main` criado no passo 2.
whereMainTeste = document.querySelector("main");
whereMainTeste.className = "main-content";
for (let i = 1; i <= 3; i += 1) {
  const newTagEx09 = document.createElement("h3");
  newTagEx09.innerHTML = "Show " + i;
  whereMainTeste.appendChild(newTagEx09);
}


 // PARTE 2

      // 1.Adicione a classe title na tag h1 criada;
      const title = document.querySelector("h1");
      title.className = "title";

      //  // 2.Adicione a classe description nas 3 tags h3 criadas;
      //  const elementsH3 = document.getElementsByTagName('h3');
      //  for (let index = 0; index < 3; index += 1) {
      //    elementsH3[index].className = 'description';
      //  }

      //  // 3. Remova a `section` criado no passo 5 (aquele que possui a classe `left-content`). Utilize a função `.removeChild()`;
      // const sectionLeftContent = document.getElementsByClassName('left-content')[0];
      // elementMain.removeChild(sectionLeftContent);



      // // 4. Centralize a `section` criado no passo 6 (aquele que possui a classe `right-content`). Dica: para centralizar, basta configurar o `margin-right: auto` da `section`;
      // const sectionRightContent = document.getElementsByClassName('right-content')[0];
      // newTagEx06.style.marginRight='auto';

      // // 5. Troque a cor de fundo do elemento pai da `section` criada no passo 3 (aquela que possui a classe `center-content`) para a cor verde;
      // const sectionCenterContent = document.getElementsByClassName('center-content')[0];
      // sectionCenterContent.parentNode.style.backgroundColor = 'green';

      //   // 6.Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
      //   ul.lastChild.remove();
      //   ul.lastChild.remove();

       