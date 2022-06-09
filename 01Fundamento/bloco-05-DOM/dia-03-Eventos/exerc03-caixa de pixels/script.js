
  

  //////////////MUDA SELECIONADO//////////////////////////
    const firstColor = document.querySelector('.a');
    const secondColor = document.querySelector('.b');
    const thirdColor = document.querySelector('.c');
    const fourthColor = document.querySelector('.d');
  

   

    function changeSelected (recentSelection){
      let whereClassSelected  = document.querySelector(".selected"); //funciona
      whereClassSelected.classList.remove("selected");   //funciona
      // let classStringWithOutSelected = whereClassSelected.getAttribute("class");
      recentSelection.target.classList.add("selected");
    }
    firstColor.addEventListener("click", changeSelected);
    secondColor.addEventListener("click", changeSelected);
    thirdColor.addEventListener("click", changeSelected);
    fourthColor.addEventListener("click", changeSelected);
  // DAKI PRA CIMA 100% 
  // JÁ MUDA DE SELEÇÃO E PASSA CLASSE SELECTED DE UM PARA OUTRA
  
    
    //let teste = whereClassSelected.classList;

    function changeColor(event){
        let whereClassSelected  = document.querySelector(".selected"); //funciona
        let classSelected = whereClassSelected;
       
        event.target.setAttribute("class", classSelected.className);
        event.target.classList.remove("selected");
        event.target.classList.add("pixel");
       
    }


  
    ////////////cria a caixa  de pixels(quadrados)////////////////
    const whereBox = document.querySelector('#pixel-board');
  
    function addBoxes() {
      for (let i = 1; i <= 5; i += 1) {
        for (let ii = 1; ii <= 5; ii += 1) {
          const newTagBox = document.createElement('div');
          newTagBox.className = 'pixel';
          // console.log(newTagBox);
          whereBox.appendChild(newTagBox);
          newTagBox.addEventListener("click", changeColor)
        }
        const newTagJump = document.createElement('br');
        whereBox.appendChild(newTagJump);
        // console.log(newTagJump);
      }
    }
    addBoxes();