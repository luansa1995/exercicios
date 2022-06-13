
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
          // quando atualizar o valor de telefone ... o react.usestate vai atualizar automaticamente na tela
        },1500);

        return(
          <div className="componente-3">
            <MeuComponente4 telefone = {telefone}  onClickIncrementar = {props.onClickIncrementar}/>
            {/* up. passei a função de incrementar e aqui adicionem mais 1 propriedade ao meu componente 'telefone' */}
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
              {/* up. props.telefone é um DADO numerico já abaixo pops.onClickIncrementar é uma funçao logo sao usados diferentemente */}
            <br />
            <button type="button" onClick= {props.onClickIncrementar} >Incrementar</button>
              {/*up.neste caso propr.onClickIncrementar é uma funçao atribuida a este botão, só foi possivel pois passei de componente em componente pois ela foi criada láaááá no AppComponente ... assim como no componente3 passei 2 props diferentes tel+ função de incremento. dava pra passar essa função sem ter q passar via props de 1 em 1 componente ate chegar a MeuComponente4? SIM !!!  COMO?  provide(AppComponente) + Consumer(MeuComponente4)
              */}
              {/* <button type="button" onClick= {()=> {console.log('clicou')}}>Incrementar</button> */}
              {/* antiga linha de comando apenas pra debugar o codigo antes de deixa configurado com uma funçao incrementadora*/}
            <MeuComponenteIrmao2 contador = {props.contador} />
              {/* UP. props nesse caso eram 2x informaçoes(tel + funçao de incrementar), mas ai que voce se engana!!!  props te da acesso a todas as informações que foram passadas por ele então ao inves de usar o telefone ou a funçao onClickIncrementar, ele usou a variavel do contador que foi criado lá em AppComponente logicamente ..... a funçao já foi acionada no componente4 e ja mudou o valor de 0 para 1 por exemplo, então ele tá pegando o valor ATUAL após acionada a função no comp4 e jogou o dado atualizado para compIrmao */}
          </div>
       )
    } 


 




    function MeuComponenteIrmao(props){
        return(
          <div id="componente-irmao">
            <MeuComponenteIrmao2 contador = {props.contador}/>
            {/* nada de novidade ... só repassa pra proximo irmão dado atualizado após acionado a funçao no click do contador */}
          </div>
        )
      }
      
    function MeuComponenteIrmao2(props){
        React.useEffect(function(){
          // down
            localStorage.setItem('contador' , props.contador)

        }); 

        // let contadorAtualizado =  parseInt(localstorage.getItem('contador'), 10); 
        //na minha cabeça eu tinha q pegar direto do localstorage pra nao perder os dados

    return(
            <div>
           
            {/* OU */}
            <h2> Contador: {props.contador} </h2>


            {/*UP.depois tentar pegar valor diretamente do localStorage ...
            *** não entendi pq ele nao usou o loclaStorage.getItem pra ser um valor a nao ser perdido quando atualizasse pagina!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

            se bem q nem to precisando atualizar por la acho que o useEffect ta dando esse efeito de pegar valor atual mesmo atualizando a pagina(((automaticamente na pagina))), meio que puxando pelo React.useState */}
            </div>
    )
    }













    function AppComponente(){
        const [contador , incrementaContador] = React.useState(parseInt(localStorage.getItem('contador'), 10) || 0);
        // ' ,10 ' quer dizer que é da categoria DECIMAL(ou seja, '10'string = 10 )
        // || 0  >>>>>>>>> é pra caso nao tenha nada no localstorage, inicie como 0
        // forma basica seria assim >>>>  const [contador , incrementaContador] = useState(0);  
        //ou seja, começaria com valor/Estado em branco. POREM, neste caso o Estado a ser usado é o que fica salvo no localStorage (ou seja o estado fica salvo mesmo fechando pagina )

        const clickIncrementa = function(){
            incrementaContador(contador+1)
        }
        //up. Digo como a variavel incrementaContador vai se comportar (como uma funçao incrementadora)

        return(
            // react.fragmente >> vc so pode passar 1 componente por vez então ao inves de passar 2  vc embala ele em
            // uma div ou se vc nao quer criar uma nova tag pra embalar... usa react.fragment
            <React.Fragment>
                <MeuComponente onClickIncrementar = {clickIncrementa}/>
                  {/* up.no proprio componente criou uma propriedade/classe(com qualquer nome para ser usado nos outros componentes como props.onClickIncrementar ou o nome q escolher, que recebia a a função criada dentro dessa mesma funçao(APPCOMPONENTE)) - que faz acionar o 'incrementaContador' aumentando a variavel 'contador' */}
                <MeuComponenteIrmao2 contador = {contador} />
            </React.Fragment>
        )

    }



//para finalizar precisa dizer oq sera lançado na pagina
ReactDOM.render(
    <AppComponente/>,
    document.getElementById('app')
  )