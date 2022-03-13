

















// <body>
//   <h1>Concorra à Viagem dos seus sonhos com a TrybeTrip</h1>
//   <form>
//   <fieldset></fieldset>
//   </form>
// O primeiro campo dos requisitos que devemos criar é o campo de nome completo com limites para o mínimo e máximo de caracteres. Faremos isso dentro das tags <fieldset> .
// Copiar
// <body>
//   <h1>Concorra à Viagem dos seus sonhos com a TrybeTrip</h1>
//   <fieldset>
//       <label for="fullName">Nome Completo:</label>
//       <input type="text" id="fullName" name="fullName" placeholder="Digite seu nome completo" maxlength="40" minlength="10" required>      
//       <br>
//   </fieldset>
// O próximo é o campo de email. Ele tem um tipo diferente do input passado. O campo anterior tinha o tipo text , já esse terá o tipo email . O limite máximo de caracteres aumenta para 50. Posicione-o logo abaixo do anterior. Esse campo terá uma estrutura parecida com a seguinte:
// Copiar
//       <label for="email">Endereço de e-mail:</label>
//       <input type="email" id="email" name="email" placeholder="Digite seu e-mail" maxlength="50"   minlength="10" required>
//       <br>
// Agora é a vez dos radio Buttons, como são muito parecidos vamos demonstrar como ficam os 4 juntos. Note que a importância das labels aqui é ainda maior, pois você pode selecionar uma opção ao clicar no texto. Você deve no final ter um código parecido com esse:
// Copiar
//       <label for="destination1">Cidade</label>
//       <input type="radio" id="destination1" className="radios" name="destinations" value="Cidade" required>
//       <label for="destination2">Campo</label>
//       <input type="radio" id="destination2" className="radios" name="destinations" value="Campo" required>
//       <label for="destination3">Praia</label>
//       <input type="radio" id="destination3" className="radios" name="destinations" value="Praia" required>
//       <label for="destination4">Montanhas</label>
//       <input type="radio" id="destination4" className="radios" name="destinations" value="Montanhas" required>
//       <br>
// Agora é a vez da text area, text areas são muito parecidas com os inputs de tipo texto, mas são mais robustos e normalmente utilizados quando sabemos que o input será mais longo. Dentro dos atributos podemos ainda definir o tamnho dela através do cols e do rows que devem receber um número que representa a quantidade de linhas e colunas daquela textArea . Outro aspecto legal é que a pessoa pode expandir o tamanho da caixa para visualizar do jeito que preferir. Nosso código deve ficar assim:
// Copiar
//       <label for="why">Por que você deveria ser a pessoa desenvolvedora escolhida pelo concurso TrybeTrip? </label>
//       <br />
//       <textarea name="why" id="why" cols="60" rows="10" placeholder=>Digite sua resposta vencedora aqui</textarea>
//       <br />
// Estamos quase chegando no final desse exercício, agora vamos fazer um input de data, e para isso utilizaremos o type="date" . O que nos dará um input com formato de data e também a opção de selecionarmos a data através de um calendário. Esse input deve ficar assim:
// Copiar
//       <label for="date">Qual a melhor data para realizar sua viagem?</label>
//       <input type="date" id="date">
//       <br />
// Bacana, né? Os últimos dois inputs são do mesmo tipo, porém só um é obrigatório. E para finalizar, a ultima parte de nosso HTML para esse exercício deve ficar assim:
// Copiar
//       <label for="promo">Gostaria de receber outras incríveis oportunidades oferecidas pela Trybe. </label>
//       <input type="checkbox" name="promo" id="promo">
//       <br />
//       <label for="agreement">Concordo que imagens de minhas férias poderão ser usadas na divulgação de concursos futuros.</label>
//       <input type="checkbox" name="agreement" id="agreement" required></input>