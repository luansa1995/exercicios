import FrasesDois from "./FrasesDois"

                // down 15 props melhor forma de usar recebendo parametro com distructuring

function Frases ({nome, idade}) {
    //JAVASCRIPT, VARIAVES ,ETC

    return (
        //HTML e componentes
        <div>
            <h1>Aqui ficam minhas frases. Bem vindo {nome}, {idade} anos.</h1>                     {/* //HTML */}

            <h3>Oi Aqui abaixo serão meus componentes</h3>         {/* //HTML */}
            <FrasesDois />                                         {/* //componente */}                                  
            
        </div>
      
    )
}

            // down.15 props menos usado

                                // function Frases (props) {
                                //     //JAVASCRIPT, VARIAVES ,ETC

                                //     return (
                                //         //HTML e componentes
                                //         <div>
                                //             <h1>Aqui ficam minhas frases. Bem vindo {props.nome}, {props.idade} anos.</h1>                     {/* //HTML */}

                                //             <h3>Oi Aqui abaixo serão meus componentes</h3>         {/* //HTML */}
                                //             <FrasesDois/>                                         {/* //componente */}                                  
                                            
                                //         </div>
                                    
                                //     )
                                // }



export default Frases
