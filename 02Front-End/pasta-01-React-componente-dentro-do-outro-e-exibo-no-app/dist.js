function FirstFunction() {
  return /*#__PURE__*/React.createElement("div", {
    id: "first-function"
  }, /*#__PURE__*/React.createElement(SecondFuntion, null));
}

function SecondFuntion() {
  return /*#__PURE__*/React.createElement("article", {
    id: "second-function"
  }, "Testando o article!!!");
} //para finalizar precisa dizer oq sera lançado na pagina


ReactDOM.render( /*#__PURE__*/React.createElement(FirstFunction, null), document.getElementById('app'));
