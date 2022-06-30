// let getJobs = async () => {
//     const response = await fetch(`https://api-vagas-itabuna.herokuapp.com/vagas`, {
//         credentials: 'include'
//     })
    // const data = await response.json()
//     console.log(response);   
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
// console.log(data)  // Not Defined !!
console.log(arrayJobs) // com esse array q é a mesma coisa ele consegue ser usado do lado de fora da funçao






