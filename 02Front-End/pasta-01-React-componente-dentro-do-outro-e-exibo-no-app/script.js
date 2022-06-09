
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