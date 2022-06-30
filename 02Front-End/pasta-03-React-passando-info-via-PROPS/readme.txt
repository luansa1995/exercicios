"REACT 4 - LOCALSTORAGE+PROPS+useEffect+useState"


>>>o que é preciso fazer rpa entender/rodar .jsx ???????

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
 

5°- preparar o react também
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
>>>>>>>>> instalando react agora de outra forma (create-react-app)

> isso é meio que uma biblioteca
	> que recebe todos os arquivos dessa biblioteca e temos como executa-la

>precisa de node e npm
>da pra executar com o NPM STARTe rodar no nosso NAVEGADOR

> $ node -v
> $ npm -v 
>$ npx create-react-app luan-projeto                //"luan-projeto" qual quer nome p seu projeto  











$npx babel script.js -o dist.js            //o meu arquivo ele não tem um tradutor ainda de jsx pra js ... entao aciono o 
						//babel pra ele traduzir e geral como resultado/OUTPUT(-o) o arquivo traduzido 
						// dist.js 
