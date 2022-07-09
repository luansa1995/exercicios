"REACT 4 - LOCALSTORAGE+PROPS+useEffect+useState"






Matheus Battisti - Hora de Codar - curso REACT/JS -(create-react-app)



>>>>>>>>> instalando react agora de outra forma (create-react-app)

> isso é meio que uma biblioteca
	> que recebe todos os arquivos dessa biblioteca e temos como executa-la

>precisa de node e npm
>da pra executar com o NPM STARTe rodar no nosso NAVEGADOR

> $ node -v
> $ npm -v 
>$ npx create-react-app luan-projeto                //"luan-projeto" qual quer nome p seu projeto  

> $ cd ./luan-projeto
> $ npm start                        // comando de execução de um script

> .gitignore   // o Mateus battisti colocou o node_modules alegandoq  quando instalar em outro local da outro npm install pra baixar a pasta no local


//em app.js  ...  temos o codigo basico q será RENDERIZADO no index.js

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bem vindo Luan Sá!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


Coisas importante para se observar:
>no react quando quer colocar uma class na tag voce tem que usar o 
	>className  // pq ? o nome class já é reservado 

>todo retorno de componentes react só pode retornar 1 valor é por isso 
que o header, img, <P> ,etc todos estão dentro de uma div (que vai empacotar e enviar como um unico elemento)
	> caso voce nao queria usar uma div, header, main, footer como divisor
	tem uma opção no react chamada  (( React.Fragment )), ou seja ele vai empoacotar porem sem por em div
	vai cair tudo dentro do body

>


//aula 04 tem que assistir 


a nossa pasta principal do projeto é a SRC 
então em SRC criamos uma outra pasta chamada
COMPONENTS e dentro dele HelloWorld.js

/src 
  /components
     /HelloWorld.js               //PascalCase !!! padrão


//neste arquivo helloWolrd.js , você terá uma função com mesmo nome do arquivo 
// e um export desse component


function HelloWorld() {
	//seu codigo
	return (
	<div>
		<h1> Este é meu componente HelloWorld!</h1>
	</div>
	)
}

export default HelloWorld


// o que faço agora pra usar esse componente HelloWorld? 

agora tenho que importar...
mas onde ? 
pode ser em qualquer arquivo .js em qualquer componente, porem
geralmente ele é importado no component principal
	App.js

//entao vamos em app.js e colocamos o codigo na parte inicial(no topo)

import HelloWorld from './src/HelloWorld'

//prontinho ... agora no meu return () do app.js eu posso colocar esse component

	//app.js

function App () {

	return (
	<div className="App">
		<h1>Aqui é meu app!</h1>
		<HelloWorld />     //aparecerá na tela > Este é meu componente HelloWorld !
	</div>
	)
}


//down.aula05

------------------------------------------------------
--------------------------------------------------





>>>>>>>>>REACT MODO RAIZ

1°> $npm init              //#inicialize sua aplicação Node



2°> precisei do babel então dei comando na pasta do projeto react 
	https://babeljs.io/setup#installation 
		copia codigo " $npm install --save-dev @babel/core @babel/cli "
	abre git bash> 


3° precisa de mais 1 coisa pra transformar jsx em .js

	ainda no site da BABAEL
		>clica em "docs" (no topo da pagina)
		>observe os PRESETs(conjunto de plugins)
		>no nosso caso, PRESET do REACT

ou seja, fazer comando abaixo

$npm install --save-dev @babel/preset-react 
		OU
	combina 2° + 3° = resultado é o comando abaixo:
$npm install --save-dev @babel/core @babel/cli @babel/preset-react

//quando dá este comando, voce pode abrir o package.json que voce vai ver em devDepoendencies 
//que essas 3 já estão configuradas e listadas


$ npm install -g nodemon   // para atualizar de forma mais rapido sempre q tiver alterações*(automatizado)



4°- no site do babel > PROCURE: PRESET : procure:usage + Recomended
	voce vai achar isso:

{
  "presets": ["@babel/preset-react"]
}

//e tbm executa comando abaixo no bash

$ npm install -g nodemon          //quando voce atualiza a o seu codigo, meio que precisa 
				//reiniciar o nodemon controla isso e reinicia sozinho quando ve mudanças


//ou seja pega esse codigo e cria um arquivo chamado .babelrc 
// é só pra mostrar a ele que vai precisar usar o babel pra funcionar
 

5°- precisa preparar o react também
// vai em react > cdn links > pega os 2 links(referente a rect e rectDOM)> cola esses 2 links no final do body no index.html 

<script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>


6° - // ... crie seu documento script.js e coloque os componentes que deseja

ex.:
//******detalhe importantissimo !!! no jsX as funções usam PascalCase e não camelCase
//logo, toda funçao começa com letra maiuscula

function FirstFunction(){
    return(
    <div id="first-function"> 
      <SecondFuntion/>
    </div>
    )
}

function SecondFuntion(){
    return(
        <article id="second-function"> 
            Testando o article!!!
        </article>
    )
}

//para finalizar precisa dizer oq sera lançado na pagina
ReactDOM.render(
    <FirstFunction/>,
    document.getElementById('app')
  )

7°
//crie a copia do documento porem traduzido de forma que o navegador consiga entender jsx como um simples .js
$ npx babel script.js -o dist.js  


8° lembre de no html alterar agora ao inves do script ser script.js voce altera pra o nome da pagina de saita/output TRADUZIDA

<script src="script.js"></script> >>>>>>>>>>  <script src="dist.js"></script>


---------------------------------------------

resumo preparo pro React(na pasta do novo projeto):

$npm init
$npm install --save-dev @babel/core @babel/cli @babel/preset-react



{
  "presets": ["@babel/preset-react"]                   //voce baixou antes, agora tem q setar q vai usar o preset-react
}



$ npm install -g nodemon          //quando voce atualiza a o seu codigo, meio que precisa 
				//reiniciar o nodemon controla isso e reinicia sozinho quando ve mudanças


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------
---------------------------------------------











$npx babel script.js -o dist.js            //o meu arquivo ele não tem um tradutor ainda de jsx pra js ... entao aciono o 
						//babel pra ele traduzir e geral como resultado/OUTPUT(-o) o arquivo traduzido 
						// dist.js

















----------------------------------------------------

----------------------------------------------------

----------------------------------------------------

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>   COMO USAR ?? 

>>>PROPS


É simples! pense como se o COMPONENTE fosse na verdade uma FUNÇAO. ou seja:

//no app.js o princial arquivo vai ser o que a tela vai ter de componente ex, comp01 , comp02, comp03 
	// se eu quero que apareça na tela comp01 e 03 eu vou Acionar esses componentes (como se fosse uma função sendo chamada)
	//no caso de PROPS serão os PARAMETROS q foi visto em função 
	
ex.:

// em app.js

// 1° importo> 2° aciono ou chamo o componente (com ou sem parametros/PROPs) >  

import Comp01 from './components/Comp01'
import Comp01 from './components/Comp03'

<Comp01 />
<Comp03 nome="luan" idade="27" />                           //se eu quero passar nome e idade de uma pesso como parametro/PROPS eu digo na hora em que eu aciono ele tudo como STRING       
  


//agora no outro arquivo > Comp03

// 1° Exporto (para que seja possivel o componente ser IMPORTADO no futuro) > 2 ° crio meu componente (como funciona e como fica estruturado e o que ele faz quando recebe as props)

//ex.:

function Frases ({nome, idade}) {
    //JAVASCRIPT, VARIAVES ,ETC

    return (
        //HTML e componentes
	<h1>Testando H1 !</h1>
	<h2> meu nome é {nome}, tenho {idade} anos</h2>
)
}

export default Frases


//////////////////////////////////////////////////

>>> como usar css em React

> Simples, quando voce quer que afete todo o projeto, voce altera o INDEX.CSS

> mas, aqui nos organizamos em modulos e o que for especifico em um modulo voce cria um css especifico para ele. como ? segue abaixo
	> No projeto nós criamos arquivos css dentro da pasta componentes 
	ex >>>     ./components
			> dentro de components vai ter 
				>component01
				>component02
				>component03
			//mas tambem terá o css INDEPENDENTE seguindo a estrutura (NomeModulo.module

)


