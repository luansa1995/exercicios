function MeuComponente(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "componentes"
  }, /*#__PURE__*/React.createElement(MeuComponente1, {
    onClickIncrementar: props.onClickIncrementar
  }));
}

function MeuComponente1(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-1"
  }, /*#__PURE__*/React.createElement(MeuComponente2, null, /*#__PURE__*/React.createElement(MeuComponente3, {
    onClickIncrementar: props.onClickIncrementar
  })));
}

function MeuComponente2(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("header", null), /*#__PURE__*/React.createElement("footer", null, props.children)));
}

function MeuComponente3(props) {
  const [telefone, setTelefone] = React.useState('21 999998888');
  setTimeout(function () {
    setTelefone('11 00339922'); // quando atualizar o valor de telefone ... o react.usestate vai atualizar automaticamente na tela
  }, 1500);
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-3"
  }, /*#__PURE__*/React.createElement(MeuComponente4, {
    telefone: telefone,
    onClickIncrementar: props.onClickIncrementar
  }));
}

function MeuComponente4(props) {
  const [idade, setIdade] = React.useState(28);
  setTimeout(() => {
    setIdade(29);
  }, 1000);
  return /*#__PURE__*/React.createElement("div", {
    className: "componentes-4"
  }, /*#__PURE__*/React.createElement("p", null, "Componente4 - Idade/Tel.:  ", idade, " - ", props.telefone), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: props.onClickIncrementar
  }, "Incrementar"), /*#__PURE__*/React.createElement(MeuComponenteIrmao2, {
    contador: props.contador
  }));
}

function MeuComponenteIrmao(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "componente-irmao"
  }, /*#__PURE__*/React.createElement(MeuComponenteIrmao2, {
    contador: props.contador
  }));
}

function MeuComponenteIrmao2(props) {
  React.useEffect(function () {
    // down
    localStorage.setItem('contador', props.contador);
  }); // let contadorAtualizado =  parseInt(localstorage.getItem('contador'), 10); 
  //na minha cabeça eu tinha q pegar direto do localstorage pra nao perder os dados

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, " Contador: ", props.contador, " "));
}

function AppComponente() {
  const [contador, incrementaContador] = React.useState(parseInt(localStorage.getItem('contador'), 10) || 0); // ' ,10 ' quer dizer que é da categoria DECIMAL(ou seja, '10'string = 10 )
  // || 0  >>>>>>>>> é pra caso nao tenha nada no localstorage, inicie como 0
  // forma basica seria assim >>>>  const [contador , incrementaContador] = useState(0);  
  //ou seja, começaria com valor/Estado em branco. POREM, neste caso o Estado a ser usado é o que fica salvo no localStorage (ou seja o estado fica salvo mesmo fechando pagina )

  const clickIncrementa = function () {
    incrementaContador(contador + 1);
  }; //up. Digo como a variavel incrementaContador vai se comportar (como uma funçao incrementadora)


  return (
    /*#__PURE__*/
    // react.fragmente >> vc so pode passar 1 componente por vez então ao inves de passar 2  vc embala ele em
    // uma div ou se vc nao quer criar uma nova tag pra embalar... usa react.fragment
    React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MeuComponente, {
      onClickIncrementar: clickIncrementa
    }), /*#__PURE__*/React.createElement(MeuComponenteIrmao2, {
      contador: contador
    }))
  );
} //para finalizar precisa dizer oq sera lançado na pagina


ReactDOM.render( /*#__PURE__*/React.createElement(AppComponente, null), document.getElementById('app'));
