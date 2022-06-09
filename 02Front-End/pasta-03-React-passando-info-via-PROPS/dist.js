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

function MeuComponente() {
  return /*#__PURE__*/React.createElement("div", {
    id: "componentes"
  }, /*#__PURE__*/React.createElement(MeuComponentel, null));
}

function MeuComponentel() {
  const MeuNome = 'Ayrton Teshima 1234';
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-1"
  }, /*#__PURE__*/React.createElement(MeuComponente4, null, /*#__PURE__*/React.createElement("p", null, MeuNome)));
}

function MeuComponente2() {
  // const MeuNome = 'Ayrton Teshima 1234';
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-2"
  }, /*#__PURE__*/React.createElement(MeuComponente3, null));
}

function MeuComponente3() {
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-3"
  }, "teste 3", /*#__PURE__*/React.createElement(MeuComponente4, null));
} //problemas ... não apresenta meuComponente4 POIS NÃO CONSEGUE ACIONAR A FUNÇÃO OCULTA 


function MeuComponente4(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "componentes-4"
  }, /*#__PURE__*/React.createElement("p", null, " "), /*#__PURE__*/React.createElement("h1", null, props.children), /*#__PURE__*/React.createElement("h2", null));
} //momento de renderizar tudo do react ou seja mostrar na tela... diga ((oque,onde)) 


ReactDOM.render( /*#__PURE__*/React.createElement(MeuComponente, null), document.getElementById('app'));
