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


const postsContainer = document.querySelector('#posts-container') 
const loaderContainer = document.querySelector('.loader') 
const filterInput = document.querySelector('#filter') 

let page = 1 

const getPosts = async () => { 
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`) 
    // const data = await response.json()  //o await é pra q só cpontinue rodando o resto da função abaixo SOMENTE depois de todo o processo de conversao da RESPONSE acontecer e jogar dentro da variavel DATA
// console.log(data) 
    return response.json()
} 
const addPostsIntoDOM = async () =>{
    const posts = await getPosts()
    const postsTemplate = posts.map(({ id, title, body}) => `
        <div class="post"> 
            <div class="number">${id}</div>
            <div class="post-info"> 
                <h2 class="post-title">${title}</h2>
                <p class="post-body">${body}</p> 
            </div> 
        </div>
    `).join('') 
    postsContainer.innerHTML += postsTemplate
}    

        
// console.log(posts) // console. log(postsTemplate)

//58:28 
const getNextPosts = () => { 
    setTimeout(() => {
    page++ 
    addPostsIntoDOM()
    }, 300) 
} 

 const removeLoader = () => { 
    setTimeout(() => { 
        loaderContainer.classList.remove('show') 
        getNextPosts() 
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









