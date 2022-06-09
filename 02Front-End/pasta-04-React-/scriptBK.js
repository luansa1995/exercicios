

function MeuComponentel(props){
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
            <button type="button" onClick={ onClickIncrementar} >Incrementar</button>
          </div>
       )
    } 

    function MeuComponente(props){
        return(
          <div id="componentes">
            <MeuComponentel onClickIncrementar = {props.onClickIncrementar} />
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
            localStorage.setItem('contador',props.contador)
        });

    return(
        
            <h2> Contador: {props.contador} </h2>
        
    )
    }

    function AppComponente(){
        const[contador,incrementaContador]=React.useState(0);

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
    <MeuComponentel/>,
    document.getElementById('app')
  )