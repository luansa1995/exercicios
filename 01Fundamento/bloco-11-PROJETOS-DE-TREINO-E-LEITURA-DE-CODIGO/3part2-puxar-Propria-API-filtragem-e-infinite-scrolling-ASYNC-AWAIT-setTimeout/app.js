// URL ORIGINAL >>> https://jsonplaceholder.typicode.com/posts                                  //traz todos os valores
// URL busca os 5 primeiros  >>> https://jsonplaceholder.typicode.com/posts?_limit=5                    //+ ?_limit=5
// URL proximos 5 posts seguintes  >>> https://jsonplaceholder.typicode.com/posts?_limit=5&_page=2       //+ &_page=2
// obs. pesquize no browser! as 3 URLs em sequencia e perceba a diferença

// o que acontece na linha 13???
    // .json() faz com que ENTRADA seja um valor (json) para que a SAIDA seja um (objeto JavaScript)
    //ou seja, quando voce dá console.log(response) ===== >>> RESPONSE
    //...    , quando voce dá console.log(data)    ====== >>>  OBJETO


        // let page = 1 
        // const getPosts = async () => { 
        //     const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`) 
        //     const data = await response.json()  //o await é pra q só cpontinue rodando o resto da função abaixo SOMENTE depois de todo o processo de conversao da RESPONSE acontecer e jogar dentro da variavel DATA
        //     console.log(data) 
        // } 


        

        var arrayJobs = [];

        let getJobs = async () => {
            const response = await fetch(`https://api-vagas-itabuna.herokuapp.com/vagas`)
            const data = await response.json()
            // console.log(data);   
        
            data.map(myfunction)
            function myfunction (itemAtual){
                arrayJobs.push(itemAtual)
            }
        
            // console.log(data[0].id)
            // console.log(data[0].nameCompany)
            // showJobs(data);
            let whereFather = document.querySelector("#father");
            for (let i=0; i <= arrayJobs.length -1  ; i+=1 ){
                let newLi = document.createElement("li");
                    //se impar li pra esquerda se par li pra direita
                let contentOfElement = 
                `ID:  ${arrayJobs[i].id} | Empresa: ${arrayJobs[i].nameCompany} | Endereço: ${arrayJobs[i].address} 
                | email: ${arrayJobs[i].email} | Telefone:  ${arrayJobs[i].tel} | Descrição: ${arrayJobs[i].Description} ` ;
                newLi.innerText = contentOfElement; 
                whereFather.appendChild(newLi);
            }
          
        } 
        
        getJobs(); 


       // -------------------------------------------------------------------- 

        // 10Down. para por imagem/propaganda ao inicializar a pagina web
       $( function() {
        $( "#dialog-message" ).dialog({
          modal: true,
          buttons: {
            Ok: function() {
              $( this ).dialog( "close" );
            }
          }
        });
       } );

const postsContainer = document.querySelector('#posts-container') 
const loaderContainer = document.querySelector('.loader') 
const filterInput = document.querySelector('#filter') 

let page = 1 

const getPosts = async () => { 
    const response = await fetch(`https://api-vagas-itabuna.herokuapp.com/vagas`) 
    // const data = await response.json()  //o await é pra q só cpontinue rodando o resto da função abaixo SOMENTE depois de todo o processo de conversao da RESPONSE acontecer e jogar dentro da variavel DATA
// console.log(data) 
    return response.json()
} 
const addPostsIntoDOM = async () =>{
    const posts = await getPosts()
    const postsTemplate = posts.map(({ id, nameCompany, address, email, tel, Description}) => `
        <div class="post"> 
            <div class="number">${id}</div>
            <div class="post-info"> 
                <h2 class="post-title">${nameCompany}</h2>
                <p class="post-body">${address}</p>
                <p class="post-body">${email}</p>  
                <p class="post-body">${tel}</p>
                <p class="post-body">${Description}</p>
            </div> 
        </div>
    `).join('') 
    postsContainer.innerHTML += postsTemplate
}    

        
// console.log(posts) // console. log(postsTemplate)

//58:28 
                                            // const getNextPosts = () => { 
                                            //     setTimeout(() => {
                                            //     page++ 
                                            //     addPostsIntoDOM()
                                            //     }, 300) 
                                            // } 

 const removeLoader = () => { 
    setTimeout(() => { 
        loaderContainer.classList.remove('show') 
        // getNextPosts() 
    }, 1000) 
} 

const showLoader = () => { 
    loaderContainer.classList.add('show')
    removeLoader()
}

const handleScrollToPageBottom = () => {
    const { clientHeight, scrollHeight, scrollTop } = document.documentElement
    const isPageBottomAlmostReached = scrollTop + clientHeight >= scrollHeight - 10 


    if (isPageBottomAlmostReached) { 
        showLoader() 
    }
} // ok ate aki

const showPostIfMatchInputValue = inputValue => post => {
    const postTitle = post.querySelector('.post-title').textContent.toLowerCase()
    const postBody = post.querySelector('.post-body').textContent.toLowerCase() 
    const postContainsInputValue = postTitle.includes(inputValue)
    || postBody.includes(inputValue)
     
    if (postContainsInputValue) {
        post.style.display = 'flex'
        return
    } 

    post.style.display = 'none' 
} 

const handleInputValue = event => { 
    const inputValue = event.target.value.toLowerCase() 
    const posts = document.querySelectorAll('.post') 

    posts.forEach(showPostIfMatchInputValue(inputValue)) 
} 

addPostsIntoDOM()

window.addEventListener('scroll', handleScrollToPageBottom) 
filterInput.addEventListener('input', handleInputValue) 


// console.log(getPosts ());      // quando é retorno da async automaticamente é uma PROMISSE



// --------------------------------------SEGUNDA ETAPA---------------------------

const express = require('express');
const app = express();   

const PORT = process.env.PORT || 8877  

app.listen(PORT, () =>{
    console.log('Escutando na porta: '+ PORT);
})

