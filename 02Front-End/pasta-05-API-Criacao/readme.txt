API - tentativa de criar uma API simples 

0° // todo esse programa deve ser criado num NOVO REPOSITORIO  no github para ser 
//associado ao outro site futuramente (HEROKU)

1°>>> instalar o node e npm 
	+  >>>  $ npm init ~y        //caso faça agor anao precisa fazer passo 11

2° >>> instalar o express
	$ npm install express         //(4.17.1)

3°>>> //em arquivo.js
	const express = require('express');
	const app = express();                     //instanciei

4°>>> // ainda em arquivo.js  - declarando porta

	const PORT = process.env.PORT || 8877             // Porta de variavel do ambiente ou essa porta q ele definiu ai caso primeira opção nao funcione


5° //por servidor pra iniciar
	app.listen(PORT, () =>{
		console.log('Escutando na porta: '+ PORT);
})

6° >>> INSTALE O NODEMON
	$ npm install -g nodemon

	
7° // formas de rodar programa
	$ node script.js   //roda o programa node
	// com comandpo acima vc atualizando voce tem que parar o console e rodar de novo o comando 
		$node script.js     //perde muito tempo

	//já abaixo faremos com o nodemon
	$ nodemon script.js                //agora qual quer atualização ele reinicia sozinho 


8° >>> //agora acima da linha de comando app.listen(PORT...
	//FAZENDO UMA ROTA... NESSE CASO É O BARRA (/)

	APP.GET('/', (req,res) => {
		res.json({
			msg: 'OK'
		})
	})

9° >>>  // acima do requisito 8°

	app.get('/about', (req, res) => {
		res.json({
			id: '1'
			name: 'Joao'
			email: 'joao@gmail.com'
			urls: [
				{
				type:'github'
				url: 'http://github.com/joao'
			
				},
				{
				type: 'youtube',
				url: 'https:youtube.com/joao'
				}
			]
		})	

	})



10°  // na pasta do aplicativo voce cria um arquivo sem extensao chamado 'procfile'
	web: npm start



11° // criar a package.json

	$ npm init ~y


12° // Caso voce só tenha criado o package.json na fase final ...  como foi este casdo voce precisa deste comando

	$ npm install express --save
	//issso precisa praa que ele aparece na package.json !!!
	//agora o express vai aparecer nas dependencias no package.json !

13°

14°

15°
