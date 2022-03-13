DICAS:

QUANDO PRECISAR DE FORMULARIOS... SEM NEURA 
>PESQUIZE FORMULARIOS PRONTOS E MOLDE AS SUAS NECESSIDADES !!!

ESTE DAQQUI É USÓ UM EXEMPLO DE MUITOS !











-------------------------------

Bônus
1. A TrybeTrip precisa muito de fotos para divulgar seus concursos. Tendo isso em mente, faça com que somente quem autorizar o uso de imagens possa enviar suas informações.
Solução:
Esse exercício também faremos tanto no HTML quanto no Javascript, vamos começar pelo HTML que será bem simples. Lembra do nosso botão submit? Vamos definir que ele comece desabilitado:
Copiar
    <button type="submit" id="submit-btn" disabled>Participar do concurso TrybeTrip</button>
Dê um refresh na sua página e note que o botão agora está desabilitado.
Agora vamos fazer a função responsável por habilitá-lo.
Copiar
function enableSubmit() {
  const submitBtn = document.querySelector('#submit-btn');
  const agreement = document.querySelector('#agreement');
  submitBtn.disabled = !agreement.checked;
}
Talvez o operador ! seja uma novidade para você. Então vamos explicar o que ele faz e como está funcionando nessa solução. Esse operador é chamado de "bang", e ele representa uma negação, ou seja, o contrário do retorno de alguma coisa. Se algo for verdadeiro ele retornará falso e vice-versa.
No nosso código estamos dizendo que a propriedade disabled do submitBtn é igual a negação da propriedade checked da checkbox agreement . Sendo assim, se a checkbox estiver "checkada" nosso botão não estará desabilitado (estará habilitado). Massa, né? Esse operador será muito útil em sua vida como pessoa desenvolvedora.
Assim como as demais, vamos adicionar essa função num addEventListener , porém com checkBoxes não usamos 'click' e sim 'change' .
Copiar
window.onload = function() {
  const clearBtn = document.querySelector('#clear-btn');
  clearBtn.addEventListener('click', clearFields);
  const submitBtn = document.querySelector('#submit-btn');
  submitBtn.addEventListener('click', handleSubmit);
  const agreement = document.querySelector('#agreement');
  agreement.addEventListener('change', enableSubmit);
};
Teste para ver se está tudo funcionando como deveria. É uma função bem legal, né? E é bastante utilizada.
2. Faça a validação dos campos com limite de caracteres. Caso não estejam dentro do esperado ao clicar no botão de submit, um alerta deve ser mostrado com a mensagem: 'Dados Inválidos'. Caso contrário, a mensagem 'Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.' deverá aparecer na tela.
Solução:
Agora sim todos os campos estão criados como deveriam dentro do HTML, portanto esse exercício será feito somente no javascript. Primeiramente faremos a função que validará esses dados:
Copiar


function textInputValidation() {
  const email = document.querySelector('#email').value.length;
  const invalidEmail = email < 10 || email > 50;

  const name = document.querySelector('#fullName').value.length;
  const invalidName = name < 10 || name > 40;

  const reason = document.querySelector('#why').value.length;
  const invalidReason = reason > 500;

  if (invalidEmail || invalidName || invalidReason) {
    return false;
  }
  else {
    return true;
  }
}
Agora vamos colocar ela dentro da nossa função handleSubmit que já está funcionando.
Copiar

function handleSubmit(event) {
  event.preventDefault();
  const validation = textInputValidation();
  if (validation === false) {
    alert('Dados inválidos');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
}
Tente clicar no botão sem ter preenchido um dos campos de texto e veja se o alerta aparece. Legal, não é mesmo?
Esses foram os exercícios de hoje, esperamos que tenham se divertido e aprendido bastante, até a próxima.
© Trybe 2022
·
Manual da Pessoa Estudante
Feito e constantemente atualizado pelo time Trybe com Elixir, Phoenix, React, Tailwind CSS e 💚

