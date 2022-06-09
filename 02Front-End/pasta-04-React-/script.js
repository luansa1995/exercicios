
    function MeuComponente(props){
        return(
          <div id="componentes">
            <MeuComponente1 onClickIncrementar = {props.onClickIncrementar} />
          </div>
       )
      }

function MeuComponente1(props){
    return(
      <div className="componente-1">
        <MeuComponente2>
          <MeuComponente3  onClickIncrementar = {props.onClickIncrementar } />
        </MeuComponente2>
       </div>
       )
  }


    function MeuComponente2 (props){

        return(
        <div className="componente-2">
            <div>
            <header></header>
            <footer>{props.children}</footer>         
            {/* componente3 vai entrar em footer */}
            </div>
        </div>
        )
    }  

    function MeuComponente3(props){
        const[telefone,setTelefone]=React.useState('21 999998888');

        setTimeout(function(){
          setTelefone('11 00339922');
        },1500);

        return(
          <div className="componente-3">
            <MeuComponente4 telefone = {telefone} onClickIncrementar = {props.onClickIncrementar}/>
          </div>
        )  
      }

    function MeuComponente4(props) {
        const[ idade , setIdade ] = React.useState(28);
        
        setTimeout(() => {
          setIdade(29)
        },1000)

        return(
          <div className="componentes-4">
            <p>Componente4 - Idade/Tel.:  {idade} - {props.telefone}</p>
            <br />
            <button type="button" onClick= {props.onClickIncrementar} >Incrementar</button>
            {/* <button type="button" onClick= {()=> {console.log('clicou')}}>Incrementar</button> */}
            {/* o problema ta na linha  59 linha acima !!! */}
            <MeuComponenteIrmao contador = {props.contador} />
          </div>
       )
    } 


 




    function MeuComponenteIrmao(props){
        return(
          <div id="componente-irmao">
            <MeuComponenteIrmao2 contador = {props.contador}/>
          </div>
        )
      }
      
    function MeuComponenteIrmao2(props){
        React.useEffect(function(){
            localStorage.setItem('contador' , props.contador)
        }); 

    return(
            <div>
            <h2> Contador: {props.contador} </h2>
            {/* <AppComponente/> */}
            {/* ao usar linha acima embanana tudinho */}
            </div>
    )
    }













    function AppComponente(){
        const[contador,incrementaContador]=React.useState(parseInt(localStorage.getItem('contador'), 10) || 0);

        const clickIncrementa=function(){
            incrementaContador(contador+1)
        }

        return(
            // react.fragmente >> vc so pode passar 1 componente por vez então ao inves de passar 2  vc embala ele em
            // uma div ou se vc nao quer criar uma nova tag pra embalar... usa react.fragment
            <React.Fragment>
                <MeuComponente onClickIncrementar = {clickIncrementa}/>
                <MeuComponenteIrmao contador = {contador} />
            </React.Fragment>
        )

    }



//para finalizar precisa dizer oq sera lançado na pagina
ReactDOM.render(
    <AppComponente/>,
    document.getElementById('app')
  )