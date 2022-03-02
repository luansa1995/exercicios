const listElement = document.querySelector('ul');
const inputElement = document.querySelector('input');
const buttonElement = document.querySelector('button');

const tarefas = [];

function mostrarTarefas(){
    listElement.innerHTML = '';
    for (item of tarefas){              // tentar fazer o for normal ao invez desse i< tarefas.length
        const itemList = document.createElement('li');    //SEGREDO DE COMO MONSTAR UMA LISTA ((li)) = ARRAY
        const itemText = document.createTextNode(item);
            
            itemList.setAttribute('class', 'mdl-list__iten');
            
        const linkElement = document.createElement('a');
            linkElement.setAttribute('class', 'material-icons');

        const linkText = document.createTextNode('delete');
        linkElement.appendChild(linkText);
            
        const pos = tarefas.indexOf(item);
        linkElement.setAttribute('onclick', `removeTarefa(${pos})`);

        itemList.appendChild(itemText); 
        itemList.appendChild(linkElement);
        listElement.appendChild(itemList);
    }   


}

mostrarTarefas();

function addTarefa () {
    const tarefa = inputElement.value;

    tarefas.push(tarefa);

    inputElement.value ="";
    mostrarTarefas();
}

buttonElement.setAttribute('onclick', 'addTarefa()'); //???

function removeTarefa(pos){
    tarefas.splice(pos,1); //posição, quantidade a excluir
    mostrarTarefas();
}


