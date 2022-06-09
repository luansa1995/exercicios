var addTodo = function(){
    var todo = document.getElementById('todo').value; // Pega o valor digitado no input e armazena na variável 'todo'.

    var todos = getTodos(); // Chamamos em uma variável a função 'getTodos' que cria um array que traz todas as todos salvas antes de inserir uma nova.

    if(todo){ // Verifica se há algum conteúdo preenchido dentro do input
        todos.push(todo); // Utilizamos o push para jogar o elemento armazenado na variável 'todo' para nosso Array.

        localStorage.setItem('todos', JSON.stringify(todos)); // Utilizamos o localStorage.setItem para "persistir" as informações no storage do browser. Com parâmetro passamos a chave e o valor, usando 'JSON.stringify' para transformar o valor em uma string.

        document.getElementById('todo').value = ''; // Retorna para vazio o input após um item ser inserido.
    }

    document.location.reload(true); // Utilizamos o reload(true) para após a função ser realizada atualizar a tela.
}

var getTodos = function(){
    var todos = []; // Cria um array vazio caso não tenha nada já armazenado.

    var todos_string = localStorage.getItem('todos'); // Pega o conteúdo/valor da chave 'todos' do 'localStorage' e armazena na variável 'todos_string'

    if(todos_string != null){ // Verifica se o array de elementos não é nulo. Caso true então retornará a conversão de um JSON string para um Javascript data.
        return JSON.parse(todos_string);
    }
}

var showTodos = function(){
    var todos = getTodos(); // Guardamos em uma variável chamada 'todos' todos os todos que temos armazenadas utilizando a função getTodos;

    var html = '<ul>'; // Criamos uma variável 'html' que irá concatenando a nossa estrutura HTML.

    todos.forEach(function(elemento, index){ // Criamos um forEach para iterar todos os elementos do nosso Array. Utilizamos 'todos' na frente para referenciar de qual lugar estamos trazendo os elementos. 
        html += '<li> 📌 ' + elemento + '<button class="remove" id="'+ index +'">Remover</button></li>'; // Novamente utilizamos a variável 'html' para concatenar nosso HTML passando o 'elemento' que referencia os itens pertencentes os todos. 'index' representa nosso index dentro do array.
    });

    html += '</ul>'; // Fechamos a concatenação.

    document.getElementById('todos').innerHTML = html; // Inserimos o conteúdo da variável 'html' dentro da 'div' que contém o id 'todos'. O innerHTML serve justamente para inserir novos conteúdos.

    var buttons = document.getElementsByClassName('remove'); // Pegamos todos os elementos do DOM que possuem a class 'remove' e armazenamos na variável 'buttons'.

    for (var i=0; i < buttons.length; i++){ // Iteramos nossos elementos e adicionamos para cada elemento com a class 'remove' o addEventListener conectado com o evento 'click' e o callback da função 'removeTodo'.
        buttons[i].addEventListener('click', removeTodo);
    };
}

var removeTodo = function(){
    var id = this.getAttribute('id'); // Criamos uma variável id para receber o atual objeto-DOM referente ao id do botão remover que o usuário clicar. O this representa o objeto-DOM atual.

    var todos = getTodos(); // Guardamos em uma variável chamada 'todos' todos os todos que temos armazenadas utilizando a função getTodos;

    todos.splice(id, 1); // Utilizamos o método splice para remover um elemento específico. Como parâmetro passamos o id referente ao elemento que será removido do array e o valor "1", que representa que estamos realizando apenas uma remoção.

    localStorage.setItem('todos', JSON.stringify(todos)); // Após o elemento ser removido, utilizamos novamente o setItem para salvar a nossa nova lista de array.

    document.location.reload(true); // Utilizamos o reload(true) para após a função ser realizada atualizar a tela.
}

var hasTodo = function(){ // Função que verifica se há algum todo salvo dentro do Array do localStorage.

    var todos = getTodos(); // Guardamos em uma variável chamada 'todos' todos os todos que temos armazenadas utilizando a função getTodos;

    if(todos == ''){ // Utilizamos uma condicional para exibir uma mensagem na tela de acordo com o status do nosso array.
        text = '<h2>Não há tarefas cadastradas!</h2>';
        document.getElementById('msg').innerHTML = text;
    } else {
        text = '<h2>Suas tarefas pendentes:</h2>';
        document.getElementById('msg').innerHTML = text;
    }
}

document.getElementById('add').addEventListener('click', addTodo); // Buscamos o elemento contendo o id igual a 'add' e em seguinda utilizamos o método 'addEventListener' com o evento de 'click' e o callback que será chamado, no caso, nossa função addTodo.

window.addEventListener('keydown', function(event){ // Inserimos uma alternativa para a inserção os elementos, que é pressionando a tecla 'enter'. Para este caso precisamos passar um parâmetro que é uma função que recebe o evento com a keyCode que pressionamos. Depois verificamos se é true e caso seja chama o addTodo(); 
    if(event.keyCode == 13){
        addTodo();
    };
}); 

hasTodo(); // Passamos a função aqui para verificar antes mesmo de listar nossos elementos se o array é vazio ou não.

showTodos(); // Chamamos a função showTodos() para mostrar na telas os elementos do nosso array.