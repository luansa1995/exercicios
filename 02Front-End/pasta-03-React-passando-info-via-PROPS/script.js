
// // MACETE !!!
// //EM REACT ... quandov voce da um createElement , voce aprendeu q criava uma TAG ou elemento
// //neste caso aqui no react voce cria ou uma TAG/ELEMENTO, {classes}, 'filho'/createElement(novaFunção, {parametros})  

// //RESUMÃO 
// //////basico:
// // react.createElement('tag',null ou {classes}, 'texto que entrará na tag')

// //////mais avançado:
// // createElement(tag, {class}, texto ou React.createElement(NomeDaProximaFuncao, {parametros a ser recebido na função}))


//      //     function myComponent() {
//     //       //low.Aceite 3 parametros tbm (1: a TAG/element; 2: classes, id,etc ; 3:filho texto ou outro COMPONENTE('div','','Componente'))
//     //       return React.createElement('h1', {className:'teste'}, 'olá Mundo !') 
//     //       //up. cria uma div, sem classe nem id nem uma, como filho o texto escrito
//     //     }



// //site de FUNDAMENTOS node!!!
//     //http://stack.desenvolvedor.expert/comecando-com-node/inicializando-um-app-node.html


//     //----------------------------------------------------------


//down. esta linha foi criada pra dar apoio na tag NomeContext, pra ele saber a propriedade que passará
const NomeContext = React.createContext('nome'); 


function MeuComponente(){
  return(
    <div id="componentes">
      <MeuComponentel/>
    </div>
  )  
}

function MeuComponentel(){
  const MeuNome = 'Luan Sá';
  return (
    
      <div className="componente-1">  
        <MeuComponente4>
          <p>{MeuNome}</p>
        </MeuComponente4>  
      </div>
   
 )
}

                                                                function MeuComponente2(){
                                                                  // const MeuNome = 'Ayrton Teshima 1234';
                                                                  return(
                                                                    <div className="componente-2"> 
                                                                      <MeuComponente3/>
                                                                    </div>
                                                                  )
                                                                }


                                                                  function MeuComponente3(){
                                                                    return(
                                                                      <div className="componente-3">teste 3
                                                                        <MeuComponente4/>
                                                                        
                                                                      </div>
                                                                      )
                                                                    }    

//problemas ... não apresenta meuComponente4 POIS NÃO CONSEGUE ACIONAR A FUNÇÃO OCULTA 
function MeuComponente4(props){
  return (
   
        <div className = "componentes-4"> 
          <p> </p>
          <h1>{props.children}</h1>
          <h2></h2>
        </div>
  )
}
 
//momento de renderizar tudo do react ou seja mostrar na tela... diga ((oque,onde)) 
    ReactDOM.render(
      <MeuComponente/>,
      document.getElementById('app')
    )