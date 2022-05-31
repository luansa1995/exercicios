  //exemplo 01                         
                           
                           // let promise = Promise.resolve(2);
                            // let promise02 = Promise.resolve(3);
                            // let promise03 = Promise.resolve(4);


                            // Promise.all([promise, promise02, promise03])
                            // .then( function (values) {
                            //     console.log(values);

                            // })


 // exemplo 02  - com explicação 

const ul = document.getElementById('users')                          //localizo onde vou jogar a info
const url = 'https://jsonplaceholder.typicode.com/users'        //API ou servidor externo onde pegarei dados

fetch(url)                                          //= fetch = pegar/buscar 
.then((resp) => resp.json())                                    //depois da busca, com o resultado ENTÃO, faço...   nesse caso fiz a transformação do dado que era em json, agora pra um array com propriedades(da pra checar no console.log as informações contidas e como ta organizada(em forma de array))
.then(function (data) {                             //depois da transformação, faz a funçao tento esses dados como parametro
    console.log(data)                                 //mostrie no console pra checar dados
    return data.map (function (user) {
        let li = document.createElement('li');
        li.innerHTML =   `${user.name} (${user.username})`    // digo aki quais da lista de dados da api quero que seja jogado no html 
        ul.appendChild(li)
    })
})
.catch((error) => {
    console.log('Oops!' + error)
})