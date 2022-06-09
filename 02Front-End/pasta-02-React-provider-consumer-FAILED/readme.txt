>>>o que é preciso fazer rpa entender/rodar .jsx ???????

0°> $npm init              //#inicialize sua aplicação Node

1°> estruturei componentes (em react)

2°> precisei do babel então dei comando na pasta do projeto react 
	https://babeljs.io/setup#installation 
		copia codigo " npm install --save-dev @babel/core @babel/cli "
	abre git bash> 


3° precisa de mais 1 coisa pra transformar jsx em .js

	ainda no site da BABAEL
		>clica em "docs" (no topo da pagina)
		>abserve os PRESETs(conjunto de plugins)
		>no nosso caso, PRESET do REACT




---------------------------------------------

resumo preparo pro React(na pasta do novo projeto):

$npm init
$npm install --save-dev @babel/core @babel/cli @babel/preset-react
$npm install --save-dev @babel/preset-react


{
  "presets": ["@babel/preset-react"]                   //voce baixou antes, agora tem q setar q vai usar o preset-react
}



$ npm install -g nodemon          //quando voce atualiza a o seu codigo, meio que precisa 
				//reiniciar o nodemon controla isso e reinicia sozinho quando ve mudanças









$npx babel script.js -o dist.js            //o meu arquivo ele não tem um tradutor ainda de jsx pra js ... entao aciono o 
						//babel pra ele traduzir e geral como resultado/OUTPUT(-o) o arquivo traduzido 
						// dist.js 
