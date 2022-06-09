// MACETE !!!
//EM REACT ... quandov voce da um createElement , voce aprendeu q criava uma TAG ou elemento
//neste caso aqui no react voce cria ou uma TAG/ELEMENTO, {classes}, 'filho'/createElement(novaFunção, {parametros})  

//RESUMÃO 
//////basico:
// react.createElement('tag',null ou {classes}, 'texto que entrará na tag')

//////mais avançado:
// createElement(tag, {class}, texto ou React.createElement(NomeDaProximaFuncao, {parametros a ser recebido na função}))


     //     function myComponent() {
    //       //low.Aceite 3 parametros tbm (1: a TAG/element; 2: classes, id,etc ; 3:filho texto ou outro COMPONENTE('div','','Componente'))
    //       return React.createElement('h1', {className:'teste'}, 'olá Mundo !') 
    //       //up. cria uma div, sem classe nem id nem uma, como filho o texto escrito
    //     }



//site de FUNDAMENTOS node!!!
    //http://stack.desenvolvedor.expert/comecando-com-node/inicializando-um-app-node.html


    //----------------------------------------------------------

    const NomeContext = React.createContext('nome');

  



    function meuComponentel() {
      const meuNome = 'Ayrton Teshima 123';
      return(
       <NomeContext.Provider value = {meuNome}>
         <div className="componente-1">
           <meuComponente2/>
         </div>
       </NomeContext.Provider>
      )
    }

    function meuComponente2() {
      return(
        <div className="componente-2">
         <meuComponente3/>
       </div>
      )
    }

    function meuComponente3() {
        return(
          <div className="componente-2">
           <meuComponente4/>
         </div>
        )
      }

      function meuComponente4() {
        return(
            <NomeContext.Consumer>
               {(nomeContext)=>(
                 <div className="componentes-4">
                   <p>{nomeContext}</p>
                 </div>
               )}
            </NomeContext.Consumer>
        )    
      }


        ReactDOM.render(
            //low.aceite 3 parametros (1:o componente,2:propriedades,3:filhos do components)
            <meuComponente4/>,                     //oque injeta  
            document.getElementById('app')      //onde injeta
            
      
          )




















        //   function meuComponente() {
        //     // return React.createElement('div', { id: 'componentes' }, 
        //     // React.createElement (meuComponentel)
        //     // )
    
        //     //codigo acima foi transformado no codigo abaixo
    
        //     //TRADUÇÃO DO CODIGO:a função meuComponente retorna uma div com id='componentes' e dentro dele um outro componente
        //     return (
        //     <div id="componentes">
        //     <meuComponentel />
        //     </div>
        //     )
        // }